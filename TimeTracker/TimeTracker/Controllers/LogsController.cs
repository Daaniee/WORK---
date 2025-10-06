using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using TimeTracker.Models;
using System.Collections.Generic;

namespace TimeTracker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class LogsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public LogsController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet("all", Name = "GetAllTimeLogs")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<List<TimeLog>>> GetTimeLogsAsync()
        {
            List<TimeLog> timeLogList = await _context.TimeLogs.ToListAsync();
            return Ok(new ApiResponse(true, 200, "Time logs retrieved successfully.", timeLogList));
        }

        [HttpPost("create", Name = "CreateTimeLog")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> ClockIn(string name)
        {
            if (string.IsNullOrWhiteSpace(name))
            {
                return BadRequest(new ApiResponseNoData(false, 400, "Name cannot be empty."));
            }
            var register = await _context.Registers.FirstOrDefaultAsync(r => r.Username == name);
            if (register == null)
                return NotFound(new ApiResponseNoData(false, 404, "Register not found."));

            var log = new TimeLog
            {
                RegisterId = register.Id,
                ClockIn = DateTime.Now
            };

            _context.TimeLogs.Add(log);
            await _context.SaveChangesAsync();

            return Ok(new ApiResponse(true, 200, "Clock-in successful.", log));
        }
        [HttpPost("{id}/clockout")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> ClockOut(string name)
        {
            if (string.IsNullOrWhiteSpace(name))
            {
                return BadRequest(new ApiResponseNoData(false, 400, "Invalid register name."));
            }

            var log = await _context.TimeLogs
                .Where(t => t.Register.Username == name && t.ClockOut == null)
                .OrderByDescending(t => t.ClockIn)
                .FirstOrDefaultAsync();

            if (log == null)
                return NotFound(new ApiResponseNoData(false, 404, "No active clock-in found."));

            log.ClockOut = DateTime.Now;
            await _context.SaveChangesAsync();

            return Ok(new ApiResponse(true, 200, "Clock-out successful.", log));
        }

        [HttpPost("{name}/breakstart")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> BreakStart(string name)
        {
            if (string.IsNullOrWhiteSpace(name))
            {
                return BadRequest(new ApiResponseNoData(false, 400, "Invalid register name."));
            }
            var register = await _context.Registers.FirstOrDefaultAsync(r => r.Username == name);
            if (register == null)
            {
                return NotFound(new ApiResponseNoData(false, 404, "Register not found."));
            }

            var log = await _context.TimeLogs
                .Where(t => t.Register.Username == name && t.BreakEnd == null)
                .OrderByDescending(t => t.ClockIn)
                .FirstOrDefaultAsync();

            if (log == null)
                return NotFound(new ApiResponseNoData(false, 404, "No active clock-in found."));

            log.BreakStart = DateTime.Now;
            await _context.SaveChangesAsync();

            return Ok(new ApiResponse(true, 200, "Break started successfully.", log));
        }
        [HttpPost("{name}/breakend")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> BreakEnd(string name)
        {
            if (string.IsNullOrWhiteSpace(name))
            {
                return BadRequest(new ApiResponseNoData(false, 400, "Invalid register name."));
            }
            var register = await _context.Registers.FirstOrDefaultAsync(r => r.Username == name);
            if (register == null)
            {
                return NotFound(new ApiResponseNoData(false, 404, "Register not found."));
            }

            var log = await _context.TimeLogs
                .Where(t => t.Register.Username == name && t.BreakStart != null && t.BreakEnd == null)
                .OrderByDescending(t => t.ClockIn)
                .FirstOrDefaultAsync();

            if (log == null)
            {
                return NotFound(new ApiResponseNoData(false, 404, "No active break found."));
            }

            log.BreakEnd = DateTime.Now;
            await _context.SaveChangesAsync();

            return Ok(new ApiResponse(true, 200, "Break ended successfully.", log));
        }
        [HttpGet("{username}/logs")]
        public async Task<IActionResult> GetLogsByUsername(string username)
        {
            username = username.Trim();
            var register = await _context.Registers.FirstOrDefaultAsync(r => r.Username.ToLower() == username.ToLower());

            if (register == null)
                return NotFound(new ApiResponseNoData(false, 404, "Register not found."));

            var logs = await _context.TimeLogs
                .Where(t => t.RegisterId == register.Id)
                .OrderByDescending(t => t.ClockIn)
                .ToListAsync();

                var result = logs.Select(t => new
                {
                    date = t.ClockIn.ToString("dd/MM/yyyy"),
                    clockIn = t.ClockIn.ToString("HH:mm:ss"),
                    clockOut = t.ClockOut?.ToString("HH:mm:ss") ?? "—",
                    hours = t.ClockOut != null ? Math.Round((t.ClockOut.Value - t.ClockIn).TotalHours, 2) : 0.00,
                    status = GetStatus(t.ClockIn)
                })
                .ToList();

            return Ok(result);
        }

        private string GetStatus(DateTime clockInTime)
        {
            var threshold = new TimeSpan(9, 0, 0); // 9:00 AM
            return clockInTime.TimeOfDay <= threshold ? "On Time" : "Late";
        }

    }

}
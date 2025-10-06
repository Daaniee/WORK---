using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using TimeTracker.Models;
using System.Collections.Generic;

namespace TimeTracker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AdminController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet("admin/logs")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> GetAllLogsForAdmin([FromQuery] DateTime? from, [FromQuery] DateTime? to)
        {
            var logsQuery = _context.TimeLogs
                .Include(t => t.Register)
                .OrderByDescending(t => t.ClockIn)
                .AsQueryable();

            if (from.HasValue)
                logsQuery = logsQuery.Where(t => t.ClockIn.Date >= from.Value.Date);

            if (to.HasValue)
                logsQuery = logsQuery.Where(t => t.ClockIn.Date <= to.Value.Date);

            var logs = await logsQuery.ToListAsync();

            var result = logs.Select(t => new
            {
                employee = t.Register.Username,
                day = t.ClockIn.ToString("dd/MM/yyyy"),
                clockIn = t.ClockIn.ToString("HH:mm:ss"),
                clockOut = t.ClockOut?.ToString("HH:mm:ss") ?? "—",
                hoursWorked = t.ClockOut != null ? Math.Round((t.ClockOut.Value - t.ClockIn).TotalHours, 2) : 0.00
            });

            return Ok(result);
        }


    }
}
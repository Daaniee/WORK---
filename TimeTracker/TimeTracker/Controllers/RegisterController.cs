
using TimeTracker.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace TimeTracker.Controllers
{

    [Route("api/[controller]")]
    [ApiController]

    public class RegisterController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public RegisterController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet("all", Name = "GetAllRegisters")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<List<Register>>> GetRegistersAsync()
        {
            List<Register> registerList = await _context.Registers.ToListAsync();
            return Ok(new ApiResponse(true, 200, "Registers retrieved successfully.", registerList));
        }

        [HttpGet("{id}", Name = "GetRegisterById")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<object>> GetRegisterById(int id)
        {
            var register = await _context.Registers.FirstOrDefaultAsync(s => s.Id == id);

            if (id <= 0)
            {
                return BadRequest(new ApiResponseNoData(false, 400, "Invalid register ID."));
            }

            if (register == null)
            {
                return NotFound(new ApiResponseNoData(false, 404, "Register not found."));
            }

            return Ok(new ApiResponse(true, 200, "Register retrieved successfully.", register));
        }

        [HttpGet("search", Name = "GetRegistersByName")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<object>> GetRegistersByName(string name)
        {
            var register = await _context.Registers.FirstOrDefaultAsync(s => s.Username == name);

            if (string.IsNullOrWhiteSpace(name))
            {
                return BadRequest(new ApiResponseNoData(false, 400, "Invalid register name."));
            }

            if (register == null)
            {
                return NotFound(new ApiResponseNoData(false, 404, "Register not found."));
            }

            return Ok(new ApiResponse(true, 200, "Register retrieved successfully.", register));
        }

        [HttpPost]
        [Route("Create")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> CreateUser([FromBody] Register model)
        {
            if (model == null)
            {
                return BadRequest(new ApiResponseNoData(false, 400, "Invalid register data."));
            }

            // Check for conflict BEFORE adding
            var existingRegister = await _context.Registers.FirstOrDefaultAsync(n => n.Username == model.Username);
            if (existingRegister != null)
            {
                return Conflict(new ApiResponseNoData(false, 409, "A register with the same username already exists."));
            }

            var register = new Register
            {
                Username = model.Username,
                Email = model.Email,
                Password = model.Password,
                Category = model.Category
            };

            _context.Registers.Add(register);
            model.Id = register.Id;
            Console.WriteLine($"Category received: {model.Category}");


            try
            {
                int res = await _context.SaveChangesAsync();

                if (res > 0)
                {
                    return CreatedAtAction(nameof(GetRegisterById), new { id = register.Id }, new ApiResponseNoData(true, 201, "Register created successfully."));
                }
                else
                {
                    return StatusCode(500, new ApiResponseNoData(false, 500, "Failed to create register."));
                }
            }
            catch (DbUpdateException ex)
            {
                return StatusCode(500, new ApiResponseNoData(false, 500, $"Database error: {ex.InnerException?.Message}"));
            }
            

        }

        [HttpDelete]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<ApiResponseNoData>> DeleteRegister([FromQuery] int? id, [FromQuery] string name)
        {
            if (id == null && string.IsNullOrWhiteSpace(name))
            {
                return BadRequest(new ApiResponseNoData(false, 400, "Either Id or name must be provided"));
            };

            Register register = null;

            if (id != null)
            {
                register = await _context.Registers.FindAsync(id.Value);
            }
            else if (!string.IsNullOrWhiteSpace(name))
            {
                register = await _context.Registers.FirstOrDefaultAsync(r => r.Username == name);
            }
            if (register == null)
            {
                return NotFound(new ApiResponseNoData(false, 404, "Register not found."));
            }

            _context.Registers.Remove(register);
            await _context.SaveChangesAsync();

            return Ok(new ApiResponseNoData(true, 200, "Register deleted successfully."));
        }
    }
}
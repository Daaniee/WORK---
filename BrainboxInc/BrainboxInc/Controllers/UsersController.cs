using BrainboxInc.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace BrainboxInc.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly ApplicationDbContext context;

        public UsersController(ApplicationDbContext context_)
        {
            context = context_;
        }

        [HttpGet("all", Name = "GetAllUsers")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult<IEnumerable<Users>> GetAll()
        {
            List<Users> userList = context.Users.ToList();
            return Ok(new ApiResponse(true, 200, "Users retrieved successfully.", userList));
        }

        [HttpGet("{id}", Name = "GetUsersById")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult<object> GetUsersById(int id)
        {
            var user = context.Users.FirstOrDefault(s => s.UserId == id);

            if (id <= 0)
            {
                return BadRequest(new ApiResponseNoData(false, 400, "Invalid user ID."));
            }

            if (user == null)
            {
                return NotFound(new ApiResponseNoData(false, 404, "User not found."));
            }

            return Ok(new ApiResponse(true, 200, "User retrieved successfully.", user));
        }

        [HttpGet("search", Name = "GetUsersByName")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult<object> GetUsersByName(string name)
        {
            var user = context.Users.FirstOrDefault(s => s.Username == name);

            if (string.IsNullOrWhiteSpace(name))
            {
                return BadRequest(new ApiResponseNoData(false, 400, "Invalid user name."));
            }

            if (user == null)
            {
                return NotFound(new ApiResponseNoData(false, 404, "User not found."));
            }

            return Ok(new ApiResponse(true, 200, "User retrieved successfully.", user));
        }

        
        [HttpPost]
        [Route("Create")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult CreateUser([FromBody] Users model)
        {
            if (model == null)
            {
                return BadRequest(new ApiResponseNoData(false, 400, "Invalid user data."));
            }

            // Check for conflict BEFORE adding
            var existingUser = context.Users.FirstOrDefault(n => n.Username == model.Username);
            if (existingUser != null)
            {
                return Conflict(new ApiResponseNoData(false, 409, "An user with the same username already exists."));
            }

            var user = new Users
            {
                UserId = context.Users.Any() ? context.Users.Max(i => i.UserId) + 1 : 1,
                Username = model.Username,
                Email = model.Email,
                Password = model.Password
            };

            context.Users.Add(user);
            model.UserId = user.UserId;

            try
            {
                int res = context.SaveChanges();

                if (res > 0)
                {
                    return CreatedAtAction(nameof(GetUsersById), new { id = user.UserId }, new ApiResponseNoData(true, 201, "User created successfully."));
                }
                else
                {
                    return StatusCode(500, new ApiResponseNoData(false, 500, "Failed to create user."));
                }
            }
            catch (DbUpdateException)
            {
                return StatusCode(500, new ApiResponseNoData(false, 500, "Database update error occurred."));
            }

        }

        [HttpDelete("{id:int}", Name = "UserById")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult<ApiResponseNoData> DeleteUser(int id)
        {
            var user = context.Users.Find(id);
            if (user == null)
            {
                return NotFound(new ApiResponseNoData(false, 404, "User not found."));
            }
            if (!context.Users.Any(n => n.UserId == id))
            {   // Not Found 404 Client Error
                return NotFound(new ApiResponseNoData(false, 404, $"User with ID {id} not found."));
            }

            context.Users.Remove(user);
            context.SaveChanges();

            return Ok(new ApiResponseNoData(true, 200, "User deleted successfully."));
        }
    }
}

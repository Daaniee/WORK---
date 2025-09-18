using BrainboxInc.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BrainboxInc.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class BrainboxController : ControllerBase
    {
        private readonly ApplicationDbContext context;

        public BrainboxController(ApplicationDbContext context_)
        {
            context = context_;
        }

        [HttpGet("all", Name = "GetAllStudents")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult<List<Item>> GetItems()
        {
            List<Item> itemList = context.Items.ToList();
            return Ok(new ApiResponse(true, 200, "Items retrieved successfully.", itemList));
        }

        [HttpGet("{id}", Name = "GetItemById")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult<object> GetItemById(int id)
        {
            var item = context.Items.FirstOrDefault(s => s.Id == id);

            if (id <= 0)
            {
                return BadRequest(new ApiResponseNoData(false, 400, "Invalid item ID."));
            }

            if (item == null)
            {
                return NotFound(new ApiResponseNoData(false, 404, "Item not found."));
            }

            return Ok(new ApiResponse(true, 200, "Item retrieved successfully.", item));
        }

        [HttpGet("search", Name = "GetItemByName")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult<object> GetItemByName(string name)
        {
            var item = context.Items.FirstOrDefault(s => s.Name == name);

            if (string.IsNullOrWhiteSpace(name))
            {
                return BadRequest(new ApiResponseNoData(false, 400, "Invalid item name."));
            }

            if (item == null)
            {
                return NotFound(new ApiResponseNoData(false, 404, "Item not found."));
            }

            return Ok(new ApiResponse(true, 200, "Item retrieved successfully.", item));
        }

        [HttpPost]
        [Route("Create")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult CreateStudent([FromBody] Item model)
        {
            if (model == null)
            {
                return BadRequest(new ApiResponseNoData(false, 400, "Invalid student data."));
            }

            // Check for conflict BEFORE adding
            var existingItem = context.Items.FirstOrDefault(n => n.Name == model.Name);
            if (existingItem != null)
            {
                return Conflict(new ApiResponseNoData(false, 409, "An item with the same name already exists."));
            }

            var Item = new Item
            {
                Id = context.Items.Any() ? context.Items.Max(i => i.Id) + 1 : 1,
                ImageUrl = model.ImageUrl,
                Name = model.Name,
                Description = model.Description,
                Price = model.Price
            };

            context.Items.Add(Item);
            model.Id = Item.Id;

            try
            {
                int res = context.SaveChanges();

                if (res > 0)
                {
                    return CreatedAtAction(nameof(GetItemById), new { id = Item.Id }, new ApiResponseNoData(true, 201, "Item created successfully."));
                }
                else
                {
                    return StatusCode(500, new ApiResponseNoData(false, 500, "Failed to create item."));
                }
            }
            catch (DbUpdateException)
            {
                return StatusCode(500, new ApiResponseNoData(false, 500, "Database update error occurred."));
            }

        }

        [HttpPut]
        [Route("Update/{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult PutItem(int id, [FromBody] Item item)
        {
            if (item == null || id != item.Id)
            {
                return BadRequest(new ApiResponseNoData(false, 400, "Invalid item data or ID mismatch."));
            }

            var existingItem = context.Items.FirstOrDefault(n => n.Id == id);
            if (existingItem == null)
            {
                return NotFound(new ApiResponseNoData(false, 404, "Item not found."));
            }

            existingItem.Name = item.Name;
            existingItem.Description = item.Description;
            existingItem.Price = item.Price;
            existingItem.ImageUrl = item.ImageUrl;

            context.SaveChanges();
            return Ok(new ApiResponseNoData(true, 200, "Item updated successfully."));
        }

        [HttpDelete("{id:int}", Name = "DeleteStudentById")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult<ApiResponseNoData> DeleteStudent(int id)
        {
            var item = context.Items.Find(id);
            if (item == null)
            {
                return NotFound(new ApiResponseNoData(false, 404, "Item not found."));
            }
            if (!context.Items.Any(n => n.Id == id))
            {   // Not Found 404 Client Error
                return NotFound(new ApiResponseNoData(false, 404, $"Item with ID {id} not found."));
            }

            context.Items.Remove(item);
            context.SaveChanges();

            return Ok(new ApiResponseNoData(true, 200, "Item deleted successfully."));
        }
    }
}
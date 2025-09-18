using BrainboxInc.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BrainboxInc.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly ApplicationDbContext context;

        public CartController(ApplicationDbContext context_)
        {
            context = context_;
        }

        [HttpGet("items", Name = "GetCartItems")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult<List<Item>> GetCartItems()
        {
            var cartItems = context.Cart
            .Include(c => c.Item)
            .Select(c => new CartsDTO
            {
                CartId = c.CartId,
                ItemsId = c.ItemsId,
                Name = c.Item.Name,
                Description = c.Item.Description,
                Price = c.Item.Price,
                ImageUrl = c.Item.ImageUrl,
                Quantity = c.Quantity,
                DateAdded = c.DateAdded
            })
            .ToList();

            var totalCost = cartItems.Sum(c => c.Price * c.Quantity);

            var responseData = new
            {
                TotalCost = totalCost,
                Items = cartItems
            };


            return Ok(new ApiResponse(true, 200, "Cart items retrieved successfully.", responseData));
        }

        [HttpPost]
        [Route("add")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult AddToCart([FromBody] AddToCartDTO model)
        {
            if (model == null || model.ItemsId <= 0 || model.Quantity <= 0)
            {
                return BadRequest(new ApiResponseNoData(false, 400, "Invalid cart data."));
            }
            var item = context.Items.FirstOrDefault(i => i.Id == model.ItemsId);
            if (item == null)
            {
                return Conflict(new ApiResponseNoData(false, 409, "An item with this ID does not exist."));
            }

            var cart = new Cart
            {
                ItemsId = model.ItemsId,
                Quantity = model.Quantity,
                DateAdded = DateTime.UtcNow
            };

            context.Cart.Add(cart);

            try
            {
                int res = context.SaveChanges();

                if (res > 0)
                {
                    return CreatedAtRoute("GetCartItems", new { id = cart.CartId }, new ApiResponse(true, 201, "Item created successfully.", cart));
                }
                else
                {
                    return StatusCode(500, new ApiResponseNoData(false, 500, "Item already exists"));
                }
            }
            catch (DbUpdateException)
            {
                return StatusCode(500, new ApiResponseNoData(false, 500, "Database update error occurred."));
            }
        }

        [HttpDelete]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]

        public ActionResult<ApiResponseNoData> DeleteItem(int id)
        {
            var cartItem = context.Cart.Find(id);
            if (cartItem == null)
            {
                return NotFound(new ApiResponseNoData(false, 404, "Item not found."));
            }
            if (!context.Cart.Any(n => n.CartId == id))
            {   // Not Found 404 Client Error
                return NotFound(new ApiResponseNoData(false, 404, $"Item with ID {id} not found."));
            }

            context.Cart.Remove(cartItem);
            context.SaveChanges();

            return Ok(new ApiResponseNoData(true, 200, $"Item with ID {id} deleted successfully."));
        }
    }
}

        
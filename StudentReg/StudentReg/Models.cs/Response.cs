using System.ComponentModel.DataAnnotations;

namespace StudentReg.Models
{
    public class ApiResponse
{
    public bool Success { get; set; }           // Indicates if the request was successful
    public int StatusCode { get; set; }         // HTTP status code
    public string Message { get; set; }         // Success or error message

    public ApiResponse(bool success, int statusCode, string message)
    {
        Success = success;
        StatusCode = statusCode;
        Message = message;
    }
}
}
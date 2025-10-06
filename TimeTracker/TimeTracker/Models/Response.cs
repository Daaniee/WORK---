using System.ComponentModel.DataAnnotations;

namespace TimeTracker.Models
{
    public class ApiResponse
    {
        public bool Success { get; set; }           // Indicates if the request was successful
        public int StatusCode { get; set; }         // HTTP status code
        public string Message { get; set; }
        public object Data { get; set; }              // Additional data

        public ApiResponse(bool success, int statusCode, string message, object data)
        {
            Success = success;
            StatusCode = statusCode;
            Message = message;
            Data = data;
        }
    }
    public class ApiResponseNoData
    {
        public bool Success { get; set; }
        public int StatusCode { get; set; }
        public string Message { get; set; }

        public ApiResponseNoData(bool success, int statusCode, string message)
        {
            Success = success;
            StatusCode = statusCode;
            Message = message;
        }
    }
}
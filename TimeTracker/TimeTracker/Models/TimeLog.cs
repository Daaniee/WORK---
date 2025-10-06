using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TimeTracker.Models
{
    public class TimeLog
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int RegisterId { get; set; }

        [ForeignKey("RegisterId")]
        public Register Register { get; set; }

        public DateTime ClockIn { get; set; }
        public DateTime? ClockOut { get; set; }

        public DateTime? BreakStart { get; set; }
        public DateTime? BreakEnd { get; set; }
    }
}

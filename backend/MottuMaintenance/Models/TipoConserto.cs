// C:\Users\3silv\Documents\DEVELOPER\GitHub\mottu-app\backend\MottuMaintenance\Models\TipoConserto.cs

using System.ComponentModel.DataAnnotations;

namespace MottuMaintenance.Models
{
    public class TipoConserto
    {
        [Key]
        public int Id { get; set; }
        public int TempoEstimado { get; set; }
    }
}
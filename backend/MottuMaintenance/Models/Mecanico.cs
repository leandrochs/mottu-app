// C:\Users\3silv\Documents\DEVELOPER\GitHub\mottu-app\backend\MottuMaintenance\Models\Mecanico.cs

using System.ComponentModel.DataAnnotations;

namespace MottuMaintenance.Models
{
    public class Mecanico
    {
        [Key]
        public int MecanicoId { get; set; }
        public required string Nome { get; set; }
        public int Idade { get; set; }
        public int TempoPorDia { get; set; }
        public int NivelComplexidade { get; set; }
        public ICollection<ConsertoMoto>? ConsertoMotos { get; set; }
    }
}

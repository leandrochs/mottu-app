// C:\Users\3silv\Documents\DEVELOPER\GitHub\mottu-app\backend\MottuMaintenance\Models\Mecanico.cs

using System.ComponentModel.DataAnnotations;

namespace MottuMaintenance.Models
{
    public class Mecanico
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public int Idade { get; set; }
        public int TempoDeContratacaoMeses { get; set; }
        public int NivelComplexidadeAtual { get; set; }
        public int ServicosNivel1 { get; set; }
        public int ServicosNivel2 { get; set; }
        public int ServicosNivel3 { get; set; }
        public double EficienciaNivel1 { get; set; }
        public double EficienciaNivel2 { get; set; }
        public double EficienciaNivel3 { get; set; }
        public List<ConsertoMoto> ConsertoMotos { get; set; }
    }
}

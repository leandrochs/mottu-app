// C:\Users\3silv\Documents\DEVELOPER\GitHub\mottu-app\backend\MottuMaintenance\Models\ConsertoMoto.cs

using System;
using System.ComponentModel.DataAnnotations;

namespace MottuMaintenance.Models
{
    public class ConsertoMoto
    {
        [Key]
        public int ConsertoMotoId { get; set; } // Nova propriedade para ser a chave primária
        public int MotoId { get; set; }
        public int ComplexidadeDoConserto { get; set; }
        public int TipoConsertoId { get; set; }
        public int? TempoReal { get; set; }
        public DateTime DataEntrada { get; set; }
        public int? MecanicoId { get; set; }
        public Mecanico Mecanico { get; set; }
    }
}
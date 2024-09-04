using System;
using System.ComponentModel.DataAnnotations;

namespace MottuMaintenance.Models
{
    public class ConsertoMoto
    {
        [Key]
        public int ConsertoMotoId { get; set; }
        public int MotoId { get; set; }
        public int ComplexidadeDoConserto { get; set; }
        public int TipoConsertoId { get; set; }
        public int? TempoReal { get; set; }
        public DateTime DataEntrada { get; set; }
        public int? MecanicoId { get; set; }
        public TipoConserto? TipoConserto { get; set; }
        public Mecanico? Mecanico { get; set; }
        public string? Observacoes { get; set; }
    }
}
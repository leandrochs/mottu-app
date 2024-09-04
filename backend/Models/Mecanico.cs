// Mecanico.cs
public class Mecanico
{
    public int MecanicoId { get; set; }
    public string Nome { get; set; }
    public int Idade { get; set; }
    public int TempoPorDia { get; set; }
    public int NivelComplexidade { get; set; }
}

// ConsertoMoto.cs
public class ConsertoMoto
{
    public int MotoId { get; set; }
    public int ComplexidadeDoConserto { get; set; }
    public int TipoConsertoId { get; set; }
    public int? TempoReal { get; set; }
    public DateTime DataEntrada { get; set; }
    public int? MecanicoId { get; set; }
}

// TipoConserto.cs
public class TipoConserto
{
    public int Id { get; set; }
    public int TempoEstimado { get; set; }
}
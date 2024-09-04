// C:\Users\3silv\Documents\DEVELOPER\GitHub\mottu-app\backend\MottuMaintenance\Data\MottuContext.cs

using Microsoft.EntityFrameworkCore;
using MottuMaintenance.Models;

namespace MottuMaintenance.Data
{
    public class MottuContext : DbContext
    {
        public MottuContext(DbContextOptions<MottuContext> options) : base(options) { }

        public DbSet<Mecanico> Mecanicos { get; set; }
        public DbSet<ConsertoMoto> ConsertoMotos { get; set; }
        public DbSet<TipoConserto> TipoConsertos { get; set; }
    }
}
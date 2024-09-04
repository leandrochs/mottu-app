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

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<ConsertoMoto>()
                .HasOne(c => c.TipoConserto)
                .WithMany()
                .HasForeignKey(c => c.TipoConsertoId);

            modelBuilder.Entity<ConsertoMoto>()
                .HasOne(c => c.Mecanico)
                .WithMany(m => m.ConsertoMotos)
                .HasForeignKey(c => c.MecanicoId);
        }
    }
}
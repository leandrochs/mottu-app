using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MottuMaintenance.Migrations
{
    /// <inheritdoc />
    public partial class AtualizacaoConsertoMoto : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Observacoes",
                table: "ConsertoMotos",
                type: "text",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Observacoes",
                table: "ConsertoMotos");
        }
    }
}

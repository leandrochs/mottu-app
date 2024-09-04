using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MottuMaintenance.Migrations
{
    /// <inheritdoc />
    public partial class EfficientMechanic : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_ConsertoMotos_MecanicoId",
                table: "ConsertoMotos",
                column: "MecanicoId");

            migrationBuilder.AddForeignKey(
                name: "FK_ConsertoMotos_Mecanicos_MecanicoId",
                table: "ConsertoMotos",
                column: "MecanicoId",
                principalTable: "Mecanicos",
                principalColumn: "MecanicoId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ConsertoMotos_Mecanicos_MecanicoId",
                table: "ConsertoMotos");

            migrationBuilder.DropIndex(
                name: "IX_ConsertoMotos_MecanicoId",
                table: "ConsertoMotos");
        }
    }
}

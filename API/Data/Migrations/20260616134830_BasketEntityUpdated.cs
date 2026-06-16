using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Data.Migrations
{
    /// <inheritdoc />
    public partial class BasketEntityUpdated : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ClientSecret",
                table: "Baskets",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PaymentIntentId",
                table: "Baskets",
                type: "TEXT",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e069461a-10cf-4abf-9930-d070b2a7e40f",
                column: "ConcurrencyStamp",
                value: "26619508-2571-4d3c-828c-13d240c3bcb2");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ed2e9149-fa53-484c-a93f-bd33f9e9fcf6",
                column: "ConcurrencyStamp",
                value: "66bb7bf1-92c7-4c90-81df-ab70c54be703");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ClientSecret",
                table: "Baskets");

            migrationBuilder.DropColumn(
                name: "PaymentIntentId",
                table: "Baskets");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e069461a-10cf-4abf-9930-d070b2a7e40f",
                column: "ConcurrencyStamp",
                value: "7f00b95d-8d83-47bf-b4dd-eadab3e8d270");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ed2e9149-fa53-484c-a93f-bd33f9e9fcf6",
                column: "ConcurrencyStamp",
                value: "973d24e1-a7fd-4c75-9baa-a59d224d6db5");
        }
    }
}

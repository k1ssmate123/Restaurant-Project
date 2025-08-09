using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace WebApi.Migrations
{
    /// <inheritdoc />
    public partial class init : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "MenuItemCategories",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MenuItemCategories", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "MenuItems",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CategoryId = table.Column<int>(type: "int", nullable: false),
                    Price = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MenuItems", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    HashedPassword = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "MenuItemCategories",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "Levesek" },
                    { 2, "Meleg előétel" },
                    { 3, "Húsételek" },
                    { 4, "Hal ételek" },
                    { 5, "Tészták" },
                    { 6, "Köretek" },
                    { 7, "Gyermek menük" },
                    { 8, "Saláták" },
                    { 9, "Pizzák" },
                    { 10, "Tejfölös pizzák" },
                    { 11, "Specialitások" },
                    { 12, "Kímélő ételek" },
                    { 13, "Saláta öntetek" },
                    { 14, "Desszertek" }
                });

            migrationBuilder.InsertData(
                table: "MenuItems",
                columns: new[] { "Id", "CategoryId", "Name", "Price" },
                values: new object[,]
                {
                    { 1, 1, "Gyümölcsleves tejszínhabbal", 990 },
                    { 2, 1, "Paradicsomleves mozzarellával", 990 },
                    { 3, 1, "Fokhagymakrémleves pirított mandulával", 990 },
                    { 4, 1, "Újházy tyúkhúsleves gazdagon", 1490 },
                    { 5, 1, "Gulyásleves", 1590 },
                    { 6, 1, "Babgulyás", 1590 },
                    { 7, 2, "Rántott gombafej tartármártással", 1790 },
                    { 8, 2, "Rántott sajt tartármártással", 2090 },
                    { 9, 2, "Hortobágyi húsos palacsinta", 2090 },
                    { 10, 3, "Csirkemell fűszervajjal", 2390 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MenuItemCategories");

            migrationBuilder.DropTable(
                name: "MenuItems");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}

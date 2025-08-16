
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using WebApi.Controllers;
using WebApi.Models;
using WebApi.Repositories;

namespace WebApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddAuthorization();

            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddDbContext<DatabaseContext>();
            builder.Services.AddScoped<IPasswordHasher<User>, PasswordHasher<User>>();
            builder.Services.AddSingleton<TokenProvider>();
            builder.Services.AddScoped<IPasswordHelper, PasswordHelper>();
            builder.Services.AddTransient<IUserRepository, UserRepository>(); 
            builder.Services.AddTransient<IMenuRepository, MenuRepository>();
            builder.Services.AddCors(options => options.AddPolicy("Everything", policy =>
            {
                policy
                    .AllowAnyHeader()
                    .AllowAnyMethod()
                    .AllowAnyOrigin();
            }));

            //builder.Services.AddAuthorization();
            //builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            //    .AddJwtBearer(o => {
            //        o.RequireHttpsMetadata = false;
            //        o.TokenValidationParameters = new TokenValidationParameters
            //        {
            //            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:secret"])),
            //            ValidIssuer = builder.Configuration["Jwt:Issuers"],
            //            ValidAudience = builder.Configuration["Jwt:Audience"],
            //            ClockSkew = TimeSpan.Zero
            //        };
            //    });
            var app = builder.Build();

            app.UseRouting();
            app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

       

            app.UseAuthorization();
            app.UseCors("Everything");
            //app.UseAuthentication();
            //app.UseAuthorization();
            app.Run();
        }
    }
}

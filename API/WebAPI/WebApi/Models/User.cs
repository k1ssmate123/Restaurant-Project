﻿using Microsoft.AspNetCore.Identity;


namespace WebApi.Models
{
    public class User 
    {
        public Guid Id { get; set; }= Guid.NewGuid();
        public string? Name { get; set; }
        public string? Email { get; set; }
        public required string HashedPassword { get; set; }

    }
}

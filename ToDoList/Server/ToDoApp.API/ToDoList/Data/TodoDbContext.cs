using Microsoft.EntityFrameworkCore;
using ToDoList.Models;
namespace ToDoList.Data
{
    public class TodoDbContext : DbContext
    {
        public TodoDbContext(DbContextOptions options) : base(options) { }
        public DbSet<Todo> Todos { get; set; }
    }
}

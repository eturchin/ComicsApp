using ComicsApp.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace ComicsApp.Data;

public class ComicDbContext : DbContext
{
    public DbSet<ComicEntity> Comics { get; set; }

    public ComicDbContext(DbContextOptions<ComicDbContext> options) : base(options) { }
}
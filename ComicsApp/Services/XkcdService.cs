using ComicsApp.Data;
using ComicsApp.Data.Entities;
using ComicsApp.Models;
using Microsoft.EntityFrameworkCore;

namespace ComicsApp.Services;

public class XkcdService : IXkcdService
{
    private readonly ComicDbContext _context;
    private readonly HttpClient _httpClient;
    private const string BaseUrl = "https://xkcd.com";
    
    public XkcdService(ComicDbContext context, HttpClient httpClient)
    {
        _context = context;
        _httpClient = httpClient;
    }

    public async Task<ComicViewModel> GetComicByNumAsync(int num)
    {
        var cachedComic = await _context.Comics.FirstOrDefaultAsync(c => c.Num == num);
        if (cachedComic != null)
        {
            return cachedComic.ToComic();
        }

        var newComic = await FetchComicAsync($"{BaseUrl}/{num}/info.0.json");
        if (newComic == null)
        {
            throw new Exception($"Failed to retrieve comic number {num}.");
        }

        newComic.CachedAt = DateTime.UtcNow;
        _context.Comics.Add(newComic);
        
        await _context.SaveChangesAsync();

        return newComic.ToComic();
    }
    
    public async Task<ComicViewModel> GetRandomComicAsync()
    {
        var latestComic = await FetchComicAsync(BaseUrl + "/info.0.json");

        if (latestComic == null)
        {
            throw new Exception("Failed to retrieve the latest comic.");
        }
        
        var randomComicNum = new Random().Next(1, latestComic.Num + 1);
        
        return await GetComicByNumAsync(randomComicNum);
    }

    private async Task<ComicEntity?> FetchComicAsync(string url)
    {
        var comic = await _httpClient.GetFromJsonAsync<ComicEntity>(url);
        
        if (comic == null || comic.Num == 0)
        {
            return null;
        }
        
        return comic;
    }
}
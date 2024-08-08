using ComicsApp.Models;

namespace ComicsApp.Services;

public interface IXkcdService
{
    public Task<ComicViewModel> GetRandomComicAsync();

    public Task<ComicViewModel> GetComicByNumAsync(int num);
}   
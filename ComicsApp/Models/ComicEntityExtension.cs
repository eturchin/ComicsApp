using ComicsApp.Data.Entities;

namespace ComicsApp.Models;

public static class ComicEntityExtension
{
    public static ComicViewModel ToComic(this ComicEntity entity)
    {
        return new ComicViewModel
        {
            Id = entity.Id,
            Num = entity.Num,
            Title = entity.Title,
            Img = entity.Img,
            Alt = entity.Alt,
            SafeTitle = entity.SafeTitle,
            Transcript = entity.Transcript,
            Year = entity.Year,
            Month = entity.Month,
            Day = entity.Day,
            CachedAt = entity.CachedAt
        };
    }
}
using ComicsApp.Models;
using ComicsApp.Services;
using Microsoft.AspNetCore.Mvc;

namespace ComicsApp.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ComicController : ControllerBase
{
    private readonly IXkcdService _xkcdService;

    public ComicController(IXkcdService xkcdService)
    {
        _xkcdService = xkcdService;
    }

    [HttpGet("random")]
    public async Task<ActionResult<ComicViewModel>> GetRandomComic()
    {
        try
        {
            var comic = await _xkcdService.GetRandomComicAsync();
            return Ok(comic);
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Internal server error: {ex.Message}");
        }
    }

    [HttpGet("{num:int}")]
    public async Task<ActionResult<ComicViewModel>> GetComicByNum(int num)
    {
        try
        {
            var comic = await _xkcdService.GetComicByNumAsync(num);
            return Ok(comic);
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Internal server error: {ex.Message}");
        }
    }
}
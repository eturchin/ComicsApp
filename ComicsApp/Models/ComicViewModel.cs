﻿namespace ComicsApp.Models;

public class ComicViewModel
{
    public int Id { get; set; }
    
    public int Num { get; set; }
    
    public string? Title { get; set; }
    
    public string? Img { get; set; }
    
    public string? Alt { get; set; }
    
    public string? SafeTitle { get; set; }
    
    public string? Transcript { get; set; }
    
    public string? Year { get; set; }
    
    public string? Month { get; set; }
    
    public string? Day { get; set; }
    
    public DateTime CachedAt { get; set; }
}
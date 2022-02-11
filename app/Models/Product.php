<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'dimensions',
        'weight',
        'slug',
        'description_min',
        'description_max',
        'img',
        'banner',
        'price',
        'active',
    ];
    protected $casts = [
        'name' => 'string',
    ];
    protected $attributes = [
        'active' => 1,
    ];

    public function images()
    {
        return $this->hasMany(Image::class);
    }
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }
    
    public function shopping_cart()
    {
        return $this->belongsToMany(Product::class, 'shopping_cart')->withPivot('quantity')->withTimestamps();
    }
}

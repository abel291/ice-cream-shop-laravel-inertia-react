<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Banner extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'sub_title',
        'img',
        'sentence',
    ];
    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}

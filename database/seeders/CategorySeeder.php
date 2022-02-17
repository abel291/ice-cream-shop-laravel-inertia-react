<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Image;
use App\Models\Post;
use App\Models\Product;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Category::truncate();
        Product::truncate();
        Image::truncate();
        Post::truncate();


        Category::factory()->count(10)
            ->has(
                Product::factory()->count(3)
                    ->has(Image::factory()->count(3))
            )
            ->create();


        Category::factory()->count(10)
            ->has(
                Post::factory()->count(3)
            )
            ->create();
    }
}

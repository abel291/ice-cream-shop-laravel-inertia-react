<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Image;
use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Product::truncate();
        $categories = Category::get();
        foreach ($categories as $category) {
            Product::factory()
                ->count(3)
                ->has(Image::factory()->count(3))
                ->create();
        }
    }
}

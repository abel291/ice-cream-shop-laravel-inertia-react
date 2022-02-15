<?php

namespace Database\Seeders;

use App\Models\Banner;
use App\Models\Product;
use Illuminate\Database\Seeder;

class BannerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $products = Product::get()->random(4);
        foreach ($products as $key => $product) {
            Banner::factory()
                ->create([
                    "product_id" => $product->id,
                ]);
        }
    }
}

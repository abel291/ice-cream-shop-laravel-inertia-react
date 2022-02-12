<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\Tag;
use Illuminate\Database\Seeder;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Tag::truncate();
        Tag::factory(9)->create();
        Tag::factory()->create([
            'slug' => 'vegano',
            'name' => 'Vegano'
        ]);
        $tags = Tag::get();
        foreach (Product::get() as $key => $product) {

            $product->tags()->attach(
                $tags->random(rand(2, 6))->pluck('id')->toArray()
            );
        }
    }
}

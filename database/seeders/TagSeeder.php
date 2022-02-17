<?php

namespace Database\Seeders;

use App\Models\Post;
use App\Models\Product;
use App\Models\Tag;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

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
        DB::table('taggables')->truncate();
        Tag::factory(18)->create();
        Tag::factory()->create([
            'slug' => 'vegano',
            'name' => 'Vegano'
        ]);
        $tags = Tag::get();

        //tags products
        foreach (Product::get() as $key => $product) {

            $product->tags()->attach(
                $tags->skip(0)->take(10)->random(rand(2, 6))->pluck('id')->toArray()
            );
        }


        //tags blog
        foreach (Post::get() as $key => $post) {

            $post->tags()->attach(
                $tags->skip(10)->take(10)->random(rand(2, 6))->pluck('id')->toArray()
            );
        }
    }
}

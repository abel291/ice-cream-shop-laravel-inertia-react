<?php

namespace Tests\Feature;

use App\Models\Product;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class PageTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_home()
    {
        $response = $this->get('/');
        $response->assertStatus(200);
    }

    public function test_about()
    {
        $response = $this->get('/about-us');
        $response->assertStatus(200);
    }

    public function test_products()
    {
        $response = $this->get(route('products'));
        $response->assertStatus(200);
    }

    public function test_product_filter_category()
    {
        //$this->withoutExceptionHandling();

        $response = $this->get(route('products', ['filter_type' => 'category']));
        $response->assertStatus(200);
    }

    public function test_product_filter_tags()
    {
        //$this->withoutExceptionHandling();

        $response = $this->get(route('products', ['filter_type' => 'tag']));
        $response->assertStatus(200);
    }

    public function test_product()
    {
        //$this->withoutExceptionHandling();
        $product = Product::get()->first();
        //dd(route('product', ['slug'=>$product->slug]));
        $response = $this->get(route('product', ['slug' => $product->slug]));
        $response->assertStatus(200);
    }


    public function test_contact()
    {
        $response = $this->get(route('contact-us'));
        $response->assertStatus(200);
    }

    public function test_blog()
    {
        $response = $this->get(route('blog'));
        $response->assertStatus(200);
    }

    
}

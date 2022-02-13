<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryResource;
use App\Http\Resources\ProductResource;
use App\Http\Resources\TagResource;
use App\Models\Category;
use App\Models\Product;
use App\Models\Tag;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    public function home()
    {
        $products = Product::where('active', 1)->inRandomOrder()->take(8)->get();

        // $products_featured  = Product::inRandomOrder()->take(8)->whereHas('category', function (Builder $query) {
        //     $query->where('type', 'menu');
        // })->get();

        // $page = Page::where('type', 'home')->with(['promos' => function ($query) {
        //     $query->where('active', true)->with('product');
        // }])->first();

        return Inertia::render('Home/Home', [
            'carouselProducts' => ProductResource::collection($products)
        ]);
    }
    public function about_us()
    {
        $products_vegan = Product::where('active', 1)->whereHas('tags', function (Builder $query) {
            $query->where('slug', 'vegano');
        })->get();
        //dd($products_vegan);

        return Inertia::render('AboutUs/AboutUs', [
            'productsVegan' => ProductResource::collection($products_vegan)
        ]);
    }
    public function contact_us()
    {
        return Inertia::render('ContactUs/ContactUs');
    }
    public function products($filter_type = null, $filter = null)
    {
        $categories = Category::withCount(['products' => function ($query) use ($filter) {
            $query->where('active', 1);
        }])->get();
        //dd($categories);
        $tags = Tag::get();
        $new_products = Product::where('active', 1)->take(3)->orderBy('created_at', 'desc')->get();
        $data = Product::where('active', 1);

        if ($filter_type == 'category') {

            $products = $data->whereHas('category', function ($query) use ($filter) {
                $query->where('slug', $filter);
            })->paginate(10);
        } elseif ($filter_type == 'tag') {

            $products = $data->whereHas('tags', function ($query) use ($filter) {
                $query->where('slug', $filter);
            })->paginate(10);
        } else {
            $products = $data->paginate(10);
        }


        return Inertia::render('Products/Products', [
            'products' => ProductResource::collection($products),
            'newProducts' => ProductResource::collection($new_products),
            'categories' => CategoryResource::collection($categories),
            'tags' => TagResource::collection($tags),
        ]);
    }
    public function product($slug)
    {
        $product = Product::where('active', 1)->where('slug', $slug)->with('images', 'category')->firstOrFail();

        $related_products = Product::where('active', 1)->where('category_id', $product->category_id)->where('id', '!=', $product->id)->get();
        //dd(new ProductResource($product));
        return Inertia::render('Product/Product', [
            "product" => new ProductResource($product),
            "relatedProducts" => ProductResource::collection($related_products)
        ]);
    }
}

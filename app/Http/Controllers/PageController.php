<?php

namespace App\Http\Controllers;

use App\Http\Resources\BannerResource;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\PostResource;
use App\Http\Resources\ProductResource;
use App\Http\Resources\TagResource;
use App\Models\Banner;
use App\Models\Category;
use App\Models\Post;
use App\Models\Product;
use App\Models\Tag;
use Illuminate\Database\Eloquent\Builder;

use Inertia\Inertia;

class PageController extends Controller
{
    public function home()
    {

        $products = Product::where('active', 1)->inRandomOrder()->take(8)->get();
        $banners = Banner::where('type', 'home')->with('product:id,slug')->where('active', 1)->get();
        //dd($banners);
        // $products_featured  = Product::inRandomOrder()->take(8)->whereHas('category', function (Builder $query) {
        //     $query->where('type', 'menu');
        // })->get();

        // $page = Page::where('type', 'home')->with(['promos' => function ($query) {
        //     $query->where('active', true)->with('product');
        // }])->first();

        return Inertia::render('Home/Home', [
            'carouselProducts' => ProductResource::collection($products),
            'bannersProducts' => BannerResource::collection($banners)
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
        $categories = Category::withCount(['products', 'products as count_data'])->whereHas('products', function ($query) {
            $query->where('active', 1);
        })->get();

        //dd($categories);
        $tags = Tag::has('products')->get();

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
    public function blog($filter_type = null, $filter = null)
    {

        $categories = Category::withCount(['posts', 'posts as count_data'])->whereHas('posts', function ($query) {
            $query->where('active', 1);
        })->get();

        //dd($categories);
        $tags = Tag::has('posts')->get();

        $new_posts = Post::where('active', 1)->take(3)->orderBy('created_at', 'desc')->get();

        $data = Post::where('active', 1)->with('tags');

        if ($filter_type == 'category') {
            $posts = $data->whereHas('category', function ($query) use ($filter) {
                $query->where('slug', $filter);
            })->paginate(10);
        } elseif ($filter_type == 'tag') {
            $posts = $data->whereHas('tags', function ($query) use ($filter) {
                $query->where('slug', $filter);
            })->paginate(10);
        } else {
            $posts = $data->paginate(10);
        }


        //dd( PostResource::collection($posts));

        return Inertia::render('Blog/Posts', [
            'posts' => PostResource::collection($posts),
            'newPost' => PostResource::collection($new_posts),
            'categories' => CategoryResource::collection($categories),
            'tags' => TagResource::collection($posts->first()->tags),
        ]);
    }
    public function post($slug)
    {
        $post = Post::where('active', 1)->where('slug', $slug)->with('tags')->firstOrFail();

        //dd(new ProductResource($product));
        return Inertia::render('Blog/Post', [
            "post" => new PostResource($post),
        ]);
    }
}

<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ShoppingCartSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('shopping_cart')->truncate();
        $products = Product::get()->random(3);
        $users = User::get();
        foreach ($users as $user) {

            $array_products_quantity = [];
            foreach ($products as $key => $product) {

                $quantity = 1;
                $total_price_quantity = $product->price * $quantity;

                $array_products_quantity[$product->id]['quantity'] = $quantity;
                $array_products_quantity[$product->id]['total_price_quantity'] = $total_price_quantity;
            }
            $user->shopping_cart()->attach($array_products_quantity);
        }
    }
}

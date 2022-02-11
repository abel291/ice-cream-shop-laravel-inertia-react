<?php

namespace Database\Seeders;

use App\Models\Order;
use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Seeder;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Order::truncate();
        $users = User::get();
        foreach ($users as $user) {
            $order = new Order();
            $order->user()->associate($user->id);

            $order->sub_total = $user->shopping_cart->sum('pivot.total_price_quantity');
            $order->total = $order->sub_total;
            $order->products = $user->shopping_cart->map(function ($item, $key) {
                return [
                    'name' => $item->name,
                    'price' => $item->price,
                    'quantity' => $item->pivot->quantity,
                    'total_price_quantity' => $item->pivot->total_price_quantity,
                ];
            });
            $order->phone = $user->phone;
            $order->note = $user->note;
            $order->address = $user->address;
            $order->order = rand(1000, 9999) . date('md') . $user->id;
            $order->save();
        }
    }
}

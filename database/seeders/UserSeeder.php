<?php

namespace Database\Seeders;

use App\Models\Order;
use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::truncate();
        Order::truncate();
        User::factory()->create([
            'email' => 'user@user.com',
            'is_admin' => 1,
        ]);
        User::factory()->create([
            'email' => 'user@user2.com',
        ]);


        User::factory()
            ->count(20)
            ->has(
                Order::factory()
                    ->count(3)
                    ->state(function (array $attributes, User $user) {
                        $products = Product::get()->random(10);
                        return [
                            'sub_total' => $products->sum('price'),
                            'total' => $products->sum('price'),
                            'products' => $products->map(function ($item) {
                                return [
                                    'name' => $item->name,
                                    'price' => $item->price,
                                    'quantity' => 1,
                                    'total_price_quantity' => $item->price,
                                ];
                            }),
                            'phone' => $user->phone,
                            'address' => $user->address,
                            'note' => '',
                            'order' => rand(1000, 9999) . date('md') . $user->id
                        ];
                    })
            )
            ->create();
    }
}

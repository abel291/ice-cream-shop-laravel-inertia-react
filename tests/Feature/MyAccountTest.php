<?php

namespace Tests\Feature;


use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class MyAccountTest extends TestCase
{
    use WithFaker, RefreshDatabase;
    public function test_my_account()
    {
        $user = User::first();
        $response = $this->actingAs($user)
            ->get(route('my-account'));
        $response->assertStatus(200);
    }

    public function test_account_details()
    {
        $user = User::first();
        $response = $this->actingAs($user)
            ->get(route('account-details'));
        $response->assertStatus(200);
    }

    public function test_account_details_store()
    {
        $user = User::first();
        $email_updated = $this->faker->unique()->safeEmail();
        $response = $this->actingAs($user)
            ->post(route('store_account_details'), [
                'name' => $this->faker->name(),
                'phone' => $this->faker->phoneNumber,
                'address' => $this->faker->address(),
                'city' => str_replace(["'", '"'], '', $this->faker->city),
                'email' => $email_updated,
                'email_confirmation' => $email_updated,
            ]);
        $response->assertValid();
        $response->assertStatus(302);
    }

    public function test_orders()
    {
        $user = User::first();
        $response = $this->actingAs($user)
            ->get(route('orders'));
        $response->assertStatus(200);
    }

    public function test_order_detail()
    {
        $user = User::has('orders')->first();
        $response = $this->actingAs($user)
            ->get(route('order-details', ['order' => $user->orders->first()->order]));
        $response->assertStatus(200);
    }

    public function test_change_password()
    {
        $user = User::first();
        $response = $this->actingAs($user)
            ->get(route('change-password'));
        $response->assertStatus(200);
    }

    public function test_change_password_store()
    {

        $user = User::first();
        $pasword = '123123123';
        $response = $this->actingAs($user)
            ->post(route('store_change_password'), [
                'current_password' => 'password',
                'password' => $pasword,
                'password_confirmation' => $pasword,

            ]);

        $response->assertValid();
        $response->assertStatus(302);
    }
}
// my
// orders
// account
// store_account_details
// order
// change
// store_change_password
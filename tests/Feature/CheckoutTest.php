<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CheckoutTest extends TestCase
{
    use WithFaker, RefreshDatabase;

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_checkout()
    {
        $user = User::first();
        $response = $this->actingAs($user)->get(route('checkout'));
        $response->assertStatus(200);
    }
    public function test_checkout_store()
    {
        $user = User::first();
        $response = $this->actingAs($user)->post(route('checkout_store'), [
            'phone' => $this->faker->phoneNumber,
            'address' => $this->faker->address(),
            //'note' => 0,
        ]);
        $response->assertValid();
        $response->assertStatus(302);
    }
}

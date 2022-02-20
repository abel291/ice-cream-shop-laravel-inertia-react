<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class OrderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {

        return [
            'sub_total' => 0,
            'total' => 0,
            'products' => [],
            'phone' => '',
            'address' => '',
            'note' => '',
            'order' => ''
        ];
    }
}

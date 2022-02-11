<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ImageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            "alt" => $this->faker->sentence(3),
            "title" => $this->faker->sentence(3),
            'img' => 'img/home/img-' . rand(1,20) . '.jpg',
        ];
    }
}

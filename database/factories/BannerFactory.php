<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class BannerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            "title" => $this->faker->sentence(3),
            "sub_title" => $this->faker->sentence(3),
            "img" => "/img/home/img-" . rand(1, 20) . ".jpg",
            "sentence" => $this->faker->paragraph(),
            "type" => 'home',
        ];
    }
}

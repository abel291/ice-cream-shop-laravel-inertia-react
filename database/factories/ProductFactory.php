<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $name = $this->faker->sentence(2);
        return [
            "name" => $name,
            "slug" => Str::slug($name),
            "dimensions" => rand(100, 1000) . "gr",
            "weight" => "15 x 15 x 20 cm",
            "description_max" => $this->faker->text(1000),
            "description_min" => $this->faker->sentence(3),
            "img" => "/img/home/img-" . rand(1, 20) . ".jpg",
            "img_ball" => "/img/home/img-bola-" . rand(1, 3) . ".png",
            "stars" => rand(4, 5),
            "price" => rand(5, 20),

        ];
    }
}

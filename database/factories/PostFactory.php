<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
class PostFactory extends Factory
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
            "title" => $name,
            "slug" => Str::slug($name),
            "img" => "/img/home/img-" . rand(1, 20) . ".jpg",
            "description_min" => $this->faker->text(600),
            "description_max" => $this->faker->text(1000),
        ];
    }
}

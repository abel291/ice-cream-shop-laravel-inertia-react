<?php

namespace Database\Seeders;

use App\Models\DiscountCode;
use Illuminate\Database\Seeder;

class DiscountCodeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {   
        DiscountCode::truncate();
        DiscountCode::factory(10)->create();
    }
}

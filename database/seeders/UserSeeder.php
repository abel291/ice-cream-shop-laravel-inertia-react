<?php

namespace Database\Seeders;

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
        User::factory()->create([
            'email' => 'user@user.com',
            'is_admin' => 1,
        ]);
        User::factory()->create([
            'email' => 'user@user2.com',            
        ]);
        User::factory(20)->create();
    }
}

<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Feature;
use App\Models\Package;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Zeta',
            'email' => 'flavioaquila@example.com',
            'password' => bcrypt('123.321Aa'),
        ]);

        Feature::create([
            'image' => 'https://backseasy.com/_next/image?url=https%3A%2F%2Fgithub.com%2FIcegreeen%2Fblog-graphQL%2Fassets%2F56550632%2Fb891efd6-0d82-4bd1-bb17-53cfad093776&w=1920&q=100',
            'route_name' => 'feature1.index',
            'name' => 'Calculate Sum',
            'description' => 'Calculate sum of two numbers',
            'required_credits' => 1,
            'active' => true,
        ]);

        Feature::create([
            'image' => 'https://backseasy.com/ghost.png',
            'route_name' => 'feature2.index',
            'name' => 'Calculate Difference',
            'description' => 'Calculate difference of two numbers',
            'required_credits' => 3,
            'active' => true,
        ]);

        Package::create([
            'name' => 'Basic',
            'price' => 5,
            'credits' => 20
        ]);

        Package::create([
            'name' => 'Silver',
            'price' => 20,
            'credits' => 100
        ]);

        Package::create([
            'name' => 'Gold',
            'price' => 50,
            'credits' => 500
        ]);
    }
}

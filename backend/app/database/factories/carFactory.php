<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\car>
 */
class carFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->word(),
            'rate' => $this->faker->randomFloat(2, 10000, 50000),
            'doors' => $this->faker->numberBetween(2, 5),
            'features' => $this->faker->words(5, true),
            'release_date' => $this->faker->date(),
            'steering_type' => $this->faker->randomElement(['Power', 'Manual']),
            'transmission' => $this->faker->randomElement(['Automatic', 'Manual']),
            'color' => $this->faker->safeColorName(),
            'type' => $this->faker->randomElement(['SUV', 'Sedan', 'Hatchback', 'Truck']),
        ];
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Car;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Schema;


class CarController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
       $carData = Car::all();

       //return data as json
        return response()->json($carData, status: 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create (): void
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
          //
          $car = new Car();

          $releaseDate = \Carbon\Carbon::createFromFormat('Y-m-d', $request->input('releaseDate'))->format('Y-m-d');

          $car->create([
               'name' => $request->input(key: 'carName'),
               'rate' => $request->input(key: 'dailyRate'),
               'release_date' => $releaseDate,
               'steering_type' => $request->input(key: 'steeringType'),
               'doors' => $request->input(key: 'doors'),
               'transmission' => $request->input('transmission'),
               'color' => $request->input('color') ?? 'Unknown', // Default color
               'features' => $request->input('features'),
          ]);

       return response()->json(['message' => 'Car added successfully', 'car' => $car], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}

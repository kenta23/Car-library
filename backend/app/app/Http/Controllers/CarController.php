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
          $car = new Car();
          //validate request
          $request->validate([
                 'carName' => 'required|string|max:255',
                 'images' => 'required|array|min:1',
                 'dailyRate' => 'required|numeric|min:0',
                 'releaseDate' => 'required|date_format:Y-m-d',
                 'steeringType' => 'required|string|max:255',
                 'doors' => 'required|integer|min:1|max:5',
                 'transmission' => 'required|string|in:manual,automatic',
                 'color' => 'nullable|array',
                 'features' => 'string||min:8|max:255|nullable',
                 'color_options' => 'required|array|min:1',
         ]);

          $releaseDate = \Carbon\Carbon::createFromFormat('Y-m-d', $request->input('releaseDate'))->format('Y-m-d');

          $car->create([
               'name' => $request->input(key: 'carName'),
               'rate' => $request->input(key: 'dailyRate'),
               'release_date' => $releaseDate,
               'steering_type' => $request->input(key: 'steeringType'),
               'doors' => $request->input(key: 'doors'),
               'transmission' => $request->input('transmission'),
               'color_options' => $request->input('ColorOptions') ?? 'Unknown', // Default color
               'features' => $request->input('features'),
               'images' => $request->input('images'),
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

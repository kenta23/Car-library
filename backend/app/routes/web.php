<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CarController;

Route::get('/', function () {
    return view('welcome');
});

Route::resource('/add-car', CarController::class);



//admin routes
Route::resource()

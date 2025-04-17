<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CarController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminController;
use Laravel\Fortify\Http\Controllers\AuthenticatedSessionController;

Route::get('/', function () {
    return view('welcome');
});

Route::resource('/add-car', CarController::class);

Route::get('/car', [CarController::class, 'index'])->name('car.index');


//user routes
Route::prefix( '/user')->group(function () {
    Route::post('/login', [AuthenticatedSessionController::class, 'store'])
        ->middleware(['guest']);


    Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
        ->middleware(['auth:users']);

    Route::middleware(['auth:users', 'verified'])->group(function () {
        Route::resource('/', controller: UserController::class);
    });
});

//create admin account
Route::prefix('admin')->group(function () {
    Route::post('/login', [AdminController::class, 'login']);

    Route::post('/logout', [AdminController::class, 'destroy'])
        ->name('admin.logout')->middleware(['auth:admin']);

    Route::post('/register', [AdminController::class, 'store'])
        ->middleware(['guest'])
        ->name('admin.register');
});

//sample route fetching data

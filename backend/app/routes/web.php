<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CarController;
use App\Http\Controllers\AdminController;
use Laravel\Fortify\Http\Controllers\AuthenticatedSessionController;

Route::get('/', function () {
    return view('welcome');
});

Route::resource('/add-car', CarController::class);


//admin routes
Route::prefix('admin')->group(function () {
    Route::post('/login', [AuthenticatedSessionController::class, 'store'])
        ->middleware(['guest'])
        ->name('admin.login');

    Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
        ->middleware(['auth:admin'])
        ->name('admin.logout');

    Route::middleware(['auth:admin', 'verified'])->group(function () {
        Route::resource('/', AdminController::class);
    });

    Route::middleware(['auth:admin', 'verified'])->group(function () {
         Route::resource('/', controller: AdminController::class);
    });
});

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Car extends Model
{
    use HasFactory, Notifiable;
    //
    protected $table = 'Cars';
    protected $fillable = [
        'name',
        'rate',
        'doors',
        'features',
        'release_date',
        'steering_type',
        'transmission',
        'color',
        'type',
    ];



}

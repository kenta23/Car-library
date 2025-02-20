<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
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

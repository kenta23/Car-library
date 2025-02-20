<?php

namespace App\Actions\Fortify;

use App\Models\AdminModel;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Laravel\Fortify\Contracts\CreatesNewUsers;

class CreateNewAdmin implements CreatesNewUsers
{
    public function create(array $input)
    {
        Validator::make($input, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:admin'],
            "username" => ['required', 'string', 'max:50', 'unique:admin'],
            'password' => ['required', 'string', 'confirmed', 'min:8'],
        ])->validate();

        return AdminModel::create([
            'name' => $input['name'],
            'email' => $input['email'],
            "username" => $input['username'],
            'password' => Hash::make($input['password']),
        ]);
    }
}

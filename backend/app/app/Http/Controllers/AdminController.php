<?php

namespace App\Http\Controllers;

use App\Models\AdminModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\StoreAdminModelRequest;
use App\Http\Requests\UpdateAdminModelRequest;


class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $admin = AdminModel::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        $admin = AdminModel::create();
    }

    /**login */
    public function login(Request $request)
    {
        //checking database connection
        if(!AdminModel::first()) {
            return response()->json('Database connection error', 500);
        }

        //authenticate the admin
        $credentials = $request->validate([
            'username' => 'required|string|max:50',
            'password' => 'required|string|min:8',
        ]);

        if (Auth::guard('admin')->attempt($credentials))  {
            // Authentication passed...
            return response()->json('Successfully logged in', 200);
        } else {
            return response()->json('Invalid credentials', 401);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAdminModelRequest $request)
    {
        //validate from requests
         AdminModel::create($request->all());

         //return a valid json response
        return response()->json('Successfully created Admin', 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(AdminModel $adminModel)
    {
        //look the admin account based on the current admin's id
          $admin = $adminModel->where('id', $adminModel->id)->first();
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(AdminModel $adminModel)
    {
        //
        $admin = $adminModel->where('id', $adminModel->id)->first();


    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAdminModelRequest $request, AdminModel $adminModel)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(AdminModel $adminModel)
    {
        //
    }

    public function logout(Request $request)
    {
        //logout the admin
        Auth::guard('admin')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        //return a valid json response
        return response()->json('Successfully logged out', 200);
    }
}

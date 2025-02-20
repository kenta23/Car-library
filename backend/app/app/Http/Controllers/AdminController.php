<?php

namespace App\Http\Controllers;

use App\Models\AdminModel;
use App\Http\Requests\StoreAdminModelRequest;
use App\Http\Requests\UpdateAdminModelRequest;
use Illuminate\Support\Facades\Hash;

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
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAdminModelRequest $request)
    {
        //
        $hashPassword = Hash::make($request->input
        ('password'));
        //validate from requests
         AdminModel::create(request()->all());

         //return a valid json response
        return response()->json('Successfully created Admin', 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(AdminModel $adminModel)
    {
        //

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(AdminModel $adminModel)
    {
        //
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
}

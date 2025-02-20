<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        //
        Schema::create('admin', function (Blueprint $table) {
             $table->id()->autoIncrement()->primary();
             $table->string('name');
             $table->string('username')->unique();
             $table->string('email')->unique();
             $table->string('password');
             $table->timestamp('created_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
        Schema::dropIfExists('admin');
    }
};


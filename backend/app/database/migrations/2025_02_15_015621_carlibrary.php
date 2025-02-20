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
        Schema::create('Cars', function (Blueprint $table) {
             $table->id()->autoIncrement()->primary();
             $table->string('name');
             $table->double('rate');
             $table->integer('doors');
             $table->mediumText('features');
             $table->date('release_date');
             $table->enum('steering_type', ['Power', 'Manual']);
             $table->enum(('transmission'), ['Automatic', 'Manual']);
             $table->string('color');
             $table->string('type');
             $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
        Schema::dropIfExists('Cars');
    }
};

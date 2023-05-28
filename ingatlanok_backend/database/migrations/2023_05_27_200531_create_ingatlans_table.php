<?php

use Carbon\Carbon;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ingatlans', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('kategoria')->references('id')->on('kategorias');
            $table->string("leiras");
            $table->date("hirdetesDatuma")->default(Carbon::now());
            $table->boolean("tehermentes");
            $table->integer("ar");
            $table->string("kepURL");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ingatlans');
    }
};

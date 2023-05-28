<?php

use App\Models\Kategoria;
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
        Schema::create('kategorias', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string("nev");
        });

        Kategoria::create(["nev" => "Ház"]);
        Kategoria::create(["nev" => "Lakás"]);
        Kategoria::create(["nev" => "Építési telek"]);
        Kategoria::create(["nev" => "Garázs"]);
        Kategoria::create(["nev" => "Mezőgazdasági terület"]);
        Kategoria::create(["nev" => "Ipari ingatlan"]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kategorias');
    }
};

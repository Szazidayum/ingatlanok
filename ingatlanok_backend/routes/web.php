<?php

use App\Http\Controllers\IngatlanController;
use App\Http\Controllers\KategoriaController;
use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('welcome');
});

Route::get('/api/ingatlanok', [IngatlanController::class,'index']);
Route::get('/api/kategoriak', [KategoriaController::class,'index']);
Route::get('/api/ingatlanok/{id}', [IngatlanController::class,'show']);
Route::get('/api/ingatlanokKategoriaval', [IngatlanController::class,'kategoriaval']);
Route::post('/api/ingatlanok', [IngatlanController::class,'store']);
Route::delete('/api/ingatlanok/{id}', [IngatlanController::class,'destroy']);
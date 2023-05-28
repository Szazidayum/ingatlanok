<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ingatlan extends Model
{
    use HasFactory;
    protected $fillable = [
        'kategoria',
        'tehermentes',
        'ar',
    ];
}

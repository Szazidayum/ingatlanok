<?php

namespace App\Http\Controllers;

use App\Models\Ingatlan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class IngatlanController extends Controller
{
//     1.	Hozzon létre végpontot az adatbázisban szerepelő összes ingatlan lekérdezésére! Oldja meg, hogy a válasz üzenetben a kategoriak tábla nev mezője is szerepeljen! 
// 2.	Hozzon létre végpontot új ingatlan rögzítésére az alábbi beállításokkal!
// 3.	Hozzon létre végpontot az adatbázisban szerepelő ingatlan törlésére !

public function index()
    {
        $igatlanok = response()->json(Ingatlan::all());
        return $igatlanok;
    }

    public function show($id)
    {
        $ingatlanok = Ingatlan::find($id);
        return $ingatlanok;
    }
    
    public function kategoriaval(){
        $ingatlanok = DB::table('ingatlans as i')
        ->join('kategorias as k', 'i.kategoria', '=', 'k.id')
        ->select('i.id', 'k.nev as kategoria', 'i.leiras', 'i.hirdetesDatuma', 'i.tehermentes', 'i.ar', 'i.kepURL' )
        ->get();
        return $ingatlanok;
    }

    public function store(Request $request){
        $ingatlanok = new Ingatlan();
        $ingatlanok->kategoria = $request->kategoria;
        $ingatlanok->leiras = $request->leiras;
        $ingatlanok->hirdetesDatuma = $request->hirdetesDatuma;
        $ingatlanok->tehermentes = $request->tehermentes;
        $ingatlanok->ar = $request->ar;
        $ingatlanok->kepURL = $request->kepURL;
        $ingatlanok->save();
    }

    public function destroy($id)
    {
        Ingatlan::find($id)->delete();
    }
}

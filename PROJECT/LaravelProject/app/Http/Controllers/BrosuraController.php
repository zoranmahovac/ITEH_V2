<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Brosura;
class BrosuraController extends Controller
{
    



    public function index()//vracanje svih aranzmana
    {
        $brosure=Brosura::all();
        return $brosure;

    }


}

<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia::render('Dashboard');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'product_id' => 'required|exists:products,id',
           
        ]);
        //dd($request->all());

        // Store cart item
        $caart = auth()->user()->cart()->create([
            'product_id' => $request->product_id,
            
        ]);

        //dd($caart);
        return redirect()->route('cart')->with('success', 'Item added to cart!');
    
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        $products = Product::whereIn('id', ['product_id'])->get();
        return inertia::render('Carts', [
            'products'=>[$product]
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cart $cart)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Cart $cart)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cart $cart)
    {
        //
    }
}

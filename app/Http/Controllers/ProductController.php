<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Symfony\Component\HttpKernel\Exception\ServiceUnavailableHttpException;


class ProductController extends Controller

{
    /**
     * Display a listing of the resource.
     */
    
     public function index() {
         return Inertia::render('Dashboard');
     }

    public function listProduct()
    {
        $products = Product::all();
        return Inertia::render('Dashboard', ['product'=>$products]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
       return Inertia::render('Admin/CreateProduct');
    }
    

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
          $validated = $request->validate([
        'photo' => 'required|image|mimes:jpg,png|max:2048',
        'name' => 'required|string',
        'price' => 'required|numeric|min:0|max:1000000',
          ]);

          //stote photo

        if ($request->hasFile('photo')) {
        $path = $request->file('photo')->store('products', 'public');
        $validated['photo'] = $path;

        //store product
            $product = Product::create([
                'photo'=> $validated['photo'],
                'name'=>$validated['name'],
                'price'=>$validated['price'],
                'user_id'=> 1,
            ]);
           
            return redirect()->route('dashboard')->with('success', 'product created successfully');

    }
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        // dd($product);
        return inertia::render('Admin/ShowProduct', ['product' => $product]);
   
    }
    public function publish(product $product) {
        $product->published= true;
        $product->save();

         return inertia::render('Carts');
        // return redirect()->route('Carts')->with('success', 'product added to cart');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}

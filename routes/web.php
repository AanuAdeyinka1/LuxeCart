<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Middleware\AdminMiddleware;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('welcome');

Route::get('/dashboard', [ProductController::class, 'listProduct'])->middleware(['auth', 'verified'])->name('dashboard');


Route::get('/admin/products/create', [ProductController::class, 'create'])->name('products.create');
Route::post('admin/products', [ProductController::class, 'store'])->name('products.store');
Route::get('/showProduct/{product}', [ProductController::class, 'show'])->name('product.show');

Route::post('/product/{product}/publish', [ProductController::class, 'publish'])->name('product.publish');

Route::get('/dasboard/product/create',[CartController::class, 'create'])->name('cart.create');
Route::post('/cart', [CartController::class, 'store'])->name('cart.store');
Route::get('/cart/show', [CartController::class, 'show'])->name('cart');

Route::middleware('auth')->group(function () {
Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

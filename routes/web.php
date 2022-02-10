<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home/Home', [
        //'canLogin' => Route::has('login'),
        //'canRegister' => Route::has('register'),
        //'laravelVersion' => Application::VERSION,
        //'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::get('/about-us', function () {
    return Inertia::render('AboutUs/AboutUs');
})->name('about-us');

Route::get('/contact-us', function () {
    return Inertia::render('ContactUs/ContactUs');
})->name('contact-us');

Route::get('/products', function () {
    return Inertia::render('Products/Products');
})->name('products');

Route::get('/product/{slug}', function () {
    return Inertia::render('Product/Product');
})->name('product');



Route::middleware(['auth:sanctum', 'verified'])->group(function () {
    Route::get('/shopping-cart', function () {
        return Inertia::render('ShoppingCart/ShoppingCart');
    })->name('shopping-cart');

    Route::get('/checkout', function () {
        return Inertia::render('Checkout/Checkout');
    })->name('checkout');

    Route::get('/my-account', function () {
        return Inertia::render('Auth/MyAccount/MyAccount');
    })->name('my-account');
});

Route::get('/dashboard', function () {
    return Inertia::render('Home/Home');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/auth.php';

<?php

use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ShoppingCartController;

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

// Route::get('/', function () {
//     return Inertia::render('Home/Home', [
//         //'canLogin' => Route::has('login'),
//         //'canRegister' => Route::has('register'),
//         //'laravelVersion' => Application::VERSION,
//         //'phpVersion' => PHP_VERSION,
//     ]);
// })->name('home');

Route::get('/', [PageController::class, 'home'])->name('home');
Route::get('/about-us', [PageController::class, 'about_us'])->name('about-us');
Route::get('/contact-us', [PageController::class, 'contact_us'])->name('contact-us');

Route::get('/products/{filter_type?}/{filter?}', [PageController::class, 'products'])
    ->where(['filter_type' => 'category|tag'])
    ->name('products');
Route::get('/product/{slug}', [PageController::class, 'product'])->name('product');

Route::get('/blog/{filter_type?}/{filter?}', [PageController::class, 'blog'])
    ->where(['filter_type' => 'category|tag'])
    ->name('blog');
Route::get('/blog/post/{slug}', [PageController::class, 'post'])->name('post');


Route::middleware(['auth:sanctum', 'verified'])->group(function () {
    Route::get('/my-account', [ProfileController::class, 'my_account'])->name('my-account');

    Route::get('/account-details', [ProfileController::class, 'account_details'])->name('account-details');
    Route::post('/account-details', [ProfileController::class, 'store_account_details'])->name('store_account_details');
    Route::get('/orders', [ProfileController::class, 'orders'])->name('orders');
    Route::get('/order-details/{order}', [ProfileController::class, 'order_details'])->name('order-details');
    Route::get('/change-password', [ProfileController::class, 'change_password'])->name('change-password');
    Route::post('/change-password', [ProfileController::class, 'store_change_password'])->name('store_change_password');

    Route::resource('shopping-cart', ShoppingCartController::class)->only([
        'index', 'store', 'destroy'
    ]);

    Route::get('/shopping-cart/apply-cupon-discount', [ShoppingCartController::class, 'apply_cupon_discount'])
        ->name('apply_cupon_discount');

    Route::get('/shopping-cart/remove-cupon-discount', [ShoppingCartController::class, 'remove_cupon_discount'])
        ->name('remove_cupon_discount');

    Route::get('/checkout', [CheckoutController::class, 'index'])->name('checkout');
    Route::post('/checkout', [CheckoutController::class, 'store'])->name('checkout_store');
});

Route::get('/dashboard', function () {
    return Inertia::render('Home/Home');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/auth.php';

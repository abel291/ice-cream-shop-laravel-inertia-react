<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class CheckoutController extends Controller
{
    public function index()
    {
        $user = Auth::user(); //auth()->user()->with('shopping_cart');

        return Inertia::render('Checkout/Checkout', [
            'products' => ProductResource::collection($user->shopping_cart),
            'meta' => $user->shopping_cart_total
        ]);
    }
    public function store(Request $request)
    {
        $request->validate([
            'address' => 'required|string|max:255',
            'phone' => 'required|string|max:255',
            'note' => 'nullable|string|max:1000',
            //'paymentMethod' => 'required|string|max:255',
        ]);

        //dd($request->all());
        //DB::beginTransaction();

        $order = new Order();
        $user = auth()->user();
        $order->user()->associate($user->id);

        $order->phone = $request->phone;
        $order->note = $request->note;
        $order->address = $request->address;

        $order->products = $user->shopping_cart->map(function ($item, $key) {
            return [
                'name' => $item->name,
                'price' => $item->price,
                'quantity' => $item->pivot->quantity,
                'total_price_quantity' => $item->pivot->total_price_quantity,
            ];
        });

        $total_price = $user->shopping_cart_total; //mutator

        if ($total_price['discount']) {
            $discount = $total_price['discount'];
            $order->discount = [
                'code' => $discount['code'],
                'type' => $discount['type'],
                'value' => $discount['value'],
                'applied' => $discount['applied'],
            ];
        }
        //dd($total_price['tax_percent']);
        // $order->tax_percent = $total_price['tax_percent'];
        //$order->tax_amount = $total_price['tax_amount'];
        //$order->shipping = $total_price['shipping'];
        $order->sub_total = $total_price['sub_total'];
        $order->total = $total_price['total'];
        $order->order = rand(1000, 9999) . date('md') . $user->id;

        $order->save();
        session()->forget('discount_code');

        return Redirect::route('order-details', [$order->order])->with(
            'success',
            'Orden completada con exito'
        );
    }
}

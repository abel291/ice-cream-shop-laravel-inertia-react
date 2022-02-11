<?php

namespace App\Http\Controllers;

use App\Http\Resources\OrderResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules;
class ProfileController extends Controller
{
    public function my_account()
    {
        return Inertia::render('Auth/MyAccount/MyAccount', []);
    }
    public function account_details()
    {
        return Inertia::render('Auth/MyAccount/AccountDetails', []);
    }
    public function store_account_details(Request $request)
    {

        $user = auth()->user();
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'confirmed', 'email', 'max:255', Rule::unique('users')->ignore($user->id)],
            'phone' => ['required', 'string', 'max:255'],
            'address' => ['required', 'string', 'max:255'],
            'city' => ['required', 'string', 'max:255'],
        ]);

        $user->forceFill([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'city' => $request->city,
            'address' => $request->address,
        ])->save();


        return Redirect::route('account-details')
            ->with(
                'success',
                'Datos Actualizados'
            );
    }

    public function orders()
    {
        return Inertia::render('Auth/MyAccount/Orders', [
            'orders' => OrderResource::collection(auth()->user()->orders()->paginate(10))
        ]);
    }
    public function order_details(Request $request)
    {

        $user = auth()->user();

        $order = $user->orders()->where('order', $request->order)->first();

        if (!$order) {
            return Redirect::route('home');
        }

        return Inertia::render('Auth/MyAccount/OrderDetails', [
            'order' => new OrderResource($order),
        ]);
    }

    public function change_password()
    {
        return Inertia::render('Auth/MyAccount/ChangePassword', []);
    }
    public function store_change_password(Request $request)
    {
        $user = auth()->user();

        Validator::make($request->all(), [
            'current_password' => ['required', 'string'],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ])->after(function ($validator) use ($user, $request) {
            if (!isset($request->current_password) || !Hash::check($request->current_password, $user->password)) {
                $validator->errors()->add('current_password', __('La contraseña proporcionada no coincide con su contraseña actual. '));
            }
        })->validate();


        // $user->forceFill([
        //     'password' => Hash::make($request->password),
        // ])->save();

        return Redirect::route('change-password')
            ->with(
                'success',
                'Datos Actualizados'
            );
    }
}

<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class ShoppingCartCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        
        $tax_percent = 12;
        $shipping = 11;
        $sub_total = $this->collection->sum('pivot.total_price_quantity');
        $tax_amount = round($sub_total * ($tax_percent/100), 2);
        $total = round($sub_total + $tax_amount + $shipping, 2);

        
        return  [
            'products' => ProductResource::collection($this->collection),
            'tax_percent' => $tax_percent,
            'shipping' => $shipping,
            'sub_total' => round($sub_total,2),
            'tax_amount' => round($tax_amount,2),
            'total' => round($total,2),
        ];
    }
    /**
     * The "data" wrapper that should be applied.
     *
     * @var string
     */
    public static $wrap = 'products';
}

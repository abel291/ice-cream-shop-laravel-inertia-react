<?php

namespace App\Http\Resources;

use App\Helpers\Helpers;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [

            'id' => $this->id,
            'name' => $this->name,
            'dimension' => $this->dimension,
            'calories' => $this->calories,
            
            'slug' => $this->slug,
            'description_min' => $this->description_min,
            'description_max' => $this->description_max,
            'img' => $this->img,            
            'stars' => $this->stars,            
            'price' => $this->price,            
            'images' => $this->whenLoaded('images'),           
            'category' => CategoryResource::make($this->whenLoaded('category')),            
            'quantity' => $this->whenPivotLoaded('shopping_cart', function () {
                return $this->pivot->quantity;
            }),

            'total_price_quantity' => $this->whenPivotLoaded('shopping_cart', function () {
                return $this->pivot->total_price_quantity;
            }),
        ];
    }
}

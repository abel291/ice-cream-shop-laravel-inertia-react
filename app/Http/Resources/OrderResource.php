<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
{
    public static $wrap = null;
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */

    public function toArray($request)
    {
        return [
            'order' => $this->order,
            'address' => $this->address,
            'phone' => $this->phone,
            'note' => $this->note,
            'products' => $this->products,
            'discount' => $this->discount,
            'sub_total' => $this->sub_total,            
            'total' => $this->total,
            'state' => $this->state,
            'created_at' => $this->created_at->format('F d, Y'),

        ];
    }
}

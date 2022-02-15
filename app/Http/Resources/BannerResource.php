<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BannerResource extends JsonResource
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
            //'id' => $this->id,
            'title' => $this->title,
            'subTitle' => $this->sub_title,
            'sentence' => $this->sentence,
            'img' => $this->img,
            'slug' => $this->product->slug,

        ];
    }
}

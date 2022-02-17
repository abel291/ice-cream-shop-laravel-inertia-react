<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
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
            'slug' => $this->slug,
            'date' => [ $this->created_at->format('M'), $this->created_at->format('d')],
            'description_max' => $this->description_max,
            'description_min' => $this->description_min,
            'img' => $this->img,
            'categories' => CategoryResource::make($this->whenLoaded('category')),
            'tags' => TagResource::collection($this->whenLoaded('tags')),

        ];
    }
}

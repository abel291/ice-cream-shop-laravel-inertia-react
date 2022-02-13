<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->string("dimensions")->nullable();
            $table->string("weight")->nullable();
            $table->string("slug");
            $table->text("description_min");
            $table->text("description_max");
            $table->string("sentence")->nullable();
            $table->string("img");
            $table->string("img_ball");
            $table->tinyInteger("stars");
            $table->float('price')->default(0);
            $table->boolean("active")->default(1);
            $table->foreignId('category_id')->index();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}

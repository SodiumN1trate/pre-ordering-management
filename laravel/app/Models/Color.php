<?php

namespace App\Models;

use EloquentFilter\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Color extends Model
{
    use HasFactory, Filterable;

    protected $fillable = [
        'color',
        'type_id',
    ];

    public function type() {
        return $this->belongsTo(Type::class);
    }

    public function modelFilter()
    {
        return $this->provideFilter(\App\ModelFilters\ColorFilter::class);
    }
}

"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingCart, Truck, Plus, Minus } from "lucide-react";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  unit?: string;
  image: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  delivery: string;
  description: string;
  features: string[];
}

interface ProductCardProps {
  product: Product;
  cartQuantity: number;
  isFavorite: boolean;
  onAddToCart?: () => void;
  onRemoveFromCart?: () => void;
  onToggleFavorite?: () => void;
}

export default function ProductCard({
  product,
  cartQuantity,
  isFavorite,
  onAddToCart,
  onRemoveFromCart,
  onToggleFavorite,
}: ProductCardProps) {
  return (
    <Card className="glassmorphism hover:bg-white/30 transition-all duration-200 group">
      <div className="relative">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={192}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-2 right-2 p-2 bg-white/80 hover:bg-white"
          onClick={() => onToggleFavorite?.()}
        >
          <Heart
            className={`h-4 w-4 ${
              isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"
            }`}
          />
        </Button>
        {product.originalPrice && (
          <Badge className="absolute top-2 left-2 bg-red-500 text-white">
            Promoção
          </Badge>
        )}
      </div>

      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-lg group-hover:text-yellow-600 transition-colors">
            {product.name}
          </h3>
          <Badge variant="outline">{product.category}</Badge>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
          {product.description}
        </p>

        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-300">
            {product.rating} ({product.reviews} avaliações)
          </span>
        </div>

        <div className="space-y-2 mb-4">
          {product.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm">
              <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
              {feature}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 mb-4">
          <Truck className="h-4 w-4 text-green-600" />
          <span className="text-sm text-green-600">{product.delivery}</span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-yellow-600">
                {product.price.toLocaleString()} Kz
              </span>
              {product.unit && (
                <span className="text-sm text-gray-500">{product.unit}</span>
              )}
            </div>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {product.originalPrice.toLocaleString()} Kz
              </span>
            )}
          </div>
          <Badge
            variant={product.inStock ? "default" : "destructive"}
            className={product.inStock ? "bg-green-500" : ""}
          >
            {product.inStock ? "Em Stock" : "Esgotado"}
          </Badge>
        </div>

        <div className="flex items-center gap-2">
          {cartQuantity > 0 ? (
            <div className="flex items-center gap-2 flex-1">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onRemoveFromCart?.()}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded text-center min-w-[3rem]">
                {cartQuantity}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onAddToCart?.()}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Button
              className="flex-1 bg-gradient-to-r from-yellow-500 to-red-600 hover:from-yellow-600 hover:to-red-700"
              onClick={() => onAddToCart?.()}
              disabled={!product.inStock}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Adicionar
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

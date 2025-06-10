"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ShoppingCart,
  X,
  Plus,
  Minus,
  Trash2,
  CreditCard,
  Truck,
} from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartSidebarProps {
  isOpen: boolean;
  onClose?: () => void;
  cartItems: CartItem[];
  onUpdateQuantity?: (productId: number, quantity: number) => void;
  onRemoveItem?: (productId: number) => void;
}

export default function CartSidebar({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
}: CartSidebarProps) {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const deliveryFee = totalPrice > 50000 ? 0 : 2000; // Free delivery over 50,000 Kz
  const finalTotal = totalPrice + deliveryFee;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => onClose?.()}
      />

      {/* Sidebar */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white dark:bg-gray-900 shadow-xl">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b p-4">
            <div className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5" />
              <h2 className="text-lg font-semibold">Carrinho</h2>
              {totalItems > 0 && (
                <Badge className="bg-yellow-500 text-white">{totalItems}</Badge>
              )}
            </div>
            <Button variant="ghost" size="sm" onClick={() => onClose?.()}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingCart className="h-16 w-16 text-gray-300 mb-4" />
                <h3 className="text-lg font-medium text-gray-500 mb-2">
                  Carrinho Vazio
                </h3>
                <p className="text-gray-400">
                  Adicione produtos para começar as suas compras
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.product.id} className="glassmorphism">
                    <CardContent className="p-4">
                      <div className="flex gap-3">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          width={64}
                          height={64}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-sm mb-1">
                            {item.product.name}
                          </h4>
                          <p className="text-xs text-gray-500 mb-2">
                            {item.product.category}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-yellow-600">
                              {item.product.price.toLocaleString()} Kz
                            </span>
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                className="h-6 w-6 p-0"
                                onClick={() =>
                                  onUpdateQuantity?.(
                                    item.product.id,
                                    Math.max(0, item.quantity - 1)
                                  )
                                }
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="text-sm font-medium w-8 text-center">
                                {item.quantity}
                              </span>
                              <Button
                                variant="outline"
                                size="sm"
                                className="h-6 w-6 p-0"
                                onClick={() =>
                                  onUpdateQuantity?.(
                                    item.product.id,
                                    item.quantity + 1
                                  )
                                }
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-6 w-6 p-0 text-red-500 hover:text-red-700"
                                onClick={() => onRemoveItem?.(item.product.id)}
                              >
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Footer - Order Summary */}
          {cartItems.length > 0 && (
            <div className="border-t p-4 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal ({totalItems} itens)</span>
                  <span>{totalPrice.toLocaleString()} Kz</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-1">
                    <Truck className="h-3 w-3" />
                    Entrega
                  </span>
                  <span>
                    {deliveryFee === 0 ? (
                      <span className="text-green-600">Grátis</span>
                    ) : (
                      `${deliveryFee.toLocaleString()} Kz`
                    )}
                  </span>
                </div>
                {deliveryFee === 0 && (
                  <p className="text-xs text-green-600">
                    ✓ Entrega grátis para compras acima de 50.000 Kz
                  </p>
                )}
                <div className="border-t pt-2">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span className="text-yellow-600">
                      {finalTotal.toLocaleString()} Kz
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Button className="w-full bg-gradient-to-r from-yellow-500 to-red-600 hover:from-yellow-600 hover:to-red-700">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Finalizar Compra
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => onClose?.()}
                >
                  Continuar Comprando
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

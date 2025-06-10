"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  ShoppingCart,
  Search,
  Filter,
  Truck,
  Wrench,
  Fuel,
  Zap,
  Package,
  MapPin,
  Phone,
} from "lucide-react";
import ProductCard from "./components/ProductCard";
import CartSidebar from "./components/CartSidebar";
import ServiceCard from "./components/ServiceCard";
import { products, categories, services } from "./data/products";
import type { Product } from "./data/products";

// Transform services data for ServiceCard component
const transformedServices = services.map((service) => ({
  title: service.title,
  description: service.description,
  icon: service.title.includes("Combustível")
    ? Truck
    : service.title.includes("Gás")
    ? Fuel
    : service.title.includes("Bateria")
    ? Zap
    : Wrench,
  features: service.features,
}));

interface CartItem {
  product: Product;
  quantity: number;
}

const categoryIcons = {
  Todos: Package,
  Óleos: Fuel,
  Baterias: Zap,
  Combustíveis: Fuel,
  Gás: Fuel,
  Peças: Wrench,
  Acessórios: Package,
};

export default function ECommercePage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState<{ [key: number]: number }>({});
  const [favorites, setFavorites] = useState<number[]>([]);
  const [showCart, setShowCart] = useState(false);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "Todos" || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (productId: number) => {
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };

  const removeFromCart = (productId: number) => {
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[productId] > 1) {
        newCart[productId]--;
      } else {
        delete newCart[productId];
      }
      return newCart;
    });
  };

  const updateCartQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      setCart((prev) => {
        const newCart = { ...prev };
        delete newCart[productId];
        return newCart;
      });
    } else {
      setCart((prev) => ({
        ...prev,
        [productId]: quantity,
      }));
    }
  };

  const removeFromCartCompletely = (productId: number) => {
    setCart((prev) => {
      const newCart = { ...prev };
      delete newCart[productId];
      return newCart;
    });
  };

  const toggleFavorite = (productId: number) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const cartItemsCount = Object.values(cart).reduce(
    (sum, count) => sum + count,
    0
  );

  const cartItems: CartItem[] = Object.entries(cart)
    .map(([productId, quantity]) => {
      const product = products.find((p) => p.id === parseInt(productId));
      return {
        product: product!,
        quantity,
      };
    })
    .filter((item) => item.product);

  const handleServiceRequest = (serviceData: {
    service: string;
    name: string;
    phone: string;
    address: string;
    preferredDate: string;
    notes: string;
  }) => {
    console.log("Service requested:", serviceData);
    // Here you would typically send the request to your backend
    alert(
      `Serviço "${serviceData.service}" solicitado com sucesso! Entraremos em contacto em breve.`
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-red-600 bg-clip-text text-transparent">
            🛒 E-commerce Sonangol
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Peças automóveis, combustíveis e serviços de qualidade
          </p>
        </div>

        {/* Cart Summary */}
        <div className="flex items-center gap-4">
          <Button
            className="relative bg-gradient-to-r from-yellow-500 to-red-600 hover:from-yellow-600 hover:to-red-700"
            onClick={() => setShowCart(true)}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Carrinho
            {cartItemsCount > 0 && (
              <Badge className="absolute -top-2 -right-2 bg-red-500 text-white">
                {cartItemsCount}
              </Badge>
            )}
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <Card className="glassmorphism">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Pesquisar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filtros
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {categories.map((category) => {
          const Icon =
            categoryIcons[category.name as keyof typeof categoryIcons];
          return (
            <Card
              key={category.name}
              className={`cursor-pointer transition-all duration-200 hover:scale-105 ${
                selectedCategory === category.name
                  ? "ring-2 ring-yellow-500 bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-900/20 dark:to-red-900/20"
                  : "glassmorphism hover:bg-white/30"
              }`}
              onClick={() => setSelectedCategory(category.name)}
            >
              <CardContent className="p-4 text-center">
                <Icon className="h-6 w-6 mx-auto mb-2 text-yellow-600" />
                <p className="text-sm font-medium">{category.name}</p>
                <p className="text-xs text-gray-500">({category.count})</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Services Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6">
          Serviços de Valor Acrescentado
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {transformedServices.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              onRequestService={handleServiceRequest}
            />
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">
            {selectedCategory === "Todos"
              ? "Todos os Produtos"
              : selectedCategory}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {filteredProducts.length} produtos encontrados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              cartQuantity={cart[product.id] || 0}
              isFavorite={favorites.includes(product.id)}
              onAddToCart={() => addToCart(product.id)}
              onRemoveFromCart={() => removeFromCart(product.id)}
              onToggleFavorite={() => toggleFavorite(product.id)}
            />
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <Card className="glassmorphism">
        <CardContent className="p-6">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Precisa de Ajuda?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Entre em contacto connosco para mais informações sobre produtos e
              serviços
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-yellow-500 to-red-600 hover:from-yellow-600 hover:to-red-700">
                <Phone className="h-4 w-4 mr-2" />
                Ligar Agora
              </Button>
              <Button variant="outline">
                <MapPin className="h-4 w-4 mr-2" />
                Encontrar Loja
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cart Sidebar */}
      <CartSidebar
        isOpen={showCart}
        onClose={() => setShowCart(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateCartQuantity}
        onRemoveItem={removeFromCartCompletely}
      />
    </div>
  );
}

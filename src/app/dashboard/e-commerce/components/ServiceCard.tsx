"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Phone,
  MapPin,
  Calendar,
  User,
  MessageSquare,
  CheckCircle,
  X,
} from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
}

interface ServiceRequestData {
  service: string;
  name: string;
  phone: string;
  address: string;
  preferredDate: string;
  notes: string;
}

interface ServiceCardProps {
  service: Service;
  onRequestService?: (serviceData: ServiceRequestData) => void;
}

export default function ServiceCard({
  service,
  onRequestService,
}: ServiceCardProps) {
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    preferredDate: "",
    notes: "",
  });

  const Icon = service.icon;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRequestService?.({
      service: service.title,
      ...formData,
    });
    setShowRequestForm(false);
    setFormData({
      name: "",
      phone: "",
      address: "",
      preferredDate: "",
      notes: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <>
      <Card className="glassmorphism hover:bg-white/30 transition-all duration-200">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-r from-yellow-500 to-red-600">
              <Icon className="h-6 w-6 text-white" />
            </div>
            <CardTitle className="text-lg">{service.title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {service.description}
          </p>
          <ul className="space-y-2 mb-6">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 text-sm">
                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                {feature}
              </li>
            ))}
          </ul>
          <Button
            className="w-full bg-gradient-to-r from-yellow-500 to-red-600 hover:from-yellow-600 hover:to-red-700"
            onClick={() => setShowRequestForm(true)}
          >
            <Phone className="h-4 w-4 mr-2" />
            Solicitar Serviço
          </Button>
        </CardContent>
      </Card>

      {/* Service Request Modal */}
      {showRequestForm && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowRequestForm(false)}
          />

          {/* Modal */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <Card className="w-full max-w-md bg-white dark:bg-gray-900 shadow-xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-yellow-500 to-red-600">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-lg">
                      Solicitar {service.title}
                    </CardTitle>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowRequestForm(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      <User className="h-4 w-4 inline mr-1" />
                      Nome Completo
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      <Phone className="h-4 w-4 inline mr-1" />
                      Telefone
                    </label>
                    <Input
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      placeholder="+244 900 000 000"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      <MapPin className="h-4 w-4 inline mr-1" />
                      Endereço
                    </label>
                    <Input
                      value={formData.address}
                      onChange={(e) =>
                        handleInputChange("address", e.target.value)
                      }
                      placeholder="Endereço completo para o serviço"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      <Calendar className="h-4 w-4 inline mr-1" />
                      Data Preferida
                    </label>
                    <Input
                      type="datetime-local"
                      value={formData.preferredDate}
                      onChange={(e) =>
                        handleInputChange("preferredDate", e.target.value)
                      }
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      <MessageSquare className="h-4 w-4 inline mr-1" />
                      Observações (Opcional)
                    </label>
                    <textarea
                      value={formData.notes}
                      onChange={(e) =>
                        handleInputChange("notes", e.target.value)
                      }
                      placeholder="Informações adicionais sobre o serviço..."
                      className="w-full p-2 border rounded-md resize-none h-20 text-sm"
                    />
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-yellow-600 mt-0.5" />
                      <div className="text-sm">
                        <p className="font-medium text-yellow-800 dark:text-yellow-200">
                          Confirmação do Serviço
                        </p>
                        <p className="text-yellow-700 dark:text-yellow-300">
                          Entraremos em contacto em até 30 minutos para
                          confirmar os detalhes.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1"
                      onClick={() => setShowRequestForm(false)}
                    >
                      Cancelar
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-yellow-500 to-red-600 hover:from-yellow-600 hover:to-red-700"
                    >
                      Solicitar
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </>
  );
}

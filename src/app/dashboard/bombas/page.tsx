"use client";

import React, { useState, useMemo, useEffect } from "react";
import { stations as mockStations, Station } from "./data";
import {
  MapPin,
  Fuel,
  Droplet,
  Wind,
  Star,
  Clock,
  Navigation,
  Zap,
} from "lucide-react";
import dynamic from "next/dynamic";
import Filters, { FiltersState } from "./components/Filters";

// Dynamically import the map component to avoid SSR issues with Leaflet
const MapView = dynamic(() => import("./components/MapView"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-gray-200 animate-pulse rounded-lg" />
  ),
});

const StationCard = ({
  station,
  onSelect,
  isSelected,
}: {
  station: Station;
  onSelect: (station: Station | null) => void;
  isSelected: boolean;
}) => {
  const statusColor = {
    Disponível: "bg-green-500",
    "Stock baixo": "bg-yellow-500",
    Indisponível: "bg-red-500",
  };

  const statusIcon = {
    Disponível: "✅",
    "Stock baixo": "⚠️",
    Indisponível: "❌",
  };

  return (
    <div
      className={`backdrop-blur-md bg-white/20 dark:bg-gray-800/20 p-6 rounded-3xl border border-white/30 cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-white/30 ${
        isSelected ? "ring-2 ring-blue-500 bg-white/40" : ""
      }`}
      onClick={() => onSelect(station)}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-1">
            {station.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
            <MapPin size={14} className="mr-2 text-blue-500" />
            {station.distance} km • {station.travelTime} min
          </p>
        </div>
        <div className="flex flex-col items-end space-y-2">
          <div
            className={`text-xs font-semibold text-white px-3 py-1 rounded-full flex items-center space-x-1 ${
              statusColor[station.status]
            }`}
          >
            <span>{statusIcon[station.status]}</span>
            <span>{station.status}</span>
          </div>
          {station.isRecommended && (
            <span className="text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full font-bold">
              🤖 IA Recomenda
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center text-yellow-500">
          {[...Array(Math.floor(station.rating))].map((_, i) => (
            <Star key={i} size={16} fill="currentColor" />
          ))}
          {[...Array(5 - Math.floor(station.rating))].map((_, i) => (
            <Star key={i} size={16} />
          ))}
          <span className="text-sm text-gray-600 dark:text-gray-300 ml-2">
            {station.rating} ({station.reviewCount})
          </span>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Preço médio
          </p>
          <p className="text-sm font-bold text-gray-800 dark:text-white">
            {Math.round((station.prices.gasolina + station.prices.gasoleo) / 2)}{" "}
            AOA/L
          </p>
        </div>
      </div>

      {isSelected && (
        <div className="mt-4 space-y-4 border-t border-white/20 pt-4">
          {/* Preços */}
          <div className="grid grid-cols-1 gap-3">
            <div className="flex items-center justify-between p-3 bg-white/20 rounded-2xl">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Droplet size={16} className="text-white" />
                </div>
                <span className="font-medium text-gray-800 dark:text-white">
                  Gasóleo
                </span>
              </div>
              <span className="font-bold text-blue-600">
                {station.prices.gasoleo} AOA/L
              </span>
            </div>

            <div className="flex items-center justify-between p-3 bg-white/20 rounded-2xl">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Fuel size={16} className="text-white" />
                </div>
                <span className="font-medium text-gray-800 dark:text-white">
                  Gasolina
                </span>
              </div>
              <span className="font-bold text-orange-600">
                {station.prices.gasolina} AOA/L
              </span>
            </div>

            <div className="flex items-center justify-between p-3 bg-white/20 rounded-2xl">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <Wind size={16} className="text-white" />
                </div>
                <span className="font-medium text-gray-800 dark:text-white">
                  Gás Doméstico
                </span>
              </div>
              <span className="font-bold text-green-600">
                {station.prices.gasDomestico} AOA
              </span>
            </div>
          </div>

          {/* Serviços */}
          <div className="flex flex-wrap gap-2">
            {station.services.conveniencia && (
              <span className="bg-blue-100 text-blue-800 px-3 py-1 text-xs rounded-full font-medium">
                🏪 Loja
              </span>
            )}
            {station.services.lavagem && (
              <span className="bg-cyan-100 text-cyan-800 px-3 py-1 text-xs rounded-full font-medium">
                🚿 Lavagem
              </span>
            )}
            {station.services.mecanica && (
              <span className="bg-orange-100 text-orange-800 px-3 py-1 text-xs rounded-full font-medium">
                🔧 Mecânica
              </span>
            )}
            {station.services.atm && (
              <span className="bg-green-100 text-green-800 px-3 py-1 text-xs rounded-full font-medium">
                🏧 ATM
              </span>
            )}
          </div>

          {/* Previsão IA */}
          {station.stockPrediction && (
            <div className="p-3 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-2xl">
              <p className="text-sm text-purple-800 dark:text-purple-200 flex items-center">
                <Zap size={16} className="mr-2" />
                <span className="font-medium">💡 Previsão IA:</span>
              </p>
              <p className="text-sm text-purple-700 dark:text-purple-300 mt-1">
                {station.stockPrediction}
              </p>
            </div>
          )}

          {/* Botões de Ação */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-3 rounded-2xl text-sm font-semibold hover:from-blue-600 hover:to-blue-700 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105">
              <Navigation size={16} />
              Navegar
            </button>
            <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 rounded-2xl text-sm font-semibold hover:from-green-600 hover:to-green-700 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105">
              <Clock size={16} />
              Reservar
            </button>
          </div>

          {/* Tempo de espera estimado */}
          <div className="text-center p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl">
            <p className="text-xs text-yellow-800 dark:text-yellow-200">
              ⏱️ Tempo de espera estimado:{" "}
              <span className="font-bold">{station.waitTime || "5-8 min"}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

const BombasPage = () => {
  const [filters, setFilters] = useState<FiltersState | null>(null);
  const [selectedStation, setSelectedStation] = useState<Station | null>(null);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(
    null
  );

  const filteredStations = useMemo(() => {
    if (!filters)
      return mockStations.filter((s) => s.status !== "Indisponível");

    const stations = mockStations.filter((station) => {
      if (station.status === "Indisponível") return false;
      if (station.distance > filters.distance) return false;

      if (filters.fuelType.length > 0) {
        const hasFuel = filters.fuelType.some(
          (fuel) => station.prices[fuel as keyof typeof station.prices] > 0
        );
        if (!hasFuel) return false;
      }

      if (filters.services.length > 0) {
        const hasService = filters.services.every(
          (service) =>
            station.services[service as keyof typeof station.services]
        );
        if (!hasService) return false;
      }

      return true;
    });

    if (
      stations.length > 0 &&
      !stations.find((s) => s.id === selectedStation?.id)
    ) {
      setSelectedStation(stations[0]);
    } else if (stations.length === 0) {
      setSelectedStation(null);
    }

    return stations;
  }, [filters, selectedStation]);

  useEffect(() => {
    if (filteredStations.length > 0) {
      setSelectedStation(filteredStations[0]);
    } else {
      setSelectedStation(null);
    }
  }, [filters, filteredStations]);

  const handleFilterChange = (newFilters: FiltersState) => {
    setFilters(newFilters);
  };

  const handleSelectStation = (station: Station | null) => {
    setSelectedStation(station);
  };

  const handleLocateUser = () => {
    if (!navigator.geolocation) {
      alert("A geolocalização não é suportada pelo seu navegador.");
      return;
    }

    // Show loading state
    const button = document.querySelector(
      "[data-locate-button]"
    ) as HTMLButtonElement;
    if (button) {
      button.disabled = true;
      button.textContent = "🔄 Localizando...";
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const newLocation: [number, number] = [
          position.coords.latitude,
          position.coords.longitude,
        ];
        setUserLocation(newLocation);

        // Reset button
        if (button) {
          button.disabled = false;
          button.textContent = "📍 Minha Localização";
        }

        console.log("User location set:", newLocation);
        alert(
          `Localização obtida com sucesso! Latitude: ${position.coords.latitude.toFixed(
            6
          )}, Longitude: ${position.coords.longitude.toFixed(6)}`
        );
      },
      (error) => {
        console.error("Error getting user location:", error);

        // Reset button
        if (button) {
          button.disabled = false;
          button.textContent = "📍 Minha Localização";
        }

        let errorMessage = "Não foi possível obter a sua localização.";

        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage =
              "Permissão de localização negada. Por favor, permita o acesso à localização nas configurações do navegador.";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Informação de localização não disponível.";
            break;
          case error.TIMEOUT:
            errorMessage = "Tempo limite para obter localização excedido.";
            break;
        }

        alert(errorMessage);

        // Fallback to simulated location (Luanda center)
        const simulatedLocation: [number, number] = [-8.8368, 13.2343];
        setUserLocation(simulatedLocation);
      },
      {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 300000,
      }
    );
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
              📍 Localizador Inteligente de Bombas
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Encontre as melhores bombas próximas com previsões IA em tempo
              real
            </p>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Bombas disponíveis
              </p>
              <p className="text-2xl font-bold text-green-600">
                {filteredStations.length}
              </p>
            </div>
            <button
              onClick={handleLocateUser}
              data-locate-button
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-medium hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              📍 Minha Localização
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-200px)]">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/3 xl:w-1/4 flex flex-col gap-4 overflow-hidden">
          <Filters onFilterChange={handleFilterChange} />

          <div className="flex-1 overflow-y-auto space-y-4 pr-2">
            {filteredStations.length > 0 ? (
              <>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Bombas Encontradas
                  </h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {filteredStations.length} disponíveis
                  </span>
                </div>
                {filteredStations.map((station) => (
                  <StationCard
                    key={station.id}
                    station={station}
                    onSelect={handleSelectStation}
                    isSelected={selectedStation?.id === station.id}
                  />
                ))}
              </>
            ) : (
              <div className="backdrop-blur-md bg-white/20 dark:bg-gray-800/20 rounded-3xl p-8 border border-white/30 text-center">
                <div className="text-6xl mb-4">🔍</div>
                <p className="font-semibold text-gray-800 dark:text-white mb-2">
                  Nenhuma bomba encontrada
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Tente ajustar os seus filtros ou aumentar a distância de
                  busca.
                </p>
              </div>
            )}
          </div>
        </aside>

        {/* Main Content - Map */}
        <main className="flex-1 min-h-0">
          <div className="h-full backdrop-blur-md bg-white/20 dark:bg-gray-800/20 rounded-3xl border border-white/30 overflow-hidden">
            <MapView
              stations={filteredStations}
              selectedStation={selectedStation}
              onSelectStation={handleSelectStation}
              userLocation={userLocation}
              onLocateUser={handleLocateUser}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default BombasPage;

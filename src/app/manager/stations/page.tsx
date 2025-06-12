"use client";

import React, { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import { stationStatusData as allStations } from "../data/mock-data";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "../../../components/ui/table";
import { Progress } from "../../../components/ui/progress";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import {
  Filter,
  MapPin,
  DollarSign,
  Fuel,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Wrench,
  Truck,
  User,
  Calendar,
  Package,
  Printer,
} from "lucide-react";

// Helper function to get progress bar color based on level
const getProgressBarColor = (level: number) => {
  if (level > 50) return "bg-green-500";
  if (level > 20) return "bg-yellow-500";
  return "bg-red-500";
};

export default function StationsPage() {
  const [selectedProvince, setSelectedProvince] = useState("all");
  const [selectedMunicipality, setSelectedMunicipality] = useState("all");
  const [expandedStation, setExpandedStation] = useState<string | null>(null);

  // Get unique provinces and municipalities
  const provinces = [
    ...new Set(allStations.map((station) => station.province)),
  ];
  const municipalities = useMemo(() => {
    if (selectedProvince === "all") {
      return [...new Set(allStations.map((station) => station.municipality))];
    }
    return [
      ...new Set(
        allStations
          .filter((station) => station.province === selectedProvince)
          .map((station) => station.municipality)
      ),
    ];
  }, [selectedProvince]);

  // Filter stations based on selected filters
  const filteredStations = useMemo(() => {
    let filtered = allStations;

    if (selectedProvince !== "all") {
      filtered = filtered.filter(
        (station) => station.province === selectedProvince
      );
    }

    if (selectedMunicipality !== "all") {
      filtered = filtered.filter(
        (station) => station.municipality === selectedMunicipality
      );
    }

    return filtered;
  }, [selectedProvince, selectedMunicipality]);

  // Calculate totals
  const totals = useMemo(() => {
    return filteredStations.reduce(
      (acc, station) => {
        acc.totalStockValue +=
          station.dieselStockValue + station.gasolineStockValue;
        acc.totalRevenue += station.dailyRevenue;
        acc.totalLosses += station.losses;
        acc.totalDieselStock += station.dieselStock;
        acc.totalGasolineStock += station.gasolineStock;
        return acc;
      },
      {
        totalStockValue: 0,
        totalRevenue: 0,
        totalLosses: 0,
        totalDieselStock: 0,
        totalGasolineStock: 0,
      }
    );
  }, [filteredStations]);

  const resetFilters = () => {
    setSelectedProvince("all");
    setSelectedMunicipality("all");
  };

  const toggleStationDetails = (stationId: string) => {
    setExpandedStation(expandedStation === stationId ? null : stationId);
  };

  const printSupplierReport = (
    suppliers: (typeof allStations)[0]["suppliers"],
    stationName: string
  ) => {
    const printWindow = window.open("", "_blank");
    if (!printWindow || !suppliers) return;

    const currentDate = new Date().toLocaleDateString("pt-AO");
    const totalValue = suppliers.reduce(
      (sum, supplier) => sum + (supplier.totalValue || 0),
      0
    );
    const totalQuantity = suppliers.reduce(
      (sum, supplier) => sum + supplier.quantity,
      0
    );

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Relatório de Fornecedores - ${stationName}</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            .header { text-align: center; margin-bottom: 30px; }
            .station-info { margin-bottom: 20px; }
            table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background-color: #f2f2f2; }
            .summary { background-color: #f9f9f9; padding: 15px; margin-top: 20px; }
            .approved { color: green; font-weight: bold; }
            .rejected { color: red; font-weight: bold; }
            @media print { body { margin: 0; } }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>SONANGOL</h1>
            <h2>Relatório de Fornecedores</h2>
            <h3>${stationName}</h3>
            <p>Data do Relatório: ${currentDate}</p>
          </div>

          <table>
            <thead>
              <tr>
                <th>Empresa</th>
                <th>Tipo Combustível</th>
                <th>Quantidade (L)</th>
                <th>Valor Total (AOA)</th>
                <th>Preço/L (AOA)</th>
                <th>Data Entrega</th>
                <th>Motorista</th>
                <th>Caminhão</th>
                <th>Lote</th>
                <th>Qualidade</th>
                <th>Poços</th>
              </tr>
            </thead>
            <tbody>
              ${suppliers
                .map(
                  (supplier) => `
                <tr>
                  <td>${supplier.company}</td>
                  <td>${supplier.fuelType}</td>
                  <td>${supplier.quantity.toLocaleString()}</td>
                  <td>${(supplier.totalValue || 0).toLocaleString()}</td>
                  <td>${supplier.pricePerLiter || "N/A"}</td>
                  <td>${new Date(supplier.lastDelivery).toLocaleString(
                    "pt-AO"
                  )}</td>
                  <td>${supplier.driver}</td>
                  <td>${supplier.truck}</td>
                  <td>${supplier.batchNumber}</td>
                  <td class="${
                    supplier.qualityCheck.includes("Aprovado")
                      ? "approved"
                      : "rejected"
                  }">
                    ${supplier.qualityCheck}
                  </td>
                  <td>${supplier.wellsSupplied.join(", ")}</td>
                </tr>
              `
                )
                .join("")}
            </tbody>
          </table>

          <div class="summary">
            <h3>Resumo</h3>
            <p><strong>Total de Entregas:</strong> ${suppliers.length}</p>
            <p><strong>Quantidade Total:</strong> ${totalQuantity.toLocaleString()} L</p>
            <p><strong>Valor Total:</strong> ${totalValue.toLocaleString()} AOA</p>
            <p><strong>Aprovadas:</strong> ${
              suppliers.filter((s) => s.qualityCheck.includes("Aprovado"))
                .length
            }</p>
            <p><strong>Rejeitadas:</strong> ${
              suppliers.filter((s) => !s.qualityCheck.includes("Aprovado"))
                .length
            }</p>
          </div>

          <script>
            window.onload = function() {
              window.print();
              window.onafterprint = function() {
                window.close();
              };
            };
          </script>
        </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Ativo":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "Inativo":
        return <XCircle className="h-4 w-4 text-red-500" />;
      case "Manutenção":
        return <Wrench className="h-4 w-4 text-yellow-500" />;
      default:
        return <AlertTriangle className="h-4 w-4 text-gray-500" />;
    }
  };

  const getEquipmentStatusColor = (status: string) => {
    switch (status) {
      case "Operacional":
        return "text-green-600";
      case "Bom estado":
        return "text-green-600";
      case "Desgastado":
        return "text-yellow-600";
      case "Danificado":
        return "text-red-600";
      case "Avariado":
        return "text-red-600";
      case "Manutenção":
        return "text-yellow-600";
      case "Inativo":
        return "text-gray-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="container mx-auto py-10 space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <DollarSign className="h-5 w-5 text-green-600" />
              <div>
                <p className="text-sm text-gray-600">Valor Total Stock</p>
                <p className="text-lg font-bold text-green-600">
                  {totals.totalStockValue.toLocaleString()} AOA
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Fuel className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Stock Gasóleo</p>
                <p className="text-lg font-bold text-blue-600">
                  {totals.totalDieselStock.toLocaleString()}L
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Fuel className="h-5 w-5 text-orange-600" />
              <div>
                <p className="text-sm text-gray-600">Stock Gasolina</p>
                <p className="text-lg font-bold text-orange-600">
                  {totals.totalGasolineStock.toLocaleString()}L
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-purple-600" />
              <div>
                <p className="text-sm text-gray-600">Postos Ativos</p>
                <p className="text-lg font-bold text-purple-600">
                  {filteredStations.length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filtros de Localização
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium">Província:</label>
              <select
                value={selectedProvince}
                onChange={(e) => {
                  setSelectedProvince(e.target.value);
                  setSelectedMunicipality("all");
                }}
                className="px-3 py-2 border rounded-md bg-white dark:bg-gray-800"
              >
                <option value="all">Todas as Províncias</option>
                {provinces.map((province) => (
                  <option key={province} value={province}>
                    {province}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium">Município:</label>
              <select
                value={selectedMunicipality}
                onChange={(e) => setSelectedMunicipality(e.target.value)}
                className="px-3 py-2 border rounded-md bg-white dark:bg-gray-800"
              >
                <option value="all">Todos os Municípios</option>
                {municipalities.map((municipality) => (
                  <option key={municipality} value={municipality}>
                    {municipality}
                  </option>
                ))}
              </select>
            </div>

            <Button onClick={resetFilters} variant="outline" className="mt-6">
              Limpar Filtros
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Stations Table */}
      <Card>
        <CardHeader>
          <CardTitle>
            Gestão de Postos de Abastecimento
            {(selectedProvince !== "all" || selectedMunicipality !== "all") && (
              <span className="text-sm font-normal text-gray-600 ml-2">
                - Filtrado por: {selectedProvince !== "all" && selectedProvince}
                {selectedMunicipality !== "all" && ` > ${selectedMunicipality}`}
              </span>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">Detalhes</TableHead>
                <TableHead className="w-[150px]">Nome da Estação</TableHead>
                <TableHead>Localização</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Nível de Gasóleo</TableHead>
                <TableHead>Nível de Gasolina</TableHead>
                <TableHead className="text-right">Stock (Valor)</TableHead>
                <TableHead className="text-right">Valor Arrecadado</TableHead>
                <TableHead className="text-right">Perdas</TableHead>
                <TableHead className="text-right">Última Atualização</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStations.map((station) => (
                <React.Fragment key={station.id}>
                  <TableRow>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleStationDetails(station.id)}
                        className="p-1"
                      >
                        {expandedStation === station.id ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </Button>
                    </TableCell>
                    <TableCell className="font-medium">
                      {station.name}
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{station.location}</div>
                        <div className="text-xs text-gray-500">
                          {station.province} • {station.municipality}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={`${
                          station.status === "Operacional" && "bg-green-500"
                        } ${
                          station.status === "Manutenção" && "bg-yellow-500"
                        } ${station.status === "Offline" && "bg-red-500"}`}
                      >
                        {station.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Progress
                          value={station.dieselLevel}
                          className={`w-[60%] ${getProgressBarColor(
                            station.dieselLevel
                          )}`}
                        />
                        <span>{station.dieselLevel}%</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {station.dieselStock.toLocaleString()}L
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Progress
                          value={station.gasolineLevel}
                          className={`w-[60%] ${getProgressBarColor(
                            station.gasolineLevel
                          )}`}
                        />
                        <span>{station.gasolineLevel}%</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {station.gasolineStock.toLocaleString()}L
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="font-medium text-blue-600">
                        {(
                          station.dieselStockValue + station.gasolineStockValue
                        ).toLocaleString()}{" "}
                        AOA
                      </div>
                      <div className="text-xs text-gray-500">
                        Gasóleo: {station.dieselStockValue.toLocaleString()} AOA
                      </div>
                      <div className="text-xs text-gray-500">
                        Gasolina: {station.gasolineStockValue.toLocaleString()}{" "}
                        AOA
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <span className="font-medium text-green-600">
                        {station.dailyRevenue.toLocaleString()} AOA
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <span className="font-medium text-red-600">
                        {station.losses.toLocaleString()} AOA
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      {new Date(station.lastUpdate).toLocaleString()}
                    </TableCell>
                  </TableRow>

                  {/* Expanded Details Row */}
                  {expandedStation === station.id && station.wells && (
                    <TableRow>
                      <TableCell colSpan={10} className="p-0">
                        <div className="bg-gray-50 dark:bg-gray-800 p-6 space-y-6">
                          {/* Wells Section */}
                          <div>
                            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                              <Fuel className="h-5 w-5" />
                              Poços de Combustível
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                              {station.wells.map((well) => (
                                <Card key={well.id} className="p-4">
                                  <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                      <h5 className="font-medium">
                                        Poço {well.number}
                                      </h5>
                                      <div className="flex items-center gap-1">
                                        {getStatusIcon(well.status)}
                                        <span className="text-sm">
                                          {well.status}
                                        </span>
                                      </div>
                                    </div>

                                    <div>
                                      <div className="text-sm text-gray-600">
                                        Tipo: {well.type}
                                      </div>
                                      <div className="text-sm text-gray-600">
                                        Stock:{" "}
                                        {well.currentStock.toLocaleString()}L /{" "}
                                        {well.capacity.toLocaleString()}L
                                      </div>
                                      {well.stockValue && (
                                        <div className="text-sm font-medium text-blue-600 flex items-center gap-1">
                                          <DollarSign className="h-3 w-3" />
                                          Valor:{" "}
                                          {well.stockValue.toLocaleString()} AOA
                                        </div>
                                      )}
                                      {well.pricePerLiter && (
                                        <div className="text-xs text-gray-500">
                                          Preço/L: {well.pricePerLiter} AOA
                                        </div>
                                      )}
                                    </div>

                                    <Progress
                                      value={well.level}
                                      className="w-full"
                                    />
                                    <div className="text-xs text-center">
                                      {well.level}%
                                    </div>

                                    {well.issues.length > 0 && (
                                      <div className="space-y-1">
                                        <div className="text-sm font-medium text-red-600 flex items-center gap-1">
                                          <AlertTriangle className="h-3 w-3" />
                                          Problemas:
                                        </div>
                                        {well.issues.map((issue, index) => (
                                          <div
                                            key={index}
                                            className="text-xs text-red-600"
                                          >
                                            • {issue}
                                          </div>
                                        ))}
                                      </div>
                                    )}

                                    <div className="space-y-1">
                                      <div className="text-xs font-medium">
                                        Equipamentos:
                                      </div>
                                      <div
                                        className={`text-xs ${getEquipmentStatusColor(
                                          well.equipment.pump
                                        )}`}
                                      >
                                        Bomba: {well.equipment.pump}
                                      </div>
                                      <div
                                        className={`text-xs ${getEquipmentStatusColor(
                                          well.equipment.hoses
                                        )}`}
                                      >
                                        Mangueiras: {well.equipment.hoses}
                                      </div>
                                      <div
                                        className={`text-xs ${getEquipmentStatusColor(
                                          well.equipment.nozzles
                                        )}`}
                                      >
                                        Bicos: {well.equipment.nozzles}
                                      </div>
                                    </div>

                                    <div className="text-xs text-gray-500">
                                      Última manutenção:{" "}
                                      {new Date(
                                        well.lastMaintenance
                                      ).toLocaleDateString()}
                                    </div>
                                  </div>
                                </Card>
                              ))}
                            </div>
                          </div>

                          {/* Suppliers Section */}
                          {station.suppliers && (
                            <div>
                              <div className="flex items-center justify-between mb-4">
                                <h4 className="text-lg font-semibold flex items-center gap-2">
                                  <Truck className="h-5 w-5" />
                                  Histórico de Fornecedores
                                </h4>
                                <div className="flex gap-2">
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() =>
                                      printSupplierReport(
                                        station.suppliers,
                                        station.name
                                      )
                                    }
                                    className="flex items-center gap-1"
                                  >
                                    <Printer className="h-4 w-4" />
                                    Imprimir Relatório
                                  </Button>
                                </div>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {station.suppliers.map((supplier) => (
                                  <Card key={supplier.id} className="p-4">
                                    <div className="space-y-3">
                                      <div className="flex items-center justify-between">
                                        <h5 className="font-medium">
                                          {supplier.company}
                                        </h5>
                                        <Badge
                                          className={
                                            supplier.qualityCheck.includes(
                                              "Aprovado"
                                            )
                                              ? "bg-green-500"
                                              : "bg-red-500"
                                          }
                                        >
                                          {supplier.qualityCheck}
                                        </Badge>
                                      </div>

                                      <div className="space-y-2 text-sm">
                                        <div className="flex items-center gap-2">
                                          <Package className="h-4 w-4 text-gray-500" />
                                          <span>
                                            {supplier.fuelType} -{" "}
                                            {supplier.quantity.toLocaleString()}
                                            L
                                          </span>
                                        </div>

                                        {supplier.totalValue && (
                                          <div className="flex items-center gap-2">
                                            <DollarSign className="h-4 w-4 text-blue-500" />
                                            <span className="font-medium text-blue-600">
                                              {supplier.totalValue.toLocaleString()}{" "}
                                              AOA
                                            </span>
                                          </div>
                                        )}

                                        {supplier.pricePerLiter && (
                                          <div className="text-xs text-gray-500">
                                            Preço/L: {supplier.pricePerLiter}{" "}
                                            AOA
                                          </div>
                                        )}

                                        <div className="flex items-center gap-2">
                                          <Calendar className="h-4 w-4 text-gray-500" />
                                          <span>
                                            {new Date(
                                              supplier.lastDelivery
                                            ).toLocaleString()}
                                          </span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                          <User className="h-4 w-4 text-gray-500" />
                                          <span>
                                            {supplier.driver} - {supplier.truck}
                                          </span>
                                        </div>

                                        <div className="text-xs text-gray-600">
                                          Lote: {supplier.batchNumber}
                                        </div>

                                        <div className="text-xs text-gray-600">
                                          Poços abastecidos:{" "}
                                          {supplier.wellsSupplied.join(", ")}
                                        </div>
                                      </div>
                                    </div>
                                  </Card>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

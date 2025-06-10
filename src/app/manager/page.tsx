"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  DollarSign,
  AlertTriangle,
  Bot,
  TrendingUp,
  CheckCircle2,
  Brain,
  Zap,
  Target,
  Activity,
  Star,
} from "lucide-react";
import { StatCard } from "./components/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "./components/Card";
import {
  revenueChartData,
  fuelSalesData,
  aiAlertsData,
  stationStatusData,
} from "./data/mock-data";

const COLORS = ["#E53935", "#FDD835", "#43A047"];

export default function ManagerPage() {
  // Calculate totals from station data
  const totalRevenue = stationStatusData.reduce(
    (sum, station) => sum + station.dailyRevenue,
    0
  );
  const totalLosses = stationStatusData.reduce(
    (sum, station) => sum + station.losses,
    0
  );
  const avgEfficiency =
    stationStatusData.reduce(
      (sum, station) =>
        sum +
        (station.status === "Operacional"
          ? 90
          : station.status === "Manutenção"
          ? 70
          : 0),
      0
    ) / stationStatusData.length;
  const operationalStations = stationStatusData.filter(
    (station) => station.status === "Operacional"
  ).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
          Dashboard Executivo - Sonangol Distribuidora
        </h1>
        <div className="text-sm text-gray-600 dark:text-gray-300">
          Última atualização: {new Date().toLocaleString()}
        </div>
      </div>

      {/* Enhanced KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Receita Total (Hoje)"
          value={`${totalRevenue.toLocaleString()} AOA`}
          change="5.2"
          changeType="increase"
          icon={<DollarSign className="h-8 w-8 text-green-500" />}
        />
        <StatCard
          title="Postos Operacionais"
          value={`${operationalStations}/${stationStatusData.length}`}
          change="2.1"
          changeType="increase"
          icon={<Target className="h-8 w-8 text-blue-500" />}
        />
        <StatCard
          title="Eficiência Média"
          value={`${avgEfficiency.toFixed(1)}%`}
          change="3.1"
          changeType="increase"
          icon={<Zap className="h-8 w-8 text-yellow-500" />}
        />
        <StatCard
          title="Perdas Totais"
          value={`${totalLosses.toLocaleString()} AOA`}
          change="-1.8"
          changeType="decrease"
          icon={<AlertTriangle className="h-8 w-8 text-red-500" />}
        />
      </div>

      {/* New Features Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
              <Brain className="h-5 w-5" />
              ML Preditivos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Modelos Ativos:</span>
                <span className="font-medium">8</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Precisão Média:</span>
                <span className="font-medium text-green-600">94.2%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Previsões Hoje:</span>
                <span className="font-medium">156</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
              <Activity className="h-5 w-5" />
              Process Mining
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Processos Analisados:</span>
                <span className="font-medium">24</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Gargalos Identificados:</span>
                <span className="font-medium text-orange-600">7</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Melhoria Potencial:</span>
                <span className="font-medium text-green-600">+18%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
              <Star className="h-5 w-5" />
              Melhores Práticas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Práticas Catalogadas:</span>
                <span className="font-medium">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Implementadas:</span>
                <span className="font-medium text-blue-600">8</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Impacto Médio:</span>
                <span className="font-medium text-green-600">+22%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Visão Geral da Receita (Últimos 6 Meses)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueChartData}>
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--background))",
                    borderColor: "hsl(var(--border))",
                  }}
                />
                <Legend />
                <Bar dataKey="receita" fill="#E53935" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Fuel Sales Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Vendas por Tipo de Combustível</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={fuelSalesData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  nameKey="name"
                  label
                >
                  {fuelSalesData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* AI Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot /> Alertas da Inteligência Artificial
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {aiAlertsData.map((alert) => (
                <li key={alert.id} className="flex items-start gap-4">
                  <div
                    className={`p-2 rounded-full ${
                      alert.priority === "Crítica"
                        ? "bg-red-100 text-red-600"
                        : alert.priority === "Alta"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {alert.type === "Manutenção Preditiva" ? (
                      <AlertTriangle className="h-5 w-5" />
                    ) : alert.type === "Previsão de Demanda" ? (
                      <TrendingUp className="h-5 w-5" />
                    ) : (
                      <CheckCircle2 className="h-5 w-5" />
                    )}
                  </div>
                  <div>
                    <p className="font-semibold">{alert.type}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {alert.message}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                      {new Date(alert.timestamp).toLocaleString()}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Enhanced Station Status */}
        <Card>
          <CardHeader>
            <CardTitle>Estado dos Postos - Visão Financeira</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b dark:border-gray-700">
                    <th className="p-2">Posto</th>
                    <th className="p-2">Estado</th>
                    <th className="p-2">Receita</th>
                    <th className="p-2">Perdas</th>
                    <th className="p-2">Eficiência</th>
                  </tr>
                </thead>
                <tbody>
                  {stationStatusData.map((station) => (
                    <tr
                      key={station.id}
                      className="border-b dark:border-gray-700 last:border-none hover:bg-gray-50 dark:hover:bg-gray-800"
                    >
                      <td className="p-2 font-medium">{station.name}</td>
                      <td className="p-2">
                        <span
                          className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            station.status === "Operacional"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                              : station.status === "Manutenção"
                              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                              : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                          }`}
                        >
                          {station.status}
                        </span>
                      </td>
                      <td className="p-2">
                        <span className="font-medium text-green-600">
                          {station.dailyRevenue.toLocaleString()}
                        </span>
                        <div className="text-xs text-gray-500">AOA</div>
                      </td>
                      <td className="p-2">
                        <span className="font-medium text-red-600">
                          {station.losses.toLocaleString()}
                        </span>
                        <div className="text-xs text-gray-500">AOA</div>
                      </td>
                      <td className="p-2">
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-2 h-2 rounded-full ${
                              station.status === "Operacional"
                                ? "bg-green-500"
                                : station.status === "Manutenção"
                                ? "bg-yellow-500"
                                : "bg-red-500"
                            }`}
                          ></div>
                          <span className="font-medium">
                            {Math.round(
                              (station.dieselLevel + station.gasolineLevel) / 2
                            )}
                            %
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-gray-600 dark:text-gray-300">
                    Total Receita:
                  </span>
                  <div className="font-bold text-green-600">
                    {totalRevenue.toLocaleString()} AOA
                  </div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-300">
                    Total Perdas:
                  </span>
                  <div className="font-bold text-red-600">
                    {totalLosses.toLocaleString()} AOA
                  </div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-300">
                    Lucro Líquido:
                  </span>
                  <div className="font-bold text-blue-600">
                    {(totalRevenue - totalLosses).toLocaleString()} AOA
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/Card";
import {
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  ScatterChart,
  Scatter,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Brain,
  TrendingUp,
  Target,
  AlertTriangle,
  CheckCircle,
  Clock,
  DollarSign,
  Zap,
  Star,
} from "lucide-react";

// Mock ML Data
const churnPredictionData = [
  { segment: "Alto Risco", customers: 245, percentage: 4.9, color: "#E53935" },
  {
    segment: "Médio Risco",
    customers: 890,
    percentage: 17.8,
    color: "#FF9800",
  },
  {
    segment: "Baixo Risco",
    customers: 3865,
    percentage: 77.3,
    color: "#4CAF50",
  },
];

const nextPurchasePrediction = [
  { timeframe: "1-3 dias", probability: 85, customers: 1250, revenue: 45000 },
  { timeframe: "4-7 dias", probability: 72, customers: 980, revenue: 38000 },
  { timeframe: "1-2 semanas", probability: 58, customers: 750, revenue: 28000 },
  { timeframe: "2-4 semanas", probability: 34, customers: 450, revenue: 18000 },
  { timeframe: "> 1 mês", probability: 12, customers: 200, revenue: 8000 },
];

const crossSellingOpportunities = [
  {
    customer: "João Silva",
    currentProduct: "Gasolina",
    recommendedProducts: ["Óleo Motor", "Filtro Ar"],
    probability: 78,
    potentialRevenue: 12500,
    lastVisit: "2 dias",
  },
  {
    customer: "Maria Santos",
    currentProduct: "Gasóleo",
    recommendedProducts: ["Bateria", "Pneus"],
    probability: 65,
    potentialRevenue: 35000,
    lastVisit: "1 semana",
  },
  {
    customer: "Carlos Mendes",
    currentProduct: "Gás Doméstico",
    recommendedProducts: ["Café", "Snacks"],
    probability: 82,
    potentialRevenue: 3500,
    lastVisit: "1 dia",
  },
  {
    customer: "Ana Costa",
    currentProduct: "Gasolina",
    recommendedProducts: ["Kit Ferramentas", "Óleo Hidráulico"],
    probability: 71,
    potentialRevenue: 18000,
    lastVisit: "3 dias",
  },
];

const mlModelPerformance = [
  {
    model: "Churn Prediction",
    accuracy: 89.5,
    precision: 87.2,
    recall: 91.8,
    f1Score: 89.4,
  },
  {
    model: "Purchase Prediction",
    accuracy: 84.7,
    precision: 82.1,
    recall: 86.9,
    f1Score: 84.4,
  },
  {
    model: "Cross-sell Recommendation",
    accuracy: 76.3,
    precision: 78.9,
    recall: 74.2,
    f1Score: 76.5,
  },
  {
    model: "Price Optimization",
    accuracy: 92.1,
    precision: 90.8,
    recall: 93.4,
    f1Score: 92.1,
  },
];

const customerLifetimeValue = [
  { segment: "Premium", clv: 125000, customers: 450, retention: 95 },
  { segment: "Regular", clv: 65000, customers: 2800, retention: 78 },
  { segment: "Ocasional", clv: 25000, customers: 1750, retention: 45 },
];

const COLORS = ["#E53935", "#FF9800", "#4CAF50", "#2196F3", "#9C27B0"];

export default function MLPredictiveModels() {
  const [selectedModel, setSelectedModel] = useState("churn");

  const totalChurnRisk = churnPredictionData.reduce(
    (sum, item) =>
      item.segment !== "Baixo Risco" ? sum + item.customers : sum,
    0
  );

  const totalCrossSellRevenue = crossSellingOpportunities.reduce(
    (sum, item) => sum + item.potentialRevenue,
    0
  );

  return (
    <div className="space-y-6">
      {/* ML Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm">
              <Brain className="h-4 w-4" />
              Modelos Ativos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">4</div>
            <p className="text-xs text-green-600 flex items-center gap-1">
              <CheckCircle className="h-3 w-3" />
              Todos operacionais
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm">
              <AlertTriangle className="h-4 w-4" />
              Risco de Churn
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              {totalChurnRisk}
            </div>
            <p className="text-xs text-red-600 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              Clientes em risco
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm">
              <Target className="h-4 w-4" />
              Oportunidades Cross-sell
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {totalCrossSellRevenue.toLocaleString()} Kz
            </div>
            <p className="text-xs text-green-600 flex items-center gap-1">
              <DollarSign className="h-3 w-3" />
              Receita potencial
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm">
              <Zap className="h-4 w-4" />
              Precisão Média ML
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">85.7%</div>
            <p className="text-xs text-green-600 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              +2.3% vs mês anterior
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Model Selection Tabs */}
      <Card>
        <CardHeader>
          <CardTitle>Modelos Preditivos de Machine Learning</CardTitle>
          <div className="flex gap-2 mt-4">
            <button
              onClick={() => setSelectedModel("churn")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedModel === "churn"
                  ? "bg-red-500 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              }`}
            >
              Predição de Churn
            </button>
            <button
              onClick={() => setSelectedModel("purchase")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedModel === "purchase"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              }`}
            >
              Próxima Compra
            </button>
            <button
              onClick={() => setSelectedModel("crosssell")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedModel === "crosssell"
                  ? "bg-green-500 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              }`}
            >
              Cross-selling
            </button>
          </div>
        </CardHeader>
        <CardContent>
          {selectedModel === "churn" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-4">
                  Distribuição de Risco de Churn
                </h4>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={churnPredictionData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ segment, percentage }) =>
                        `${segment}: ${percentage}%`
                      }
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="customers"
                    >
                      {churnPredictionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Ações Recomendadas</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-red-600" />
                      <span className="font-medium text-red-800 dark:text-red-200">
                        Alto Risco (245 clientes)
                      </span>
                    </div>
                    <p className="text-sm text-red-700 dark:text-red-300">
                      Contacto imediato, ofertas personalizadas, programa de
                      fidelidade premium
                    </p>
                  </div>
                  <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-4 w-4 text-orange-600" />
                      <span className="font-medium text-orange-800 dark:text-orange-200">
                        Médio Risco (890 clientes)
                      </span>
                    </div>
                    <p className="text-sm text-orange-700 dark:text-orange-300">
                      Campanhas de reengajamento, pesquisas de satisfação,
                      promoções direcionadas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedModel === "purchase" && (
            <div>
              <h4 className="font-semibold mb-4">
                Probabilidade de Próxima Compra
              </h4>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={nextPurchasePrediction}>
                  <XAxis dataKey="timeframe" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="probability"
                    fill="#2196F3"
                    name="Probabilidade %"
                  />
                  <Bar dataKey="customers" fill="#4CAF50" name="Clientes" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}

          {selectedModel === "crosssell" && (
            <div>
              <h4 className="font-semibold mb-4">
                Oportunidades de Cross-selling
              </h4>
              <div className="space-y-4">
                {crossSellingOpportunities.map((opportunity, index) => (
                  <div
                    key={index}
                    className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-800"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h5 className="font-medium">{opportunity.customer}</h5>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Produto atual: {opportunity.currentProduct}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">
                          {opportunity.probability}%
                        </div>
                        <p className="text-xs text-gray-500">Probabilidade</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">
                          Produtos recomendados:
                        </p>
                        <p className="text-sm text-blue-600">
                          {opportunity.recommendedProducts.join(", ")}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">
                          {opportunity.potentialRevenue.toLocaleString()} Kz
                        </p>
                        <p className="text-xs text-gray-500">
                          Última visita: {opportunity.lastVisit}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* ML Model Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Performance dos Modelos ML</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mlModelPerformance.map((model, index) => (
                <div key={index} className="p-3 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-medium">{model.model}</h5>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="font-semibold">{model.accuracy}%</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600 dark:text-gray-300">
                        Precisão
                      </p>
                      <p className="font-medium">{model.precision}%</p>
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-300">Recall</p>
                      <p className="font-medium">{model.recall}%</p>
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-300">
                        F1-Score
                      </p>
                      <p className="font-medium">{model.f1Score}%</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Customer Lifetime Value (CLV)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <ScatterChart data={customerLifetimeValue}>
                <XAxis dataKey="customers" name="Clientes" />
                <YAxis dataKey="clv" name="CLV" />
                <Tooltip
                  formatter={(value, name) => [
                    name === "clv" ? `${value.toLocaleString()} Kz` : value,
                    name === "clv" ? "CLV" : "Clientes",
                  ]}
                />
                <Scatter dataKey="clv" fill="#E53935" />
              </ScatterChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {customerLifetimeValue.map((segment, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-3 h-3 rounded-full`}
                      style={{ backgroundColor: COLORS[index] }}
                    />
                    <span className="font-medium">{segment.segment}</span>
                  </div>
                  <div className="text-right text-sm">
                    <p className="font-semibold">
                      {segment.clv.toLocaleString()} Kz
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Retenção: {segment.retention}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5" />
            Insights de IA
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-4 w-4 text-blue-600" />
                <span className="font-medium text-blue-800 dark:text-blue-200">
                  Tendência Positiva
                </span>
              </div>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Clientes que compram óleo motor têm 78% mais probabilidade de
                adquirir filtros nos próximos 30 dias.
              </p>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 mb-2">
                <Target className="h-4 w-4 text-green-600" />
                <span className="font-medium text-green-800 dark:text-green-200">
                  Oportunidade
                </span>
              </div>
              <p className="text-sm text-green-700 dark:text-green-300">
                Sextas-feiras entre 17h-19h apresentam maior conversão para
                produtos de conveniência (+45%).
              </p>
            </div>

            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
                <span className="font-medium text-yellow-800 dark:text-yellow-200">
                  Atenção
                </span>
              </div>
              <p className="text-sm text-yellow-700 dark:text-yellow-300">
                Clientes sem interação há mais de 21 dias têm 65% de
                probabilidade de churn nos próximos 60 dias.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

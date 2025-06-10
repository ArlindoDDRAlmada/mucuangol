"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import {
  customerSatisfactionData,
  operationalEfficiencyData,
  campaignData,
  heatmapData,
  revenueChartData,
} from "../data/mock-data";
import {
  TrendingUp,
  Smile,
  Zap,
  Target,
  Users,
  ShoppingCart,
  MessageSquare,
  Star,
  Coffee,
  Calendar,
  TrendingDown,
  Eye,
  Heart,
} from "lucide-react";

const days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const hours = Array.from({ length: 24 }, (_, i) => `${i}:00`);

// Customer Analytics Mock Data
const customerTransactionData = [
  {
    month: "Jan",
    gasoline: 45000,
    diesel: 32000,
    convenience: 8500,
    total: 85500,
  },
  {
    month: "Fev",
    gasoline: 48000,
    diesel: 35000,
    convenience: 9200,
    total: 92200,
  },
  {
    month: "Mar",
    gasoline: 52000,
    diesel: 38000,
    convenience: 10100,
    total: 100100,
  },
  {
    month: "Abr",
    gasoline: 49000,
    diesel: 36000,
    convenience: 9800,
    total: 94800,
  },
  {
    month: "Mai",
    gasoline: 55000,
    diesel: 41000,
    convenience: 11500,
    total: 107500,
  },
  {
    month: "Jun",
    gasoline: 58000,
    diesel: 43000,
    convenience: 12200,
    total: 113200,
  },
];

const fuelTypeDistribution = [
  { name: "Gasolina", value: 45, color: "#E53935" },
  { name: "Gasóleo", value: 35, color: "#FFC107" },
  { name: "Gás Doméstico", value: 15, color: "#4CAF50" },
  { name: "Outros", value: 5, color: "#9C27B0" },
];

const customerFrequencyData = [
  { segment: "Diário", customers: 1250, percentage: 25, revenue: 45000 },
  { segment: "Semanal", customers: 2000, percentage: 40, revenue: 38000 },
  { segment: "Quinzenal", customers: 1000, percentage: 20, revenue: 22000 },
  { segment: "Mensal", customers: 500, percentage: 10, revenue: 15000 },
  { segment: "Ocasional", customers: 250, percentage: 5, revenue: 8000 },
];

const socialMediaMetrics = [
  {
    platform: "Facebook",
    followers: 15420,
    engagement: 8.5,
    mentions: 245,
    sentiment: 85,
  },
  {
    platform: "Instagram",
    followers: 12800,
    engagement: 12.3,
    mentions: 189,
    sentiment: 92,
  },
  {
    platform: "Twitter",
    followers: 8900,
    engagement: 6.2,
    mentions: 156,
    sentiment: 78,
  },
  {
    platform: "LinkedIn",
    followers: 5600,
    engagement: 4.8,
    mentions: 89,
    sentiment: 88,
  },
];

const customerFeedbackData = [
  { category: "Atendimento", score: 4.6, reviews: 1250, trend: "up" },
  { category: "Preços", score: 4.2, reviews: 980, trend: "stable" },
  { category: "Qualidade Combustível", score: 4.8, reviews: 1450, trend: "up" },
  { category: "Conveniência", score: 4.1, reviews: 750, trend: "down" },
  { category: "Localização", score: 4.5, reviews: 1100, trend: "up" },
];

const convenienceStoreData = [
  { product: "Bebidas", sales: 25000, margin: 35, frequency: 450 },
  { product: "Snacks", sales: 18000, margin: 42, frequency: 380 },
  { product: "Café", sales: 12000, margin: 65, frequency: 320 },
  { product: "Cigarros", sales: 22000, margin: 15, frequency: 280 },
  { product: "Acessórios Auto", sales: 8500, margin: 55, frequency: 150 },
];

const COLORS = ["#E53935", "#FFC107", "#4CAF50", "#2196F3", "#9C27B0"];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-red-600 bg-clip-text text-transparent">
          Analytics & Customer Intelligence
        </h1>
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
          <Calendar className="h-4 w-4" />
          Última atualização: 10/06/2025
        </div>
      </div>

      {/* Customer Analytics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm">
              <Users className="h-4 w-4" />
              Clientes Ativos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">5,000</div>
            <p className="text-xs text-green-600 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              +12% vs mês anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm">
              <ShoppingCart className="h-4 w-4" />
              Transações/Mês
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">28,450</div>
            <p className="text-xs text-green-600 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              +8% vs mês anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm">
              <Star className="h-4 w-4" />
              Satisfação Média
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">4.5/5</div>
            <p className="text-xs text-green-600 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              +0.3 vs mês anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm">
              <MessageSquare className="h-4 w-4" />
              Engajamento Social
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">8.2%</div>
            <p className="text-xs text-green-600 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              +1.5% vs mês anterior
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Transaction Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Análise de Transações por Tipo de Combustível</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={customerTransactionData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip
                  formatter={(value) => [`${value.toLocaleString()} Kz`, ""]}
                />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="gasoline"
                  stackId="1"
                  stroke="#E53935"
                  fill="#E53935"
                  name="Gasolina"
                />
                <Area
                  type="monotone"
                  dataKey="diesel"
                  stackId="1"
                  stroke="#FFC107"
                  fill="#FFC107"
                  name="Gasóleo"
                />
                <Area
                  type="monotone"
                  dataKey="convenience"
                  stackId="1"
                  stroke="#4CAF50"
                  fill="#4CAF50"
                  name="Loja Conveniência"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Distribuição por Tipo de Combustível</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={fuelTypeDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percentage }) => `${name} ${percentage}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {fuelTypeDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Customer Frequency & Social Media */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Frequência de Visitas dos Clientes</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={customerFrequencyData}>
                <XAxis dataKey="segment" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="customers" fill="#2196F3" name="Clientes" />
                <Bar
                  dataKey="revenue"
                  fill="#E53935"
                  name="Receita (x1000 Kz)"
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Métricas de Redes Sociais</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {socialMediaMetrics.map((platform, index) => (
                <div
                  key={platform.platform}
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-3 h-3 rounded-full`}
                      style={{ backgroundColor: COLORS[index] }}
                    />
                    <div>
                      <p className="font-medium">{platform.platform}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {platform.followers.toLocaleString()} seguidores
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {platform.engagement}%
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-3 w-3" />
                        {platform.mentions}
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="h-3 w-3" />
                        {platform.sentiment}%
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Customer Feedback & Convenience Store */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Análise de Feedback dos Clientes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {customerFeedbackData.map((item) => (
                <div
                  key={item.category}
                  className="flex items-center justify-between p-3 border rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{item.score}</span>
                    </div>
                    <div>
                      <p className="font-medium">{item.category}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {item.reviews} avaliações
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.trend === "up" && (
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    )}
                    {item.trend === "down" && (
                      <TrendingDown className="h-4 w-4 text-red-500" />
                    )}
                    {item.trend === "stable" && (
                      <div className="w-4 h-0.5 bg-gray-400" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Performance Loja de Conveniência</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {convenienceStoreData.map((item) => (
                <div
                  key={item.product}
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <Coffee className="h-5 w-5 text-brown-600" />
                    <div>
                      <p className="font-medium">{item.product}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {item.frequency} vendas/mês
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">
                      {item.sales.toLocaleString()} Kz
                    </p>
                    <p className="text-sm text-green-600">
                      Margem: {item.margin}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Original Analytics Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Predictive Stock Analysis */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Análise Preditiva de Stock (Próximos 7 Dias)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={revenueChartData.map((d, index) => ({
                  ...d,
                  previsao:
                    d.receita *
                    (1 +
                      (index % 3 === 0
                        ? 0.05
                        : index % 3 === 1
                        ? -0.03
                        : 0.08)),
                }))}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="receita"
                  stroke="#8884d8"
                  name="Venda Real"
                />
                <Line
                  type="monotone"
                  dataKey="previsao"
                  stroke="#E53935"
                  strokeDasharray="5 5"
                  name="Previsão de Demanda"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Customer Sentiment */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Smile /> Sentimento do Cliente
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-around items-center h-full">
              <div className="text-center">
                <p className="text-4xl font-bold text-green-500">
                  {customerSatisfactionData.nps}
                </p>
                <p className="text-sm text-gray-500">NPS</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-blue-500">
                  {customerSatisfactionData.retention}%
                </p>
                <p className="text-sm text-gray-500">Retenção</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap /> Eficiência Operacional
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-green-500">
              +{operationalEfficiencyData.efficiency}%
            </p>
            <p className="text-sm text-gray-500">
              Precisão de Previsão:{" "}
              {operationalEfficiencyData.stockPredictionAccuracy}%
            </p>
            <p className="text-sm text-gray-500">
              Redução de Custos: {operationalEfficiencyData.costReduction}%
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target /> Desempenho de Campanhas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-green-500">
              +{campaignData.roi}%
            </p>
            <p className="text-sm text-gray-500">
              Precisão IA: {campaignData.aiPrecision}%
            </p>
            <p className="text-sm text-gray-500">
              Resolução Chatbot: {campaignData.chatbotResolution}%
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp /> Métricas de Sucesso
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={150}>
              <RadarChart
                cx="50%"
                cy="50%"
                outerRadius="80%"
                data={[
                  {
                    subject: "NPS",
                    A: customerSatisfactionData.nps,
                    fullMark: 100,
                  },
                  {
                    subject: "Retenção",
                    A: customerSatisfactionData.retention,
                    fullMark: 100,
                  },
                  {
                    subject: "Eficiência",
                    A: operationalEfficiencyData.efficiency,
                    fullMark: 100,
                  },
                  { subject: "ROI", A: campaignData.roi, fullMark: 300 },
                ]}
              >
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar
                  name="Performance"
                  dataKey="A"
                  stroke="#E53935"
                  fill="#E53935"
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Usage Heatmap */}
      <Card>
        <CardHeader>
          <CardTitle>Heatmap de Utilização do Sistema</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <div style={{ width: "100%", fontSize: "10px" }}>
              {days.map((day, dayIndex) => (
                <div key={day} className="flex">
                  <div className="w-10 font-bold">{day}</div>
                  {heatmapData
                    .filter((d) => d.day === dayIndex)
                    .map((data) => (
                      <div
                        key={`${data.day}-${data.hour}`}
                        className="w-6 h-6 m-px"
                        style={{
                          backgroundColor: `rgba(229, 57, 53, ${
                            data.value / 100
                          })`,
                        }}
                        title={`Hora: ${data.hour}, Valor: ${data.value}`}
                      />
                    ))}
                </div>
              ))}
              <div className="flex">
                <div className="w-10"></div>
                {hours.map((hour) => (
                  <div key={hour} className="w-6 text-center">
                    {hour.split(":")[0]}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

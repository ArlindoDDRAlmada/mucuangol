"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import {
  Brain,
  TrendingUp,
  Target,
  AlertTriangle,
  CheckCircle,
  Clock,
  DollarSign,
  Zap,
  Users,
  ShoppingCart,
  Home,
  Fuel,
  Calendar,
  Activity,
  BarChart3,
  PieChart as PieChartIcon,
} from "lucide-react";

// Mock data for ML Predictive Models
const churnPredictionData = [
  { segment: "Alto Risco", customers: 245, percentage: 12, color: "#E53935" },
  { segment: "Médio Risco", customers: 680, percentage: 34, color: "#FFC107" },
  { segment: "Baixo Risco", customers: 1080, percentage: 54, color: "#4CAF50" },
];

const nextPurchaseProbability = [
  { timeframe: "Próximos 7 dias", probability: 85, customers: 1250 },
  { timeframe: "Próximos 15 dias", probability: 72, customers: 980 },
  { timeframe: "Próximos 30 dias", probability: 58, customers: 750 },
  { timeframe: "Próximos 60 dias", probability: 34, customers: 420 },
];

const crossSellingRecommendations = [
  {
    product: "Óleo Sintético",
    baseProduct: "Gasolina",
    confidence: 92,
    potentialRevenue: 45000,
    customers: 1200,
  },
  {
    product: "Gás Doméstico",
    baseProduct: "Gasóleo",
    confidence: 87,
    potentialRevenue: 38000,
    customers: 950,
  },
  {
    product: "Acessórios Auto",
    baseProduct: "Óleo Sintético",
    confidence: 78,
    potentialRevenue: 22000,
    customers: 680,
  },
  {
    product: "Serviços Manutenção",
    baseProduct: "Combustível",
    confidence: 84,
    potentialRevenue: 52000,
    customers: 1100,
  },
];

const gasConsumptionPrediction = [
  {
    familySize: "1-2 pessoas",
    avgConsumption: 12.5,
    predictedNext: 13.2,
    accuracy: 94,
    households: 450,
  },
  {
    familySize: "3-4 pessoas",
    avgConsumption: 18.7,
    predictedNext: 19.1,
    accuracy: 91,
    households: 780,
  },
  {
    familySize: "5+ pessoas",
    avgConsumption: 25.3,
    predictedNext: 26.8,
    accuracy: 89,
    households: 320,
  },
];

const seasonalConsumptionPattern = [
  { month: "Jan", consumption: 22.5, predicted: 23.1, temperature: 28 },
  { month: "Fev", consumption: 21.8, predicted: 22.2, temperature: 29 },
  { month: "Mar", consumption: 20.2, predicted: 20.8, temperature: 30 },
  { month: "Abr", consumption: 18.5, predicted: 19.1, temperature: 31 },
  { month: "Mai", consumption: 16.8, predicted: 17.2, temperature: 29 },
  { month: "Jun", consumption: 15.2, predicted: 15.8, temperature: 26 },
  { month: "Jul", consumption: 14.8, predicted: 15.1, temperature: 24 },
  { month: "Ago", consumption: 15.5, predicted: 16.0, temperature: 25 },
  { month: "Set", consumption: 17.2, predicted: 17.8, temperature: 27 },
  { month: "Out", consumption: 19.8, predicted: 20.3, temperature: 29 },
  { month: "Nov", consumption: 21.5, predicted: 22.0, temperature: 30 },
  { month: "Dez", consumption: 23.2, predicted: 23.8, temperature: 31 },
];

const modelPerformanceMetrics = [
  {
    model: "Churn Prediction",
    accuracy: 94.2,
    precision: 91.8,
    recall: 89.5,
    f1Score: 90.6,
    status: "Ativo",
  },
  {
    model: "Purchase Probability",
    accuracy: 87.9,
    precision: 85.3,
    recall: 88.1,
    f1Score: 86.7,
    status: "Ativo",
  },
  {
    model: "Cross-selling",
    accuracy: 82.4,
    precision: 79.8,
    recall: 84.2,
    f1Score: 81.9,
    status: "Ativo",
  },
  {
    model: "Gas Consumption",
    accuracy: 91.7,
    precision: 89.4,
    recall: 92.1,
    f1Score: 90.7,
    status: "Ativo",
  },
];

const customerSegmentAnalysis = [
  {
    segment: "Famílias Grandes",
    size: 320,
    avgConsumption: 25.3,
    churnRisk: "Baixo",
    value: "Alto",
    recommendations: ["Desconto volume", "Entrega programada"],
  },
  {
    segment: "Jovens Profissionais",
    size: 450,
    avgConsumption: 12.5,
    churnRisk: "Médio",
    value: "Médio",
    recommendations: ["App móvel", "Pagamento digital"],
  },
  {
    segment: "Famílias Médias",
    size: 780,
    avgConsumption: 18.7,
    churnRisk: "Baixo",
    value: "Alto",
    recommendations: ["Programa fidelidade", "Serviços adicionais"],
  },
];

const impactFactorsData = [
  {
    factor: "Tempo de Espera",
    correlation: -0.87,
    impact: "Alto",
    currentScore: 3.2,
    targetScore: 4.5,
    improvement: "Reduzir tempo médio em 40%",
  },
  {
    factor: "Atendimento",
    correlation: 0.92,
    impact: "Muito Alto",
    currentScore: 4.1,
    targetScore: 4.7,
    improvement: "Treino adicional equipe",
  },
  {
    factor: "Disponibilidade Produto",
    correlation: 0.78,
    impact: "Alto",
    currentScore: 3.8,
    targetScore: 4.6,
    improvement: "Otimizar gestão stock",
  },
  {
    factor: "Preço Competitivo",
    correlation: 0.65,
    impact: "Médio",
    currentScore: 3.9,
    targetScore: 4.2,
    improvement: "Ajustar estratégia preços",
  },
  {
    factor: "Limpeza Instalações",
    correlation: 0.71,
    impact: "Alto",
    currentScore: 4.3,
    targetScore: 4.8,
    improvement: "Manter padrão elevado",
  },
  {
    factor: "Localização",
    correlation: 0.45,
    impact: "Baixo",
    currentScore: 4.2,
    targetScore: 4.3,
    improvement: "Melhorar sinalização",
  },
];

const satisfactionDriversChart = [
  { factor: "Atendimento", impact: 92, satisfaction: 4.1 },
  { factor: "Tempo Espera", impact: 87, satisfaction: 3.2 },
  { factor: "Disponibilidade", impact: 78, satisfaction: 3.8 },
  { factor: "Limpeza", impact: 71, satisfaction: 4.3 },
  { factor: "Preço", impact: 65, satisfaction: 3.9 },
  { factor: "Localização", impact: 45, satisfaction: 4.2 },
];

export default function MLPredictivePage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Modelos Preditivos & Machine Learning
        </h1>
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
          <Calendar className="h-4 w-4" />
          Última atualização: 10/06/2025
        </div>
      </div>

      {/* Model Performance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm">
              <Brain className="h-4 w-4" />
              Modelos Ativos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">4</div>
            <p className="text-xs text-green-600 flex items-center gap-1">
              <CheckCircle className="h-3 w-3" />
              Todos operacionais
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm">
              <Target className="h-4 w-4" />
              Precisão Média
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">89.1%</div>
            <p className="text-xs text-green-600 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              +2.3% vs mês anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm">
              <Users className="h-4 w-4" />
              Clientes Analisados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">2,005</div>
            <p className="text-xs text-blue-600 flex items-center gap-1">
              <Activity className="h-3 w-3" />
              Análise em tempo real
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm">
              <DollarSign className="h-4 w-4" />
              Receita Potencial
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">157K</div>
            <p className="text-xs text-green-600 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              Cross-selling identificado
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Churn Prediction & Next Purchase Probability */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              Previsão de Churn (Abandono)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={churnPredictionData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="customers"
                    label={({ name, percentage }) => `${name}: ${percentage}%`}
                  >
                    {churnPredictionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 space-y-2">
              {churnPredictionData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-sm">{item.segment}</span>
                  </div>
                  <span className="text-sm font-medium">
                    {item.customers} clientes
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-500" />
              Probabilidade Próxima Compra
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={nextPurchaseProbability}>
                  <XAxis
                    dataKey="timeframe"
                    angle={-45}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="probability" fill="#2196F3" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 space-y-2">
              {nextPurchaseProbability.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm">{item.timeframe}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">
                      {item.probability}%
                    </span>
                    <span className="text-xs text-gray-500">
                      ({item.customers} clientes)
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Cross-selling Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5 text-green-500" />
            Recomendações Cross-selling/Up-selling
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Produto Recomendado</th>
                  <th className="text-left p-2">Produto Base</th>
                  <th className="text-left p-2">Confiança</th>
                  <th className="text-left p-2">Receita Potencial</th>
                  <th className="text-left p-2">Clientes Alvo</th>
                </tr>
              </thead>
              <tbody>
                {crossSellingRecommendations.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <td className="p-2 font-medium">{item.product}</td>
                    <td className="p-2">{item.baseProduct}</td>
                    <td className="p-2">
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-green-500 h-2 rounded-full"
                            style={{ width: `${item.confidence}%` }}
                          ></div>
                        </div>
                        <span className="text-sm">{item.confidence}%</span>
                      </div>
                    </td>
                    <td className="p-2 text-green-600 font-medium">
                      {item.potentialRevenue.toLocaleString()} AOA
                    </td>
                    <td className="p-2">{item.customers}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Gas Consumption Prediction */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Home className="h-5 w-5 text-orange-500" />
              Previsão Consumo Gás por Agregado
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {gasConsumptionPrediction.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">{item.familySize}</h4>
                    <span className="text-sm text-gray-500">
                      {item.households} agregados
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Consumo Atual</p>
                      <p className="font-medium">{item.avgConsumption}kg/mês</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Previsão</p>
                      <p className="font-medium text-blue-600">
                        {item.predictedNext}kg/mês
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">Precisão</p>
                      <p className="font-medium text-green-600">
                        {item.accuracy}%
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Fuel className="h-5 w-5 text-blue-500" />
              Padrão Sazonal de Consumo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={seasonalConsumptionPattern}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="consumption"
                    stroke="#E53935"
                    strokeWidth={2}
                    name="Consumo Real"
                  />
                  <Line
                    type="monotone"
                    dataKey="predicted"
                    stroke="#2196F3"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    name="Previsão IA"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Model Performance Metrics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-purple-500" />
            Performance dos Modelos ML
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Modelo</th>
                  <th className="text-left p-2">Precisão</th>
                  <th className="text-left p-2">Precision</th>
                  <th className="text-left p-2">Recall</th>
                  <th className="text-left p-2">F1-Score</th>
                  <th className="text-left p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {modelPerformanceMetrics.map((model, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <td className="p-2 font-medium">{model.model}</td>
                    <td className="p-2">
                      <span className="text-green-600 font-medium">
                        {model.accuracy}%
                      </span>
                    </td>
                    <td className="p-2">{model.precision}%</td>
                    <td className="p-2">{model.recall}%</td>
                    <td className="p-2">{model.f1Score}%</td>
                    <td className="p-2">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        <CheckCircle className="h-3 w-3" />
                        {model.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Customer Segment Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PieChartIcon className="h-5 w-5 text-indigo-500" />
            Análise de Segmentos de Clientes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {customerSegmentAnalysis.map((segment, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900"
              >
                <h4 className="font-bold text-lg mb-2">{segment.segment}</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Tamanho:</span>
                    <span className="font-medium">
                      {segment.size} agregados
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Consumo Médio:</span>
                    <span className="font-medium">
                      {segment.avgConsumption}kg/mês
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Risco Churn:</span>
                    <span
                      className={`font-medium ${
                        segment.churnRisk === "Baixo"
                          ? "text-green-600"
                          : segment.churnRisk === "Médio"
                          ? "text-yellow-600"
                          : "text-red-600"
                      }`}
                    >
                      {segment.churnRisk}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Valor Cliente:</span>
                    <span
                      className={`font-medium ${
                        segment.value === "Alto"
                          ? "text-green-600"
                          : segment.value === "Médio"
                          ? "text-yellow-600"
                          : "text-red-600"
                      }`}
                    >
                      {segment.value}
                    </span>
                  </div>
                  <div className="mt-3">
                    <p className="text-xs text-gray-500 mb-1">Recomendações:</p>
                    <div className="space-y-1">
                      {segment.recommendations.map((rec, recIndex) => (
                        <span
                          key={recIndex}
                          className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full mr-1"
                        >
                          {rec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Impact Factors Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-indigo-500" />
            Identificação de Fatores de Impacto na Satisfação
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Impact Factors Table */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Correlação com Satisfação do Cliente
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Fator</th>
                      <th className="text-left p-2">Correlação</th>
                      <th className="text-left p-2">Impacto</th>
                      <th className="text-left p-2">Score Atual</th>
                    </tr>
                  </thead>
                  <tbody>
                    {impactFactorsData.map((factor, index) => (
                      <tr
                        key={index}
                        className="border-b hover:bg-gray-50 dark:hover:bg-gray-800"
                      >
                        <td className="p-2 font-medium">{factor.factor}</td>
                        <td className="p-2">
                          <div className="flex items-center gap-2">
                            <span
                              className={`font-medium ${
                                Math.abs(factor.correlation) > 0.8
                                  ? "text-red-600"
                                  : Math.abs(factor.correlation) > 0.6
                                  ? "text-orange-600"
                                  : Math.abs(factor.correlation) > 0.4
                                  ? "text-yellow-600"
                                  : "text-green-600"
                              }`}
                            >
                              {factor.correlation > 0 ? "+" : ""}
                              {factor.correlation}
                            </span>
                          </div>
                        </td>
                        <td className="p-2">
                          <span
                            className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                              factor.impact === "Muito Alto"
                                ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                                : factor.impact === "Alto"
                                ? "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
                                : factor.impact === "Médio"
                                ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                                : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                            }`}
                          >
                            {factor.impact}
                          </span>
                        </td>
                        <td className="p-2">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">
                              {factor.currentScore}/5
                            </span>
                            <div className="w-16 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-blue-500 h-2 rounded-full"
                                style={{
                                  width: `${(factor.currentScore / 5) * 100}%`,
                                }}
                              ></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Satisfaction Drivers Chart */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Impacto vs Satisfação Atual
              </h4>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={satisfactionDriversChart} layout="horizontal">
                    <XAxis type="number" domain={[0, 100]} />
                    <YAxis dataKey="factor" type="category" width={80} />
                    <Tooltip
                      formatter={(value, name) => [
                        name === "impact"
                          ? `${value}% impacto`
                          : `${value}/5 satisfação`,
                        name === "impact" ? "Impacto" : "Satisfação",
                      ]}
                    />
                    <Bar dataKey="impact" fill="#2196F3" name="impact" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Improvement Recommendations */}
          <div className="mt-6">
            <h4 className="font-semibold text-lg mb-4">
              Recomendações de Melhoria Prioritárias
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {impactFactorsData
                .filter((factor) => Math.abs(factor.correlation) > 0.7)
                .sort(
                  (a, b) => Math.abs(b.correlation) - Math.abs(a.correlation)
                )
                .map((factor, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          factor.impact === "Muito Alto"
                            ? "bg-red-500"
                            : factor.impact === "Alto"
                            ? "bg-orange-500"
                            : factor.impact === "Médio"
                            ? "bg-yellow-500"
                            : "bg-green-500"
                        }`}
                      ></div>
                      <h5 className="font-medium">{factor.factor}</h5>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                      {factor.improvement}
                    </p>
                    <div className="flex justify-between text-xs">
                      <span>Atual: {factor.currentScore}/5</span>
                      <span className="text-green-600 font-medium">
                        Meta: {factor.targetScore}/5
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Correlation Insights */}
          <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
            <h4 className="font-semibold text-lg mb-3">
              Insights de Correlação
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h5 className="font-medium mb-2">
                  Correlações Positivas Fortes:
                </h5>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>
                      Atendimento (+0.92) - Principal driver de satisfação
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Disponibilidade (+0.78) - Impacto significativo</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Limpeza (+0.71) - Fator de confiança</span>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium mb-2">Correlações Negativas:</h5>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-500" />
                    <span>Tempo de Espera (-0.87) - Maior fator negativo</span>
                  </li>
                </ul>
                <h5 className="font-medium mb-2 mt-3">Ações Recomendadas:</h5>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-blue-500" />
                    <span>Priorizar redução tempo de espera</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-blue-500" />
                    <span>Investir em treino de atendimento</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI Insights & Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-yellow-500" />
            Insights & Recomendações da IA
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Insights Principais</h4>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500">
                  <p className="text-sm">
                    <strong>Padrão Sazonal:</strong> Consumo de gás aumenta 35%
                    durante os meses mais frios (Jun-Ago).
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500">
                  <p className="text-sm">
                    <strong>Cross-selling:</strong> Clientes que compram óleo
                    sintético têm 92% probabilidade de interesse em acessórios
                    auto.
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500">
                  <p className="text-sm">
                    <strong>Churn Risk:</strong> Famílias com consumo irregular
                    têm 3x mais probabilidade de abandonar o serviço.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Ações Recomendadas</h4>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500">
                  <p className="text-sm">
                    <strong>Programa Fidelidade:</strong> Implementar sistema de
                    pontos para famílias médias (maior valor).
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500">
                  <p className="text-sm">
                    <strong>Intervenção Churn:</strong> Contactar 245 clientes
                    de alto risco com ofertas personalizadas.
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500">
                  <p className="text-sm">
                    <strong>Otimização Stock:</strong> Aumentar stock de gás em
                    25% antes do período frio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

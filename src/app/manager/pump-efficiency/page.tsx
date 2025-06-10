"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import {
  Zap,
  TrendingUp,
  TrendingDown,
  CheckCircle,
  Fuel,
  Calendar,
  Activity,
  BarChart3,
  GitBranch,
  Award,
  ArrowRight,
  Workflow,
  Timer,
  Star,
} from "lucide-react";

// Mock data for Process Mining and Pump Efficiency
const pumpStations = [
  {
    id: "PS001",
    name: "Posto Central",
    location: "Luanda Centro",
    efficiency: 94,
    avgServiceTime: 3.2,
    customerSatisfaction: 4.6,
    dailyTransactions: 450,
    revenue: 125000,
    rank: 1,
  },
  {
    id: "PS002",
    name: "Posto Aeroporto",
    location: "Aeroporto",
    efficiency: 87,
    avgServiceTime: 4.1,
    customerSatisfaction: 4.2,
    dailyTransactions: 380,
    revenue: 98000,
    rank: 3,
  },
  {
    id: "PS003",
    name: "Posto Viana",
    location: "Viana",
    efficiency: 91,
    avgServiceTime: 3.5,
    customerSatisfaction: 4.4,
    dailyTransactions: 420,
    revenue: 115000,
    rank: 2,
  },
  {
    id: "PS004",
    name: "Posto Cacuaco",
    location: "Cacuaco",
    efficiency: 78,
    avgServiceTime: 5.2,
    customerSatisfaction: 3.8,
    dailyTransactions: 290,
    revenue: 75000,
    rank: 6,
  },
  {
    id: "PS005",
    name: "Posto Benfica",
    location: "Benfica",
    efficiency: 83,
    avgServiceTime: 4.5,
    customerSatisfaction: 4.0,
    dailyTransactions: 340,
    revenue: 88000,
    rank: 4,
  },
  {
    id: "PS006",
    name: "Posto Talatona",
    location: "Talatona",
    efficiency: 89,
    avgServiceTime: 3.8,
    customerSatisfaction: 4.3,
    dailyTransactions: 400,
    revenue: 108000,
    rank: 2,
  },
];

const processFlowSteps = [
  {
    step: "Chegada Cliente",
    avgTime: 0.5,
    bestPractice: "Sinalização clara",
    topPerformer: "PS001",
    improvement: "Melhorar acesso",
  },
  {
    step: "Fila de Espera",
    avgTime: 2.1,
    bestPractice: "Sistema de filas inteligente",
    topPerformer: "PS001",
    improvement: "Otimizar distribuição",
  },
  {
    step: "Atendimento",
    avgTime: 1.8,
    bestPractice: "Treino especializado",
    topPerformer: "PS003",
    improvement: "Padronizar procedimentos",
  },
  {
    step: "Abastecimento",
    avgTime: 3.5,
    bestPractice: "Bombas de alta velocidade",
    topPerformer: "PS001",
    improvement: "Upgrade equipamentos",
  },
  {
    step: "Pagamento",
    avgTime: 1.2,
    bestPractice: "Pagamento digital",
    topPerformer: "PS006",
    improvement: "Promover métodos digitais",
  },
  {
    step: "Saída",
    avgTime: 0.4,
    bestPractice: "Fluxo direcionado",
    topPerformer: "PS001",
    improvement: "Melhorar sinalização",
  },
];

const processMiningInsights = [
  {
    process: "Atendimento Completo",
    avgDuration: 9.5,
    bestTime: 7.2,
    worstTime: 12.8,
    bottleneck: "Fila de Espera",
    improvement: "Reduzir 25% tempo espera",
    impact: "Alto",
  },
  {
    process: "Reposição Stock",
    avgDuration: 45,
    bestTime: 32,
    worstTime: 68,
    bottleneck: "Coordenação Logística",
    improvement: "Sistema automatizado",
    impact: "Médio",
  },
  {
    process: "Manutenção Preventiva",
    avgDuration: 120,
    bestTime: 95,
    worstTime: 180,
    bottleneck: "Disponibilidade Técnicos",
    improvement: "Agendamento inteligente",
    impact: "Alto",
  },
  {
    process: "Limpeza e Higiene",
    avgDuration: 25,
    bestTime: 18,
    worstTime: 35,
    bottleneck: "Recursos Humanos",
    improvement: "Otimizar rotinas",
    impact: "Baixo",
  },
];

const benchmarkingData = [
  {
    metric: "Tempo Médio Atendimento",
    unit: "minutos",
    best: 3.2,
    average: 4.1,
    worst: 5.2,
    target: 3.0,
    leader: "PS001",
  },
  {
    metric: "Satisfação Cliente",
    unit: "/5",
    best: 4.6,
    average: 4.2,
    worst: 3.8,
    target: 4.5,
    leader: "PS001",
  },
  {
    metric: "Transações/Dia",
    unit: "unidades",
    best: 450,
    average: 380,
    worst: 290,
    target: 400,
    leader: "PS001",
  },
  {
    metric: "Eficiência Operacional",
    unit: "%",
    best: 94,
    average: 87,
    worst: 78,
    target: 90,
    leader: "PS001",
  },
  {
    metric: "Receita Diária",
    unit: "AOA",
    best: 125000,
    average: 101500,
    worst: 75000,
    target: 110000,
    leader: "PS001",
  },
];

const bestPracticesLibrary = [
  {
    category: "Atendimento ao Cliente",
    practice: "Saudação padronizada e identificação pessoal",
    implementedBy: ["PS001", "PS003", "PS006"],
    impact: "Satisfação +15%",
    difficulty: "Baixa",
    timeToImplement: "1 semana",
  },
  {
    category: "Gestão de Filas",
    practice: "Sistema de numeração digital com estimativa de tempo",
    implementedBy: ["PS001"],
    impact: "Tempo espera -30%",
    difficulty: "Média",
    timeToImplement: "2 semanas",
  },
  {
    category: "Pagamentos",
    practice: "Múltiplas opções de pagamento (digital, cartão, dinheiro)",
    implementedBy: ["PS006", "PS001"],
    impact: "Tempo pagamento -40%",
    difficulty: "Média",
    timeToImplement: "3 semanas",
  },
  {
    category: "Manutenção",
    practice: "Manutenção preditiva baseada em sensores IoT",
    implementedBy: ["PS001"],
    impact: "Downtime -50%",
    difficulty: "Alta",
    timeToImplement: "8 semanas",
  },
  {
    category: "Limpeza",
    practice: "Rotinas de limpeza automatizadas com checklist digital",
    implementedBy: ["PS001", "PS003"],
    impact: "Eficiência +20%",
    difficulty: "Baixa",
    timeToImplement: "1 semana",
  },
];

const processDeviations = [
  {
    station: "PS004",
    process: "Atendimento",
    deviation: "Passo adicional não padronizado",
    frequency: 23,
    impact: "Tempo +45s",
    recommendation: "Treino de padronização",
    priority: "Alta",
  },
  {
    station: "PS002",
    process: "Pagamento",
    deviation: "Sistema manual quando digital disponível",
    frequency: 18,
    impact: "Tempo +30s",
    recommendation: "Incentivo uso digital",
    priority: "Média",
  },
  {
    station: "PS005",
    process: "Reposição",
    deviation: "Verificação dupla desnecessária",
    frequency: 12,
    impact: "Tempo +15min",
    recommendation: "Simplificar processo",
    priority: "Média",
  },
];

const efficiencyTrends = [
  {
    month: "Jan",
    PS001: 92,
    PS002: 85,
    PS003: 89,
    PS004: 76,
    PS005: 81,
    PS006: 87,
  },
  {
    month: "Fev",
    PS001: 93,
    PS002: 86,
    PS003: 90,
    PS004: 77,
    PS005: 82,
    PS006: 88,
  },
  {
    month: "Mar",
    PS001: 94,
    PS002: 87,
    PS003: 91,
    PS004: 78,
    PS005: 83,
    PS006: 89,
  },
  {
    month: "Abr",
    PS001: 94,
    PS002: 87,
    PS003: 91,
    PS004: 78,
    PS005: 83,
    PS006: 89,
  },
  {
    month: "Mai",
    PS001: 94,
    PS002: 87,
    PS003: 91,
    PS004: 78,
    PS005: 83,
    PS006: 89,
  },
  {
    month: "Jun",
    PS001: 94,
    PS002: 87,
    PS003: 91,
    PS004: 78,
    PS005: 83,
    PS006: 89,
  },
];

export default function PumpEfficiencyPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
          Eficiência da Bomba & Process Mining
        </h1>
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
          <Calendar className="h-4 w-4" />
          Última atualização: 10/06/2025
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm">
              <Fuel className="h-4 w-4" />
              Postos Analisados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">6</div>
            <p className="text-xs text-green-600 flex items-center gap-1">
              <CheckCircle className="h-3 w-3" />
              Todos operacionais
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm">
              <Zap className="h-4 w-4" />
              Eficiência Média
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">87.2%</div>
            <p className="text-xs text-green-600 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              +3.1% vs mês anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm">
              <Timer className="h-4 w-4" />
              Tempo Médio Atendimento
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">4.1min</div>
            <p className="text-xs text-red-600 flex items-center gap-1">
              <TrendingDown className="h-3 w-3" />
              Meta: 3.0min
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm">
              <Award className="h-4 w-4" />
              Melhores Práticas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">12</div>
            <p className="text-xs text-blue-600 flex items-center gap-1">
              <Activity className="h-3 w-3" />
              Identificadas e catalogadas
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Process Flow Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Workflow className="h-5 w-5 text-blue-500" />
            Análise de Fluxo Operacional - Mapeamento de Processos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Process Flow Diagram */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4">
                Fluxograma Padrão de Atendimento
              </h4>
              <div className="flex items-center justify-between overflow-x-auto">
                {processFlowSteps.map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className="text-center min-w-32">
                      <div className="w-16 h-16 mx-auto bg-white dark:bg-gray-800 rounded-full flex items-center justify-center border-2 border-blue-500 mb-2">
                        <span className="text-xs font-bold">
                          {step.avgTime}min
                        </span>
                      </div>
                      <p className="text-sm font-medium">{step.step}</p>
                      <p className="text-xs text-gray-500">
                        Líder: {step.topPerformer}
                      </p>
                    </div>
                    {index < processFlowSteps.length - 1 && (
                      <ArrowRight className="h-6 w-6 text-blue-500 mx-2" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Process Steps Details */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Etapa do Processo</th>
                    <th className="text-left p-2">Tempo Médio</th>
                    <th className="text-left p-2">Melhor Prática</th>
                    <th className="text-left p-2">Posto Líder</th>
                    <th className="text-left p-2">Oportunidade Melhoria</th>
                  </tr>
                </thead>
                <tbody>
                  {processFlowSteps.map((step, index) => (
                    <tr
                      key={index}
                      className="border-b hover:bg-gray-50 dark:hover:bg-gray-800"
                    >
                      <td className="p-2 font-medium">{step.step}</td>
                      <td className="p-2">{step.avgTime} min</td>
                      <td className="p-2 text-green-600">
                        {step.bestPractice}
                      </td>
                      <td className="p-2">
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                          <Award className="h-3 w-3" />
                          {step.topPerformer}
                        </span>
                      </td>
                      <td className="p-2 text-orange-600">
                        {step.improvement}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Process Mining Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GitBranch className="h-5 w-5 text-purple-500" />
            Process Mining - Descoberta Automática de Processos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Process Mining Results */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Análise de Logs do Sistema
              </h4>
              <div className="space-y-4">
                {processMiningInsights.map((insight, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-medium">{insight.process}</h5>
                      <span
                        className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                          insight.impact === "Alto"
                            ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                            : insight.impact === "Médio"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                            : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        }`}
                      >
                        {insight.impact}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm mb-3">
                      <div>
                        <p className="text-gray-500">Tempo Médio</p>
                        <p className="font-medium">{insight.avgDuration} min</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Melhor</p>
                        <p className="font-medium text-green-600">
                          {insight.bestTime} min
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-500">Pior</p>
                        <p className="font-medium text-red-600">
                          {insight.worstTime} min
                        </p>
                      </div>
                    </div>
                    <div className="text-sm">
                      <p className="text-gray-500">Gargalo Identificado:</p>
                      <p className="font-medium text-red-600">
                        {insight.bottleneck}
                      </p>
                      <p className="text-gray-500 mt-1">Recomendação:</p>
                      <p className="font-medium text-blue-600">
                        {insight.improvement}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Deviations */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Desvios dos Processos Padrão
              </h4>
              <div className="space-y-4">
                {processDeviations.map((deviation, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg border border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/20"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-medium">
                        {deviation.station} - {deviation.process}
                      </h5>
                      <span
                        className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                          deviation.priority === "Alta"
                            ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                            : deviation.priority === "Média"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                            : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        }`}
                      >
                        {deviation.priority}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                      {deviation.deviation}
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Frequência:</p>
                        <p className="font-medium">
                          {deviation.frequency}% dos casos
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-500">Impacto:</p>
                        <p className="font-medium text-red-600">
                          {deviation.impact}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-gray-500 text-sm">Recomendação:</p>
                      <p className="font-medium text-blue-600 text-sm">
                        {deviation.recommendation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Benchmarking Dashboard */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-green-500" />
            Benchmarking Inteligente - Comparação de Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Benchmarking Table */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Métricas de Performance
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Métrica</th>
                      <th className="text-left p-2">Melhor</th>
                      <th className="text-left p-2">Média</th>
                      <th className="text-left p-2">Pior</th>
                      <th className="text-left p-2">Meta</th>
                    </tr>
                  </thead>
                  <tbody>
                    {benchmarkingData.map((metric, index) => (
                      <tr
                        key={index}
                        className="border-b hover:bg-gray-50 dark:hover:bg-gray-800"
                      >
                        <td className="p-2 font-medium">{metric.metric}</td>
                        <td className="p-2 text-green-600 font-medium">
                          {metric.best} {metric.unit}
                          <div className="text-xs text-gray-500">
                            {metric.leader}
                          </div>
                        </td>
                        <td className="p-2">
                          {metric.average} {metric.unit}
                        </td>
                        <td className="p-2 text-red-600">
                          {metric.worst} {metric.unit}
                        </td>
                        <td className="p-2 text-blue-600 font-medium">
                          {metric.target} {metric.unit}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Efficiency Trends Chart */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Tendência de Eficiência por Posto
              </h4>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={efficiencyTrends}>
                    <XAxis dataKey="month" />
                    <YAxis domain={[70, 100]} />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="PS001"
                      stroke="#4CAF50"
                      strokeWidth={2}
                      name="PS001 (Líder)"
                    />
                    <Line
                      type="monotone"
                      dataKey="PS003"
                      stroke="#2196F3"
                      strokeWidth={2}
                      name="PS003"
                    />
                    <Line
                      type="monotone"
                      dataKey="PS006"
                      stroke="#FF9800"
                      strokeWidth={2}
                      name="PS006"
                    />
                    <Line
                      type="monotone"
                      dataKey="PS002"
                      stroke="#9C27B0"
                      strokeWidth={2}
                      name="PS002"
                    />
                    <Line
                      type="monotone"
                      dataKey="PS005"
                      stroke="#607D8B"
                      strokeWidth={2}
                      name="PS005"
                    />
                    <Line
                      type="monotone"
                      dataKey="PS004"
                      stroke="#F44336"
                      strokeWidth={2}
                      name="PS004"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices Library */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-500" />
            Biblioteca de Melhores Práticas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bestPracticesLibrary.map((practice, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-200 dark:border-yellow-800"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      practice.difficulty === "Baixa"
                        ? "bg-green-500"
                        : practice.difficulty === "Média"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                  ></div>
                  <h5 className="font-medium">{practice.category}</h5>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  {practice.practice}
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span>Impacto:</span>
                    <span className="font-medium text-green-600">
                      {practice.impact}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dificuldade:</span>
                    <span
                      className={`font-medium ${
                        practice.difficulty === "Baixa"
                          ? "text-green-600"
                          : practice.difficulty === "Média"
                          ? "text-yellow-600"
                          : "text-red-600"
                      }`}
                    >
                      {practice.difficulty}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Implementação:</span>
                    <span className="font-medium">
                      {practice.timeToImplement}
                    </span>
                  </div>
                  <div className="mt-2">
                    <p className="text-gray-500">Implementado em:</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {practice.implementedBy.map((station, stationIndex) => (
                        <span
                          key={stationIndex}
                          className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full"
                        >
                          {station}
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

      {/* Station Ranking */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-yellow-500" />
            Ranking de Performance dos Postos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Ranking</th>
                  <th className="text-left p-2">Posto</th>
                  <th className="text-left p-2">Localização</th>
                  <th className="text-left p-2">Eficiência</th>
                  <th className="text-left p-2">Tempo Atendimento</th>
                  <th className="text-left p-2">Satisfação</th>
                  <th className="text-left p-2">Receita Diária</th>
                </tr>
              </thead>
              <tbody>
                {pumpStations
                  .sort((a, b) => a.rank - b.rank)
                  .map((station, index) => (
                    <tr
                      key={station.id}
                      className="border-b hover:bg-gray-50 dark:hover:bg-gray-800"
                    >
                      <td className="p-2">
                        <div className="flex items-center gap-2">
                          {index === 0 && (
                            <Award className="h-4 w-4 text-yellow-500" />
                          )}
                          {index === 1 && (
                            <Award className="h-4 w-4 text-gray-400" />
                          )}
                          {index === 2 && (
                            <Award className="h-4 w-4 text-orange-600" />
                          )}
                          <span className="font-bold">#{station.rank}</span>
                        </div>
                      </td>
                      <td className="p-2 font-medium">{station.name}</td>
                      <td className="p-2 text-gray-600 dark:text-gray-300">
                        {station.location}
                      </td>
                      <td className="p-2">
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-2 h-2 rounded-full ${
                              station.efficiency >= 90
                                ? "bg-green-500"
                                : station.efficiency >= 85
                                ? "bg-yellow-500"
                                : "bg-red-500"
                            }`}
                          ></div>
                          <span className="font-medium">
                            {station.efficiency}%
                          </span>
                        </div>
                      </td>
                      <td className="p-2">{station.avgServiceTime} min</td>
                      <td className="p-2">
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-yellow-500" />
                          <span>{station.customerSatisfaction}/5</span>
                        </div>
                      </td>
                      <td className="p-2 font-medium">
                        {station.revenue.toLocaleString()} AOA
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

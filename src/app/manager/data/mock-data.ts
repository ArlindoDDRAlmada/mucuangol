export const managerData = {
    kpis: {
        totalVendas: {
            hoje: 1500000, // Example value for Total de Vendas (Hoje)
            tendencia: 0.05, // Example trend
        },
        clientes: {
            ativos: 1500, // Example value for Clientes Ativos
            tendencia: 0.02, // Example trend
        },
        stock: {
            nivelMedio: 75, // Example value for Nível de Stock Médio (percentage)
            tendencia: -0.01, // Example trend
        },
        satisfacao: {
            media: 4.5, // Example value for Satisfação do Cliente (average rating)
            tendencia: 0.03, // Example trend
        },
    },
};

export const revenueChartData = [
    { name: "Jan", receita: 4000 },
    { name: "Fev", receita: 3000 },
    { name: "Mar", receita: 5000 },
    { name: "Abr", receita: 4500 },
    { name: "Mai", receita: 6000 },
    { name: "Jun", receita: 5500 },
];

export const fuelSalesData = [
    { name: "Gasolina", value: 400 },
    { name: "Gasóleo", value: 300 },
    { name: "GPL", value: 200 },
];

export const stationStatusData = [
    {
        id: "PS001",
        name: "Posto Central",
        location: "Luanda",
        status: "Operacional",
        dieselLevel: 85,
        gasolineLevel: 70,
        lastUpdate: "2025-06-09T09:00:00Z",
        dailyRevenue: 2850000, // AOA
        losses: 45000 // AOA
    },
    {
        id: "PS002",
        name: "Posto Aeroporto",
        location: "Luanda",
        status: "Manutenção",
        dieselLevel: 30,
        gasolineLevel: 25,
        lastUpdate: "2025-06-09T08:30:00Z",
        dailyRevenue: 1950000, // AOA
        losses: 125000 // AOA (higher due to maintenance issues)
    },
    {
        id: "PS003",
        name: "Posto Viana",
        location: "Viana",
        status: "Offline",
        dieselLevel: 0,
        gasolineLevel: 0,
        lastUpdate: "2025-06-09T07:45:00Z",
        dailyRevenue: 0, // AOA (offline)
        losses: 350000 // AOA (total loss due to offline status)
    },
    {
        id: "PS004",
        name: "Posto Cacuaco",
        location: "Cacuaco",
        status: "Operacional",
        dieselLevel: 95,
        gasolineLevel: 90,
        lastUpdate: "2025-06-09T09:15:00Z",
        dailyRevenue: 3200000, // AOA
        losses: 25000 // AOA
    },
    {
        id: "PS005",
        name: "Posto Benfica",
        location: "Benfica",
        status: "Operacional",
        dieselLevel: 60,
        gasolineLevel: 55,
        lastUpdate: "2025-06-09T09:05:00Z",
        dailyRevenue: 2100000, // AOA
        losses: 65000 // AOA
    },
    {
        id: "PS006",
        name: "Posto Talatona",
        location: "Talatona",
        status: "Manutenção",
        dieselLevel: 15,
        gasolineLevel: 10,
        lastUpdate: "2025-06-09T08:00:00Z",
        dailyRevenue: 850000, // AOA
        losses: 180000 // AOA (higher due to maintenance)
    },
    {
        id: "PS007",
        name: "Posto Kikolo",
        location: "Kikolo",
        status: "Operacional",
        dieselLevel: 75,
        gasolineLevel: 80,
        lastUpdate: "2025-06-09T09:20:00Z",
        dailyRevenue: 2650000, // AOA
        losses: 35000 // AOA
    },
];

export const aiAlertsData = [
    {
        id: 1,
        type: "Manutenção Preditiva",
        message: "Bomba 2 no Posto Central necessita de revisão em 3 dias.",
        timestamp: "2025-06-08T10:00:00Z",
        priority: "Alta",
    },
    {
        id: 2,
        type: "Previsão de Demanda",
        message: "Previsão: Aumento de demanda de 15% no fim de semana.",
        timestamp: "2025-06-08T09:30:00Z",
        priority: "Média",
    },
    {
        id: 3,
        type: "Detecção de Anomalia",
        message: "Anomalia detectada no sensor de pressão da Bomba 5 no Posto Aeroporto.",
        timestamp: "2025-06-08T10:15:00Z",
        priority: "Crítica",
    },
];

export const customerSatisfactionData = {
    nps: 72,
    retention: 89,
    communityEngagement: 150, // percentage increase
};

export const operationalEfficiencyData = {
    efficiency: 25, // percentage increase
    stockPredictionAccuracy: 95,
    costReduction: 18,
};

export const campaignData = {
    roi: 230, // percentage
    aiPrecision: 92,
    chatbotResolution: 78,
};

export const heatmapData = Array.from({ length: 24 * 7 }).map((_, i) => {
    // Generate deterministic values based on day and hour patterns
    const day = Math.floor(i / 24);
    const hour = i % 24;

    // Create realistic patterns: higher values during business hours and weekdays
    let baseValue = 30;

    // Weekend pattern (lower activity)
    if (day === 0 || day === 6) {
        baseValue = 20;
    }

    // Business hours pattern (higher activity 7-19h)
    if (hour >= 7 && hour <= 19) {
        baseValue += 40;
    } else if (hour >= 20 && hour <= 22) {
        baseValue += 20;
    }

    // Add some variation based on position to make it look realistic
    const variation = ((day * 24 + hour) * 17) % 30; // Deterministic variation

    return {
        day,
        hour,
        value: Math.min(100, baseValue + variation),
    };
});
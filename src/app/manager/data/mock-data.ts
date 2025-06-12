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
        province: "Luanda",
        municipality: "Luanda",
        status: "Operacional",
        dieselLevel: 85,
        gasolineLevel: 70,
        dieselStock: 45000, // litros
        gasolineStock: 32000, // litros
        dieselStockValue: 8100000, // AOA (45000L * 180 AOA/L)
        gasolineStockValue: 6400000, // AOA (32000L * 200 AOA/L)
        lastUpdate: "2025-06-09T09:00:00Z",
        dailyRevenue: 2850000, // AOA
        losses: 45000, // AOA
        wells: [
            {
                id: "W001",
                number: 1,
                type: "Gasóleo",
                status: "Ativo",
                level: 90,
                capacity: 15000,
                currentStock: 13500,
                stockValue: 2430000, // 13500L * 180 AOA/L
                pricePerLiter: 180,
                lastMaintenance: "2025-06-01T10:00:00Z",
                issues: [],
                equipment: {
                    pump: "Operacional",
                    hoses: "Bom estado",
                    nozzles: "Operacional"
                }
            },
            {
                id: "W002",
                number: 2,
                type: "Gasóleo",
                status: "Ativo",
                level: 80,
                capacity: 15000,
                currentStock: 12000,
                stockValue: 2160000, // 12000L * 180 AOA/L
                pricePerLiter: 180,
                lastMaintenance: "2025-06-01T10:00:00Z",
                issues: [],
                equipment: {
                    pump: "Operacional",
                    hoses: "Bom estado",
                    nozzles: "Operacional"
                }
            },
            {
                id: "W003",
                number: 3,
                type: "Gasolina",
                status: "Ativo",
                level: 75,
                capacity: 12000,
                currentStock: 9000,
                stockValue: 1800000, // 9000L * 200 AOA/L
                pricePerLiter: 200,
                lastMaintenance: "2025-06-01T10:00:00Z",
                issues: [],
                equipment: {
                    pump: "Operacional",
                    hoses: "Bom estado",
                    nozzles: "Operacional"
                }
            },
            {
                id: "W004",
                number: 4,
                type: "Gasolina",
                status: "Manutenção",
                level: 65,
                capacity: 12000,
                currentStock: 7800,
                stockValue: 1560000, // 7800L * 200 AOA/L
                pricePerLiter: 200,
                lastMaintenance: "2025-05-25T14:00:00Z",
                issues: ["Mangueira danificada", "Bomba com ruído"],
                equipment: {
                    pump: "Manutenção",
                    hoses: "Danificado",
                    nozzles: "Operacional"
                }
            }
        ],
        suppliers: [
            {
                id: "SUP001",
                company: "Petro Distribuidora Lda",
                lastDelivery: "2025-06-08T14:30:00Z",
                fuelType: "Gasóleo",
                quantity: 25000,
                totalValue: 4500000, // 25000L * 180 AOA/L
                pricePerLiter: 180,
                wellsSupplied: ["W001", "W002"],
                batchNumber: "GAS240608001",
                qualityCheck: "Aprovado",
                driver: "João Silva",
                truck: "LU-123-AB"
            },
            {
                id: "SUP002",
                company: "Fuel Supply Angola",
                lastDelivery: "2025-06-07T09:15:00Z",
                fuelType: "Gasolina",
                quantity: 18000,
                totalValue: 3600000, // 18000L * 200 AOA/L
                pricePerLiter: 200,
                wellsSupplied: ["W003", "W004"],
                batchNumber: "GAS240607002",
                qualityCheck: "Aprovado",
                driver: "Maria Santos",
                truck: "LU-456-CD"
            },
            {
                id: "SUP005",
                company: "Petro Distribuidora Lda",
                lastDelivery: "2025-06-05T16:20:00Z",
                fuelType: "Gasóleo",
                quantity: 30000,
                totalValue: 5400000,
                pricePerLiter: 180,
                wellsSupplied: ["W001", "W002"],
                batchNumber: "GAS240605005",
                qualityCheck: "Aprovado",
                driver: "Pedro Alves",
                truck: "LU-789-XY"
            },
            {
                id: "SUP006",
                company: "Fuel Supply Angola",
                lastDelivery: "2025-06-03T11:45:00Z",
                fuelType: "Gasolina",
                quantity: 22000,
                totalValue: 4400000,
                pricePerLiter: 200,
                wellsSupplied: ["W003", "W004"],
                batchNumber: "GAS240603006",
                qualityCheck: "Aprovado",
                driver: "Luisa Fernandes",
                truck: "LU-456-ZW"
            }
        ]
    },
    {
        id: "PS002",
        name: "Posto Aeroporto",
        location: "Luanda",
        province: "Luanda",
        municipality: "Luanda",
        status: "Manutenção",
        dieselLevel: 30,
        gasolineLevel: 25,
        dieselStock: 15000, // litros
        gasolineStock: 11000, // litros
        dieselStockValue: 2700000, // AOA
        gasolineStockValue: 2200000, // AOA
        lastUpdate: "2025-06-09T08:30:00Z",
        dailyRevenue: 1950000, // AOA
        losses: 125000, // AOA (higher due to maintenance issues)
        wells: [
            {
                id: "W005",
                number: 1,
                type: "Gasóleo",
                status: "Inativo",
                level: 25,
                capacity: 15000,
                currentStock: 3750,
                stockValue: 675000, // 3750L * 180 AOA/L
                pricePerLiter: 180,
                lastMaintenance: "2025-05-20T08:00:00Z",
                issues: ["Combustível comprometido", "Filtro entupido"],
                equipment: {
                    pump: "Manutenção",
                    hoses: "Bom estado",
                    nozzles: "Inativo"
                }
            },
            {
                id: "W006",
                number: 2,
                type: "Gasóleo",
                status: "Ativo",
                level: 35,
                capacity: 15000,
                currentStock: 5250,
                stockValue: 945000, // 5250L * 180 AOA/L
                pricePerLiter: 180,
                lastMaintenance: "2025-06-01T10:00:00Z",
                issues: [],
                equipment: {
                    pump: "Operacional",
                    hoses: "Bom estado",
                    nozzles: "Operacional"
                }
            },
            {
                id: "W007",
                number: 3,
                type: "Gasolina",
                status: "Ativo",
                level: 30,
                capacity: 12000,
                currentStock: 3600,
                stockValue: 720000, // 3600L * 200 AOA/L
                pricePerLiter: 200,
                lastMaintenance: "2025-06-01T10:00:00Z",
                issues: [],
                equipment: {
                    pump: "Operacional",
                    hoses: "Desgastado",
                    nozzles: "Operacional"
                }
            },
            {
                id: "W008",
                number: 4,
                type: "Gasolina",
                status: "Inativo",
                level: 20,
                capacity: 12000,
                currentStock: 2400,
                stockValue: 480000, // 2400L * 200 AOA/L
                pricePerLiter: 200,
                lastMaintenance: "2025-05-15T16:00:00Z",
                issues: ["Sistema elétrico com falha", "Vazamento detectado"],
                equipment: {
                    pump: "Avariado",
                    hoses: "Danificado",
                    nozzles: "Inativo"
                }
            }
        ],
        suppliers: [
            {
                id: "SUP003",
                company: "Angola Fuel Distribution",
                lastDelivery: "2025-06-05T11:20:00Z",
                fuelType: "Gasóleo",
                quantity: 20000,
                totalValue: 3600000, // 20000L * 180 AOA/L
                pricePerLiter: 180,
                wellsSupplied: ["W005", "W006"],
                batchNumber: "GAS240605003",
                qualityCheck: "Rejeitado - W005",
                driver: "Carlos Mendes",
                truck: "LU-789-EF"
            },
            {
                id: "SUP004",
                company: "Petro Distribuidora Lda",
                lastDelivery: "2025-06-04T15:45:00Z",
                fuelType: "Gasolina",
                quantity: 15000,
                totalValue: 3000000, // 15000L * 200 AOA/L
                pricePerLiter: 200,
                wellsSupplied: ["W007", "W008"],
                batchNumber: "GAS240604004",
                qualityCheck: "Aprovado",
                driver: "Ana Costa",
                truck: "LU-321-GH"
            },
            {
                id: "SUP007",
                company: "Angola Fuel Distribution",
                lastDelivery: "2025-06-01T09:30:00Z",
                fuelType: "Gasóleo",
                quantity: 25000,
                totalValue: 4500000,
                pricePerLiter: 180,
                wellsSupplied: ["W005", "W006"],
                batchNumber: "GAS240601007",
                qualityCheck: "Aprovado",
                driver: "Roberto Silva",
                truck: "LU-654-MN"
            },
            {
                id: "SUP008",
                company: "Fuel Supply Angola",
                lastDelivery: "2025-05-30T14:15:00Z",
                fuelType: "Gasolina",
                quantity: 18000,
                totalValue: 3600000,
                pricePerLiter: 200,
                wellsSupplied: ["W007", "W008"],
                batchNumber: "GAS240530008",
                qualityCheck: "Aprovado",
                driver: "Carla Nunes",
                truck: "LU-987-PQ"
            }
        ]
    },
    {
        id: "PS003",
        name: "Posto Viana",
        location: "Viana",
        province: "Luanda",
        municipality: "Viana",
        status: "Offline",
        dieselLevel: 0,
        gasolineLevel: 0,
        dieselStock: 0, // litros
        gasolineStock: 0, // litros
        dieselStockValue: 0, // AOA
        gasolineStockValue: 0, // AOA
        lastUpdate: "2025-06-09T07:45:00Z",
        dailyRevenue: 0, // AOA (offline)
        losses: 350000 // AOA (total loss due to offline status)
    },
    {
        id: "PS004",
        name: "Posto Cacuaco",
        location: "Cacuaco",
        province: "Luanda",
        municipality: "Cacuaco",
        status: "Operacional",
        dieselLevel: 95,
        gasolineLevel: 90,
        dieselStock: 52000, // litros
        gasolineStock: 41000, // litros
        dieselStockValue: 9360000, // AOA
        gasolineStockValue: 8200000, // AOA
        lastUpdate: "2025-06-09T09:15:00Z",
        dailyRevenue: 3200000, // AOA
        losses: 25000 // AOA
    },
    {
        id: "PS005",
        name: "Posto Benfica",
        location: "Benfica",
        province: "Luanda",
        municipality: "Luanda",
        status: "Operacional",
        dieselLevel: 60,
        gasolineLevel: 55,
        dieselStock: 28000, // litros
        gasolineStock: 24000, // litros
        dieselStockValue: 5040000, // AOA
        gasolineStockValue: 4800000, // AOA
        lastUpdate: "2025-06-09T09:05:00Z",
        dailyRevenue: 2100000, // AOA
        losses: 65000 // AOA
    },
    {
        id: "PS006",
        name: "Posto Talatona",
        location: "Talatona",
        province: "Luanda",
        municipality: "Talatona",
        status: "Manutenção",
        dieselLevel: 15,
        gasolineLevel: 10,
        dieselStock: 8000, // litros
        gasolineStock: 4500, // litros
        dieselStockValue: 1440000, // AOA
        gasolineStockValue: 900000, // AOA
        lastUpdate: "2025-06-09T08:00:00Z",
        dailyRevenue: 850000, // AOA
        losses: 180000 // AOA (higher due to maintenance)
    },
    {
        id: "PS007",
        name: "Posto Kikolo",
        location: "Kikolo",
        province: "Luanda",
        municipality: "Luanda",
        status: "Operacional",
        dieselLevel: 75,
        gasolineLevel: 80,
        dieselStock: 38000, // litros
        gasolineStock: 35000, // litros
        dieselStockValue: 6840000, // AOA
        gasolineStockValue: 7000000, // AOA
        lastUpdate: "2025-06-09T09:20:00Z",
        dailyRevenue: 2650000, // AOA
        losses: 35000 // AOA
    },
    {
        id: "PS008",
        name: "Posto Benguela Centro",
        location: "Benguela",
        province: "Benguela",
        municipality: "Benguela",
        status: "Operacional",
        dieselLevel: 80,
        gasolineLevel: 75,
        dieselStock: 42000, // litros
        gasolineStock: 33000, // litros
        dieselStockValue: 7560000, // AOA
        gasolineStockValue: 6600000, // AOA
        lastUpdate: "2025-06-09T09:10:00Z",
        dailyRevenue: 2400000, // AOA
        losses: 38000 // AOA
    },
    {
        id: "PS009",
        name: "Posto Huambo",
        location: "Huambo",
        province: "Huambo",
        municipality: "Huambo",
        status: "Operacional",
        dieselLevel: 65,
        gasolineLevel: 70,
        dieselStock: 32000, // litros
        gasolineStock: 30000, // litros
        dieselStockValue: 5760000, // AOA
        gasolineStockValue: 6000000, // AOA
        lastUpdate: "2025-06-09T08:45:00Z",
        dailyRevenue: 1800000, // AOA
        losses: 42000 // AOA
    },
    {
        id: "PS010",
        name: "Posto Lubango",
        location: "Lubango",
        province: "Huíla",
        municipality: "Lubango",
        status: "Operacional",
        dieselLevel: 90,
        gasolineLevel: 85,
        dieselStock: 48000, // litros
        gasolineStock: 38000, // litros
        dieselStockValue: 8640000, // AOA
        gasolineStockValue: 7600000, // AOA
        lastUpdate: "2025-06-09T09:25:00Z",
        dailyRevenue: 2200000, // AOA
        losses: 28000 // AOA
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
export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    originalPrice?: number;
    unit?: string;
    image: string;
    rating: number;
    reviews: number;
    inStock: boolean;
    delivery: string;
    description: string;
    features: string[];
    brand?: string;
    specifications?: { [key: string]: string };
}

export interface Category {
    name: string;
    icon: string;
    count: number;
}

export interface Service {
    title: string;
    description: string;
    icon: string;
    features: string[];
    basePrice?: number;
    estimatedTime?: string;
}

export const products: Product[] = [
    {
        id: 1,
        name: "Óleo Motor Sintético 5W-30",
        category: "Óleos",
        price: 8500,
        originalPrice: 9500,
        image: "/Óleo Motor Sintético 5W-30.png",
        rating: 4.8,
        reviews: 124,
        inStock: true,
        delivery: "Entrega em 24h",
        description: "Óleo sintético premium para motores modernos com tecnologia avançada",
        features: ["Proteção superior do motor", "Economia de combustível", "Longa duração", "Resistente a altas temperaturas"],
        brand: "Sonangol Premium",
        specifications: {
            "Viscosidade": "5W-30",
            "Tipo": "Sintético",
            "Volume": "4 Litros",
            "Normas": "API SN/CF, ACEA A3/B4"
        }
    },
    {
        id: 2,
        name: "Bateria 12V 60Ah",
        category: "Baterias",
        price: 15000,
        image: "/Bateria 12V 60Ah.png",
        rating: 4.6,
        reviews: 89,
        inStock: true,
        delivery: "Instalação incluída",
        description: "Bateria de alta performance com tecnologia AGM e 2 anos de garantia",
        features: ["Instalação grátis", "2 anos garantia", "Tecnologia AGM", "Livre de manutenção"],
        brand: "Sonangol Power",
        specifications: {
            "Voltagem": "12V",
            "Capacidade": "60Ah",
            "Tecnologia": "AGM",
            "Dimensões": "242 x 175 x 190mm"
        }
    },
    {
        id: 3,
        name: "Gasóleo Premium",
        category: "Combustíveis",
        price: 180,
        unit: "por litro",
        image: "/Gasóleo Premium.png",
        rating: 4.9,
        reviews: 256,
        inStock: true,
        delivery: "Entrega ao domicílio",
        description: "Gasóleo de alta qualidade para veículos pesados e geradores",
        features: ["Entrega domicílio", "Qualidade premium", "Preço competitivo", "Baixo teor de enxofre"],
        brand: "Sonangol",
        specifications: {
            "Tipo": "Gasóleo Premium",
            "Densidade": "0.82-0.86 kg/L",
            "Ponto de Inflamação": ">55°C",
            "Teor de Enxofre": "<10 ppm"
        }
    },
    {
        id: 4,
        name: "Gás Doméstico 13kg",
        category: "Gás",
        price: 3200,
        image: "/Gás Doméstico 13kg.png",
        rating: 4.7,
        reviews: 178,
        inStock: true,
        delivery: "Entrega e instalação",
        description: "Botija de gás doméstico com entrega segura e instalação profissional",
        features: ["Entrega rápida", "Instalação segura", "Preço fixo", "Botija certificada"],
        brand: "Sonangol Gás",
        specifications: {
            "Peso": "13kg",
            "Tipo": "GLP",
            "Válvula": "Padrão Nacional",
            "Certificação": "INAC"
        }
    },
    {
        id: 5,
        name: "Filtro de Ar Universal",
        category: "Peças",
        price: 2500,
        originalPrice: 3000,
        image: "/Filtro de Ar Universal.png",
        rating: 4.5,
        reviews: 67,
        inStock: true,
        delivery: "Entrega em 48h",
        description: "Filtro de ar de alta qualidade compatível com diversos modelos de veículos",
        features: ["Universal", "Fácil instalação", "Longa duração", "Filtragem superior"],
        brand: "AutoParts Pro",
        specifications: {
            "Tipo": "Filtro de Ar",
            "Material": "Papel plissado",
            "Dimensões": "280 x 220 x 60mm",
            "Compatibilidade": "Múltiplos modelos"
        }
    },
    {
        id: 6,
        name: "Kit Ferramentas Básico",
        category: "Acessórios",
        price: 12000,
        image: "/Kit Ferramentas Básico.png",
        rating: 4.4,
        reviews: 45,
        inStock: true,
        delivery: "Entrega em 24h",
        description: "Kit completo de ferramentas para manutenção básica do veículo",
        features: ["50 peças", "Maleta incluída", "Garantia 1 ano", "Aço carbono"],
        brand: "ToolMaster",
        specifications: {
            "Peças": "50 itens",
            "Material": "Aço carbono",
            "Maleta": "Plástico resistente",
            "Garantia": "12 meses"
        }
    },
    {
        id: 7,
        name: "Pneu 195/65 R15",
        category: "Peças",
        price: 18000,
        originalPrice: 20000,
        image: "/Pneu 195 65 R15.png",
        rating: 4.7,
        reviews: 92,
        inStock: true,
        delivery: "Montagem incluída",
        description: "Pneu radial de alta performance para carros de passeio",
        features: ["Montagem grátis", "Balanceamento incluído", "Garantia 2 anos", "Baixo ruído"],
        brand: "TireMax",
        specifications: {
            "Medida": "195/65 R15",
            "Índice de Carga": "91H",
            "Tipo": "Radial",
            "Padrão": "Assimétrico"
        }
    },
    {
        id: 8,
        name: "Óleo Hidráulico ATF",
        category: "Óleos",
        price: 4500,
        image: "/Óleo Hidráulico ATF.png",
        rating: 4.6,
        reviews: 73,
        inStock: true,
        delivery: "Entrega em 24h",
        description: "Óleo para transmissão automática de alta qualidade",
        features: ["Proteção da transmissão", "Mudanças suaves", "Resistente ao calor", "Longa duração"],
        brand: "Sonangol Premium",
        specifications: {
            "Tipo": "ATF Dexron VI",
            "Volume": "1 Litro",
            "Viscosidade": "Variável",
            "Aplicação": "Transmissão automática"
        }
    }
];

export const categories: Category[] = [
    { name: "Todos", icon: "📦", count: products.length },
    { name: "Óleos", icon: "🛢️", count: products.filter(p => p.category === "Óleos").length },
    { name: "Baterias", icon: "🔋", count: products.filter(p => p.category === "Baterias").length },
    { name: "Combustíveis", icon: "⛽", count: products.filter(p => p.category === "Combustíveis").length },
    { name: "Gás", icon: "🔥", count: products.filter(p => p.category === "Gás").length },
    { name: "Peças", icon: "🔧", count: products.filter(p => p.category === "Peças").length },
    { name: "Acessórios", icon: "🛠️", count: products.filter(p => p.category === "Acessórios").length },
];

export const services: Service[] = [
    {
        title: "Entrega de Combustível",
        description: "Entrega de gasóleo ao domicílio ou empresa com segurança e rapidez",
        icon: "🚛",
        features: [
            "Entrega 24/7 disponível",
            "Quantidade mínima 100L",
            "Preço competitivo",
            "Equipamento certificado",
            "Técnicos qualificados"
        ],
        basePrice: 200,
        estimatedTime: "2-4 horas"
    },
    {
        title: "Entrega de Gás",
        description: "Entrega e troca de botijas de gás doméstico com instalação segura",
        icon: "🔥",
        features: [
            "Entrega rápida em 1-2h",
            "Instalação segura incluída",
            "Preço fixo sem surpresas",
            "Técnico certificado",
            "Teste de segurança"
        ],
        basePrice: 500,
        estimatedTime: "1-2 horas"
    },
    {
        title: "Instalação de Baterias",
        description: "Instalação profissional de baterias automotivas com teste completo",
        icon: "🔋",
        features: [
            "Instalação grátis na compra",
            "Teste do sistema elétrico",
            "Garantia do serviço",
            "Descarte da bateria antiga",
            "Diagnóstico gratuito"
        ],
        basePrice: 0,
        estimatedTime: "30-45 minutos"
    },
    {
        title: "Montagem de Pneus",
        description: "Montagem e balanceamento de pneus com equipamento profissional",
        icon: "🛞",
        features: [
            "Montagem profissional",
            "Balanceamento incluído",
            "Alinhamento disponível",
            "Descarte do pneu usado",
            "Verificação da suspensão"
        ],
        basePrice: 2000,
        estimatedTime: "45-60 minutos"
    }
];

export const promotions = [
    {
        id: 1,
        title: "Promoção Óleos",
        description: "20% de desconto em todos os óleos sintéticos",
        discount: 20,
        validUntil: "2024-12-31",
        category: "Óleos"
    },
    {
        id: 2,
        title: "Kit Manutenção",
        description: "Óleo + Filtro com 15% de desconto",
        discount: 15,
        validUntil: "2024-12-31",
        category: "Combo"
    }
];
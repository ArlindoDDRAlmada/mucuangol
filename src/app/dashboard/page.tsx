import Link from "next/link";
import {
  MapPin,
  User,
  ChevronRight,
  TrendingUp,
  AlertTriangle,
  Star,
  Zap,
  Lightbulb,
  ShoppingCart,
  Brain,
  Target,
  Gift,
} from "lucide-react";

const DashboardPage = () => {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-card border border-border rounded-lg p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-foreground mb-2">
              Olá, Alana Sofia!
            </h1>
            <p className="text-lg text-muted-foreground">
              Bem-vinda de volta ao seu painel Sonangol
            </p>
          </div>
          <div className="hidden md:block">
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Última visita</p>
              <p className="text-lg font-medium text-foreground">Hoje, 14:30</p>
            </div>
          </div>
        </div>
      </div>

      {/* AI Insights Banner */}
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Brain className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-medium text-foreground mb-1">
              Recomendação IA Personalizada
            </h3>
            <p className="text-muted-foreground">
              Baseado no seu histórico, você economizará 18% comprando óleo
              sintético no E-commerce. Entrega grátis disponível para a sua
              região hoje.
            </p>
          </div>
          <Link
            href="/dashboard/e-commerce"
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors duration-200"
          >
            Ver Ofertas
          </Link>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard
          icon={<TrendingUp className="h-5 w-5" />}
          title="Último Abastecimento"
          value="20L"
          subtitle="Há 2 dias"
          color="blue"
        />
        <StatCard
          icon={<ShoppingCart className="h-5 w-5" />}
          title="Carrinho E-commerce"
          value="3 itens"
          subtitle="Desconto 15% ativo"
          color="orange"
        />
        <StatCard
          icon={<Star className="h-5 w-5" />}
          title="Pontos Fidelidade"
          value="2.847"
          subtitle="+120 esta semana"
          color="yellow"
        />
        <StatCard
          icon={<Target className="h-5 w-5" />}
          title="Meta de Economia"
          value="87%"
          subtitle="Objetivo mensal"
          color="green"
        />
      </div>

      {/* Quick Access Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <FeatureCard
          icon={<ShoppingCart className="h-6 w-6 text-primary" />}
          title="E-commerce Sonangol"
          description="Peças, acessórios e óleos • Entrega grátis"
          href="/dashboard/e-commerce"
          badge="15% desconto"
        />
        <FeatureCard
          icon={<MapPin className="h-6 w-6 text-primary" />}
          title="Localizador de Bombas"
          description="5 bombas próximas • Preços atualizados"
          href="/dashboard/bombas"
          badge="3 disponíveis"
        />
        <FeatureCard
          icon={<Brain className="h-6 w-6 text-primary" />}
          title="Insights Personalizados"
          description="IA analisa seu consumo • Recomendações"
          href="/dashboard/consumo"
          badge="3 novas dicas"
        />
        <FeatureCard
          icon={<User className="h-6 w-6 text-primary" />}
          title="Perfil"
          description="Nível Ouro • 95% completo"
          href="/dashboard/perfil"
          badge="Certificado novo"
        />
      </div>

      {/* Promotional Banner */}
      <div className="bg-accent border border-border rounded-lg p-8 relative">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <Gift className="h-4 w-4 text-primary" />
              </div>
              <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                LANÇAMENTO E-COMMERCE
              </span>
            </div>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              Entrega Grátis + 20% Desconto!
            </h2>
            <p className="text-muted-foreground">
              Estreia do E-commerce Sonangol: peças automotivas, óleos
              sintéticos e acessórios. Primeira compra com entrega gratuita em
              toda Luanda.
            </p>
          </div>
          <div className="hidden md:block">
            <Link
              href="/dashboard/e-commerce"
              className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors duration-200"
            >
              Explorar Loja
            </Link>
          </div>
        </div>
      </div>

      {/* Recent Activity & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-foreground">
              Atividade Recente
            </h2>
            <Link
              href="/dashboard/perfil"
              className="text-primary hover:text-primary/80 text-sm font-medium"
            >
              Ver Tudo
            </Link>
          </div>
          <div className="space-y-4">
            <ActivityItem
              icon={<ShoppingCart className="h-4 w-4" />}
              description="Comprou óleo sintético 5W-30 no E-commerce"
              time="Há 1 hora"
              amount="8.500 AOA"
              status="success"
            />
            <ActivityItem
              icon={<TrendingUp className="h-4 w-4" />}
              description="Abastecimento de 20L na Bomba Sonangol Cacuaco"
              time="Há 2 horas"
              amount="3.600 AOA"
              status="success"
            />
            <ActivityItem
              icon={<Brain className="h-4 w-4" />}
              description="IA recomendou filtro de ar - 25% desconto ativo"
              time="Ontem"
              amount="Economia 15%"
              status="info"
            />
            <ActivityItem
              icon={<Zap className="h-4 w-4" />}
              description="Entrega de botija de gás agendada"
              time="Amanhã, 14:00"
              amount="3.500 AOA"
              status="pending"
            />
          </div>
        </div>

        {/* Smart Alerts */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-foreground">
              Alertas Inteligentes
            </h2>
            <span className="px-3 py-1 bg-destructive text-destructive-foreground text-xs font-medium rounded-full">
              3 novos
            </span>
          </div>
          <div className="space-y-4">
            <AlertItem
              type="warning"
              title="Recomendação IA"
              description="Filtro de óleo vence em 5 dias. Substitua agora com 20% desconto no E-commerce."
              action="Comprar"
              urgent={true}
            />
            <AlertItem
              type="info"
              title="Oferta Personalizada"
              description="Óleo sintético em promoção baseado no seu histórico de compras."
              action="Ver Oferta"
              urgent={false}
            />
            <AlertItem
              type="success"
              title="Entrega Confirmada"
              description="Seu pedido do E-commerce será entregue hoje às 15:30."
              action="Rastrear"
              urgent={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Components
type StatCardProps = {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtitle: string;
  color: "blue" | "orange" | "yellow" | "green";
};

const StatCard: React.FC<StatCardProps> = ({
  icon,
  title,
  value,
  subtitle,
  color,
}) => {
  const colorClasses = {
    blue: "text-blue-600",
    orange: "text-orange-600",
    yellow: "text-yellow-600",
    green: "text-green-600",
  };

  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          <div className={colorClasses[color]}>{icon}</div>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-muted-foreground truncate">{title}</p>
          <p className="text-lg font-semibold text-foreground">{value}</p>
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  badge?: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  href,
  badge,
}) => (
  <Link
    href={href}
    className="group block bg-card border border-border p-6 rounded-lg hover:bg-accent transition-all duration-200"
  >
    <div className="flex items-start justify-between mb-4">
      <div className="p-3 bg-primary/10 rounded-lg">{icon}</div>
      {badge && (
        <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
          {badge}
        </span>
      )}
    </div>
    <h3 className="text-lg font-medium text-foreground mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm mb-4">{description}</p>
    <div className="flex items-center text-primary text-sm font-medium">
      Acessar
      <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
    </div>
  </Link>
);

type ActivityItemProps = {
  icon: React.ReactNode;
  description: string;
  time: string;
  amount: string;
  status: "success" | "info" | "pending";
};

const ActivityItem: React.FC<ActivityItemProps> = ({
  icon,
  description,
  time,
  amount,
  status,
}) => {
  const statusColors = {
    success: "text-green-600",
    info: "text-blue-600",
    pending: "text-orange-600",
  };

  return (
    <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-accent transition-colors duration-200">
      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-foreground text-sm">{description}</p>
        <p className="text-xs text-muted-foreground">{time}</p>
      </div>
      <div className="text-right">
        <p className={`text-sm font-medium ${statusColors[status]}`}>
          {amount}
        </p>
      </div>
    </div>
  );
};

type AlertItemProps = {
  type: "warning" | "info" | "success";
  title: string;
  description: string;
  action: string;
  urgent: boolean;
};

const AlertItem: React.FC<AlertItemProps> = ({
  type,
  title,
  description,
  action,
  urgent,
}) => {
  const typeConfig = {
    warning: {
      icon: <AlertTriangle className="h-4 w-4" />,
      color: "text-orange-600",
    },
    info: { icon: <Lightbulb className="h-4 w-4" />, color: "text-blue-600" },
    success: { icon: <Star className="h-4 w-4" />, color: "text-green-600" },
  };

  const config = typeConfig[type];

  return (
    <div className="p-4 rounded-lg bg-accent border border-border">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3">
          <div className={`${config.color} mt-0.5`}>{config.icon}</div>
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <h4 className="font-medium text-foreground">{title}</h4>
              {urgent && (
                <span className="px-2 py-1 bg-destructive text-destructive-foreground text-xs font-medium rounded-full">
                  URGENTE
                </span>
              )}
            </div>
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          </div>
        </div>
        <button className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-md hover:bg-primary/90 transition-colors duration-200">
          {action}
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;

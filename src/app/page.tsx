"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { FloatingAssistant } from "@/components/floating-assistant";
import { AnimatedBackground } from "@/components/animated-background";
import { LoadingScreen } from "@/components/loading-screen";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Users,
  Bot,
  User,
  Shield,
  Globe,
  ArrowRight,
  CheckCircle,
  Brain,
  Zap,
  Activity,
  ShoppingCart,
  TrendingUp,
  GitBranch,
} from "lucide-react";

function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-3"
    >
      <Image
        src="/sonangol-distribuidora-logo-png_seeklogo-129289.png"
        alt="Sonangol Distribuidora"
        width={40}
        height={40}
        className="w-10 h-10 object-contain"
      />
      <span className="text-xl font-bold bg-gradient-to-r from-yellow-500 to-red-600 bg-clip-text text-transparent">
        Sonangol Distribuidora
      </span>
    </motion.div>
  );
}

const features = [
  {
    icon: Brain,
    title: "ML Preditivos",
    description:
      "Modelos de Machine Learning para previsão de churn, cross-selling e análise de consumo",
  },
  {
    icon: Zap,
    title: "Eficiência da Bomba",
    description:
      "Process Mining e benchmarking inteligente para otimização operacional",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Integrado",
    description:
      "Compre peças, óleo sintético e solicite serviços diretamente na plataforma",
  },
  {
    icon: Activity,
    title: "Process Mining",
    description:
      "Descoberta automática de processos e identificação de gargalos operacionais",
  },
  {
    icon: TrendingUp,
    title: "Analytics Avançados",
    description:
      "Dashboards executivos com insights de performance e tendências de mercado",
  },
  {
    icon: GitBranch,
    title: "Melhores Práticas",
    description:
      "Biblioteca de práticas operacionais com análise de impacto e implementação",
  },
  {
    icon: MapPin,
    title: "Localizador Inteligente",
    description:
      "Encontre bombas próximas com IA preditiva e navegação otimizada",
  },
  {
    icon: Users,
    title: "Comunidade Integrada",
    description: "Conecte-se com outros utilizadores e partilhe experiências",
  },
  {
    icon: Bot,
    title: "Assistente Virtual IA",
    description: "Suporte 24/7 com inteligência artificial avançada",
  },
];

const stats = [
  { number: "300+", label: "Bombas Conectadas" },
  { number: "8", label: "Modelos ML Ativos" },
  { number: "94%", label: "Precisão IA" },
  { number: "24/7", label: "Process Mining" },
];

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-yellow-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-yellow-900 relative">
        {/* Animated Background */}
        <AnimatedBackground />

        {/* Header */}
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="px-4 lg:px-6 h-16 flex items-center sticky top-0 z-50 glassmorphism"
        >
          <Logo />
          <nav className="ml-auto flex items-center gap-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="hidden md:flex items-center gap-6"
            >
              <a
                className="text-sm font-medium hover:text-yellow-600 transition-colors"
                href="#features"
              >
                Funcionalidades
              </a>
              <a
                className="text-sm font-medium hover:text-yellow-600 transition-colors"
                href="#about"
              >
                Sobre
              </a>
              <a
                className="text-sm font-medium hover:text-yellow-600 transition-colors"
                href="#contact"
              >
                Contacto
              </a>
            </motion.div>
            <ThemeToggle />
          </nav>
        </motion.header>

        <main className="flex-1">
          {/* Hero Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/10 to-red-600/10 dark:from-yellow-400/5 dark:to-red-400/5" />
            <div className="container px-4 md:px-6 relative">
              <div className="flex flex-col items-center space-y-8 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-4"
                >
                  <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] px-4 sm:px-0">
                    <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 bg-clip-text text-transparent font-extrabold tracking-wide block sm:inline">
                      Transformando
                    </span>
                    <br className="hidden sm:block" />
                    <span className="font-light tracking-wide text-gray-800 dark:text-gray-100 block sm:inline">
                      o Futuro do
                    </span>{" "}
                    <span className="bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent font-extrabold block sm:inline">
                      Combustível
                    </span>
                    <br />
                    <span className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-500 dark:text-gray-400 font-light italic tracking-wider block mt-2 sm:mt-0">
                      em Angola
                    </span>
                  </h1>

                  <p className="mx-auto max-w-[700px] text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed font-light tracking-wide px-4 sm:px-0">
                    A sua experiência de abastecimento,{" "}
                    <span className="font-medium text-yellow-600 dark:text-yellow-400">
                      redefinida
                    </span>{" "}
                    com inteligência artificial.{" "}
                    <span className="font-medium">Conecte-se, otimize</span> e{" "}
                    <span className="bg-gradient-to-r from-yellow-600 to-red-600 bg-clip-text text-transparent font-semibold">
                      transforme
                    </span>{" "}
                    a forma como consome energia.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-lg mx-auto px-4 sm:px-0"
                >
                  <Link href="/dashboard">
                    <Button
                      size="lg"
                      className="btn-gradient text-white px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold text-lg border-0 min-w-[200px] flex items-center justify-center"
                    >
                      <User className="w-5 h-5 mr-3" />
                      Área do Cliente
                    </Button>
                  </Link>
                  <Link href="/manager">
                    <Button
                      size="lg"
                      variant="outline"
                      className="px-8 py-4 rounded-2xl border-2 border-yellow-500/30 bg-white/10 backdrop-blur-md hover:bg-yellow-500/10 hover:border-yellow-500/50 hover:scale-105 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl min-w-[200px] flex items-center justify-center"
                    >
                      <Shield className="w-5 h-5 mr-3" />
                      Gestão de Bombas
                    </Button>
                  </Link>
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16 px-4 sm:px-0"
                >
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                      className="text-center p-2 sm:p-0"
                    >
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-600 to-red-600 bg-clip-text text-transparent">
                        {stat.number}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1 leading-tight">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section
            id="features"
            className="w-full py-8 sm:py-12 md:py-24 lg:py-32 bg-white/50 dark:bg-gray-800/50"
          >
            <div className="container px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-8 sm:mb-12 md:mb-16"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide mb-4 leading-tight px-4 sm:px-0">
                  <span className="font-light text-gray-800 dark:text-gray-100 block sm:inline">
                    Funcionalidades
                  </span>{" "}
                  <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 bg-clip-text text-transparent font-extrabold italic block sm:inline">
                    Inovadoras
                  </span>
                </h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-light text-base sm:text-lg leading-relaxed tracking-wide px-4 sm:px-0">
                  Descubra como a nossa plataforma{" "}
                  <span className="font-medium text-yellow-600 dark:text-yellow-400">
                    revoluciona
                  </span>{" "}
                  a experiência de abastecimento com{" "}
                  <span className="font-semibold bg-gradient-to-r from-yellow-600 to-red-600 bg-clip-text text-transparent">
                    tecnologia de ponta
                  </span>
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="glassmorphism rounded-2xl p-4 sm:p-6 card-hover"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-500 to-red-600 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                      <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 tracking-wide text-gray-800 dark:text-gray-100 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-light leading-relaxed tracking-wide">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* AI Features Section */}
          <section className="w-full py-8 sm:py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="order-2 lg:order-1"
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide mb-4 sm:mb-6 leading-tight">
                    <span className="font-light text-gray-800 dark:text-gray-100 block sm:inline">
                      Inteligência Artificial
                    </span>{" "}
                    <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 bg-clip-text text-transparent font-extrabold italic block sm:inline">
                      Ética
                    </span>
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 font-light text-base sm:text-lg leading-relaxed tracking-wide">
                    Nossa{" "}
                    <span className="font-medium text-yellow-600 dark:text-yellow-400">
                      IA avançada
                    </span>{" "}
                    garante privacidade total enquanto oferece experiências{" "}
                    <span className="font-semibold bg-gradient-to-r from-yellow-600 to-red-600 bg-clip-text text-transparent">
                      personalizadas
                    </span>{" "}
                    e insights valiosos para otimizar seu consumo energético.
                  </p>
                  <div className="space-y-4">
                    {[
                      "Modelos ML para previsão de churn e cross-selling",
                      "Process Mining com descoberta automática de gargalos",
                      "Benchmarking inteligente entre postos",
                      "E-commerce integrado com recomendações IA",
                      "Analytics preditivos com 94% de precisão",
                      "Biblioteca de melhores práticas automatizada",
                    ].map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="glassmorphism rounded-2xl p-4 sm:p-6 md:p-8 order-1 lg:order-2"
                >
                  <div className="text-center">
                    <Bot className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 text-yellow-600" />
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 tracking-wide text-gray-800 dark:text-gray-100">
                      <span className="font-light block sm:inline">
                        Assistente Virtual
                      </span>{" "}
                      <span className="bg-gradient-to-r from-yellow-600 to-red-600 bg-clip-text text-transparent font-extrabold block sm:inline">
                        IA
                      </span>
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 font-light leading-relaxed tracking-wide text-sm sm:text-base">
                      Disponível{" "}
                      <span className="font-semibold text-yellow-600 dark:text-yellow-400">
                        24/7
                      </span>{" "}
                      para ajudar com suas necessidades energéticas
                    </p>
                    <Button className="w-full btn-gradient text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 border-0">
                      <span className="truncate">Falar com Assistente</span>
                      <ArrowRight className="w-4 h-4 ml-2 sm:ml-3 flex-shrink-0" />
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="w-full py-8 sm:py-12 md:py-24 lg:py-32 bg-gradient-to-r from-yellow-600 to-red-600">
            <div className="container px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide mb-4 leading-tight px-4 sm:px-0">
                  <span className="font-light block sm:inline">
                    Pronto para
                  </span>{" "}
                  <span className="font-extrabold italic block sm:inline">
                    Transformar
                  </span>{" "}
                  <span className="font-light block sm:inline">sua</span>{" "}
                  <span className="font-extrabold block sm:inline">
                    Experiência?
                  </span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 font-light leading-relaxed tracking-wide px-4 sm:px-0">
                  Junte-se a{" "}
                  <span className="font-semibold">milhares de angolanos</span>{" "}
                  que já{" "}
                  <span className="font-bold italic">revolucionaram</span> seu
                  consumo energético
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto px-4 sm:px-0">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-2xl bg-white text-yellow-600 hover:bg-gray-100 font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 border-0 w-full sm:w-auto"
                  >
                    <Globe className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                    <span className="truncate">Começar Agora</span>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-2xl border-2 border-white/50 text-shadow-black hover:bg-white/10 hover:border-white font-semibold text-base sm:text-lg backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                  >
                    <span className="truncate text-shadow-black">
                      Ver Demonstração
                    </span>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t glassmorphism">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2024 Sonangol. Privacidade Garantida - IA Ética - Desenvolvido por
            Arlindo Almada
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <a className="text-xs hover:underline underline-offset-4" href="#">
              Termos de Serviço
            </a>
            <a className="text-xs hover:underline underline-offset-4" href="#">
              Privacidade
            </a>
            <a className="text-xs hover:underline underline-offset-4" href="#">
              Suporte
            </a>
          </nav>
        </footer>

        {/* Floating Assistant */}
        <FloatingAssistant />
      </div>
    </>
  );
}

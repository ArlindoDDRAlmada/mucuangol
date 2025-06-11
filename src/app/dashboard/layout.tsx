"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Bell, Menu, User, Home } from "lucide-react";
import Image from "next/image";
import AIAssistant from "@/components/features/shared/AIAssistant";
import { AnimatedBackground } from "@/components/animated-background";
import { ThemeToggle } from "@/components/theme-toggle";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationCount] = useState(3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-yellow-900 relative">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center sticky top-0 z-50 glassmorphism">
        <div className="flex items-center gap-3">
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
        </div>

        {/* Desktop Navigation */}
        <nav className="ml-8 hidden lg:flex items-center gap-6">
          <Link
            href="/dashboard"
            className="text-sm font-medium hover:text-yellow-600 transition-colors"
          >
            🏠 Início
          </Link>
          <Link
            href="/dashboard/bombas"
            className="text-sm font-medium hover:text-yellow-600 transition-colors"
          >
            📍 Bombas
          </Link>
          <Link
            href="/dashboard/comunidade"
            className="text-sm font-medium hover:text-yellow-600 transition-colors"
          >
            👥 Comunidade
          </Link>
          <Link
            href="/dashboard/consumo"
            className="text-sm font-medium hover:text-yellow-600 transition-colors"
          >
            📊 Consumo
          </Link>
          <Link
            href="/dashboard/e-commerce"
            className="text-sm font-medium hover:text-yellow-600 transition-colors"
          >
            🛒 E-commerce
          </Link>
          <Link
            href="/dashboard/perfil"
            className="text-sm font-medium hover:text-yellow-600 transition-colors"
          >
            👤 Perfil
          </Link>
        </nav>

        {/* Right Side */}
        <div className="ml-auto flex items-center gap-4">
          {/* Back to Landing Page */}
          <Link href="/">
            <button className="flex items-center gap-2 px-3 py-2 rounded-xl glassmorphism hover:bg-white/30 transition-all duration-200 text-sm font-medium">
              <Home className="h-4 w-4" />
              <span className="hidden sm:inline">Página Inicial</span>
            </button>
          </Link>

          {/* Notifications */}
          <div className="relative">
            <button className="p-2 rounded-xl glassmorphism hover:bg-white/30 transition-all duration-200">
              <Bell className="h-5 w-5" />
              {notificationCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs rounded-full flex items-center justify-center font-bold">
                  {notificationCount}
                </span>
              )}
            </button>
          </div>

          {/* User Menu */}
          <div className="relative">
            <button className="flex items-center space-x-2 p-2 rounded-xl glassmorphism hover:bg-white/30 transition-all duration-200">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-red-600 rounded-lg flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
              <span className="hidden md:block text-sm font-medium">
                Alana Sofia
              </span>
            </button>
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl glassmorphism hover:bg-white/30 transition-all duration-200"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-white/20">
            <nav className="flex flex-col space-y-2">
              <Link
                href="/dashboard"
                className="flex items-center space-x-2 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>🏠</span>
                <span>Início</span>
              </Link>
              <Link
                href="/dashboard/bombas"
                className="flex items-center space-x-2 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>📍</span>
                <span>Bombas</span>
              </Link>
              <Link
                href="/dashboard/comunidade"
                className="flex items-center space-x-2 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>👥</span>
                <span>Comunidade</span>
              </Link>
              <Link
                href="/dashboard/consumo"
                className="flex items-center space-x-2 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>📊</span>
                <span>Consumo</span>
              </Link>
              <Link
                href="/dashboard/e-commerce"
                className="flex items-center space-x-2 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>🛒</span>
                <span>E-commerce</span>
              </Link>
              <Link
                href="/dashboard/perfil"
                className="flex items-center space-x-2 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>👤</span>
                <span>Perfil</span>
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="relative z-10 p-6 md:p-8">{children}</main>

      {/* AI Assistant */}
      <AIAssistant context="dashboard" userId="user123" />

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t glassmorphism">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2025 Sonangol. Privacidade Garantida - IA Ética - Desenvolvido por
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
    </div>
  );
};

export default DashboardLayout;

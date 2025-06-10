"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BarChart3,
  Fuel,
  Users,
  ChevronLeft,
  ChevronRight,
  Bell,
  UserCircle,
  Home,
  Brain,
  Zap,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { AnimatedBackground } from "@/components/animated-background";
import { ThemeToggle } from "@/components/theme-toggle";

export default function ManagerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/manager", icon: LayoutDashboard, label: "Dashboard" },
    { href: "/manager/analytics", icon: BarChart3, label: "Analytics" },
    { href: "/manager/ml-predictive", icon: Brain, label: "ML Preditivos" },
    {
      href: "/manager/pump-efficiency",
      icon: Zap,
      label: "Eficiência da Bomba",
    },
    { href: "/manager/stations", icon: Fuel, label: "Postos" },
    { href: "/manager/customers", icon: Users, label: "Clientes" },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-yellow-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-yellow-900 relative">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Sidebar */}
      <aside
        className={`relative glassmorphism shadow-lg transition-all duration-300 ease-in-out z-10 ${
          isSidebarCollapsed ? "w-20" : "w-64"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          {!isSidebarCollapsed && (
            <div className="flex items-center gap-2">
              <Image
                src="/sonangol-distribuidora-logo-png_seeklogo-129289.png"
                alt="Sonangol Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-yellow-500 to-red-600 bg-clip-text text-transparent">
                Gestão
              </span>
            </div>
          )}
          <button
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className="p-2 rounded-full glassmorphism hover:bg-white/30 transition-all duration-200"
          >
            {isSidebarCollapsed ? <ChevronRight /> : <ChevronLeft />}
          </button>
        </div>
        <nav className="mt-8">
          <ul>
            {navItems.map((item) => (
              <li key={item.href} className="px-4 mb-2">
                <Link
                  href={item.href}
                  className={`flex items-center p-3 rounded-lg transition-all duration-200 ${
                    pathname === item.href
                      ? "bg-gradient-to-r from-yellow-500 to-red-600 text-white shadow-lg"
                      : "glassmorphism hover:bg-white/30"
                  }`}
                >
                  <item.icon className="h-6 w-6" />
                  {!isSidebarCollapsed && (
                    <span className="ml-4 font-medium">{item.label}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between p-4 glassmorphism shadow-lg relative z-10">
          <h1 className="text-2xl font-semibold bg-gradient-to-r from-yellow-600 to-red-600 bg-clip-text text-transparent">
            {navItems.find((item) => item.href === pathname)?.label ||
              "Dashboard"}
          </h1>
          <div className="flex items-center gap-4">
            {/* Back to Landing Page */}
            <Link href="/">
              <button className="flex items-center gap-2 px-3 py-2 rounded-xl glassmorphism hover:bg-white/30 transition-all duration-200 text-sm font-medium">
                <Home className="h-4 w-4" />
                <span className="hidden sm:inline">Página Inicial</span>
              </button>
            </Link>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Notifications */}
            <button className="relative p-2 rounded-xl glassmorphism hover:bg-white/30 transition-all duration-200">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></span>
            </button>

            {/* User Profile */}
            <div className="flex items-center gap-3 p-2 rounded-xl glassmorphism">
              <UserCircle className="h-8 w-8 text-yellow-600" />
              <div className="hidden md:block">
                <p className="font-semibold text-sm">Admin Gestor</p>
                <p className="text-xs opacity-70">Sonangol HQ</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-grow p-6 overflow-auto relative z-10">
          {children}
        </main>
      </div>
    </div>
  );
}

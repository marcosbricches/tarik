// src/app/fleet/page.tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Truck, Users, WrenchIcon, CheckCircle2 } from "lucide-react"
import { MetricCard } from "./_components/metric-card"
import { RecentAlerts } from "./_components/recent-alerts"
import { FleetMap } from "./_components/fleet-map"
import { AlertsOverview } from "./_components/alerts-overview"
import { MaintenanceOverview } from "./_components/maintenance-overview"

export default function FleetDashboard() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Gestão de Frota</h2>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="alerts">Alertas</TabsTrigger>
          <TabsTrigger value="maintenance">Manutenções</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          {/* Conteúdo existente da aba Overview */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
              title="Total de Veículos"
              value="45"
              description="38 ativos, 7 em manutenção"
              icon={Truck}
            />
            <MetricCard
              title="Motoristas Ativos"
              value="32"
              description="28 em rota, 4 disponíveis"
              icon={Users}
            />
            <MetricCard
              title="Manutenções Pendentes"
              value="7"
              description="3 urgentes, 4 programadas"
              icon={WrenchIcon}
            />
            <MetricCard
              title="Check-lists Hoje"
              value="28"
              description="24 concluídos, 4 pendentes"
              icon={CheckCircle2}
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <FleetMap />
            <RecentAlerts />
          </div>
        </TabsContent>

        <TabsContent value="alerts">
          <AlertsOverview />
        </TabsContent>

        <TabsContent value="maintenance">
          <MaintenanceOverview />
        </TabsContent>
      </Tabs>
    </div>
  )
}
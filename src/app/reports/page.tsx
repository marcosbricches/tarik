// app/reports/page.tsx
import Link from "next/link"
import { BarChart3, Calendar, Car, DollarSign, Fuel, GaugeCircle, MapPin, Wrench, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ReportsPage() {
  return (
    <div className="container mx-auto py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Relatórios</h1>
        <p className="text-muted-foreground">Visualize todos os relatórios disponíveis</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Link href="/reports/fuel">
          <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Fuel className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">Consumo de Combustível</CardTitle>
              </div>
              <CardDescription>Análise detalhada do consumo por veículo</CardDescription>
            </CardHeader>
          </Card>
        </Link>

        <Link href="/reports/performance">
          <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-2">
                <GaugeCircle className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">Desempenho de Motoristas</CardTitle>
              </div>
              <CardDescription>Avaliação de performance e eficiência</CardDescription>
            </CardHeader>
          </Card>
        </Link>

        <Link href="/reports/trips">
          <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">Viagens</CardTitle>
              </div>
              <CardDescription>Histórico de rotas e paradas</CardDescription>
            </CardHeader>
          </Card>
        </Link>

        <Link href="/reports/maintenance">
          <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Wrench className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">Manutenção</CardTitle>
              </div>
              <CardDescription>Histórico e custos de manutenção</CardDescription>
            </CardHeader>
          </Card>
        </Link>

        <Link href="/reports/costs">
          <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">Custos e Despesas</CardTitle>
              </div>
              <CardDescription>Análise financeira detalhada</CardDescription>
            </CardHeader>
          </Card>
        </Link>

        <Link href="/reports/profitability">
          <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">Lucratividade</CardTitle>
              </div>
              <CardDescription>Rentabilidade por veículo</CardDescription>
            </CardHeader>
          </Card>
        </Link>

        <Link href="/reports/alerts">
          <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">Alertas</CardTitle>
              </div>
              <CardDescription>Checklist e ocorrências pendentes</CardDescription>
            </CardHeader>
          </Card>
        </Link>

        <Link href="/reports/fleet">
          <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Car className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">Frota</CardTitle>
              </div>
              <CardDescription>Histórico e desempenho dos veículos</CardDescription>
            </CardHeader>
          </Card>
        </Link>

        <Link href="/reports/schedule">
          <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">Agenda</CardTitle>
              </div>
              <CardDescription>Programação de manutenções e vistorias</CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </div>
    </div>
  )
}
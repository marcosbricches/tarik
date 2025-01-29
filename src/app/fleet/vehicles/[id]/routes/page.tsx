// src/app/fleet/vehicles/[id]/routes/page.tsx
import { Button } from "@/components/ui/button"

type RouteRecord = {
  id: number;
  date: string;
  origin: string;
  destination: string;
  status: "completed" | "in_progress" | "scheduled";
  driver: string;
}
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { RouteHistory } from "../../_components/route-history"

const mockRouteData = [
  {
    id: 1,
    date: "2024-01-28",
    origin: "São Paulo, SP",
    destination: "Rio de Janeiro, RJ",
    status: "completed",
    driver: "João Silva"
  },
  {
    id: 2,
    date: "2024-01-29",
    origin: "Rio de Janeiro, RJ",
    destination: "Belo Horizonte, MG",
    status: "in_progress",
    driver: "Carlos Santos"
  },
  {
    id: 3,
    date: "2024-01-30",
    origin: "Belo Horizonte, MG",
    destination: "São Paulo, SP",
    status: "scheduled",
    driver: "Pedro Oliveira"
  }
] as RouteRecord[]

export default function VehicleRoutesPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/fleet/vehicles/1">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h2 className="text-3xl font-bold tracking-tight">Histórico de Rotas</h2>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-emerald-600">Concluídas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">127</div>
            <p className="text-sm text-muted-foreground">
              Últimos 12 meses
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-yellow-600">Em Andamento</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-sm text-muted-foreground">
              Rota atual
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-blue-600">Agendadas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-sm text-muted-foreground">
              Próximas rotas
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Registro de Rotas</CardTitle>
          <div className="flex gap-2">
            <Button variant="outline">Rotas Anteriores</Button>
            <Button variant="outline">Próximas Rotas</Button>
          </div>
        </CardHeader>
        <CardContent>
          <RouteHistory records={mockRouteData} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Dados da Rota Atual</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-sm text-muted-foreground">Motorista</span>
              <p className="mt-1">Carlos Santos</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Previsão de Chegada</span>
              <p className="mt-1">29/01/2024 18:00</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Origem</span>
              <p className="mt-1">Rio de Janeiro, RJ</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Destino</span>
              <p className="mt-1">Belo Horizonte, MG</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Distância Total</span>
              <p className="mt-1">434 km</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Tempo Estimado</span>
              <p className="mt-1">6h 30min</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
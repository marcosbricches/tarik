// src/app/fleet/drivers/[id]/routes/page.tsx
import { Button } from "@/components/ui/button"

// Define the RouteRecord type
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
import { RouteHistory } from "../../../vehicles/_components/route-history"

const mockRouteData: RouteRecord[] = [
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
    driver: "João Silva"
  },
  {
    id: 3,
    date: "2024-01-30",
    origin: "Belo Horizonte, MG",
    destination: "São Paulo, SP",
    status: "scheduled",
    driver: "João Silva"
  }
] as const

export default function DriverRoutesPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/fleet/drivers/1">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h2 className="text-3xl font-bold tracking-tight">Rotas do Motorista</h2>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-emerald-600">Rotas Concluídas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85</div>
            <p className="text-sm text-muted-foreground">
              Últimos 12 meses
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-yellow-600">Rota Atual</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">RJ → BH</div>
            <p className="text-sm text-muted-foreground">
              Em andamento
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-blue-600">Próximas Rotas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-sm text-muted-foreground">
              Agendadas
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Detalhes da Rota Atual</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-sm text-muted-foreground">Origem</span>
              <p className="mt-1">Rio de Janeiro, RJ</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Destino</span>
              <p className="mt-1">Belo Horizonte, MG</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Início</span>
              <p className="mt-1">29/01/2024 08:00</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Previsão de Chegada</span>
              <p className="mt-1">29/01/2024 18:00</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Veículo</span>
              <p className="mt-1">Volvo FH 460 (ABC-1234)</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Status</span>
              <p className="mt-1">Em Rota (75% concluído)</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Histórico de Rotas</CardTitle>
        </CardHeader>
        <CardContent>
          <RouteHistory records={mockRouteData} />
        </CardContent>
      </Card>
    </div>
  )
}
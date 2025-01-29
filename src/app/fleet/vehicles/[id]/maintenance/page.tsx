// src/app/fleet/vehicles/[id]/maintenance/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Plus } from "lucide-react"
import Link from "next/link"
import { MaintenanceHistory } from "../../_components/maintenance-history"

type MaintenanceRecord = {
  id: number;
  date: string;
  type: string;
  description: string;
  status: "completed" | "in_progress" | "pending";
  cost: number;
};

const mockMaintenanceData = [
  {
    id: 1,
    date: "2024-01-15",
    type: "Revisão Preventiva",
    description: "Troca de óleo e filtros",
    status: "completed",
    cost: 1500.00
  },
  {
    id: 2,
    date: "2024-02-01",
    type: "Manutenção Corretiva",
    description: "Reparo no sistema de freios",
    status: "in_progress",
    cost: 3000.00
  },
  {
    id: 3,
    date: "2024-03-01",
    type: "Revisão Programada",
    description: "Revisão dos 50.000 km",
    status: "pending",
    cost: 2500.00
  }
] as MaintenanceRecord[]

export default function VehicleMaintenancePage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/fleet/vehicles/1">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h2 className="text-3xl font-bold tracking-tight">Histórico de Manutenções</h2>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nova Manutenção
        </Button>
      </div>

      <div className="grid gap-4 grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-emerald-600">Concluídas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
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
            <div className="text-2xl font-bold">2</div>
            <p className="text-sm text-muted-foreground">
              Manutenções atuais
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-blue-600">Programadas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-sm text-muted-foreground">
              Próximos 30 dias
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Registro de Manutenções</CardTitle>
        </CardHeader>
        <CardContent>
          <MaintenanceHistory records={mockMaintenanceData} />
        </CardContent>
      </Card>
    </div>
  )
}
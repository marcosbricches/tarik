// src/app/fleet/vehicle-types/[id]/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Edit } from "lucide-react"
import Link from "next/link"

const mockData = {
  id: 1,
  status: true,
  name: "Caminhão Tanque",
  capacity: 15000,
  unit: "liters",
  observations: "Usado para transporte de combustíveis"
}

export default function VehicleTypeDetailsPage() {
  const getUnitLabel = (unit: string) => {
    const unitLabels: Record<string, string> = {
      liters: "L",
      cubic_meters: "m³",
      tons: "t",
      kilos: "kg"
    }
    return unitLabels[unit] || unit
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/fleet/vehicle-types">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h2 className="text-3xl font-bold tracking-tight">Detalhes do Tipo de Veículo</h2>
        </div>
        <Link href={`/fleet/vehicle-types/${mockData.id}/edit`}>
          <Button>
            <Edit className="mr-2 h-4 w-4" />
            Editar
          </Button>
        </Link>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Status</h3>
                <Badge variant={mockData.status ? "default" : "secondary"} className="mt-1">
                  {mockData.status ? "Ativo" : "Inativo"}
                </Badge>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Nome</h3>
                <p className="mt-1">{mockData.name}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Capacidade de Carga</h3>
                <p className="mt-1">
                  {mockData.capacity} {getUnitLabel(mockData.unit)}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Código</h3>
                <p className="mt-1">#{mockData.id.toString().padStart(5, '0')}</p>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Observações</h3>
              <p className="mt-1">{mockData.observations || "Nenhuma observação registrada"}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
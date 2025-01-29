// src/app/fleet/map/_components/vehicle-info-card.tsx
'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface VehicleInfo {
  id: number
  plate: string
  model: string
  driver: string
  status: "moving" | "stopped" | "inactive"
  currentLocation: string
  destination: string
  progress: number
  lastUpdate: string
}

interface VehicleInfoCardProps {
  vehicle: VehicleInfo
}

export function VehicleInfoCard({ vehicle }: VehicleInfoCardProps) {
  const statusConfig = {
    moving: { label: "Em Movimento", variant: "default" as const },
    stopped: { label: "Parado", variant: "destructive" as const },
    inactive: { label: "Inativo", variant: "secondary" as const }
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">{vehicle.plate}</h3>
              <p className="text-sm text-muted-foreground">{vehicle.model}</p>
            </div>
            <Badge variant={statusConfig[vehicle.status].variant}>
              {statusConfig[vehicle.status].label}
            </Badge>
          </div>

          <div className="space-y-2">
            <div>
              <span className="text-sm text-muted-foreground">Motorista</span>
              <p className="text-sm">{vehicle.driver}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Localização Atual</span>
              <p className="text-sm">{vehicle.currentLocation}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Destino</span>
              <p className="text-sm">{vehicle.destination}</p>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Progresso da Rota</span>
              <span>{vehicle.progress}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full" 
                style={{ width: `${vehicle.progress}%` }}
              />
            </div>
          </div>

          <div className="text-xs text-muted-foreground">
            Última atualização: {vehicle.lastUpdate}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
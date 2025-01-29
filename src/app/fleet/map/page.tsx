// src/app/fleet/map/page.tsx
'use client'

import { useState } from 'react'
import { Card } from "@/components/ui/card"
import { VehicleList } from "./_components/vehicle-list"
import { FleetSummary } from "./_components/fleet-summary"
import { RouteDetails } from "./_components/route-details"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Vehicle } from "./_components/types"

const mockVehicles: Vehicle[] = [
  {
    id: 1,
    plate: "ABC-1234",
    model: "Volvo FH 460",
    driver: "João Silva",
    status: "moving",
    currentLocation: "São Paulo, SP",
    destination: "Rio de Janeiro, RJ",
    progress: 45,
    lastUpdate: "Há 5 minutos"
  },
  {
    id: 2,
    plate: "XYZ-5678",
    model: "Mercedes Actros",
    driver: "Carlos Santos",
    status: "stopped",
    currentLocation: "Curitiba, PR",
    destination: "Florianópolis, SC",
    progress: 75,
    lastUpdate: "Há 2 minutos"
  },
  {
    id: 3,
    plate: "DEF-9012",
    model: "Scania R450",
    driver: "Pedro Oliveira",
    status: "moving",
    currentLocation: "Belo Horizonte, MG",
    destination: "Brasília, DF",
    progress: 30,
    lastUpdate: "Há 8 minutos"
  }
]

export default function MapPage() {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null)

  const handleSelectVehicle = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle)
  }

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <div className="flex-1 p-4 space-y-4">
        <div className="flex justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight">Mapa de Veículos</h2>
            <p className="text-sm text-muted-foreground">
              Visualize em tempo real a localização da sua frota
            </p>
          </div>
          <div className="flex gap-2">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="moving">Em Movimento</SelectItem>
                <SelectItem value="stopped">Parados</SelectItem>
                <SelectItem value="inactive">Inativos</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Tipo de Veículo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="truck">Caminhão</SelectItem>
                <SelectItem value="van">Van</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <FleetSummary vehicles={mockVehicles} />

        <Card className="flex-1 relative">
          <div className="h-full min-h-[600px] bg-muted rounded-lg flex items-center justify-center">
            Mapa será integrado aqui
          </div>
          <RouteDetails vehicle={selectedVehicle} />
        </Card>
      </div>

      <VehicleList 
        vehicles={mockVehicles}
        onSelectVehicle={handleSelectVehicle}
      />
    </div>
  )
}
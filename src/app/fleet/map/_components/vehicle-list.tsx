// src/app/fleet/map/_components/vehicle-list.tsx
'use client'

import { VehicleInfoCard } from "./vehicle-info-card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Vehicle } from "./types"

interface VehicleListProps {
  vehicles: Vehicle[]
  onSelectVehicle: (vehicle: Vehicle) => void
}

export function VehicleList({ vehicles, onSelectVehicle }: VehicleListProps) {
  return (
    <div className="w-[350px] border-l">
      <div className="p-4 border-b">
        <div className="flex items-center gap-2">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Buscar veículo..." 
            className="flex-1"
          />
        </div>
      </div>
      <ScrollArea className="h-[calc(100vh-10rem)] p-4">
        <div className="space-y-4">
          {vehicles.map((vehicle) => (
            <div 
              key={vehicle.id}
              onClick={() => onSelectVehicle(vehicle)}
              className="cursor-pointer hover:opacity-80 transition-opacity"
            >
              <VehicleInfoCard vehicle={vehicle} />
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
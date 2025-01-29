// src/app/fleet/vehicle-types/page.tsx
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { Input } from "@/components/ui/input"
import { VehicleTypesTable } from "./_components/vehicle-types-table"
import Link from "next/link"

const data = [
  {
    id: 1,
    status: true,
    name: "Caminhão Tanque",
    capacity: 15000,
    unit: "liters",
    observations: "Usado para transporte de combustíveis"
  },
  {
    id: 2,
    status: true,
    name: "Caminhão Baú",
    capacity: 12,
    unit: "cubic_meters",
    observations: "Transporte de carga seca"
  }
]

export default function VehicleTypesPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Tipos de Veículos</h2>
        <Link href="/fleet/vehicle-types/new">
  <Button>
    <Plus className="mr-2 h-4 w-4" />
    Novo Tipo
  </Button>
</Link>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Input
            placeholder="Buscar por nome..."
            className="max-w-[300px]"
          />
        </div>

        <VehicleTypesTable data={data} />
      </div>
    </div>
  )
}
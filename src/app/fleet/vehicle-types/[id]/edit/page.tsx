// src/app/fleet/vehicle-types/[id]/edit/page.tsx
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { VehicleTypeForm } from "../../_components/vehicle-type-form"

const mockData = {
  id: 1,
  status: true,
  name: "Caminhão Tanque",
  capacity: 15000,
  unit: "liters",
  observations: "Usado para transporte de combustíveis"
}

export default function EditVehicleTypePage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center space-x-2">
        <Link href={`/fleet/vehicle-types/${mockData.id}`}>
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h2 className="text-3xl font-bold tracking-tight">Editar Tipo de Veículo</h2>
      </div>

      <VehicleTypeForm isEditing initialData={mockData} />
    </div>
  )
}
// src/app/fleet/vehicles/[id]/edit/page.tsx
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { VehicleForm } from "../../_components/vehicle-form"

const mockData = {
  id: 1,
  status: "available" as const,
  plate: "ABC1234",
  type: "Caminhão Tanque",
  capacity: 15000,
  brand: "Volvo",
  model: "FH 460",
  manufactureYear: 2022,
  color: "Branco",
  chassis: "9BWHE21JX24060831",
  axles: 6,
  documents: [
    { type: "Licença de Circulação", number: "123456", expiryDate: "2024-12-31" }
  ],
  fuelType: "diesel",
  tankCapacity: 500
}

export default function EditVehiclePage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center space-x-2">
        <Link href={`/fleet/vehicles/${mockData.id}`}>
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h2 className="text-3xl font-bold tracking-tight">Editar Veículo</h2>
      </div>

      <VehicleForm 
        isEditing 
        initialData={mockData}
      />
    </div>
  )
}
// src/app/fleet/vehicle-types/new/page.tsx
import { VehicleTypeForm } from "../_components/vehicle-type-form"

export default function NewVehicleTypePage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Novo Tipo de Veículo</h2>
      </div>

      <VehicleTypeForm />
    </div>
  )
}
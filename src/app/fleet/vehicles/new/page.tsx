// src/app/fleet/vehicles/new/page.tsx
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { VehicleForm } from "../_components/vehicle-form"

export default function NewVehiclePage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center space-x-2">
        <Link href="/fleet/vehicles">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h2 className="text-3xl font-bold tracking-tight">Novo Veículo</h2>
      </div>

      <VehicleForm />
    </div>
  )
}
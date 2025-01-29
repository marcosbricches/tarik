// src/app/fleet/brands-models/page.tsx
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { Input } from "@/components/ui/input"
import { BrandsModelsTable } from "./_components/brands-models-table"
import Link from "next/link"

const mockData = [
  {
    id: 1,
    status: true,
    brand: "Volvo",
    models: ["FH 460", "FH 540", "VM 270"],
    observations: "Marca principal para caminhões pesados"
  },
  {
    id: 2,
    status: true,
    brand: "Mercedes-Benz",
    models: ["Actros", "Axor", "Atego"],
    observations: "Marca secundária para diversos tipos"
  }
]

export default function BrandsModelsPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Marcas e Modelos</h2>
        <Link href="/fleet/brands-models/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Nova Marca
          </Button>
        </Link>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Input
            placeholder="Buscar por marca..."
            className="max-w-[300px]"
          />
        </div>

        <BrandsModelsTable data={mockData} />
      </div>
    </div>
  )
}
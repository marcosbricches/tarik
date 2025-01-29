// src/app/fleet/brands-models/[id]/edit/page.tsx
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { BrandModelForm } from "../../_components/brand-model-form"

const mockData = {
  id: 1,
  status: true,
  brand: "Volvo",
  models: ["FH 460", "FH 540", "VM 270"],
  observations: "Marca principal para caminhões pesados"
}

export default function EditBrandModelPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center space-x-2">
        <Link href={`/fleet/brands-models/${mockData.id}`}>
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h2 className="text-3xl font-bold tracking-tight">Editar Marca</h2>
      </div>

      <BrandModelForm isEditing initialData={mockData} />
    </div>
  )
}
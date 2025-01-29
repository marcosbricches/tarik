// src/app/fleet/brands-models/new/page.tsx
import { BrandModelForm } from "../_components/brand-model-form"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NewBrandModelPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center space-x-2">
        <Link href="/fleet/brands-models">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h2 className="text-3xl font-bold tracking-tight">Nova Marca</h2>
      </div>

      <BrandModelForm />
    </div>
  )
}
// src/app/fleet/drivers/new/page.tsx
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { DriverForm } from "../_components/driver-form"

export default function NewDriverPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center space-x-2">
        <Link href="/fleet/drivers">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h2 className="text-3xl font-bold tracking-tight">Novo Motorista</h2>
      </div>

      <DriverForm />
    </div>
  )
}
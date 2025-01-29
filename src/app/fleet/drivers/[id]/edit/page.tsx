// src/app/fleet/drivers/[id]/edit/page.tsx
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { DriverForm } from "../../_components/driver-form"

const mockData = {
  id: 1,
  status: "active" as const,
  name: "João Silva",
  license: "12345678901",
  licenseCategory: "E",
  licenseExpiry: "2025-12-31",
  document: "123456789",
  birthDate: "1985-06-15",
  maritalStatus: "married",
  phone: "(11) 98765-4321",
  email: "joao.silva@email.com",
  address: "Rua Exemplo, 123 - São Paulo, SP",
  position: "Motorista Sênior",
  startDate: "2020-01-15",
  experience: 60,
  previousCompanies: "Transportadora XYZ (2015-2020)\nTransportes ABC (2010-2015)",
  workStart: "08:00",
  workEnd: "17:00",
  breakTime: 60,
  bankName: "Banco do Brasil",
  bankCode: "001",
  bankBranch: "1234-5",
  bankAccount: "12345-6",
  observations: "Motorista experiente com ótimo histórico"
}

export default function EditDriverPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center space-x-2">
        <Link href={`/fleet/drivers/${mockData.id}`}>
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h2 className="text-3xl font-bold tracking-tight">Editar Motorista</h2>
      </div>

      <DriverForm 
        isEditing 
        initialData={mockData}
      />
    </div>
  )
}
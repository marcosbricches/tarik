// src/app/fleet/drivers/[id]/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Edit } from "lucide-react"
import Link from "next/link"
import { DriverStatusBadge } from "../_components/driver-status-badge"

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

export default function DriverDetailsPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/fleet/drivers">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h2 className="text-3xl font-bold tracking-tight">Detalhes do Motorista</h2>
        </div>
        <div className="flex space-x-2">
          <Link href={`/fleet/drivers/${mockData.id}/routes`}>
            <Button variant="outline">Rotas</Button>
          </Link>
          <Link href={`/fleet/drivers/${mockData.id}/edit`}>
            <Button>
              <Edit className="mr-2 h-4 w-4" />
              Editar
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Dados Pessoais</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-sm text-muted-foreground">Status</span>
              <div className="mt-1">
                <DriverStatusBadge status={mockData.status} />
              </div>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Nome</span>
              <p className="mt-1 font-medium">{mockData.name}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">CNH</span>
              <p className="mt-1">{mockData.license}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Categoria</span>
              <p className="mt-1">{mockData.licenseCategory}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Validade CNH</span>
              <p className="mt-1">{mockData.licenseExpiry}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Documento</span>
              <p className="mt-1">{mockData.document}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Data de Nascimento</span>
              <p className="mt-1">{mockData.birthDate}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Estado Civil</span>
              <p className="mt-1">{mockData.maritalStatus}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contato</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <span className="text-sm text-muted-foreground">Telefone</span>
              <p className="mt-1">{mockData.phone}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">E-mail</span>
              <p className="mt-1">{mockData.email}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Endereço</span>
              <p className="mt-1">{mockData.address}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Dados Profissionais</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-sm text-muted-foreground">Cargo</span>
                <p className="mt-1">{mockData.position}</p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Data de Início</span>
                <p className="mt-1">{mockData.startDate}</p>
              </div>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Experiência</span>
              <p className="mt-1">{mockData.experience} meses</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Horário de Trabalho</span>
              <p className="mt-1">{`${mockData.workStart} às ${mockData.workEnd} (${mockData.breakTime}min intervalo)`}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Dados Bancários</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-sm text-muted-foreground">Banco</span>
              <p className="mt-1">{mockData.bankName}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Código</span>
              <p className="mt-1">{mockData.bankCode}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Agência</span>
              <p className="mt-1">{mockData.bankBranch}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Conta</span>
              <p className="mt-1">{mockData.bankAccount}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
// src/app/fleet/vehicles/[id]/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Edit } from "lucide-react"
import Link from "next/link"
import { VehicleStatusBadge } from "../_components/vehicle-status-badge"

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

export default function VehicleDetailsPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/fleet/vehicles">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h2 className="text-3xl font-bold tracking-tight">Detalhes do Veículo</h2>
        </div>
        <div className="flex space-x-2">
          <Link href={`/fleet/vehicles/${mockData.id}/maintenance`}>
            <Button variant="outline">Manutenções</Button>
          </Link>
          <Link href={`/fleet/vehicles/${mockData.id}/routes`}>
            <Button variant="outline">Rotas</Button>
          </Link>
          <Link href={`/fleet/vehicles/${mockData.id}/edit`}>
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
            <CardTitle>Informações Básicas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-sm text-muted-foreground">Status</span>
                <div className="mt-1">
                  <VehicleStatusBadge status={mockData.status} />
                </div>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Placa</span>
                <p className="mt-1 font-medium">{mockData.plate}</p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Tipo</span>
                <p className="mt-1">{mockData.type}</p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Capacidade</span>
                <p className="mt-1">{mockData.capacity} L</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Especificações</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-sm text-muted-foreground">Marca/Modelo</span>
                <p className="mt-1">{`${mockData.brand} ${mockData.model}`}</p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Ano</span>
                <p className="mt-1">{mockData.manufactureYear}</p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Cor</span>
                <p className="mt-1">{mockData.color}</p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Chassi</span>
                <p className="mt-1">{mockData.chassis}</p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Eixos</span>
                <p className="mt-1">{mockData.axles}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Documentação</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockData.documents.map((doc, index) => (
              <div key={index} className="grid grid-cols-3 gap-4">
                <div>
                  <span className="text-sm text-muted-foreground">Documento</span>
                  <p className="mt-1">{doc.type}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Número</span>
                  <p className="mt-1">{doc.number}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Validade</span>
                  <p className="mt-1">{doc.expiryDate}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Combustível</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-sm text-muted-foreground">Tipo</span>
                <p className="mt-1">{mockData.fuelType}</p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Capacidade do Tanque</span>
                <p className="mt-1">{mockData.tankCapacity} L</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
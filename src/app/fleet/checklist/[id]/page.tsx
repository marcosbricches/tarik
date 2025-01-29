// src/app/fleet/checklist/[id]/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Download, FileImage } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

const mockData = {
  id: 1,
  date: "29/01/2024",
  time: "08:00",
  vehiclePlate: "ABC-1234",
  vehicleModel: "Volvo FH 460",
  responsibleName: "João Silva",
  type: "driver" as const,
  status: "ok" as const,
  items: [
    {
      category: "Níveis",
      checks: [
        { item: "Óleo do motor", status: "ok", observation: null },
        { item: "Água do radiador", status: "ok", observation: null },
        { item: "Fluido de freio", status: "ok", observation: null },
      ]
    },
    {
      category: "Pneus",
      checks: [
        { item: "Calibragem", status: "ok", observation: null },
        { item: "Estado geral", status: "problem", observation: "Desgaste excessivo no pneu traseiro direito" },
      ]
    },
    {
      category: "Documentação",
      checks: [
        { item: "Licenciamento", status: "ok", observation: null },
        { item: "Seguro obrigatório", status: "ok", observation: null },
      ]
    }
  ],
  photos: [
    { id: 1, description: "Pneu traseiro direito", url: "/path/to/photo1.jpg" },
    { id: 2, description: "Painel de instrumentos", url: "/path/to/photo2.jpg" },
  ]
}

export default function ChecklistDetailsPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/fleet/checklist">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h2 className="text-3xl font-bold tracking-tight">Detalhes do Check-list</h2>
        </div>
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Exportar PDF
        </Button>
      </div>

      <div className="grid gap-4 grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Informações Gerais</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-sm text-muted-foreground">Data/Hora</span>
              <p className="mt-1">{`${mockData.date} ${mockData.time}`}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Status</span>
              <div className="mt-1">
                <Badge variant={mockData.status === "ok" ? "default" : "destructive"}>
                  {mockData.status === "ok" ? "Em Ordem" : "Problema"}
                </Badge>
              </div>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Responsável</span>
              <p className="mt-1">{mockData.responsibleName}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Tipo</span>
              <div className="mt-1">
                <Badge variant="outline">
                  {mockData.type === "driver" ? "Motorista" : "Mecânico"}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Dados do Veículo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-sm text-muted-foreground">Placa</span>
                <p className="mt-1">{mockData.vehiclePlate}</p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Modelo</span>
                <p className="mt-1">{mockData.vehicleModel}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Itens Verificados</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {mockData.items.map((category, index) => (
              <div key={index} className="space-y-4">
                <h3 className="font-semibold">{category.category}</h3>
                <div className="space-y-2">
                  {category.checks.map((check, checkIndex) => (
                    <div key={checkIndex} className="flex items-center justify-between py-2 border-b">
                      <div className="flex-1">
                        <p>{check.item}</p>
                        {check.observation && (
                          <p className="text-sm text-muted-foreground mt-1">
                            {check.observation}
                          </p>
                        )}
                      </div>
                      <Badge variant={check.status === "ok" ? "default" : "destructive"}>
                        {check.status === "ok" ? "OK" : "Problema"}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Fotos Anexadas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-4">
            {mockData.photos.map((photo) => (
              <div key={photo.id} className="relative group">
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  <FileImage className="h-8 w-8 text-muted-foreground" />
                </div>
                <p className="text-sm mt-1 text-muted-foreground">{photo.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
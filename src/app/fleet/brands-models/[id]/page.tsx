// src/app/fleet/brands-models/[id]/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Edit } from "lucide-react"
import Link from "next/link"

const mockData = {
  id: 1,
  status: true,
  brand: "Volvo",
  models: ["FH 460", "FH 540", "VM 270"],
  observations: "Marca principal para caminhões pesados"
}

export default function BrandModelDetailsPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/fleet/brands-models">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h2 className="text-3xl font-bold tracking-tight">Detalhes da Marca</h2>
        </div>
        <Link href={`/fleet/brands-models/${mockData.id}/edit`}>
          <Button>
            <Edit className="mr-2 h-4 w-4" />
            Editar
          </Button>
        </Link>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Status</h3>
                <Badge variant={mockData.status ? "default" : "secondary"} className="mt-1">
                  {mockData.status ? "Ativo" : "Inativo"}
                </Badge>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Marca</h3>
                <p className="mt-1">{mockData.brand}</p>
              </div>
              <div className="col-span-2">
                <h3 className="text-sm font-medium text-muted-foreground">Modelos</h3>
                <div className="mt-1 flex flex-wrap gap-2">
                  {mockData.models.map((model, index) => (
                    <Badge key={index} variant="secondary">
                      {model}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Observações</h3>
              <p className="mt-1">{mockData.observations || "Nenhuma observação registrada"}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
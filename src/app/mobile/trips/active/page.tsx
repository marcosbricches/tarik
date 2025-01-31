import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import {
  ChevronLeft,
  MapPin,
  Timer,
  Truck,
  Camera,
  AlertTriangle,
  Upload
} from "lucide-react"

export default function ActiveTripPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background z-10">
        <div className="p-4 flex items-center gap-4">
          <Link href="/mobile/dashboard">
            <ChevronLeft className="h-6 w-6" />
          </Link>
          <div className="flex-1">
            <h1 className="font-semibold">Viagem #12345</h1>
            <div className="flex items-center gap-2">
              <Badge>Em Rota</Badge>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">ABC-1234</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 space-y-6">
        {/* Trip Details */}
        <Card>
          <CardHeader>
            <CardTitle>Detalhes da Viagem</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-0.5" />
              <div className="space-y-1">
                <p className="font-medium">Origem</p>
                <p className="text-sm text-muted-foreground">
                  Rua Example, 123 - São Paulo, SP
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-destructive mt-0.5" />
              <div className="space-y-1">
                <p className="font-medium">Destino</p>
                <p className="text-sm text-muted-foreground">
                  Av Sample, 456 - Rio de Janeiro, RJ
                </p>
              </div>
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Timer className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Previsão: 6h</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Distância: 430km</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Status Update */}
        <Card>
          <CardHeader>
            <CardTitle>Atualizar Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" className="h-auto py-4 flex flex-col gap-2">
                <Camera className="h-5 w-5" />
                <span className="text-sm">Documento de Carga</span>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex flex-col gap-2">
                <Upload className="h-5 w-5" />
                <span className="text-sm">Comprovante de Entrega</span>
              </Button>
            </div>

            <Separator />

            <div className="space-y-2">
              <p className="text-sm font-medium">Observações</p>
              <Textarea 
                placeholder="Digite alguma observação sobre a viagem..."
                className="min-h-[100px]"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Button variant="secondary" className="w-full">Registrar Parada</Button>
              <Button variant="default" className="w-full">Atualizar Status</Button>
            </div>
          </CardContent>
        </Card>

        {/* Alerts */}
        <Card className="bg-yellow-50 border-yellow-200">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div>
                <p className="font-medium text-yellow-800">Atenção</p>
                <p className="text-sm text-yellow-700">
                  Há áreas de risco no percurso. Mantenha-se atento às rotas sugeridas.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
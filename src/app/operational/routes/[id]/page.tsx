// src/app/routes/[id]/page.tsx
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  AlertTriangle,
  Clock,
  Fuel,
  MapPin,
  MoreVertical,
  Route,
  Truck,
  User
} from "lucide-react"
import Link from "next/link"

export default function RouteDetailsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold">Rota #123</h1>
          <div className="flex items-center gap-2">
            <Badge>Em Andamento</Badge>
            <span className="text-sm text-muted-foreground">
              Pedido #1234
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Recalcular Rota</Button>
          <Link href={`/operational/routes/123/edit`}>
          <Button>Editar Rota</Button> </Link>
          
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Mapa da Rota</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              Mapa será renderizado aqui
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Informações da Viagem</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Route className="h-4 w-4" />
                <span>435 km total</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>6h 30min estimados</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>João Silva (Motorista)</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4" />
                <span>CAM-0123</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pontos da Rota</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-green-500" />
                  <div>
                    <p className="font-medium">São Paulo, SP</p>
                    <p className="text-sm text-muted-foreground">Origem</p>
                  </div>
                </div>
                <div className="ml-2 border-l-2 border-dashed h-8" />
                <div className="flex items-center gap-2">
                  <MoreVertical className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Parada Obrigatória</p>
                    <p className="text-sm text-muted-foreground">4h de viagem</p>
                  </div>
                </div>
                <div className="ml-2 border-l-2 border-dashed h-8" />
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-blue-500" />
                  <div>
                    <p className="font-medium">Rio de Janeiro, RJ</p>
                    <p className="text-sm text-muted-foreground">Destino</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-500" />
              Áreas de Risco
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="p-2 bg-yellow-50 rounded-md">
              <p className="font-medium">BR-116 km 200-230</p>
              <p className="text-sm text-muted-foreground">
                Alto índice de roubos de carga
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Fuel className="h-5 w-5" />
              Postos Autorizados
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="p-2 bg-muted rounded-md">
              <p className="font-medium">Auto Posto São João</p>
              <p className="text-sm text-muted-foreground">
                BR-116 km 157 - Diesel S10
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pontos de Descanso</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="p-2 bg-muted rounded-md">
              <p className="font-medium">Ponto de Apoio Rodoserv</p>
              <p className="text-sm text-muted-foreground">
                Rod. Presidente Dutra, km 207
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
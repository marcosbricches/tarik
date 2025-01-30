// src/app/orders/[id]/tracking/page.tsx
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Clock, 
  MapPin, 
  Navigation, 
  Truck,
  User,
  Route as RouteIcon,
  ArrowLeft
} from "lucide-react"

export default function OrderTrackingPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao pedido
            </Button>
          </div>
          <h1 className="text-3xl font-bold">Rastreamento em Tempo Real</h1>
          <div className="flex items-center gap-2">
            <Badge>Em Transporte</Badge>
            <span className="text-sm text-muted-foreground">
              Pedido #1234
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Última atualização</p>
            <p className="font-medium">Há 2 minutos</p>
          </div>
          <Button>Atualizar</Button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3">
          <Card>
            <CardContent className="p-0">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative">
                Mapa com localização em tempo real
                <div className="absolute bottom-4 right-4 p-3 bg-white rounded-lg shadow-lg">
                  <div className="flex items-center gap-2">
                    <Navigation className="h-4 w-4 text-blue-500" />
                    <span className="text-sm font-medium">
                      Velocidade atual: 80 km/h
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Informações do Transporte</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <div>
                    <p className="font-medium">João Silva</p>
                    <p className="text-sm text-muted-foreground">Motorista</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4" />
                  <div>
                    <p className="font-medium">CAM-0123</p>
                    <p className="text-sm text-muted-foreground">Veículo</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Status da Entrega</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <RouteIcon className="h-4 w-4" />
                  <span>250km percorridos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>2h 30min em trânsito</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <div>
                    <p className="font-medium">Próxima Parada</p>
                    <p className="text-sm text-muted-foreground">
                      Rio de Janeiro - Previsão: 14:30
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Atualizações do Motorista</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="p-2 bg-muted rounded-md">
                <div className="flex justify-between items-start">
                  <p className="font-medium">Parada para almoço</p>
                  <span className="text-xs text-muted-foreground">12:00</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Parada regulamentar de 1 hora
                </p>
              </div>
              <div className="p-2 bg-muted rounded-md">
                <div className="flex justify-between items-start">
                  <p className="font-medium">Abastecimento</p>
                  <span className="text-xs text-muted-foreground">10:30</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Posto autorizado - São Paulo
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
// src/app/orders/[id]/page.tsx
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  CalendarClock, 
  Edit, 
  MapPin, 
  Package, 
  Route, 
  Truck, 
  User,
  Navigation,
  Image as ImageIcon,
  FileText,
  AlertTriangle
} from "lucide-react"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import Link from "next/link"

export default function OrderDetailsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold">Pedido #1234</h1>
          <div className="flex items-center gap-2">
            <Badge>Pendente</Badge>
            <span className="text-sm text-muted-foreground">
              Criado em 30/01/2025
            </span>
          </div>
        </div>
        <div className="flex gap-2">
  <Link href={`/orders/123/route`}>
    <Button variant="outline">
      <Route className="w-4 h-4 mr-2" />
      Ver Rota
    </Button>
  </Link>
  <Link href={`/orders/123/tracking`}>
    <Button variant="outline">
      <Navigation className="w-4 h-4 mr-2" />
      Rastreamento em Tempo Real
    </Button>
  </Link>
  <Link href={`/orders/123/schedule`}>
    <Button variant="outline">
      <CalendarClock className="w-4 h-4 mr-2" />
      Agendar
    </Button>
  </Link>
  <Link href={`/orders/123/edit`}>
    <Button>
      <Edit className="w-4 h-4 mr-2" />
      Editar
    </Button>
  </Link>
</div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              Informações do Serviço
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <span className="text-sm text-muted-foreground">Cliente</span>
              <p className="font-medium">Empresa ABC</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Serviço</span>
              <p className="font-medium">Transporte de Carga</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Data do Serviço</span>
              <p className="font-medium">01/02/2025</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Quantidade</span>
              <p className="font-medium">500 kg</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Origem e Destino
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <span className="text-sm text-muted-foreground">Origem</span>
              <p className="font-medium">São Paulo, SP</p>
            </div>
            <Separator />
            <div>
              <span className="text-sm text-muted-foreground">Destinos</span>
              <div className="space-y-2 mt-2">
                <div className="p-2 bg-muted rounded-md">
                  <p className="font-medium">Rio de Janeiro, RJ</p>
                  <p className="text-sm">Responsável: Maria Silva</p>
                </div>
                <div className="p-2 bg-muted rounded-md">
                  <p className="font-medium">Belo Horizonte, MG</p>
                  <p className="text-sm">Responsável: José Santos</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Truck className="h-5 w-5" />
              Transporte
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <span className="text-sm text-muted-foreground">Motorista</span>
              <div className="flex items-center gap-2 mt-1">
                <User className="h-4 w-4" />
                <p className="font-medium">João Silva</p>
              </div>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Veículo</span>
              <div className="flex items-center gap-2 mt-1">
                <Truck className="h-4 w-4" />
                <p className="font-medium">CAM-0123</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="route" className="space-y-4">
        <TabsList>
          <TabsTrigger value="route">Status da Rota</TabsTrigger>
          <TabsTrigger value="attachments">Anexos e Fotos</TabsTrigger>
          <TabsTrigger value="occurrences">Ocorrências</TabsTrigger>
        </TabsList>

        <TabsContent value="route">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Badge variant="outline" className="h-8">Em Andamento</Badge>
                  <span className="text-sm text-muted-foreground">
                    Atualizado há 5 minutos
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium">São Paulo, SP</p>
                      <p className="text-sm text-muted-foreground">
                        Saída: 30/01/2025 08:00
                      </p>
                    </div>
                  </div>

                  <div className="ml-4 border-l-2 border-dashed h-12" />

                  <div className="flex items-center gap-4">
                    <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium">Rio de Janeiro, RJ</p>
                      <p className="text-sm text-muted-foreground">
                        Previsão: 30/01/2025 16:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="attachments">
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-4 gap-4">
                {Array.from({length: 4}).map((_, i) => (
                  <div key={i} className="relative aspect-square bg-muted rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.jpg"
                      alt="Foto da entrega"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/50 text-white text-xs">
                      Entrega - Rio de Janeiro
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-2 p-2 bg-muted rounded-md">
                  <FileText className="h-4 w-4" />
                  <span className="text-sm">Nota Fiscal.pdf</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-muted rounded-md">
                  <FileText className="h-4 w-4" />
                  <span className="text-sm">Comprovante de Entrega.pdf</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="occurrences">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex gap-4 p-4 bg-muted rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">Atraso na Entrega</p>
                      <span className="text-sm text-muted-foreground">
                        30/01/2025 14:30
                      </span>
                    </div>
                    <p className="text-sm mt-1">
                      Trânsito intenso na BR-116, previsão de atraso de 1 hora.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Valores</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <span className="text-sm text-muted-foreground">Subtotal</span>
              <p className="text-xl font-semibold">R$ 1.500,00</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Desconto</span>
              <p className="text-xl font-semibold">R$ 0,00</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Total</span>
              <p className="text-xl font-semibold">R$ 1.500,00</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Informações Adicionais</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <span className="text-sm text-muted-foreground">Observações</span>
            <p className="mt-1">
              Carga frágil, necessário cuidado especial no manuseio.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
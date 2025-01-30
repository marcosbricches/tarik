// src/app/routes/page.tsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, AlertTriangle, Fuel, BedDouble,Settings2 } from "lucide-react"
import Link from "next/link"

export default function RoutesPage() {
  return (
          <div className="p-6 space-y-6">
            <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Gestão de Rotas</h1>
        <div className="flex gap-2">
          <Link href="/routes/config">
            <Button variant="outline">
              <Settings2 className="h-4 w-4 mr-2" />
              Configurações
            </Button>
          </Link>
          <Button variant="outline">Exportar</Button>
          <Link href="/routes/new">
          <Button>Nova Rota</Button>
          </Link>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Buscar por cliente, pedido, motorista ou veículo..." 
            className="pl-10"
          />
        </div>
      </div>

      <Tabs defaultValue="routes" className="space-y-4">
        <TabsList>
          <TabsTrigger value="routes">Rotas</TabsTrigger>
          <TabsTrigger value="risk-areas">Áreas de Risco</TabsTrigger>
          <TabsTrigger value="rest-points">Pontos de Descanso</TabsTrigger>
          <TabsTrigger value="gas-stations">Postos de Combustível</TabsTrigger>
        </TabsList>

        <TabsContent value="routes" className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            {Array.from({length: 6}).map((_, i) => (
              <Card key={i}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Rota #123</CardTitle>
                      <CardDescription>Pedido #1234</CardDescription>
                    </div>
                    <Badge>Em Andamento</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-green-500" />
                        <span>São Paulo, SP</span>
                      </div>
                      <div className="ml-2 border-l-2 border-dashed h-4" />
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-blue-500" />
                        <span>Rio de Janeiro, RJ</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">Distância:</span>
                        <p>435 km</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Tempo Est.:</span>
                        <p>6h 30min</p>
                      </div>
                    </div>
                    <Link href="/routes/123">
                    <Button className="w-full">Ver Detalhes</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="risk-areas">
          <div className="grid grid-cols-3 gap-4">
            {Array.from({length: 3}).map((_, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                    Área de Alto Risco
                  </CardTitle>
                  <CardDescription>BR-116 km 200-230</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-sm">
                      <span className="text-muted-foreground">Tipo:</span>
                      <p>Criminalidade elevada</p>
                    </div>
                    <div className="text-sm">
                      <span className="text-muted-foreground">Instruções:</span>
                      <p>Evitar tráfego noturno. Usar escolta quando necessário.</p>
                    </div>
                    <Button variant="outline" className="w-full">Editar Área</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="rest-points">
          <div className="grid grid-cols-3 gap-4">
            {Array.from({length: 4}).map((_, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BedDouble className="h-5 w-5" />
                    Ponto de Descanso
                  </CardTitle>
                  <CardDescription>Auto Posto São João</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-sm">
                      <span className="text-muted-foreground">Localização:</span>
                      <p>BR-116 km 157 - Paraná</p>
                    </div>
                    <div className="text-sm">
                      <span className="text-muted-foreground">Estrutura:</span>
                      <p>Dormitório, restaurante, chuveiros</p>
                    </div>
                    <div className="text-sm">
                      <span className="text-muted-foreground">Segurança:</span>
                      <p>Pátio fechado com vigilância 24h</p>
                    </div>
                    <Button variant="outline" className="w-full">Editar Ponto</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="gas-stations">
          <div className="grid grid-cols-3 gap-4">
            {Array.from({length: 4}).map((_, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Fuel className="h-5 w-5" />
                    Posto Autorizado
                  </CardTitle>
                  <CardDescription>Rede Ipiranga</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-sm">
                      <span className="text-muted-foreground">Localização:</span>
                      <p>Rod. Presidente Dutra, km 207</p>
                    </div>
                    <div className="text-sm">
                      <span className="text-muted-foreground">Combustíveis:</span>
                      <p>Diesel S10, Diesel Comum</p>
                    </div>
                    <div className="text-sm">
                      <span className="text-muted-foreground">Convênio:</span>
                      <p>CTF, Repom, Ticket</p>
                    </div>
                    <Button variant="outline" className="w-full">Editar Posto</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
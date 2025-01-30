// src/app/routes/config/page.tsx
import { RiskAreaForm } from "@/app/operational/routes/config/_components/risk-area-form"
import { RestPointForm } from "@/app/operational/routes/config/_components/rest-point-form"
import { GasStationForm } from "@/app/operational/routes/config/_components/gas-station-form"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  AlertTriangle,
  Fuel,
  BedDouble,
  Plus,
  Pencil,
  Trash2
} from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function RouteConfigPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Configurações de Rota</h1>
      </div>

      <Tabs defaultValue="risk-areas" className="space-y-4">
        <TabsList>
          <TabsTrigger value="risk-areas">Áreas de Risco</TabsTrigger>
          <TabsTrigger value="rest-points">Pontos de Descanso</TabsTrigger>
          <TabsTrigger value="gas-stations">Postos de Combustível</TabsTrigger>
        </TabsList>

        <TabsContent value="risk-areas">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Áreas de Risco</CardTitle>
              <RiskAreaForm 
                trigger={
                    <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Nova Área
                    </Button>
                } 
                />
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                {Array.from({length: 3}).map((_, i) => (
                  <Card key={i}>
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <AlertTriangle className="h-4 w-4 text-red-500" />
                            <span className="font-medium">Área de Alto Risco</span>
                          </div>
                          <p className="text-sm text-muted-foreground">BR-116 km 200-230</p>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="text-red-500">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="mt-4 grid gap-2">
                        <div>
                          <span className="text-sm font-medium">Tipo de Risco:</span>
                          <p className="text-sm text-muted-foreground">Criminalidade elevada</p>
                        </div>
                        <div>
                          <span className="text-sm font-medium">Instruções:</span>
                          <p className="text-sm text-muted-foreground">
                            Evitar tráfego noturno. Usar escolta quando necessário.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rest-points">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Pontos de Descanso</CardTitle>
              <RestPointForm 
                trigger={
                    <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Novo Ponto
                    </Button>
                } 
                />
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                {Array.from({length: 3}).map((_, i) => (
                  <Card key={i}>
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <BedDouble className="h-4 w-4" />
                            <span className="font-medium">Ponto de Apoio Rodoserv</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Rod. Presidente Dutra, km 207
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="text-red-500">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="mt-4 grid gap-2">
                        <div>
                          <span className="text-sm font-medium">Estrutura:</span>
                          <p className="text-sm text-muted-foreground">
                            Dormitório, restaurante, chuveiros
                          </p>
                        </div>
                        <div>
                          <span className="text-sm font-medium">Segurança:</span>
                          <p className="text-sm text-muted-foreground">
                            Pátio fechado com vigilância 24h
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="gas-stations">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Postos de Combustível</CardTitle>
              
                <GasStationForm 
                trigger={
                    <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Novo Posto
                    </Button>
                } 
                />
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                {Array.from({length: 3}).map((_, i) => (
                  <Card key={i}>
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <Fuel className="h-4 w-4" />
                            <span className="font-medium">Auto Posto São João</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            BR-116 km 157 - Paraná
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="text-red-500">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="mt-4 grid gap-2">
                        <div>
                          <span className="text-sm font-medium">Combustíveis:</span>
                          <p className="text-sm text-muted-foreground">
                            Diesel S10, Diesel Comum
                          </p>
                        </div>
                        <div>
                          <span className="text-sm font-medium">Convênios:</span>
                          <p className="text-sm text-muted-foreground">
                            CTF, Repom, Ticket
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
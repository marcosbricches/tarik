// app/reports/trips/page.tsx
import Link from "next/link"
import { ArrowLeft, Download, MapPin, Clock, Car, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

export default function TripsReportPage() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/reports">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-2xl font-bold">Relatório de Viagens</h1>
          <p className="text-muted-foreground">Análise detalhada de rotas e paradas</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Exportar PDF
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Exportar Excel
          </Button>
        </div>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Filtros</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Período</label>
                <Select defaultValue="last30">
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o período" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="last7">Últimos 7 dias</SelectItem>
                    <SelectItem value="last30">Últimos 30 dias</SelectItem>
                    <SelectItem value="last90">Últimos 90 dias</SelectItem>
                    <SelectItem value="custom">Personalizado</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Status</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Todos os status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos os status</SelectItem>
                    <SelectItem value="completed">Concluídas</SelectItem>
                    <SelectItem value="inProgress">Em andamento</SelectItem>
                    <SelectItem value="delayed">Atrasadas</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Motorista</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Todos os motoristas" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos os motoristas</SelectItem>
                    <SelectItem value="joao">João Silva</SelectItem>
                    <SelectItem value="carlos">Carlos Santos</SelectItem>
                    <SelectItem value="pedro">Pedro Oliveira</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Tipo de Parada</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Todos os tipos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos os tipos</SelectItem>
                    <SelectItem value="rest">Descanso</SelectItem>
                    <SelectItem value="fuel">Abastecimento</SelectItem>
                    <SelectItem value="delivery">Entrega</SelectItem>
                    <SelectItem value="unauthorized">Não autorizada</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total de Viagens
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center">
              <MapPin className="h-4 w-4 mr-2 text-primary" />
              <div className="text-2xl font-bold">847</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Tempo Total em Rota
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center">
              <Clock className="h-4 w-4 mr-2 text-primary" />
              <div className="text-2xl font-bold">3.254h</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Distância Total
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center">
              <Car className="h-4 w-4 mr-2 text-primary" />
              <div className="text-2xl font-bold">58.496 km</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Paradas Não Autorizadas
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center">
              <AlertTriangle className="h-4 w-4 mr-2 text-destructive" />
              <div className="text-2xl font-bold">12</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Histórico de Viagens</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Origem → Destino</TableHead>
                  <TableHead>Motorista</TableHead>
                  <TableHead>Veículo</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Tempo em Rota</TableHead>
                  <TableHead>Distância</TableHead>
                  <TableHead>Paradas</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">#1234</TableCell>
                  <TableCell>São Paulo → Rio de Janeiro</TableCell>
                  <TableCell>João Silva</TableCell>
                  <TableCell>XYZ-1234</TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-800">Concluída</Badge>
                  </TableCell>
                  <TableCell>6h 30min</TableCell>
                  <TableCell>435 km</TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Badge variant="outline">2 Descansos</Badge>
                      <Badge variant="outline">1 Abastecimento</Badge>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">#1235</TableCell>
                  <TableCell>Curitiba → Florianópolis</TableCell>
                  <TableCell>Carlos Santos</TableCell>
                  <TableCell>ABC-5678</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Em andamento</Badge>
                  </TableCell>
                  <TableCell>3h 45min</TableCell>
                  <TableCell>245 km</TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Badge variant="outline">1 Descanso</Badge>
                      <Badge variant="destructive">1 Não autorizada</Badge>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">#1236</TableCell>
                  <TableCell>Belo Horizonte → Brasília</TableCell>
                  <TableCell>Pedro Oliveira</TableCell>
                  <TableCell>DEF-9012</TableCell>
                  <TableCell>
                    <Badge variant="destructive">Atrasada</Badge>
                  </TableCell>
                  <TableCell>8h 15min</TableCell>
                  <TableCell>716 km</TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Badge variant="outline">3 Descansos</Badge>
                      <Badge variant="outline">2 Abastecimentos</Badge>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
// app/reports/maintenance/page.tsx
import Link from "next/link"
import { ArrowLeft, Download, Wrench, Clock, DollarSign, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

export default function MaintenanceReportPage() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/reports">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-2xl font-bold">Relatório de Manutenção</h1>
          <p className="text-muted-foreground">Histórico e custos de manutenção da frota</p>
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
                <label className="text-sm font-medium">Veículo</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Todos os veículos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos os veículos</SelectItem>
                    <SelectItem value="xyz-1234">XYZ-1234</SelectItem>
                    <SelectItem value="abc-5678">ABC-5678</SelectItem>
                    <SelectItem value="def-9012">DEF-9012</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Tipo</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Todos os tipos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos os tipos</SelectItem>
                    <SelectItem value="preventive">Preventiva</SelectItem>
                    <SelectItem value="corrective">Corretiva</SelectItem>
                    <SelectItem value="emergency">Emergencial</SelectItem>
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
                    <SelectItem value="completed">Concluída</SelectItem>
                    <SelectItem value="inProgress">Em andamento</SelectItem>
                    <SelectItem value="scheduled">Agendada</SelectItem>
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
                Total de Manutenções
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center">
              <Wrench className="h-4 w-4 mr-2 text-primary" />
              <div className="text-2xl font-bold">156</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Tempo Médio de Reparo
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center">
              <Clock className="h-4 w-4 mr-2 text-primary" />
              <div className="text-2xl font-bold">4.5h</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Custo Total
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center">
              <DollarSign className="h-4 w-4 mr-2 text-primary" />
              <div className="text-2xl font-bold">R$ 84.523</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Manutenções Pendentes
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center">
              <AlertCircle className="h-4 w-4 mr-2 text-destructive" />
              <div className="text-2xl font-bold">8</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Histórico de Manutenções</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Veículo</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Descrição</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Duração</TableHead>
                  <TableHead>Custo</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">#2234</TableCell>
                  <TableCell>30/01/2025</TableCell>
                  <TableCell>XYZ-1234</TableCell>
                  <TableCell>
                    <Badge variant="outline">Preventiva</Badge>
                  </TableCell>
                  <TableCell>Troca de óleo e filtros</TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-800">Concluída</Badge>
                  </TableCell>
                  <TableCell>2h</TableCell>
                  <TableCell>R$ 850,00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">#2235</TableCell>
                  <TableCell>29/01/2025</TableCell>
                  <TableCell>ABC-5678</TableCell>
                  <TableCell>
                    <Badge variant="destructive">Emergencial</Badge>
                  </TableCell>
                  <TableCell>Reparo no sistema de freios</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Em andamento</Badge>
                  </TableCell>
                  <TableCell>6h</TableCell>
                  <TableCell>R$ 2.450,00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">#2236</TableCell>
                  <TableCell>28/01/2025</TableCell>
                  <TableCell>DEF-9012</TableCell>
                  <TableCell>
                    <Badge variant="outline">Corretiva</Badge>
                  </TableCell>
                  <TableCell>Alinhamento e balanceamento</TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-800">Concluída</Badge>
                  </TableCell>
                  <TableCell>3h</TableCell>
                  <TableCell>R$ 520,00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
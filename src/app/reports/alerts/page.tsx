// app/reports/alerts/page.tsx
import Link from "next/link"
import { ArrowLeft, Download, AlertTriangle, CheckCircle2, Clock, AlertOctagon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

export default function AlertsReportPage() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/reports">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-2xl font-bold">Relatório de Alertas</h1>
          <p className="text-muted-foreground">Monitoramento de ocorrências e checklist pendentes</p>
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
                <label className="text-sm font-medium">Tipo</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Todos os tipos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos os tipos</SelectItem>
                    <SelectItem value="checklist">Checklist</SelectItem>
                    <SelectItem value="maintenance">Manutenção</SelectItem>
                    <SelectItem value="documents">Documentação</SelectItem>
                    <SelectItem value="route">Rota</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Prioridade</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Todas as prioridades" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas</SelectItem>
                    <SelectItem value="high">Alta</SelectItem>
                    <SelectItem value="medium">Média</SelectItem>
                    <SelectItem value="low">Baixa</SelectItem>
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
                    <SelectItem value="all">Todos</SelectItem>
                    <SelectItem value="pending">Pendente</SelectItem>
                    <SelectItem value="inProgress">Em andamento</SelectItem>
                    <SelectItem value="resolved">Resolvido</SelectItem>
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
                Total de Alertas
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center">
              <AlertOctagon className="h-4 w-4 mr-2 text-primary" />
              <div className="text-2xl font-bold">156</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Alertas Críticos
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center">
              <AlertTriangle className="h-4 w-4 mr-2 text-destructive" />
              <div className="text-2xl font-bold">23</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Em Andamento
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center">
              <Clock className="h-4 w-4 mr-2 text-primary" />
              <div className="text-2xl font-bold">45</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Resolvidos
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center">
              <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
              <div className="text-2xl font-bold">88</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Histórico de Alertas</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Descrição</TableHead>
                  <TableHead>Prioridade</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Responsável</TableHead>
                  <TableHead>Prazo</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">#4523</TableCell>
                  <TableCell>30/01/2025</TableCell>
                  <TableCell>
                    <Badge variant="outline">Checklist</Badge>
                  </TableCell>
                  <TableCell>Checklist não preenchido - Rota #1234</TableCell>
                  <TableCell>
                    <Badge variant="destructive">Alta</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">Pendente</Badge>
                  </TableCell>
                  <TableCell>João Silva</TableCell>
                  <TableCell>2h</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">#4524</TableCell>
                  <TableCell>30/01/2025</TableCell>
                  <TableCell>
                    <Badge variant="outline">Documentação</Badge>
                  </TableCell>
                  <TableCell>CNH próxima do vencimento</TableCell>
                  <TableCell>
                    <Badge className="bg-yellow-100 text-yellow-800">Média</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className="bg-blue-100 text-blue-800">Em andamento</Badge>
                  </TableCell>
                  <TableCell>Carlos Santos</TableCell>
                  <TableCell>5 dias</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">#4525</TableCell>
                  <TableCell>29/01/2025</TableCell>
                  <TableCell>
                    <Badge variant="outline">Manutenção</Badge>
                  </TableCell>
                  <TableCell>Problema no freio - Veículo ABC-5678</TableCell>
                  <TableCell>
                    <Badge variant="destructive">Alta</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-800">Resolvido</Badge>
                  </TableCell>
                  <TableCell>Oficina Central</TableCell>
                  <TableCell>Concluído</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
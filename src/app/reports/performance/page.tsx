// app/reports/performance/page.tsx
import Link from "next/link"
import { ArrowLeft, Download, Flag, Timer, AlertTriangle, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

export default function DriverPerformancePage() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/reports">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-2xl font-bold">Desempenho de Motoristas</h1>
          <p className="text-muted-foreground">Análise detalhada da performance dos motoristas</p>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                <label className="text-sm font-medium">Status</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Todos os status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos os status</SelectItem>
                    <SelectItem value="active">Em rota</SelectItem>
                    <SelectItem value="available">Disponível</SelectItem>
                    <SelectItem value="break">Em pausa</SelectItem>
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
                Total de Entregas
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center">
              <Flag className="h-4 w-4 mr-2 text-primary" />
              <div className="text-2xl font-bold">1.284</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Tempo Médio por Entrega
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center">
              <Timer className="h-4 w-4 mr-2 text-primary" />
              <div className="text-2xl font-bold">45 min</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Ocorrências
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
                Taxa de Conclusão
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center">
              <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
              <div className="text-2xl font-bold">98.5%</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Desempenho Individual</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Motorista</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Entregas</TableHead>
                  <TableHead>Tempo Médio</TableHead>
                  <TableHead>Ocorrências</TableHead>
                  <TableHead>Checklists Pendentes</TableHead>
                  <TableHead>Taxa de Conclusão</TableHead>
                  <TableHead>Avaliação</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">João Silva</TableCell>
                  <TableCell>
                    <Badge variant="default">Em rota</Badge>
                  </TableCell>
                  <TableCell>458</TableCell>
                  <TableCell>42 min</TableCell>
                  <TableCell>5</TableCell>
                  <TableCell>0</TableCell>
                  <TableCell>99.1%</TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-800">Excelente</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Carlos Santos</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Disponível</Badge>
                  </TableCell>
                  <TableCell>425</TableCell>
                  <TableCell>44 min</TableCell>
                  <TableCell>8</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>98.3%</TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-800">Muito Bom</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Pedro Oliveira</TableCell>
                  <TableCell>
                    <Badge variant="outline">Em pausa</Badge>
                  </TableCell>
                  <TableCell>401</TableCell>
                  <TableCell>48 min</TableCell>
                  <TableCell>10</TableCell>
                  <TableCell>3</TableCell>
                  <TableCell>97.8%</TableCell>
                  <TableCell>
                    <Badge className="bg-yellow-100 text-yellow-800">Bom</Badge>
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
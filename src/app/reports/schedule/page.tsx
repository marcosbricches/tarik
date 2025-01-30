// app/reports/schedule/page.tsx
import Link from "next/link"
import { ArrowLeft, Download, Calendar, Wrench, FileCheck, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

export default function ScheduleReportPage() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/reports">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-2xl font-bold">Agenda</h1>
          <p className="text-muted-foreground">Programação de manutenções e vistorias</p>
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
                <Select defaultValue="next30">
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o período" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="next7">Próximos 7 dias</SelectItem>
                    <SelectItem value="next30">Próximos 30 dias</SelectItem>
                    <SelectItem value="next90">Próximos 90 dias</SelectItem>
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
                    <SelectItem value="all">Todos</SelectItem>
                    <SelectItem value="maintenance">Manutenção</SelectItem>
                    <SelectItem value="inspection">Vistoria</SelectItem>
                    <SelectItem value="documentation">Documentação</SelectItem>
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
                    <SelectItem value="scheduled">Agendado</SelectItem>
                    <SelectItem value="pending">Pendente</SelectItem>
                    <SelectItem value="completed">Concluído</SelectItem>
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
                    <SelectItem value="all">Todos</SelectItem>
                    <SelectItem value="xyz-1234">XYZ-1234</SelectItem>
                    <SelectItem value="abc-5678">ABC-5678</SelectItem>
                    <SelectItem value="def-9012">DEF-9012</SelectItem>
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
                Total Agendado
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-primary" />
              <div className="text-2xl font-bold">24</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Manutenções
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center">
              <Wrench className="h-4 w-4 mr-2 text-primary" />
              <div className="text-2xl font-bold">12</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Vistorias
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center">
              <FileCheck className="h-4 w-4 mr-2 text-primary" />
              <div className="text-2xl font-bold">8</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Tempo Médio
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center">
              <Clock className="h-4 w-4 mr-2 text-primary" />
              <div className="text-2xl font-bold">2.5h</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Agenda de Serviços</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Data</TableHead>
                  <TableHead>Horário</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Veículo</TableHead>
                  <TableHead>Serviço</TableHead>
                  <TableHead>Responsável</TableHead>
                  <TableHead>Duração Est.</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>01/02/2025</TableCell>
                  <TableCell>08:00</TableCell>
                  <TableCell>
                    <Badge variant="outline">Manutenção</Badge>
                  </TableCell>
                  <TableCell>XYZ-1234</TableCell>
                  <TableCell>Troca de óleo e filtros</TableCell>
                  <TableCell>Oficina Central</TableCell>
                  <TableCell>2h</TableCell>
                  <TableCell>
                    <Badge className="bg-blue-100 text-blue-800">Agendado</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>02/02/2025</TableCell>
                  <TableCell>10:00</TableCell>
                  <TableCell>
                    <Badge variant="outline">Vistoria</Badge>
                  </TableCell>
                  <TableCell>ABC-5678</TableCell>
                  <TableCell>Inspeção semestral</TableCell>
                  <TableCell>João Silva</TableCell>
                  <TableCell>1.5h</TableCell>
                  <TableCell>
                    <Badge className="bg-yellow-100 text-yellow-800">Pendente</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>03/02/2025</TableCell>
                  <TableCell>14:00</TableCell>
                  <TableCell>
                    <Badge variant="outline">Documentação</Badge>
                  </TableCell>
                  <TableCell>DEF-9012</TableCell>
                  <TableCell>Renovação de licenciamento</TableCell>
                  <TableCell>Carlos Santos</TableCell>
                  <TableCell>1h</TableCell>
                  <TableCell>
                    <Badge className="bg-blue-100 text-blue-800">Agendado</Badge>
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
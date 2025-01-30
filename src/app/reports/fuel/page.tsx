// app/reports/fuel/page.tsx
import Link from "next/link"
import { ArrowLeft, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function FuelReportPage() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/reports">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-2xl font-bold">Relatório de Consumo de Combustível</h1>
          <p className="text-muted-foreground">Análise detalhada do consumo por veículo</p>
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
                <label className="text-sm font-medium">Tipo de Combustível</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Todos os tipos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos os tipos</SelectItem>
                    <SelectItem value="diesel">Diesel</SelectItem>
                    <SelectItem value="s10">Diesel S-10</SelectItem>
                    <SelectItem value="gas">Gasolina</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Resumo do Consumo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Total Abastecido
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">15.487 L</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Custo Total
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">R$ 84.235,45</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Média KM/L
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3,8 km/l</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Custo por KM
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">R$ 1,45/km</div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Detalhamento por Veículo</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Placa</TableHead>
                  <TableHead>Motorista</TableHead>
                  <TableHead>Volume (L)</TableHead>
                  <TableHead>Valor Total</TableHead>
                  <TableHead>KM Rodados</TableHead>
                  <TableHead>Média KM/L</TableHead>
                  <TableHead>Custo/KM</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>XYZ-1234</TableCell>
                  <TableCell>João Silva</TableCell>
                  <TableCell>5.234 L</TableCell>
                  <TableCell>R$ 28.587,30</TableCell>
                  <TableCell>19.845 km</TableCell>
                  <TableCell>3,8 km/l</TableCell>
                  <TableCell>R$ 1,44/km</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>ABC-5678</TableCell>
                  <TableCell>Carlos Santos</TableCell>
                  <TableCell>4.876 L</TableCell>
                  <TableCell>R$ 26.574,12</TableCell>
                  <TableCell>18.528 km</TableCell>
                  <TableCell>3,9 km/l</TableCell>
                  <TableCell>R$ 1,43/km</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>DEF-9012</TableCell>
                  <TableCell>Pedro Oliveira</TableCell>
                  <TableCell>5.377 L</TableCell>
                  <TableCell>R$ 29.074,03</TableCell>
                  <TableCell>20.123 km</TableCell>
                  <TableCell>3,7 km/l</TableCell>
                  <TableCell>R$ 1,47/km</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
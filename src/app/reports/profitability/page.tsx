// app/reports/profitability/page.tsx
import Link from "next/link"
import { ArrowLeft, Download, TrendingUp, DollarSign, BarChart3, PiggyBank } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

export default function ProfitabilityReportPage() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/reports">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-2xl font-bold">Lucratividade por Veículo</h1>
          <p className="text-muted-foreground">Análise detalhada de receitas, custos e margens</p>
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
                <label className="text-sm font-medium">Ordenar por</label>
                <Select defaultValue="profit">
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a ordenação" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="profit">Maior lucratividade</SelectItem>
                    <SelectItem value="revenue">Maior receita</SelectItem>
                    <SelectItem value="margin">Maior margem</SelectItem>
                    <SelectItem value="cost">Menor custo</SelectItem>
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
                Receita Total
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center">
              <DollarSign className="h-4 w-4 mr-2 text-primary" />
              <div className="text-2xl font-bold">R$ 845.672</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Custos Totais
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center">
              <PiggyBank className="h-4 w-4 mr-2 text-primary" />
              <div className="text-2xl font-bold">R$ 548.435</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Lucro Líquido
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center">
              <BarChart3 className="h-4 w-4 mr-2 text-primary" />
              <div className="text-2xl font-bold">R$ 297.237</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Margem Média
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center">
              <TrendingUp className="h-4 w-4 mr-2 text-primary" />
              <div className="text-2xl font-bold">35.2%</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Lucratividade por Veículo</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Veículo</TableHead>
                  <TableHead>Receita</TableHead>
                  <TableHead>Custos</TableHead>
                  <TableHead>Lucro</TableHead>
                  <TableHead>Margem</TableHead>
                  <TableHead>KM Rodados</TableHead>
                  <TableHead>Lucro/KM</TableHead>
                  <TableHead>Performance</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">XYZ-1234</TableCell>
                  <TableCell>R$ 284.580</TableCell>
                  <TableCell>R$ 178.234</TableCell>
                  <TableCell>R$ 106.346</TableCell>
                  <TableCell>37.4%</TableCell>
                  <TableCell>15.847 km</TableCell>
                  <TableCell>R$ 6,71/km</TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-800">Excelente</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">ABC-5678</TableCell>
                  <TableCell>R$ 265.430</TableCell>
                  <TableCell>R$ 175.845</TableCell>
                  <TableCell>R$ 89.585</TableCell>
                  <TableCell>33.8%</TableCell>
                  <TableCell>14.234 km</TableCell>
                  <TableCell>R$ 6,29/km</TableCell>
                  <TableCell>
                    <Badge className="bg-yellow-100 text-yellow-800">Bom</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">DEF-9012</TableCell>
                  <TableCell>R$ 295.662</TableCell>
                  <TableCell>R$ 194.356</TableCell>
                  <TableCell>R$ 101.306</TableCell>
                  <TableCell>34.3%</TableCell>
                  <TableCell>16.123 km</TableCell>
                  <TableCell>R$ 6,28/km</TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-800">Muito Bom</Badge>
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
// app/reports/costs/page.tsx
import Link from "next/link"
import { ArrowLeft, Download, DollarSign, TrendingUp, TrendingDown, PiggyBank } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

export default function CostsReportPage() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/reports">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-2xl font-bold">Custos e Despesas</h1>
          <p className="text-muted-foreground">Análise financeira detalhada da operação</p>
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
                <label className="text-sm font-medium">Categoria</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Todas as categorias" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas as categorias</SelectItem>
                    <SelectItem value="fuel">Combustível</SelectItem>
                    <SelectItem value="maintenance">Manutenção</SelectItem>
                    <SelectItem value="tolls">Pedágios</SelectItem>
                    <SelectItem value="staff">Pessoal</SelectItem>
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
                <label className="text-sm font-medium">Status</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Todos os status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos os status</SelectItem>
                    <SelectItem value="paid">Pago</SelectItem>
                    <SelectItem value="pending">Pendente</SelectItem>
                    <SelectItem value="overdue">Atrasado</SelectItem>
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
                Custo Total
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center">
              <DollarSign className="h-4 w-4 mr-2 text-primary" />
              <div className="text-2xl font-bold">R$ 248.567</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Custo Médio por KM
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center">
              <TrendingUp className="h-4 w-4 mr-2 text-primary" />
              <div className="text-2xl font-bold">R$ 1,85</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Variação Mensal
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center">
              <TrendingDown className="h-4 w-4 mr-2 text-destructive" />
              <div className="text-2xl font-bold">-2.5%</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Orçamento Restante
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center">
              <PiggyBank className="h-4 w-4 mr-2 text-primary" />
              <div className="text-2xl font-bold">R$ 51.433</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Detalhamento de Custos</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Data</TableHead>
                  <TableHead>Categoria</TableHead>
                  <TableHead>Descrição</TableHead>
                  <TableHead>Veículo</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Valor</TableHead>
                  <TableHead>Responsável</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>30/01/2025</TableCell>
                  <TableCell>
                    <Badge variant="outline">Combustível</Badge>
                  </TableCell>
                  <TableCell>Abastecimento Diesel S10</TableCell>
                  <TableCell>XYZ-1234</TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-800">Pago</Badge>
                  </TableCell>
                  <TableCell>R$ 1.250,00</TableCell>
                  <TableCell>João Silva</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>29/01/2025</TableCell>
                  <TableCell>
                    <Badge variant="outline">Manutenção</Badge>
                  </TableCell>
                  <TableCell>Troca de óleo e filtros</TableCell>
                  <TableCell>ABC-5678</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Pendente</Badge>
                  </TableCell>
                  <TableCell>R$ 850,00</TableCell>
                  <TableCell>Oficina Central</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>28/01/2025</TableCell>
                  <TableCell>
                    <Badge variant="outline">Pedágios</Badge>
                  </TableCell>
                  <TableCell>Rota SP-RJ</TableCell>
                  <TableCell>DEF-9012</TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-800">Pago</Badge>
                  </TableCell>
                  <TableCell>R$ 480,00</TableCell>
                  <TableCell>Pedro Oliveira</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
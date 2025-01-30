// financial/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowUpRight, 
  ArrowDownRight,
  DollarSign,
  FileBarChart,
  AlertCircle
} from "lucide-react"
import Link from "next/link"

export default function FinancialPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Dashboard Financeiro</h1>

      {/* Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total a Receber</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 45.231,89</div>
            <p className="text-xs text-muted-foreground">
              +20.1% em relação ao mês anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total a Pagar</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 32.123,45</div>
            <p className="text-xs text-muted-foreground">
              +12.3% em relação ao mês anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Saldo Previsto</CardTitle>
            <FileBarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 13.108,44</div>
            <p className="text-xs text-muted-foreground">
              Previsão para o mês atual
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Vencimentos Próximos</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              Próximos 7 dias
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Items */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Receitas Recentes */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Receitas Recentes</CardTitle>
            <Link href="/financial/revenue">
              <Button variant="outline" size="sm">Ver Todas</Button>
            </Link>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Valor</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Empresa ABC Ltda</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <ArrowUpRight className="h-4 w-4 text-green-500" />
                      R$ 1.500,00
                    </div>
                  </TableCell>
                  <TableCell><Badge variant="outline">Em Aberto</Badge></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Empresa XYZ S.A.</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <ArrowUpRight className="h-4 w-4 text-green-500" />
                      R$ 2.300,00
                    </div>
                  </TableCell>
                  <TableCell><Badge variant="outline">Em Aberto</Badge></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Despesas Recentes */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Despesas Recentes</CardTitle>
            <Link href="/financial/expense">
              <Button variant="outline" size="sm">Ver Todas</Button>
            </Link>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Fornecedor/Colaborador</TableHead>
                  <TableHead>Valor</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Fornecedor XYZ</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <ArrowDownRight className="h-4 w-4 text-red-500" />
                      R$ 2.500,00
                    </div>
                  </TableCell>
                  <TableCell><Badge variant="outline">Em Aberto</Badge></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>João Silva</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <ArrowDownRight className="h-4 w-4 text-red-500" />
                      R$ 1.800,00
                    </div>
                  </TableCell>
                  <TableCell><Badge variant="outline">Em Aberto</Badge></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
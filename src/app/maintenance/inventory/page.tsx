// src/app/maintenance/inventory/page.tsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"
import { Plus } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function InventoryPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Gestão de Estoque</h1>
        <div className="flex gap-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Nova Entrada
          </Button>
          <Button variant="outline">
            <Plus className="mr-2 h-4 w-4" />
            Nova Saída
          </Button>
        </div>
      </div>

      {/* Saldo e Filtros */}
      <Card>
        <CardContent className="p-6">
          <div className="grid gap-6">
            <div className="flex flex-wrap gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Buscar por produto (nome, SKU, código de barras)..."
                />
              </div>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Fornecedor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="1">Auto Peças Silva</SelectItem>
                  <SelectItem value="2">Pneus & Cia</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Período" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Hoje</SelectItem>
                  <SelectItem value="week">Última semana</SelectItem>
                  <SelectItem value="month">Último mês</SelectItem>
                  <SelectItem value="custom">Personalizado</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">
                      Saldo Atual
                    </p>
                    <p className="text-2xl font-bold">1.234</p>
                    <p className="text-sm text-muted-foreground">produtos em estoque</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">
                      Entradas no Período
                    </p>
                    <p className="text-2xl font-bold text-green-600">+256</p>
                    <p className="text-sm text-muted-foreground">produtos</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">
                      Saídas no Período
                    </p>
                    <p className="text-2xl font-bold text-red-600">-128</p>
                    <p className="text-sm text-muted-foreground">produtos</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Histórico */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4">Histórico de Movimentações</h2>
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Data</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Produto</TableHead>
                  <TableHead>Quantidade</TableHead>
                  <TableHead>Fornecedor</TableHead>
                  <TableHead>Saldo</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>30/01/2025 14:30</TableCell>
                  <TableCell>
                    <span className="text-green-600 font-medium">Entrada</span>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">Óleo de Motor 5W30</p>
                      <p className="text-sm text-muted-foreground">SKU: OL-1234</p>
                    </div>
                  </TableCell>
                  <TableCell>+50</TableCell>
                  <TableCell>Auto Peças Silva</TableCell>
                  <TableCell>150</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>30/01/2025 10:15</TableCell>
                  <TableCell>
                    <span className="text-red-600 font-medium">Saída</span>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">Filtro de Ar</p>
                      <p className="text-sm text-muted-foreground">SKU: FT-5678</p>
                    </div>
                  </TableCell>
                  <TableCell>-10</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>40</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
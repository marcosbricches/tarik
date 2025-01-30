// financial/expense/page.tsx
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { PlusCircle } from "lucide-react"
import Link from "next/link"

export default function ExpensePage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Despesas</h1>
        <Link href="/financial/expense/new">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Nova Despesa
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <div className="flex gap-4">
        <Input
          placeholder="Buscar por fornecedor/colaborador..."
          className="max-w-[300px]"
        />
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Tipo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="supplier">Fornecedor</SelectItem>
            <SelectItem value="driver">Motorista</SelectItem>
            <SelectItem value="user">Usuário</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pending">Em Aberto</SelectItem>
            <SelectItem value="late">Atrasada</SelectItem>
            <SelectItem value="paid">Pago</SelectItem>
          </SelectContent>
        </Select>
        <Input 
          type="date"
          className="w-[180px]"
        />
      </div>

      {/* Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Fornecedor/Colaborador</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Data Vencimento</TableHead>
              <TableHead>Valor</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Recorrência</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Fornecedor XYZ</TableCell>
              <TableCell>
                <Badge variant="secondary">Fornecedor</Badge>
              </TableCell>
              <TableCell>10/02/2025</TableCell>
              <TableCell>R$ 2.500,00</TableCell>
              <TableCell>
                <Badge variant="outline">Em Aberto</Badge>
              </TableCell>
              <TableCell>Mensal</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Link href="/financial/expense/1">
                    <Button variant="outline" size="sm">
                      Visualizar
                    </Button>
                  </Link>
                  <Link href="/financial/expense/1/edit">
                    <Button variant="outline" size="sm">
                      Editar
                    </Button>
                  </Link>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>João Silva</TableCell>
              <TableCell>
                <Badge variant="secondary">Motorista</Badge>
              </TableCell>
              <TableCell>15/02/2025</TableCell>
              <TableCell>R$ 1.800,00</TableCell>
              <TableCell>
                <Badge variant="outline">Em Aberto</Badge>
              </TableCell>
              <TableCell>Mensal</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Link href="/financial/expense/2">
                    <Button variant="outline" size="sm">
                      Visualizar
                    </Button>
                  </Link>
                  <Link href="/financial/expense/2/edit">
                    <Button variant="outline" size="sm">
                      Editar
                    </Button>
                  </Link>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
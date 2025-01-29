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
import { PlusCircle, Search } from "lucide-react"
import Link from "next/link"

export default function CargoTypesPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Tipos de Carga</h1>
        <Link href="/operational/cargo-types/new">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Novo Tipo de Carga
          </Button>
        </Link>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por nome"
              className="pl-8"
            />
          </div>
        </div>
        <Select defaultValue="active">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="active">Ativos</SelectItem>
            <SelectItem value="inactive">Inativos</SelectItem>
            <SelectItem value="all">Todos</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Categoria</TableHead>
              <TableHead>Subcategorias</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>001</TableCell>
              <TableCell>Inflamáveis</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Badge variant="secondary">Diesel</Badge>
                  <Badge variant="secondary">Gasolina</Badge>
                  <Badge variant="secondary">Querosene</Badge>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="secondary">Ativo</Badge>
              </TableCell>
              <TableCell className="text-right">
                <Link href="/operational/cargo-types/1">
                  <Button variant="ghost" size="sm">
                    Editar
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>002</TableCell>
              <TableCell>Perecíveis</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Badge variant="secondary">Alimentos</Badge>
                  <Badge variant="secondary">Medicamentos</Badge>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="secondary">Ativo</Badge>
              </TableCell>
              <TableCell className="text-right">
                <Link href="/operational/cargo-types/2">
                  <Button variant="ghost" size="sm">
                    Editar
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
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
import {
  Badge,
} from "@/components/ui/badge"
import { PlusCircle, Search } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Gestão de Serviços</h1>
        <Link href="/services/new">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Novo Serviço
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
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Tipo de Veículo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="truck">Caminhão</SelectItem>
            <SelectItem value="van">Van</SelectItem>
            <SelectItem value="car">Carro</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Tipo de Carga" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="general">Geral</SelectItem>
            <SelectItem value="refrigerated">Refrigerada</SelectItem>
            <SelectItem value="dangerous">Perigosa</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Tipo de Tarifa</TableHead>
              <TableHead>Tipo de Veículo</TableHead>
              <TableHead>Tipo de Carga</TableHead>
              <TableHead>Valor</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>001</TableCell>
              <TableCell>Entrega Expressa Luanda</TableCell>
              <TableCell>
                <Badge variant="secondary">Tarifa Fixa</Badge>
              </TableCell>
              <TableCell>Van</TableCell>
              <TableCell>Geral</TableCell>
              <TableCell>40.000,00 Kz</TableCell>
              <TableCell>
                <Badge variant="default">Ativo</Badge>
              </TableCell>
              <TableCell className="text-right">
                <Link href="/services/1/edit">
                  <Button variant="ghost" size="sm">
                    Editar
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>002</TableCell>
              <TableCell>Transporte por KM</TableCell>
              <TableCell>
                <Badge variant="secondary">Tarifa Variável</Badge>
              </TableCell>
              <TableCell>Caminhão</TableCell>
              <TableCell>Refrigerada</TableCell>
              <TableCell>69 Kz/Km</TableCell>
              <TableCell>
                <Badge variant="default">Ativo</Badge>
              </TableCell>
              <TableCell className="text-right">
                <Link href="/services/2/edit">
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
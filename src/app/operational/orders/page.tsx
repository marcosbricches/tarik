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
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { CalendarIcon, Download, MapPin, Plus, Search } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function OrdersPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Pedidos</h1>
        <div className="flex gap-2">
  <Button variant="outline">
    <Download className="w-4 h-4 mr-2" />
    Exportar PDF
  </Button>
  <Link href="/operational/orders/new">
    <Button>
      <Plus className="w-4 h-4 mr-2" />
      Novo Pedido
    </Button>
  </Link>
</div>
      </div>

      <div className="flex gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Buscar por cliente, serviço, motorista ou veículo..." 
            className="pl-10"
          />
        </div>
        
        <Select defaultValue="active">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="active">Ativos</SelectItem>
            <SelectItem value="pending">Pendentes</SelectItem>
            <SelectItem value="scheduled">Agendados</SelectItem>
            <SelectItem value="in_transit">Em Transporte</SelectItem>
            <SelectItem value="completed">Concluídos</SelectItem>
            <SelectItem value="cancelled">Cancelados</SelectItem>
          </SelectContent>
        </Select>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-[250px] justify-start text-left font-normal">
              <CalendarIcon className="mr-2 h-4 w-4" />
              <span>Selecione o período</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="range"
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Cliente</TableHead>
            <TableHead>Serviço</TableHead>
            <TableHead>Data Serviço</TableHead>
            <TableHead>Origem/Destino</TableHead>
            <TableHead>Motorista</TableHead>
            <TableHead>Veículo</TableHead>
            <TableHead>Valor Total</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">#1234</TableCell>
            <TableCell>
              <Badge variant="secondary">Pendente</Badge>
            </TableCell>
            <TableCell>Empresa ABC</TableCell>
            <TableCell>Transporte de Carga</TableCell>
            <TableCell>{format(new Date(), "dd/MM/yyyy")}</TableCell>
            <TableCell>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                São Paulo → Rio de Janeiro
              </div>
            </TableCell>
            <TableCell>João Silva</TableCell>
            <TableCell>CAM-0123</TableCell>
            <TableCell>R$ 1.500,00</TableCell>
            <TableCell className="text-right">
            <div className="flex justify-end gap-2">
            <Link href={`/operational/orders/123`}>
    <Button variant="outline" size="sm">Ver Detalhes</Button>
  </Link>
  <Link href={`/operational/orders/123/edit`}>
    <Button variant="outline" size="sm">Editar</Button>
  </Link>
  <Link href={`/operational/orders/123/tracking`}>
    <Button variant="outline" size="sm">Ver Rota</Button>
  </Link>
  <Link href={`/operational/orders/123/schedule`}>
    <Button size="sm">Agendar</Button>
  </Link>
</div>
            </TableCell>
          </TableRow>
          {/* Mais linhas de exemplo aqui */}
        </TableBody>
      </Table>
    </div>
  )
}
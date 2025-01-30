// src/app/maintenance/workshop/page.tsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Clock, Filter, Plus, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function WorkshopManagementPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Gestão de Manutenções</h1>
        <Button asChild>
          <Link href="/maintenance/workshop/work-orders/new">
            <Plus className="mr-2 h-4 w-4" />
            Nova Ordem de Serviço
          </Link>
        </Button>
      </div>

      {/* Indicadores */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-red-100 rounded-full">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Alta Prioridade</p>
                <p className="text-2xl font-bold">5</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-yellow-100 rounded-full">
                <AlertTriangle className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Média Prioridade</p>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-blue-100 rounded-full">
                <AlertTriangle className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Baixa Prioridade</p>
                <p className="text-2xl font-bold">8</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-orange-100 rounded-full">
                <Clock className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Preventivas Atrasadas</p>
                <p className="text-2xl font-bold">3</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alertas */}
      <Alert className="bg-orange-100 text-orange-800 border-orange-200">
        <AlertDescription className="flex items-center gap-2">
          <AlertTriangle className="h-4 w-4" />
          Existem manutenções preventivas atrasadas que precisam de atenção
        </AlertDescription>
      </Alert>

      {/* Filtros */}
      <div className="flex flex-wrap gap-4">
        <Input
          placeholder="Buscar por veículo..."
          className="max-w-sm"
        />
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Prioridade" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="high">Alta</SelectItem>
            <SelectItem value="medium">Média</SelectItem>
            <SelectItem value="low">Baixa</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pending">Pendente</SelectItem>
            <SelectItem value="in-os">Em OS</SelectItem>
            <SelectItem value="finished">Finalizado</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Origem" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="preventive">Preventiva</SelectItem>
            <SelectItem value="checklist">Check-list</SelectItem>
            <SelectItem value="occurrence">Ocorrência</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Lista de Manutenções */}
      <Card>
        <CardContent className="p-6">
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Veículo</TableHead>
                  <TableHead>Problema</TableHead>
                  <TableHead>Prioridade</TableHead>
                  <TableHead>Origem</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>OS</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>ABC-1234</TableCell>
                  <TableCell>Freios com desgaste excessivo</TableCell>
                  <TableCell>
                    <Badge variant="destructive" className="bg-red-100 text-red-800">
                      Alta
                    </Badge>
                  </TableCell>
                  <TableCell>Check-list</TableCell>
                  <TableCell>30/01/2025</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Pendente</Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/maintenance/workshop/work-orders/new">
                        Criar OS
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>XYZ-5678</TableCell>
                  <TableCell>Troca de óleo programada</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-yellow-100 text-yellow-800">
                      Média
                    </Badge>
                  </TableCell>
                  <TableCell>Preventiva</TableCell>
                  <TableCell>29/01/2025</TableCell>
                  <TableCell>
                    <Badge>Em OS #123</Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/maintenance/workshop/work-orders/123">
                        Ver OS
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
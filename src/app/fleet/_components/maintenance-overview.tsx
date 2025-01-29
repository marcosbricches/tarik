// src/app/fleet/_components/maintenance-overview.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { WrenchIcon, AlertTriangle, Clock } from "lucide-react"

export function MaintenanceOverview() {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center space-x-2">
            <WrenchIcon className="h-5 w-5" />
            <CardTitle>Em Manutenção</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-sm text-muted-foreground">Veículos</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center space-x-2">
            <AlertTriangle className="h-5 w-5" />
            <CardTitle>Atrasadas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-sm text-muted-foreground">Manutenções</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center space-x-2">
            <Clock className="h-5 w-5" />
            <CardTitle>Programadas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-sm text-muted-foreground">Para os próximos 30 dias</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Próximas Manutenções</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Veículo</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Data Prevista</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>ABC-1234</TableCell>
                <TableCell>Revisão Preventiva</TableCell>
                <TableCell>30/01/2025</TableCell>
                <TableCell className="text-yellow-600">Agendada</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>XYZ-5678</TableCell>
                <TableCell>Troca de Óleo</TableCell>
                <TableCell>01/02/2025</TableCell>
                <TableCell className="text-green-600">Confirmada</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>DEF-9012</TableCell>
                <TableCell>Revisão Geral</TableCell>
                <TableCell>05/02/2025</TableCell>
                <TableCell className="text-red-600">Pendente</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
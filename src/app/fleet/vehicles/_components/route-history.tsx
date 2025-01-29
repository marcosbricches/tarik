// src/app/fleet/vehicles/_components/route-history.tsx
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { Badge } from "@/components/ui/badge"
  
  interface RouteRecord {
    id: number
    date: string
    origin: string
    destination: string
    status: "completed" | "in_progress" | "scheduled"
    driver: string
  }
  
  interface RouteHistoryProps {
    records: RouteRecord[]
  }
  
  export function RouteHistory({ records }: RouteHistoryProps) {
    const statusConfig = {
      completed: { label: "Concluída", variant: "default" as const },
      in_progress: { label: "Em Andamento", variant: "outline" as const },
      scheduled: { label: "Agendada", variant: "secondary" as const }
    }
  
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Data</TableHead>
            <TableHead>Origem</TableHead>
            <TableHead>Destino</TableHead>
            <TableHead>Motorista</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {records.map((record) => (
            <TableRow key={record.id}>
              <TableCell>{record.date}</TableCell>
              <TableCell>{record.origin}</TableCell>
              <TableCell>{record.destination}</TableCell>
              <TableCell>{record.driver}</TableCell>
              <TableCell>
                <Badge variant={statusConfig[record.status].variant}>
                  {statusConfig[record.status].label}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
// src/app/fleet/vehicles/_components/maintenance-history.tsx
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { Badge } from "@/components/ui/badge"
  
  interface MaintenanceRecord {
    id: number
    date: string
    type: string
    description: string
    status: "completed" | "pending" | "in_progress"
    cost?: number
  }
  
  interface MaintenanceHistoryProps {
    records: MaintenanceRecord[]
  }
  
  export function MaintenanceHistory({ records }: MaintenanceHistoryProps) {
    const statusConfig = {
      completed: { label: "Concluída", variant: "default" as const },
      pending: { label: "Pendente", variant: "secondary" as const },
      in_progress: { label: "Em Andamento", variant: "outline" as const }
    }
  
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Data</TableHead>
            <TableHead>Tipo</TableHead>
            <TableHead>Descrição</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Custo</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {records.map((record) => (
            <TableRow key={record.id}>
              <TableCell>{record.date}</TableCell>
              <TableCell>{record.type}</TableCell>
              <TableCell>{record.description}</TableCell>
              <TableCell>
                <Badge variant={statusConfig[record.status].variant}>
                  {statusConfig[record.status].label}
                </Badge>
              </TableCell>
              <TableCell>
                {record.cost?.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
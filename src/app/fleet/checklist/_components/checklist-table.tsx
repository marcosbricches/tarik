// src/app/fleet/checklist/_components/checklist-table.tsx
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { Button } from "@/components/ui/button"
  import { Badge } from "@/components/ui/badge"
  import Link from "next/link"
  import { Download, FileSearch } from "lucide-react"
  
  interface ChecklistItem {
    id: number
    date: string
    time: string
    vehiclePlate: string
    vehicleModel: string
    responsibleName: string
    type: "driver" | "mechanic"
    status: "ok" | "problem"
  }
  
  interface ChecklistTableProps {
    data: ChecklistItem[]
  }
  
  export function ChecklistTable({ data }: ChecklistTableProps) {
    return (
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Data/Hora</TableHead>
              <TableHead>Veículo</TableHead>
              <TableHead>Responsável</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <div className="flex flex-col">
                    <span>{item.date}</span>
                    <span className="text-muted-foreground text-sm">{item.time}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span>{item.vehiclePlate}</span>
                    <span className="text-muted-foreground text-sm">{item.vehicleModel}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span>{item.responsibleName}</span>
                    <Badge variant="outline" className="w-fit">
                      {item.type === "driver" ? "Motorista" : "Mecânico"}
                    </Badge>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant={item.status === "ok" ? "default" : "destructive"}>
                    {item.status === "ok" ? "Em Ordem" : "Problema"}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end space-x-2">
                    <Link href={`/fleet/checklist/${item.id}`}>
                      <Button variant="outline" size="icon">
                        <FileSearch className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Button variant="outline" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }
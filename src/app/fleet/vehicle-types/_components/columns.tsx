// src/app/fleet/vehicle-types/_components/vehicle-types-table.tsx
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { Badge } from "@/components/ui/badge"
  import { Button } from "@/components/ui/button"
  import { MoreHorizontal } from "lucide-react"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
  interface VehicleType {
    id: number
    status: boolean
    name: string
    capacity: number
    unit: string
    observations: string
  }
  
  interface VehicleTypesTableProps {
    data: VehicleType[]
  }
  
  export function VehicleTypesTable({ data }: VehicleTypesTableProps) {
    const getUnitLabel = (unit: string) => {
      const unitLabels: Record<string, string> = {
        liters: "L",
        cubic_meters: "m³",
        tons: "t",
        kilos: "kg"
      }
      return unitLabels[unit] || unit
    }
  
    return (
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Status</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Capacidade</TableHead>
              <TableHead className="w-[100px]">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <Badge variant={item.status ? "default" : "secondary"}>
                    {item.status ? "Ativo" : "Inativo"}
                  </Badge>
                </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>
                  {item.capacity} {getUnitLabel(item.unit)}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Visualizar</DropdownMenuItem>
                      <DropdownMenuItem>Editar</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        Excluir
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }
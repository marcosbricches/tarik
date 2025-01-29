// src/app/fleet/vehicles/_components/vehicles-table.tsx
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { Button } from "@/components/ui/button"
  import { MoreHorizontal } from "lucide-react"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import Link from "next/link"
  import { VehicleStatusBadge } from "./vehicle-status-badge"
  
  interface Vehicle {
    id: number
    status: "available" | "inactive" | "maintenance"
    plate: string
    type: string
    brand: string
    model: string
    manufactureYear: number
  }
  
  interface VehiclesTableProps {
    data: Vehicle[]
  }
  
  export function VehiclesTable({ data }: VehiclesTableProps) {
    return (
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Status</TableHead>
              <TableHead>Placa</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Marca/Modelo</TableHead>
              <TableHead>Ano</TableHead>
              <TableHead className="w-[100px]">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((vehicle) => (
              <TableRow key={vehicle.id}>
                <TableCell>
                  <VehicleStatusBadge status={vehicle.status} />
                </TableCell>
                <TableCell className="font-medium">{vehicle.plate}</TableCell>
                <TableCell>{vehicle.type}</TableCell>
                <TableCell>{`${vehicle.brand} ${vehicle.model}`}</TableCell>
                <TableCell>{vehicle.manufactureYear}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link href={`/fleet/vehicles/${vehicle.id}`}>
                          Visualizar
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href={`/fleet/vehicles/${vehicle.id}/edit`}>
                          Editar
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href={`/fleet/vehicles/${vehicle.id}/maintenance`}>
                          Manutenções
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href={`/fleet/vehicles/${vehicle.id}/routes`}>
                          Rotas
                        </Link>
                      </DropdownMenuItem>
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
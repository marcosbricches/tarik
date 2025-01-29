//src/app/fleet/drivers/_components/drivers-table.tsx
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
import { DriverStatusBadge } from "./driver-status-badge"

interface Driver {
  id: number
  status: "active" | "inactive"
  name: string
  license: string
  licenseCategory: string
  email: string
  phone: string
}

interface DriversTableProps {
  data: Driver[]
}

export function DriversTable({ data }: DriversTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Status</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>CNH</TableHead>
            <TableHead>Categoria</TableHead>
            <TableHead>Contato</TableHead>
            <TableHead className="w-[100px]">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((driver) => (
            <TableRow key={driver.id}>
              <TableCell>
                <DriverStatusBadge status={driver.status} />
              </TableCell>
              <TableCell className="font-medium">{driver.name}</TableCell>
              <TableCell>{driver.license}</TableCell>
              <TableCell>{driver.licenseCategory}</TableCell>
              <TableCell>
                <div className="text-sm">
                  <div>{driver.email}</div>
                  <div className="text-muted-foreground">{driver.phone}</div>
                </div>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link href={`/fleet/drivers/${driver.id}`}>
                        Visualizar
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href={`/fleet/drivers/${driver.id}/edit`}>
                        Editar
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href={`/fleet/drivers/${driver.id}/routes`}>
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
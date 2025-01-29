// src/app/fleet/brands-models/_components/brands-models-table.tsx
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
  import Link from "next/link"
  
  interface BrandModel {
    id: number
    status: boolean
    brand: string
    models: string[]
    observations?: string
  }
  
  interface BrandsModelsTableProps {
    data: BrandModel[]
  }
  
  export function BrandsModelsTable({ data }: BrandsModelsTableProps) {
    return (
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Status</TableHead>
              <TableHead>Marca</TableHead>
              <TableHead>Modelos</TableHead>
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
                <TableCell>{item.brand}</TableCell>
                <TableCell>{item.models.join(", ")}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link href={`/fleet/brands-models/${item.id}`}>
                          Visualizar
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href={`/fleet/brands-models/${item.id}/edit`}>
                          Editar
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
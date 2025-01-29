// src/app/fleet/drivers/page.tsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Plus, Search } from "lucide-react"
import { DriversTable } from "./_components/drivers-table"
import Link from "next/link"

const mockData = [
  {
    id: 1,
    status: "active" as "active",
    name: "João Silva",
    license: "12345678901",
    licenseCategory: "E",
    email: "joao.silva@email.com",
    phone: "(11) 98765-4321"
  },
  {
    id: 2,
    status: "active" as "active" | "inactive",
    name: "Carlos Santos",
    license: "98765432101",
    licenseCategory: "D",
    email: "carlos.santos@email.com",
    phone: "(11) 91234-5678"
  }
]

export default function DriversPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Motoristas</h2>
        <Link href="/fleet/drivers/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Novo Motorista
          </Button>
        </Link>
      </div>

      <div className="space-y-4">
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2 flex-1 max-w-sm">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input placeholder="Buscar por nome, CNH..." />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="active">Ativos</SelectItem>
              <SelectItem value="inactive">Inativos</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Categoria CNH" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="A">A</SelectItem>
              <SelectItem value="B">B</SelectItem>
              <SelectItem value="C">C</SelectItem>
              <SelectItem value="D">D</SelectItem>
              <SelectItem value="E">E</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <DriversTable data={mockData} />
      </div>
    </div>
  )
}
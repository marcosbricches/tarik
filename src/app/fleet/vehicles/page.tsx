// src/app/fleet/vehicles/page.tsx
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
import { VehiclesTable } from "./_components/vehicles-table"
import Link from "next/link"

type Vehicle = {
  id: number;
  status: "available" | "maintenance" | "inactive";
  plate: string;
  type: string;
  brand: string;
  model: string;
  manufactureYear: number;
};

const mockData: Vehicle[] = [
  {
    id: 1,
    status: "available",
    plate: "ABC1234",
    type: "Caminhão Tanque",
    brand: "Volvo",
    model: "FH 460",
    manufactureYear: 2022
  },
  {
    id: 2,
    status: "maintenance",
    plate: "XYZ5678",
    type: "Caminhão Baú",
    brand: "Mercedes",
    model: "Actros",
    manufactureYear: 2021
  }
] as const

export default function VehiclesPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Veículos</h2>
        <Link href="/fleet/vehicles/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Novo Veículo
          </Button>
        </Link>
      </div>

      <div className="space-y-4">
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2 flex-1 max-w-sm">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input placeholder="Buscar por placa, tipo..." />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="available">Disponíveis</SelectItem>
              <SelectItem value="maintenance">Em Manutenção</SelectItem>
              <SelectItem value="inactive">Inativos</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Tipo de Veículo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tank">Caminhão Tanque</SelectItem>
              <SelectItem value="box">Caminhão Baú</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <VehiclesTable data={mockData} />
      </div>
    </div>
  )
}
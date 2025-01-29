// src/app/fleet/checklist/page.tsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { ChecklistTable } from "./_components/checklist-table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { DateFilter } from "./_components/date-filter"

type ChecklistItem = {
  id: number;
  date: string;
  time: string;
  vehiclePlate: string;
  vehicleModel: string;
  responsibleName: string;
  type: "driver" | "mechanic";
  status: "ok" | "problem";
};

const mockData: ChecklistItem[] = [
  {
    id: 1,
    date: "29/01/2024",
    time: "08:00",
    vehiclePlate: "ABC-1234",
    vehicleModel: "Volvo FH 460",
    responsibleName: "João Silva",
    type: "driver",
    status: "ok"
  },
  {
    id: 2,
    date: "29/01/2024",
    time: "14:30",
    vehiclePlate: "XYZ-5678",
    vehicleModel: "Mercedes Actros",
    responsibleName: "Carlos Santos",
    type: "mechanic",
    status: "problem"
  }
] as const

export default function ChecklistPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Gestão de Check-list</h2>
      </div>

      <div className="space-y-4">
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2 flex-1 max-w-sm">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input placeholder="Buscar por veículo, responsável..." />
          </div>

          <DateFilter />

          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="driver">Motorista</SelectItem>
              <SelectItem value="mechanic">Mecânico</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="ok">Em Ordem</SelectItem>
              <SelectItem value="problem">Problema</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <ChecklistTable data={mockData} />
      </div>
    </div>
  )
}
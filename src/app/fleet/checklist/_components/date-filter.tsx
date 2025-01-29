// src/app/fleet/checklist/_components/date-filter.tsx
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  
  export function DateFilter() {
    return (
      <div className="flex items-end gap-2">
        <div className="space-y-1">
          <Label>Data Inicial</Label>
          <Input type="date" className="w-[160px]" />
        </div>
        <div className="space-y-1">
          <Label>Data Final</Label>
          <Input type="date" className="w-[160px]" />
        </div>
        <Select>
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Período" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="today">Hoje</SelectItem>
            <SelectItem value="yesterday">Ontem</SelectItem>
            <SelectItem value="last7">Últimos 7 dias</SelectItem>
            <SelectItem value="last30">Últimos 30 dias</SelectItem>
            <SelectItem value="custom">Personalizado</SelectItem>
          </SelectContent>
        </Select>
      </div>
    )
  }
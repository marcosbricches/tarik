// src/app/maintenance/maintenance-items/new/page.tsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function NewMaintenanceItem() {
  return (
    <div className="p-6 space-y-6 max-w-3xl mx-auto">
      <div className="flex items-center gap-4">
        <Link href="/maintenance/maintenance-items">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Novo Item de Manutenção</h1>
      </div>

      <Card>
        <CardContent className="p-6 space-y-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="font-medium">Nome*</label>
              <Input placeholder="Digite o nome do serviço" />
            </div>

            <div className="space-y-2">
              <label className="font-medium">Descrição</label>
              <Textarea 
                placeholder="Digite uma descrição detalhada da manutenção"
                className="resize-none"
              />
            </div>

            <div className="space-y-2">
              <label className="font-medium">Veículo/Tipo*</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o veículo ou tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-trucks">Todos os Caminhões</SelectItem>
                  <SelectItem value="all-vans">Todas as Vans</SelectItem>
                  <SelectItem value="abc-1234">ABC-1234 (Caminhão)</SelectItem>
                  <SelectItem value="xyz-5678">XYZ-5678 (Van)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="font-medium">Tempo de Manutenção</label>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Quilometragem</label>
                  <div className="flex gap-2">
                    <Input type="number" placeholder="0" />
                    <div className="flex items-center text-sm text-muted-foreground">
                      km
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Período</label>
                  <div className="flex gap-2">
                    <Input type="number" placeholder="0" />
                    <div className="flex items-center text-sm text-muted-foreground">
                      meses
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                A manutenção será agendada quando um dos critérios for atingido
              </p>
            </div>

            <div className="space-y-2">
              <label className="font-medium">Tempo Estimado de Execução*</label>
              <div className="flex gap-2 max-w-[200px]">
                <Input type="number" placeholder="0" />
                <div className="flex items-center text-sm text-muted-foreground">
                  hora(s)
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end gap-4">
        <Link href="/maintenance/maintenance-items">
          <Button variant="outline">Cancelar</Button>
        </Link>
        <Button>Salvar</Button>
      </div>
    </div>
  )
}
// src/app/routes/config/_components/rest-point-form.tsx

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function RestPointForm({ trigger }: { trigger: React.ReactNode }) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          {trigger}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Novo Ponto de Descanso</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label>Nome do Local</Label>
              <Input placeholder="Ex: Posto Rodoserv" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Rodovia</Label>
                <Input placeholder="Ex: BR-116" />
              </div>
              <div className="space-y-2">
                <Label>KM</Label>
                <Input placeholder="Ex: 157" type="number" />
              </div>
            </div>
  
            <div className="space-y-2">
              <Label>Estrutura Disponível</Label>
              <div className="grid grid-cols-2 gap-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span>Dormitório</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span>Restaurante</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span>Chuveiros</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span>Wifi</span>
                </label>
              </div>
            </div>
  
            <div className="space-y-2">
              <Label>Medidas de Segurança</Label>
              <Textarea placeholder="Descreva as medidas de segurança do local" />
            </div>
  
            <div className="space-y-2">
              <Label>Tempo Máximo de Parada</Label>
              <Input type="number" placeholder="Tempo em horas" />
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline">Cancelar</Button>
            <Button>Salvar</Button>
          </div>
        </DialogContent>
      </Dialog>
    )
  }
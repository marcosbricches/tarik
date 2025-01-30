// src/app/routes/config/_components/gas-station-form.tsx

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export function GasStationForm({ trigger }: { trigger: React.ReactNode }) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          {trigger}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Novo Posto de Combustível</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label>Nome do Posto</Label>
              <Input placeholder="Ex: Auto Posto São João" />
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
              <Label>Combustíveis Disponíveis</Label>
              <div className="grid grid-cols-2 gap-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span>Diesel S10</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span>Diesel Comum</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span>Arla 32</span>
                </label>
              </div>
            </div>
  
            <div className="space-y-2">
              <Label>Convênios Aceitos</Label>
              <div className="grid grid-cols-2 gap-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span>CTF</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span>Repom</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span>Ticket</span>
                </label>
              </div>
            </div>
  
            <div className="space-y-2">
              <Label>Horário de Funcionamento</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o horário" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="24h">24 horas</SelectItem>
                  <SelectItem value="comercial">Horário Comercial</SelectItem>
                </SelectContent>
              </Select>
            </div>
  
            <div className="space-y-2">
              <Label>Observações</Label>
              <Textarea placeholder="Informações adicionais sobre o posto" />
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
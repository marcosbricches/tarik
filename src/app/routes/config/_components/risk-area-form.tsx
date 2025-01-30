// src/app/routes/config/_components/risk-area-form.tsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function RiskAreaForm({ trigger }: { trigger: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Nova Área de Risco</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label>Nome da Área</Label>
            <Input placeholder="Ex: BR-116 Trecho Norte" />
          </div>
          
          <div className="space-y-2">
            <Label>Tipo de Risco</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o tipo de risco" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="crime">Criminalidade</SelectItem>
                <SelectItem value="accident">Alto índice de acidentes</SelectItem>
                <SelectItem value="road">Condições da via</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Localização</Label>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              Mapa para desenhar área
            </div>
          </div>

          <div className="space-y-2">
            <Label>Instruções de Segurança</Label>
            <Textarea placeholder="Digite as instruções de segurança para esta área" />
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
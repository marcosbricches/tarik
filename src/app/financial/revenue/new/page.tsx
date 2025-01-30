// financial/revenue/new/page.tsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NewRevenuePage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/financial/revenue">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Nova Receita</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Informações da Receita</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            {/* Cliente */}
            <div className="space-y-2">
              <Label htmlFor="customer">Cliente</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o cliente" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Empresa ABC Ltda</SelectItem>
                  <SelectItem value="2">Empresa XYZ S.A.</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Data de Vencimento */}
            <div className="space-y-2">
              <Label htmlFor="dueDate">Data de Vencimento</Label>
              <Input type="date" id="dueDate" />
            </div>

            {/* Valor */}
            <div className="space-y-2">
              <Label htmlFor="amount">Valor</Label>
              <Input 
                type="number" 
                id="amount"
                placeholder="0,00"
                step="0.01" 
              />
            </div>

            {/* Recorrência */}
            <div className="space-y-2">
              <Label htmlFor="recurrence">Recorrência</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o tipo de recorrência" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">Sem recorrência</SelectItem>
                  <SelectItem value="monthly">Mensal</SelectItem>
                  <SelectItem value="weekly">Semanal</SelectItem>
                  <SelectItem value="custom">Personalizada</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Configuração de Recorrência */}
            <div className="space-y-4 border p-4 rounded-lg">
              <Label>Configuração da Recorrência</Label>
              
              {/* Mensal */}
              <div className="space-y-2">
                <Label htmlFor="monthlyDay">Dia do mês</Label>
                <Input 
                  type="number" 
                  id="monthlyDay" 
                  min="1" 
                  max="31"
                  placeholder="Ex: 5" 
                />
              </div>
              
              {/* Data Final */}
              <div className="space-y-2">
                <Label htmlFor="endDate">Data Final</Label>
                <Input type="date" id="endDate" />
              </div>
            </div>

            {/* Observações */}
            <div className="space-y-2">
              <Label htmlFor="notes">Observações</Label>
              <Textarea 
                id="notes"
                placeholder="Adicione observações relevantes..."
                className="min-h-[100px]"
              />
            </div>

            {/* Anexo */}
            <div className="space-y-2">
              <Label htmlFor="attachment">Anexo</Label>
              <Input 
                type="file" 
                id="attachment"
                accept=".pdf,image/*"
              />
            </div>

            {/* Botões */}
            <div className="flex gap-4">
              <Button type="submit">
                Salvar Receita
              </Button>
              <Link href="/financial/revenue">
                <Button variant="outline">
                  Cancelar
                </Button>
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
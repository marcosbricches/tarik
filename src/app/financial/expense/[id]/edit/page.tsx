// financial/expense/[id]/edit/page.tsx
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
  CardTitle,
  CardDescription
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, FileText, Trash2 } from "lucide-react"

export default function EditExpensePage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/financial/expense/1">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold">Editar Despesa</h1>
            <p className="text-sm text-muted-foreground">ID: 123456</p>
          </div>
        </div>
        <Button variant="destructive" size="icon">
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Status da Despesa</CardTitle>
              <CardDescription>Atualize o status do pagamento</CardDescription>
            </div>
            <Badge variant="outline">Em Aberto</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Alterar status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">Em Aberto</SelectItem>
                <SelectItem value="late">Atrasada</SelectItem>
                <SelectItem value="paid">Pago</SelectItem>
              </SelectContent>
            </Select>

            <div className="space-y-2">
              <Label>Valor Total Pago</Label>
              <div className="flex gap-4">
                <Input 
                  type="number"
                  placeholder="0,00"
                  step="0.01"
                  className="flex-1"
                />
                <Input 
                  type="number"
                  placeholder="Juros/Multa"
                  step="0.01"
                  className="w-[200px]"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Informações da Despesa</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            {/* Tipo */}
            <div className="space-y-2">
              <Label htmlFor="type">Tipo</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Fornecedor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="supplier">Fornecedor</SelectItem>
                  <SelectItem value="driver">Motorista</SelectItem>
                  <SelectItem value="user">Usuário</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Fornecedor/Colaborador */}
            <div className="space-y-2">
              <Label htmlFor="entity">Fornecedor/Colaborador</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Fornecedor XYZ" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Fornecedor XYZ</SelectItem>
                  <SelectItem value="2">João Silva (Motorista)</SelectItem>
                  <SelectItem value="3">Maria Santos (Usuário)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Categoria de Custo */}
            <div className="space-y-2">
              <Label htmlFor="costCategory">Categoria de Custo</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Operação" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="operation">Operação</SelectItem>
                  <SelectItem value="vehicle">Veículo</SelectItem>
                  <SelectItem value="process">Processos</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Data de Vencimento */}
            <div className="space-y-2">
              <Label htmlFor="dueDate">Data de Vencimento</Label>
              <Input 
                type="date" 
                id="dueDate"
                defaultValue="2025-02-10"
              />
            </div>

            {/* Valor */}
            <div className="space-y-2">
              <Label htmlFor="amount">Valor</Label>
              <Input 
                type="number" 
                id="amount"
                placeholder="0,00"
                step="0.01"
                defaultValue="2500.00"
              />
            </div>

            {/* Recorrência */}
            <div className="space-y-2">
              <Label htmlFor="recurrence">Recorrência</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Mensal" />
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
              
              <div className="space-y-2">
                <Label htmlFor="monthlyDay">Dia do mês</Label>
                <Input 
                  type="number" 
                  id="monthlyDay" 
                  min="1" 
                  max="31"
                  defaultValue="10"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="endDate">Data Final</Label>
                <Input 
                  type="date" 
                  id="endDate"
                  defaultValue="2025-12-10"
                />
              </div>
            </div>

            {/* Observações */}
            <div className="space-y-2">
              <Label htmlFor="notes">Observações</Label>
              <Textarea 
                id="notes"
                defaultValue="Pagamento referente aos serviços de manutenção realizados em Janeiro de 2025."
                className="min-h-[100px]"
              />
            </div>

            {/* Anexos Existentes */}
            <div className="space-y-2">
              <Label>Anexos Existentes</Label>
              <div className="flex items-center gap-2">
                <Button variant="outline" className="h-auto py-4 px-4 flex-1">
                  <FileText className="mr-2 h-4 w-4" />
                  <div className="flex flex-col items-start">
                    <span>Nota Fiscal #789.pdf</span>
                    <span className="text-xs text-muted-foreground">PDF • 245 KB</span>
                  </div>
                </Button>
                <Button variant="destructive" size="icon">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Novo Anexo */}
            <div className="space-y-2">
              <Label htmlFor="attachment">Adicionar Novo Anexo</Label>
              <Input 
                type="file" 
                id="attachment"
                accept=".pdf,image/*"
              />
            </div>

            {/* Botões */}
            <div className="flex gap-4">
              <Button type="submit">
                Salvar Alterações
              </Button>
              <Link href="/financial/expense/1">
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
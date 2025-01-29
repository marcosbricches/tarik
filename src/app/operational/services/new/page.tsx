import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NewServicePage() {
  return (
    <div className="container mx-auto py-10">
      <div className="mb-6">
        <Link href="/operational/services" className="flex items-center text-muted-foreground hover:text-primary">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para lista
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Novo Serviço</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name">Nome *</label>
                <Input id="name" required />
              </div>
              
              <div className="space-y-2">
                <label>Status *</label>
                <Select defaultValue="active">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Ativo</SelectItem>
                    <SelectItem value="inactive">Inativo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              <label>Tipo de Tarifa *</label>
              <RadioGroup defaultValue="fixed" className="grid grid-cols-1 gap-4">
                <div className="flex items-center space-x-2 rounded-lg border p-4">
                  <RadioGroupItem value="fixed" id="fixed" />
                  <label htmlFor="fixed" className="font-medium">
                    Tarifa Fixa
                  </label>
                </div>
                <div className="flex items-center space-x-2 rounded-lg border p-4">
                  <RadioGroupItem value="variable" id="variable" />
                  <label htmlFor="variable" className="font-medium">
                    Tarifa Variável por KM e Quantidade
                  </label>
                </div>
                <div className="flex items-center space-x-2 rounded-lg border p-4">
                  <RadioGroupItem value="quantity" id="quantity" />
                  <label htmlFor="quantity" className="font-medium">
                    Tarifa Fixa por Quantidade
                  </label>
                </div>
              </RadioGroup>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label>Tipo de Veículo *</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="truck">Caminhão</SelectItem>
                    <SelectItem value="van">Van</SelectItem>
                    <SelectItem value="car">Carro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label>Tipo de Carga *</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">Geral</SelectItem>
                    <SelectItem value="refrigerated">Refrigerada</SelectItem>
                    <SelectItem value="dangerous">Perigosa</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="value">Valor *</label>
                <Input id="value" type="number" required />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="description">Descrição</label>
              <Textarea id="description" />
            </div>

            <div className="space-y-2">
              <label htmlFor="observations">Observações</label>
              <Textarea id="observations" />
            </div>

            <div className="flex justify-end gap-4">
              <Link href="/operational/services">
                <Button variant="outline">Cancelar</Button>
              </Link>
              <Button type="submit">Salvar</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
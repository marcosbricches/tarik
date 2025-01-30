// src/app/maintenance/inventory/new/page.tsx
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

export default function NewInventoryEntry() {
  return (
    <div className="p-6 space-y-6 max-w-3xl mx-auto">
      <div className="flex items-center gap-4">
        <Link href="/maintenance/inventory">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Nova Entrada em Estoque</h1>
      </div>

      <Card>
        <CardContent className="p-6 space-y-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="font-medium">Produto*</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o produto" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Óleo de Motor 5W30 - OL-1234</SelectItem>
                  <SelectItem value="2">Filtro de Ar - FT-5678</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="font-medium">Variação*</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a variação" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1l">1 Litro</SelectItem>
                    <SelectItem value="20l">20 Litros</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="font-medium">Quantidade*</label>
                <Input type="number" placeholder="0" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-medium">Fornecedor*</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o fornecedor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Auto Peças Silva</SelectItem>
                  <SelectItem value="2">Pneus & Cia</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="font-medium">Valor Unitário*</label>
                <Input type="number" placeholder="R$ 0,00" />
              </div>

              <div className="space-y-2">
                <label className="font-medium">Data*</label>
                <Input type="date" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-medium">Observações</label>
              <Textarea 
                placeholder="Digite observações sobre esta entrada"
                className="resize-none"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Preview */}
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            <h2 className="font-semibold">Resumo da Entrada</h2>
            <div className="grid grid-cols-2 gap-y-2">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Saldo Atual em Estoque
                </p>
                <p>100 unidades</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Novo Saldo Após Entrada
                </p>
                <p className="text-green-600">150 unidades</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Localização no Estoque
                </p>
                <p>Prateleira A1</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Valor Total da Entrada
                </p>
                <p>R$ 2.500,00</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end gap-4">
        <Link href="/maintenance/inventory">
          <Button variant="outline">Cancelar</Button>
        </Link>
        <Button>Confirmar Entrada</Button>
      </div>
    </div>
  )
}
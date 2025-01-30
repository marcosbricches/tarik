// src/app/maintenance/inventory/new-output/page.tsx
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

export default function NewInventoryOutput() {
  return (
    <div className="p-6 space-y-6 max-w-3xl mx-auto">
      <div className="flex items-center gap-4">
        <Link href="/maintenance/inventory">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Nova Saída de Estoque</h1>
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

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="font-medium">Motivo da Saída*</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o motivo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="maintenance">Manutenção</SelectItem>
                    <SelectItem value="damage">Avaria</SelectItem>
                    <SelectItem value="return">Devolução</SelectItem>
                    <SelectItem value="other">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="font-medium">Data*</label>
                <Input type="date" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-medium">Ordem de Serviço</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a OS (opcional)" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="os1">OS #12345 - Caminhão ABC-1234</SelectItem>
                  <SelectItem value="os2">OS #12346 - Van XYZ-5678</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="font-medium">Observações</label>
              <Textarea 
                placeholder="Digite observações sobre esta saída"
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
            <h2 className="font-semibold">Resumo da Saída</h2>
            <div className="grid grid-cols-2 gap-y-2">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Saldo Atual em Estoque
                </p>
                <p>150 unidades</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Novo Saldo Após Saída
                </p>
                <p className="text-red-600">140 unidades</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Localização no Estoque
                </p>
                <p>Prateleira A1</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Estoque Mínimo
                </p>
                <p>10 unidades</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end gap-4">
        <Link href="/maintenance/inventory">
          <Button variant="outline">Cancelar</Button>
        </Link>
        <Button>Confirmar Saída</Button>
      </div>
    </div>
  )
}
// src/app/maintenance/workshop/work-orders/new/page.tsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
import { Checkbox } from "@/components/ui/checkbox"

export default function NewWorkOrder() {
  return (
    <div className="p-6 space-y-6 max-w-3xl mx-auto">
      <div className="flex items-center gap-4">
        <Link href="/maintenance/workshop">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Nova Ordem de Serviço</h1>
      </div>

      <Card>
        <CardContent className="p-6 space-y-6">
          {/* Informações Básicas */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Informações Básicas</h2>
            
            <div className="space-y-2">
              <label className="font-medium">Veículo*</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o veículo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="abc-1234">ABC-1234 (Caminhão)</SelectItem>
                  <SelectItem value="xyz-5678">XYZ-5678 (Van)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="font-medium">Mecânico Responsável*</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o mecânico" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">João Silva</SelectItem>
                  <SelectItem value="2">Pedro Santos</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="font-medium">Data Prevista*</label>
                <Input type="date" />
              </div>
              <div className="space-y-2">
                <label className="font-medium">Tempo Estimado*</label>
                <div className="flex gap-2">
                  <Input type="number" placeholder="0" />
                  <div className="flex items-center text-sm text-muted-foreground">
                    hora(s)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Itens de Manutenção */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Itens de Manutenção</h2>
            
            <div className="border rounded-lg divide-y">
              {/* Item 1 */}
              <div className="p-4 space-y-4">
                <div className="flex items-start gap-4">
                  <Checkbox id="item1" />
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <label htmlFor="item1" className="font-medium">
                        Freios com desgaste excessivo
                      </label>
                      <Badge variant="destructive" className="bg-red-100 text-red-800">
                        Alta
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Identificado no check-list do motorista em 30/01/2025
                    </p>
                  </div>
                </div>
                <div className="ml-6">
                  <Textarea 
                    placeholder="Observações sobre este item"
                    className="resize-none"
                  />
                </div>
              </div>

              {/* Item 2 */}
              <div className="p-4 space-y-4">
                <div className="flex items-start gap-4">
                  <Checkbox id="item2" />
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <label htmlFor="item2" className="font-medium">
                        Troca de óleo preventiva
                      </label>
                      <Badge className="bg-yellow-100 text-yellow-800">
                        Média
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Manutenção preventiva programada
                    </p>
                  </div>
                </div>
                <div className="ml-6">
                  <Textarea 
                    placeholder="Observações sobre este item"
                    className="resize-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Observações Gerais */}
          <div className="space-y-2">
            <label className="font-medium">Observações Gerais</label>
            <Textarea 
              placeholder="Observações adicionais sobre a ordem de serviço"
              className="resize-none"
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end gap-4">
        <Link href="/maintenance/workshop">
          <Button variant="outline">Cancelar</Button>
        </Link>
        <Button>Criar Ordem de Serviço</Button>
      </div>
    </div>
  )
}
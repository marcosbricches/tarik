// src/app/orders/_components/order-form.tsx
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
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { CalendarIcon, Plus, Upload } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function OrderForm({ isEditing = false }) {
  return (
    <form className="space-y-8">
      <div className="grid gap-6">
        <div className="grid gap-4">
          <h2 className="text-lg font-semibold">Informações Básicas</h2>
          
          {isEditing && (
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="id">ID do Pedido</Label>
                <Input id="id" value="#1234" disabled />
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select defaultValue="pending">
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pendente</SelectItem>
                    <SelectItem value="scheduled">Agendado</SelectItem>
                    <SelectItem value="in_transit">Em transporte</SelectItem>
                    <SelectItem value="completed">Concluído</SelectItem>
                    <SelectItem value="cancelled">Cancelado</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="client">Cliente*</Label>
              <Select required>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o cliente" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Empresa ABC</SelectItem>
                  <SelectItem value="2">Empresa XYZ</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="service">Serviço*</Label>
              <Select required>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o serviço" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Transporte de Carga</SelectItem>
                  <SelectItem value="2">Entrega Expressa</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Data do Serviço*</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    <span>Selecione a data</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar mode="range" />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label htmlFor="quantity">Quantidade</Label>
              <Input type="number" id="quantity" placeholder="0" />
            </div>
          </div>
        </div>

        <Separator />

        <div className="grid gap-4">
          <h2 className="text-lg font-semibold">Origem e Destino</h2>
          
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="origin">Origem*</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o local de origem" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sp">São Paulo, SP</SelectItem>
                      <SelectItem value="rj">Rio de Janeiro, RJ</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Destinos*</Label>
                    <Button type="button" variant="outline" size="sm">
                      <Plus className="h-4 w-4 mr-2" />
                      Adicionar Destino
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="grid gap-4">
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o local de destino" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sp">São Paulo, SP</SelectItem>
                          <SelectItem value="rj">Rio de Janeiro, RJ</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input placeholder="Nome do responsável pela entrega" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Separator />

        <div className="grid gap-4">
          <h2 className="text-lg font-semibold">Valores</h2>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="subtotal">Subtotal*</Label>
              <Input id="subtotal" value="R$ 1.500,00" disabled />
            </div>
            <div className="space-y-2">
              <Label htmlFor="discount">Desconto</Label>
              <Input id="discount" type="number" placeholder="0" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="total">Valor Total*</Label>
              <Input id="total" value="R$ 1.500,00" disabled />
            </div>
          </div>
        </div>

        <Separator />

        <div className="grid gap-4">
          <h2 className="text-lg font-semibold">Informações Adicionais</h2>
          
          <div className="space-y-2">
            <Label htmlFor="observations">Observações</Label>
            <Textarea
              id="observations"
              placeholder="Digite observações relevantes sobre o pedido"
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label>Anexos</Label>
            <div className="border-2 border-dashed rounded-lg p-4 text-center">
              <Button type="button" variant="outline">
                <Upload className="h-4 w-4 mr-2" />
                Selecionar Arquivos
              </Button>
              <p className="text-sm text-muted-foreground mt-2">
                Arraste arquivos aqui ou clique para selecionar
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <Button type="button" variant="outline">
          Cancelar
        </Button>
        <Button type="submit">
          {isEditing ? "Salvar Alterações" : "Criar Pedido"}
        </Button>
      </div>
    </form>
  )
}
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function OrderSchedulePage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <Link href="/orders/123">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao pedido
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Agendar Pedido #123</h1>
        </div>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="max-w-[600px] space-y-6">
            <div className="space-y-2">
              <Label>Data do Serviço</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    <span>Selecione a data</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar mode="single" />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label>Horário</Label>
              <div className="grid grid-cols-2 gap-4">
                <Input type="time" />
                <Input type="time" placeholder="Previsão de término (opcional)" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Motorista</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o motorista" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="joao">João Silva (Disponível)</SelectItem>
                  <SelectItem value="maria">Maria Santos (Disponível)</SelectItem>
                  <SelectItem value="jose" disabled>José Oliveira (Em serviço)</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">Apenas motoristas com habilitação compatível são exibidos</p>
            </div>

            <div className="space-y-2">
              <Label>Veículo</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o veículo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cam1">CAM-0123 - Caminhão 3/4 (Recomendado)</SelectItem>
                  <SelectItem value="cam2">CAM-0124 - Caminhão Baú</SelectItem>
                  <SelectItem value="cam3" disabled>CAM-0125 - VUC (Em manutenção)</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">Veículos recomendados com base no tipo e quantidade de carga</p>
            </div>

            <Card className="bg-muted">
              <CardContent className="pt-4">
                <div className="space-y-1">
                  <Label>Detalhes do Serviço</Label>
                  <div className="text-sm space-y-2">
                    <div className="flex justify-between">
                      <span>Cliente:</span>
                      <span className="font-medium">Empresa ABC</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Origem:</span>
                      <span className="font-medium">São Paulo, SP</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Destino:</span>
                      <span className="font-medium">Rio de Janeiro, RJ</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Carga:</span>
                      <span className="font-medium">500 kg</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-2">
              <Link href="/orders/123" className="w-full">
                <Button variant="outline" className="w-full">Cancelar</Button>
              </Link>
              <Button className="w-full">Confirmar Agendamento</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
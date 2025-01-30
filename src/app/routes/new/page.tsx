// src/app/routes/new/page.tsx
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
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, MapPin } from "lucide-react"

export default function NewRoutePage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Nova Rota</h1>
      </div>

      <div className="space-y-6">
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Pedido</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o pedido" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1234">Pedido #1234</SelectItem>
                      <SelectItem value="1235">Pedido #1235</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Veículo</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o veículo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cam1">CAM-0123</SelectItem>
                      <SelectItem value="cam2">CAM-0124</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Pontos de Parada</Label>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-2 mb-4">
                      <MapPin className="h-4 w-4 text-green-500" />
                      <span className="font-medium">Origem</span>
                    </div>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o ponto de origem" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sp">São Paulo, SP</SelectItem>
                        <SelectItem value="rj">Rio de Janeiro, RJ</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-blue-500" />
                          <span className="font-medium">Destino 1</span>
                        </div>
                        <Button variant="outline" size="sm">Remover</Button>
                      </div>
                      <div className="space-y-4">
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o ponto de destino" />
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

                  <Button variant="outline" className="w-full">
                    <Plus className="h-4 w-4 mr-2" />
                    Adicionar Destino
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Observações da Rota</Label>
                <Textarea placeholder="Instruções ou observações específicas para esta rota" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              Mapa com preview da rota
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Distância Total:</span>
                <p className="font-medium">435 km</p>
              </div>
              <div>
                <span className="text-muted-foreground">Tempo Estimado:</span>
                <p className="font-medium">6h 30min</p>
              </div>
              <div>
                <span className="text-muted-foreground">Paradas Sugeridas:</span>
                <p className="font-medium">2</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-2">
          <Button variant="outline">Cancelar</Button>
          <Button>Criar Rota</Button>
        </div>
      </div>
    </div>
  )
}
// src/app/routes/[id]/edit/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function EditRoutePage() {
    return (
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Editar Rota #123</h1>
        </div>
  
        {/* Reutilizar o mesmo formulário da página new, apenas mudando os valores iniciais e o botão de submit */}
        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Pedido</Label>
                    <Select defaultValue="1234">
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
                    <Select defaultValue="cam1">
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
  
                {/* Resto do formulário idêntico ao new, apenas com valores preenchidos */}
                {/* ... */}
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
            <Button>Salvar Alterações</Button>
          </div>
        </div>
      </div>
    )
  }
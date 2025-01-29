// src/app/fleet/vehicle-types/_components/vehicle-type-form.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

interface VehicleTypeFormProps {
  isEditing?: boolean
  initialData?: any
}

export function VehicleTypeForm({ isEditing, initialData }: VehicleTypeFormProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <form className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label>Status</Label>
              <div className="text-sm text-muted-foreground">
                Ativo ou Inativo
              </div>
            </div>
            <Switch defaultChecked={initialData?.status || true} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              placeholder="Ex: Caminhão Tanque"
              defaultValue={initialData?.name}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="capacity">Capacidade de Carga</Label>
              <Input
                id="capacity"
                type="number"
                placeholder="Ex: 1000"
                defaultValue={initialData?.capacity}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="unit">Unidade de Medida</Label>
              <Select defaultValue={initialData?.unit || "liters"}>
                <SelectTrigger id="unit">
                  <SelectValue placeholder="Selecione a unidade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="liters">Litros</SelectItem>
                  <SelectItem value="cubic_meters">Metros Cúbicos</SelectItem>
                  <SelectItem value="tons">Toneladas</SelectItem>
                  <SelectItem value="kilos">Quilos</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="observations">Observações</Label>
            <Textarea
              id="observations"
              placeholder="Observações adicionais sobre o tipo de veículo"
              defaultValue={initialData?.observations}
            />
          </div>

          <div className="flex justify-end space-x-2">
            <Button variant="outline">Cancelar</Button>
            <Button>
              {isEditing ? "Salvar Alterações" : "Criar Tipo de Veículo"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
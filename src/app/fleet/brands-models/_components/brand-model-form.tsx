// src/app/fleet/brands-models/_components/brand-model-form.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { X, Plus } from "lucide-react"

interface BrandModelFormProps {
  isEditing?: boolean
  initialData?: any
}

export function BrandModelForm({ isEditing, initialData }: BrandModelFormProps) {
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
            <Label htmlFor="brand">Marca</Label>
            <Input
              id="brand"
              placeholder="Ex: Volvo"
              defaultValue={initialData?.brand}
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Modelos</Label>
              <Button type="button" variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Adicionar Modelo
              </Button>
            </div>
            <div className="space-y-2">
              {(initialData?.models || [""]).map((model: string, index: number) => (
                <div key={index} className="flex gap-2">
                  <Input
                    placeholder="Ex: FH 460"
                    defaultValue={model}
                  />
                  <Button 
                    type="button"
                    variant="ghost" 
                    size="icon"
                    className="shrink-0"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="observations">Observações</Label>
            <Textarea
              id="observations"
              placeholder="Observações adicionais sobre a marca e modelos"
              defaultValue={initialData?.observations}
            />
          </div>

          <div className="flex justify-end space-x-2">
            <Button variant="outline">Cancelar</Button>
            <Button>
              {isEditing ? "Salvar Alterações" : "Criar Marca"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
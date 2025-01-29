// src/app/fleet/vehicles/_components/vehicle-form.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { VehicleDocuments } from "./vehicle-documents"

interface VehicleFormProps {
  isEditing?: boolean
  initialData?: any
}

export function VehicleForm({ isEditing, initialData }: VehicleFormProps) {
  return (
    <Tabs defaultValue="basic" className="space-y-4">
      <TabsList>
        <TabsTrigger value="basic">Dados Básicos</TabsTrigger>
        <TabsTrigger value="specs">Especificações</TabsTrigger>
        <TabsTrigger value="documents">Documentação</TabsTrigger>
        <TabsTrigger value="fuel">Combustível</TabsTrigger>
      </TabsList>

      <TabsContent value="basic">
        <Card>
          <CardContent className="pt-6 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <Label>Status</Label>
                <Select defaultValue={initialData?.status || "available"}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="available">Disponível</SelectItem>
                    <SelectItem value="maintenance">Em Manutenção</SelectItem>
                    <SelectItem value="inactive">Inativo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Placa</Label>
                <Input placeholder="AAA-0000" defaultValue={initialData?.plate} />
              </div>
              <div>
                <Label>Tipo de Veículo</Label>
                <Select defaultValue={initialData?.type}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tank">Caminhão Tanque</SelectItem>
                    <SelectItem value="box">Caminhão Baú</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Capacidade de Carga</Label>
                <Input 
                  type="number"
                  placeholder="15000"
                  defaultValue={initialData?.capacity}
                  disabled
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="specs">
        <Card>
          <CardContent className="pt-6 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <Label>Marca</Label>
                <Select defaultValue={initialData?.brand}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a marca" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="volvo">Volvo</SelectItem>
                    <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Modelo</Label>
                <Select defaultValue={initialData?.model}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o modelo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fh460">FH 460</SelectItem>
                    <SelectItem value="actros">Actros</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Ano de Fabricação</Label>
                <Input 
                  type="number" 
                  placeholder="2024"
                  defaultValue={initialData?.manufactureYear}
                />
              </div>
              <div>
                <Label>Cor</Label>
                <Input placeholder="Branco" defaultValue={initialData?.color} />
              </div>
              <div>
                <Label>Chassi</Label>
                <Input defaultValue={initialData?.chassis} />
              </div>
              <div>
                <Label>Número de Eixos</Label>
                <Input 
                  type="number"
                  defaultValue={initialData?.axles}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="documents">
        <Card>
          <CardContent className="pt-6 space-y-6">
            <VehicleDocuments 
              documents={initialData?.documents || [
                { type: "Licença de Circulação" },
                { type: "Seguro Obrigatório" }
              ]} 
            />
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="fuel">
        <Card>
          <CardContent className="pt-6 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <Label>Tipo de Combustível</Label>
                <Select defaultValue={initialData?.fuelType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="diesel">Diesel</SelectItem>
                    <SelectItem value="gas">Gasolina</SelectItem>
                    <SelectItem value="ethanol">Etanol</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Capacidade do Tanque (L)</Label>
                <Input 
                  type="number"
                  placeholder="500"
                  defaultValue={initialData?.tankCapacity}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <div className="flex justify-end space-x-2 mt-6">
        <Button variant="outline">Cancelar</Button>
        <Button>
          {isEditing ? "Salvar Alterações" : "Criar Veículo"}
        </Button>
      </div>
    </Tabs>
  )
}
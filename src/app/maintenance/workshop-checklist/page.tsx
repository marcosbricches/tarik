// src/app/maintenance/workshop-checklist/page.tsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function WorkshopChecklist() {
  return (
    <div className="p-6 space-y-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-4">
        <Link href="/maintenance">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">Check-list da Oficina</h1>
          <p className="text-muted-foreground">Veículo: ABC-1234</p>
        </div>
      </div>

      {/* Odômetro */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">Odômetro</h2>
          <div className="space-y-2 max-w-sm">
            <label className="font-medium">Quilometragem Atual*</label>
            <Input type="number" placeholder="Digite a quilometragem atual" />
            <p className="text-sm text-muted-foreground">
              Última leitura: 150.000 km
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Check-list */}
      <Card>
        <CardContent className="p-6 space-y-6">
          <h2 className="text-xl font-semibold">Itens de Verificação</h2>

          {/* Categoria Mecânica */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Mecânica</h3>
            
            {/* Item 1 */}
            <div className="border rounded-lg p-4 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium">Sistema de Freios</h4>
                  <p className="text-sm text-muted-foreground">
                    Verificar pastilhas, discos e nível do fluido
                  </p>
                </div>
                <Badge className="bg-red-100 text-red-800">
                  Alta Prioridade
                </Badge>
              </div>
              <Separator />
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Button className="w-24">Aprovado</Button>
                  <Button variant="outline" className="w-24">Reprovado</Button>
                </div>
                <div className="space-y-2">
                  <label className="font-medium">Observações</label>
                  <Input placeholder="Adicione uma observação se necessário" />
                </div>
                <div>
                  <Button variant="outline" className="h-24 w-full">
                    Clique ou arraste para adicionar foto
                  </Button>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="border rounded-lg p-4 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium">Nível do Óleo</h4>
                  <p className="text-sm text-muted-foreground">
                    Verificar nível e condição do óleo
                  </p>
                </div>
                <Badge className="bg-yellow-100 text-yellow-800">
                  Média Prioridade
                </Badge>
              </div>
              <Separator />
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Button className="w-24">Aprovado</Button>
                  <Button variant="outline" className="w-24">Reprovado</Button>
                </div>
                <div className="space-y-2">
                  <label className="font-medium">Observações</label>
                  <Input placeholder="Adicione uma observação se necessário" />
                </div>
              </div>
            </div>
          </div>

          {/* Categoria Elétrica */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Elétrica</h3>
            
            <div className="border rounded-lg p-4 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium">Faróis e Lanternas</h4>
                  <p className="text-sm text-muted-foreground">
                    Verificar funcionamento de todas as luzes
                  </p>
                </div>
                <Badge className="bg-yellow-100 text-yellow-800">
                  Média Prioridade
                </Badge>
              </div>
              <Separator />
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Button className="w-24">Aprovado</Button>
                  <Button variant="outline" className="w-24">Reprovado</Button>
                </div>
                <div className="space-y-2">
                  <label className="font-medium">Observações</label>
                  <Input placeholder="Adicione uma observação se necessário" />
                </div>
              </div>
            </div>
          </div>

        </CardContent>
      </Card>

      <Alert>
        <AlertDescription>
          Todos os itens marcados como reprovados serão automaticamente
          direcionados para manutenção na oficina.
        </AlertDescription>
      </Alert>

      <div className="flex justify-end gap-4">
        <Button variant="outline">Cancelar</Button>
        <Button>Finalizar Check-list</Button>
      </div>
    </div>
  )
}
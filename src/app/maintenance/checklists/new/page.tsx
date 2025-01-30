// src/app/maintenance/checklists/new/page.tsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { ArrowLeft, Plus, Trash2 } from "lucide-react"
import Link from "next/link"

export default function NewChecklist() {
  return (
    <div className="p-6 space-y-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-4">
        <Link href="/maintenance/checklists">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Novo Check-list</h1>
      </div>

      <div className="grid gap-6">
        {/* Informações Básicas */}
        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">Informações Básicas</h2>
            
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <h3 className="font-medium">Status</h3>
                  <p className="text-sm text-muted-foreground">
                    Ative ou desative este check-list
                  </p>
                </div>
                <Switch />
              </div>

              <div className="space-y-2">
                <label className="font-medium">Nome*</label>
                <Input placeholder="Digite o nome do check-list" />
              </div>

              <div className="space-y-2">
                <label className="font-medium">Tipo*</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="driver-start">
                      Motorista - Início de corrida
                    </SelectItem>
                    <SelectItem value="driver-end">
                      Motorista - Finalização de corrida
                    </SelectItem>
                    <SelectItem value="workshop-start">
                      Oficina - Antes de iniciar o serviço
                    </SelectItem>
                    <SelectItem value="workshop-end">
                      Oficina - Finalização de serviço
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="font-medium">Veículo*</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o veículo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="abc-1234">ABC-1234</SelectItem>
                    <SelectItem value="xyz-5678">XYZ-5678</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Categorias */}
        <Card>
          <CardContent className="p-6 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Categorias</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Adicionar Categoria
              </Button>
            </div>

            {/* Exemplo de Categoria */}
            <div className="border rounded-lg p-4 space-y-4">
              <div className="flex items-center gap-4">
                <Input 
                  placeholder="Nome da categoria" 
                  className="w-64"
                  defaultValue="Mecânica"
                />
                <Button variant="outline">
                  <Plus className="h-4 w-4 mr-2" />
                  Adicionar Item
                </Button>
                <Button
                  variant="ghost"
                  className="text-red-600"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              {/* Item de Verificação */}
              <div className="ml-4 border rounded-lg p-4 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-2 flex-1">
                    <label className="font-medium">Item de Verificação*</label>
                    <Input defaultValue="Freios funcionando?" />
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-red-600"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="font-medium">Tipo de Resposta*</label>
                    <Select defaultValue="yes-no">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes-no">Sim/Não</SelectItem>
                        <SelectItem value="multiple">Múltipla Escolha</SelectItem>
                        <SelectItem value="text">Texto</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="font-medium">Prioridade*</label>
                    <Select defaultValue="high">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Baixa</SelectItem>
                        <SelectItem value="medium">Média</SelectItem>
                        <SelectItem value="high">Alta</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-medium">Instruções</label>
                  <Textarea 
                    placeholder="Digite as instruções para verificação deste item"
                    className="resize-none"
                  />
                </div>

                <div className="flex gap-6">
                  <div className="flex items-center gap-2">
                    <Switch />
                    <label className="font-normal">Anexar Foto</label>
                  </div>

                  <div className="flex items-center gap-2">
                    <Switch />
                    <label className="font-normal">Obrigatório</label>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Observações */}
        <Card>
          <CardContent className="p-6">
            <div className="space-y-2">
              <label className="font-medium">Observações</label>
              <Textarea 
                placeholder="Digite observações adicionais"
                className="resize-none"
              />
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-4">
          <Link href="/maintenance/checklists">
            <Button variant="outline">Cancelar</Button>
          </Link>
          <Button>Salvar</Button>
        </div>
      </div>
    </div>
  )
}
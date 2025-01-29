import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

export default function NewAccessLevelPage() {
  return (
    <div className="container mx-auto py-8 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Novo Nível de Acesso</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Informações Básicas</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label>ID</label>
              <Input disabled placeholder="Gerado automaticamente" />
            </div>
            <div className="space-y-2">
              <label>Status</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Ativo</SelectItem>
                  <SelectItem value="inactive">Inativo</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2 col-span-2">
              <label>Nome</label>
              <Input />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Permissões do Sistema</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {/* Módulo de Usuários */}
            <div className="space-y-4">
              <h3 className="font-semibold">Usuários</h3>
              <div className="grid grid-cols-4 gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="users-view" />
                  <label htmlFor="users-view">Visualizar</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="users-add" />
                  <label htmlFor="users-add">Adicionar</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="users-edit" />
                  <label htmlFor="users-edit">Editar</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="users-remove" />
                  <label htmlFor="users-remove">Remover</label>
                </div>
              </div>
            </div>

            {/* Módulo de Níveis de Acesso */}
            <div className="space-y-4">
              <h3 className="font-semibold">Níveis de Acesso</h3>
              <div className="grid grid-cols-4 gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="access-view" />
                  <label htmlFor="access-view">Visualizar</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="access-add" />
                  <label htmlFor="access-add">Adicionar</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="access-edit" />
                  <label htmlFor="access-edit">Editar</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="access-remove" />
                  <label htmlFor="access-remove">Remover</label>
                </div>
              </div>
            </div>

            {/* Módulo de Documentos */}
            <div className="space-y-4">
              <h3 className="font-semibold">Documentos</h3>
              <div className="grid grid-cols-4 gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="docs-view" />
                  <label htmlFor="docs-view">Visualizar</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="docs-add" />
                  <label htmlFor="docs-add">Adicionar</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="docs-edit" />
                  <label htmlFor="docs-edit">Editar</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="docs-remove" />
                  <label htmlFor="docs-remove">Remover</label>
                </div>
              </div>
            </div>

            {/* Acesso Cliente */}
            <div className="space-y-4">
              <h3 className="font-semibold">Acesso Cliente</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="client-routes" />
                  <label htmlFor="client-routes">Visualizar Rotas e Mapas</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="client-fuel" />
                  <label htmlFor="client-fuel">Visualizar Níveis de Combustível</label>
                </div>
              </div>
            </div>

            {/* Notificações */}
            <div className="space-y-4">
              <h3 className="font-semibold">Notificações</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="notifications-system" />
                  <label htmlFor="notifications-system">Notificações do Sistema</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="notifications-alerts" />
                  <label htmlFor="notifications-alerts">Alertas e Avisos</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="notifications-reports" />
                  <label htmlFor="notifications-reports">Relatórios</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="notifications-updates" />
                  <label htmlFor="notifications-updates">Atualizações</label>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-4">
          <Link href="/admin/access-levels">
            <Button variant="outline">Cancelar</Button>
          </Link>
          <Button>Salvar</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
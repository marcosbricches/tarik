import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"

export default function NewUserPage() {
  return (
    <div className="container mx-auto py-8 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Novo Colaborador</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Informações do Colaborador</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
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
            <div className="space-y-2">
              <label>Nome</label>
              <Input />
            </div>
            <div className="space-y-2">
              <label>Nível de Acesso</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Administrador</SelectItem>
                  <SelectItem value="user">Usuário</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label>Telefone</label>
              <Input placeholder="(00) 00000-0000" />
            </div>
            <div className="space-y-2">
              <label>E-mail</label>
              <Input type="email" placeholder="exemplo@exemplo.com.br" />
            </div>
            <div className="space-y-2">
              <label>Senha</label>
              <Input type="password" />
            </div>
          </div>
          <div className="space-y-2">
            <label>Observações</label>
            <Textarea rows={4} />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-4">
          <Link href="/admin/users">
            <Button variant="outline">Cancelar</Button>
          </Link>
          <Button>Salvar</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
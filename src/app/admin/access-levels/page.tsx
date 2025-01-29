import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import Link from "next/link"
import { Search, Plus, Pencil } from "lucide-react"

export default function AccessLevelsPage() {
  return (
    <div className="container mx-auto py-8 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Níveis de Acesso</h1>
        <Link href="/admin/access-levels/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Novo Nível de Acesso
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Filtros</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-4">
          <div className="flex-1">
            <label className="text-sm">Buscar por nome</label>
            <div className="relative">
              <Search className="absolute left-2 top-3 h-4 w-4 text-gray-500" />
              <Input className="pl-8" placeholder="Digite o nome..." />
            </div>
          </div>
          <div className="flex items-end gap-2">
            <label className="text-sm">Mostrar inativos</label>
            <Switch />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Nome</TableHead>
                <TableHead>Permissões</TableHead>
                <TableHead>Notificações</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>#001</TableCell>
                <TableCell>
                  <Badge variant="default">Ativo</Badge>
                </TableCell>
                <TableCell>Administrador</TableCell>
                <TableCell>
                  <div className="text-sm text-gray-600">
                    Visualizar, Adicionar, Editar, Remover
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-sm text-gray-600">
                    Todas as notificações
                  </div>
                </TableCell>
                <TableCell>
                  <Link href="admin/access-levels/1/edit">
                    <Button variant="ghost" size="sm">
                      <Pencil className="h-4 w-4" />
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { Search, Plus, Pencil, FileText } from "lucide-react"

export default function DocumentsPage() {
  return (
    <div className="container mx-auto py-8 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Documentos</h1>
        <Link href="/admin/documents/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Novo Documento
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Filtros</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-4">
          <div className="flex-1">
            <label className="text-sm">Buscar documento</label>
            <div className="relative">
              <Search className="absolute left-2 top-3 h-4 w-4 text-gray-500" />
              <Input className="pl-8" placeholder="Digite para buscar..." />
            </div>
          </div>
          <div className="w-[200px]">
            <label className="text-sm">Categoria</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Selecione..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="contracts">Contratos</SelectItem>
                <SelectItem value="manuals">Manuais</SelectItem>
                <SelectItem value="reports">Relatórios</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-[200px]">
            <label className="text-sm">Subcategoria</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Selecione..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="technical">Técnico</SelectItem>
                <SelectItem value="legal">Legal</SelectItem>
                <SelectItem value="financial">Financeiro</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Subcategoria</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead className="w-[100px]">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Manual de Procedimentos
                </TableCell>
                <TableCell>Manuais</TableCell>
                <TableCell>Técnico</TableCell>
                <TableCell>PDF</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <Pencil className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
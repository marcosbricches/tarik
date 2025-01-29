import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { Upload } from "lucide-react"

export default function NewDocumentPage() {
  return (
    <div className="container mx-auto py-8 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Novo Documento</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Informações do Documento</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Nome do Documento</Label>
              <Input />
            </div>
            <div className="space-y-2">
              <Label>Categoria</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione uma categoria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="contracts">Contratos</SelectItem>
                  <SelectItem value="manuals">Manuais</SelectItem>
                  <SelectItem value="reports">Relatórios</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Subcategoria</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione uma subcategoria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technical">Técnico</SelectItem>
                  <SelectItem value="legal">Legal</SelectItem>
                  <SelectItem value="financial">Financeiro</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <Label>Arquivo</Label>
            <div className="border-2 border-dashed rounded-lg p-8 text-center">
              <div className="space-y-4">
                <div className="flex justify-center">
                  <Upload className="h-12 w-12 text-gray-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">
                    Arraste e solte um arquivo PDF ou JPG aqui, ou
                  </p>
                  <Button variant="link" className="text-blue-500">
                    selecione um arquivo
                  </Button>
                </div>
                <p className="text-xs text-gray-500">
                  Tamanho máximo: 10MB
                </p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-4">
          <Link href="/admin/documents">
            <Button variant="outline">Cancelar</Button>
          </Link>
          <Button>Salvar</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
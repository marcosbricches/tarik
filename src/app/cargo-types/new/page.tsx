import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Link from "next/link"
import { ArrowLeft, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function NewCargoTypePage() {
  return (
    <div className="container mx-auto py-10">
      <div className="mb-6">
        <Link href="/cargo-types" className="flex items-center text-muted-foreground hover:text-primary">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para lista
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Novo Tipo de Carga</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="category">Categoria *</label>
                <Input id="category" required />
              </div>
              
              <div className="space-y-2">
                <label>Status *</label>
                <Select defaultValue="active">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Ativo</SelectItem>
                    <SelectItem value="inactive">Inativo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label>Subcategorias</label>
                <div className="flex gap-2 flex-wrap mb-2">
                  <Badge variant="secondary" className="px-2 py-1">
                    Exemplo 1
                    <button className="ml-2">
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                  <Badge variant="secondary" className="px-2 py-1">
                    Exemplo 2
                    <button className="ml-2">
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Input placeholder="Digite uma subcategoria" className="flex-1" />
                  <Button type="button" variant="secondary">
                    Adicionar
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="observations">Observações</label>
              <Textarea id="observations" />
            </div>

            <div className="flex justify-end gap-4">
              <Link href="/cargo-types">
                <Button variant="outline">Cancelar</Button>
              </Link>
              <Button type="submit">Salvar</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
// src/app/maintenance/products/new/page.tsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Plus, Trash2, Upload } from "lucide-react"
import Link from "next/link"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

export default function NewProduct() {
  return (
    <div className="p-6 space-y-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-4">
        <Link href="/maintenance/products">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Novo Produto</h1>
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
                    Ative ou desative este produto
                  </p>
                </div>
                <Switch />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="font-medium">Código (SKU)</label>
                  <Input placeholder="Digite o SKU" />
                </div>

                <div className="space-y-2">
                  <label className="font-medium">Código de barras</label>
                  <Input placeholder="Digite o código de barras" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-medium">Nome*</label>
                <Input placeholder="Digite o nome do produto" />
              </div>

              <div className="space-y-2">
                <label className="font-medium">Descrição</label>
                <Textarea 
                  placeholder="Digite a descrição do produto"
                  className="resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="font-medium">Marca*</label>
                  <Input placeholder="Digite a marca" />
                </div>

                <div className="space-y-2">
                  <label className="font-medium">Unidade de medida*</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="un">Unidade (UN)</SelectItem>
                      <SelectItem value="lt">Litro (L)</SelectItem>
                      <SelectItem value="kg">Quilograma (KG)</SelectItem>
                      <SelectItem value="mt">Metro (M)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="font-medium">Categoria*</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lubrificantes">Lubrificantes</SelectItem>
                      <SelectItem value="filtros">Filtros</SelectItem>
                      <SelectItem value="pecas">Peças</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="font-medium">Subcategoria*</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="oleo-motor">Óleo de Motor</SelectItem>
                      <SelectItem value="oleo-cambio">Óleo de Câmbio</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Variações */}
        <Card>
          <CardContent className="p-6 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Variações</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Adicionar Variação
              </Button>
            </div>

            <div className="border rounded-lg p-4 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Variação #1</h3>
                <Button variant="ghost" size="icon" className="text-red-600">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="font-medium">Nome da Variação</label>
                  <Input placeholder="Ex: 1 Litro" />
                </div>
                <div className="space-y-2">
                  <label className="font-medium">Código de barras</label>
                  <Input placeholder="Digite o código de barras" />
                </div>
                <div className="space-y-2">
                  <label className="font-medium">SKU</label>
                  <Input placeholder="Digite o SKU" />
                </div>
                <div className="space-y-2">
                  <label className="font-medium">Localização no Estoque</label>
                  <Input placeholder="Ex: Prateleira A1" />
                </div>
                <div className="space-y-2">
                  <label className="font-medium">Estoque Mínimo</label>
                  <Input type="number" placeholder="0" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Fotos */}
        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">Fotos</h2>
            
            <div className="grid grid-cols-4 gap-4">
              <Button variant="outline" className="h-32 w-full">
                <div className="flex flex-col items-center gap-2">
                  <Upload className="h-6 w-6" />
                  <span className="text-sm">Adicionar Foto</span>
                </div>
              </Button>
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
          <Link href="/maintenance/products">
            <Button variant="outline">Cancelar</Button>
          </Link>
          <Button>Salvar</Button>
        </div>
      </div>
    </div>
  )
}
// src/app/maintenance/products/[id]/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Pencil } from "lucide-react"
import Link from "next/link"

export default function ProductDetails() {
  return (
    <div className="p-6 space-y-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-4">
        <Link href="/maintenance/products">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold">Óleo de Motor 5W30</h1>
            <Badge variant="success" className="bg-green-100 text-green-800">
              Ativo
            </Badge>
          </div>
          <p className="text-muted-foreground">SKU: OL-1234</p>
        </div>
        <Button asChild>
          <Link href="/maintenance/products/1/edit">
            <Pencil className="h-4 w-4 mr-2" />
            Editar
          </Link>
        </Button>
      </div>

      <div className="grid gap-6">
        {/* Informações Básicas */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Informações Básicas</h2>
            <div className="grid grid-cols-2 gap-y-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Código de Barras</p>
                <p>789123456789</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Marca</p>
                <p>Shell</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Unidade de Medida</p>
                <p>Litro (L)</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Categoria</p>
                <p>Lubrificantes / Óleo de Motor</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm font-medium text-muted-foreground">Descrição</p>
                <p>Óleo sintético de alta performance para motores a diesel.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Variações */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Variações</h2>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <div className="grid grid-cols-2 gap-y-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Nome</p>
                    <p>1 Litro</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">SKU</p>
                    <p>OL-1234-1L</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Código de Barras</p>
                    <p>789123456789001</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Localização</p>
                    <p>Prateleira A1</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Estoque Mínimo</p>
                    <p>10 unidades</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Quantidade em Estoque</p>
                    <p>50 unidades</p>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <div className="grid grid-cols-2 gap-y-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Nome</p>
                    <p>20 Litros</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">SKU</p>
                    <p>OL-1234-20L</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Código de Barras</p>
                    <p>789123456789002</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Localização</p>
                    <p>Prateleira B2</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Estoque Mínimo</p>
                    <p>2 unidades</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Quantidade em Estoque</p>
                    <p>8 unidades</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Fotos */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Fotos</h2>
            <div className="grid grid-cols-4 gap-4">
              <img 
                src="/placeholder.png" 
                alt="Produto" 
                className="aspect-square rounded-lg object-cover"
              />
            </div>
          </CardContent>
        </Card>

        {/* Observações */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Observações</h2>
            <p className="text-muted-foreground">
              Produto com alto giro de estoque. Manter sempre abastecido.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
// src/app/maintenance/checklists/[id]/page.tsx
"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Copy, Pencil } from "lucide-react"
import Link from "next/link"

export default function ChecklistDetails() {
  return (
    <div className="p-6 space-y-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-4">
        <Link href="/maintenance/checklists">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold">Check-list Diário - Caminhão</h1>
            <Badge variant="success" className="bg-green-100 text-green-800">
              Ativo
            </Badge>
          </div>
          <p className="text-muted-foreground">Criado em 30/01/2025</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Copy className="h-4 w-4 mr-2" />
            Duplicar
          </Button>
          <Button asChild>
            <Link href="/maintenance/checklists/1/edit">
              <Pencil className="h-4 w-4 mr-2" />
              Editar
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-6">
        {/* Informações Básicas */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Informações Básicas</h2>
            <div className="grid gap-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Tipo</p>
                <p>Motorista - Início de corrida</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Veículo</p>
                <p>ABC-1234</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Categorias e Itens */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Itens de Verificação</h2>

            {/* Categoria */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Mecânica</h3>
                <div className="grid gap-6">
                  {/* Item 1 */}
                  <div className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium">Freios funcionando?</h4>
                        <p className="text-sm text-muted-foreground">
                          Verificar o funcionamento dos freios antes de iniciar a rota
                        </p>
                      </div>
                      <Badge className="bg-red-100 text-red-800">
                        Alta Prioridade
                      </Badge>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-medium text-muted-foreground">Tipo de Resposta</p>
                        <p>Sim/Não</p>
                      </div>
                      <div>
                        <p className="font-medium text-muted-foreground">Foto Requerida</p>
                        <p>Sim</p>
                      </div>
                      <div>
                        <p className="font-medium text-muted-foreground">Obrigatório</p>
                        <p>Sim</p>
                      </div>
                      <div>
                        <p className="font-medium text-muted-foreground">Ação se Reprovado</p>
                        <p>Direcionar para oficina</p>
                      </div>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium">Nível do óleo</h4>
                        <p className="text-sm text-muted-foreground">
                          Verificar se o nível do óleo está adequado
                        </p>
                      </div>
                      <Badge className="bg-yellow-100 text-yellow-800">
                        Média Prioridade
                      </Badge>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-medium text-muted-foreground">Tipo de Resposta</p>
                        <p>Sim/Não</p>
                      </div>
                      <div>
                        <p className="font-medium text-muted-foreground">Foto Requerida</p>
                        <p>Não</p>
                      </div>
                      <div>
                        <p className="font-medium text-muted-foreground">Obrigatório</p>
                        <p>Sim</p>
                      </div>
                      <div>
                        <p className="font-medium text-muted-foreground">Ação se Reprovado</p>
                        <p>Direcionar para oficina</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Observações */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Observações</h2>
            <p className="text-muted-foreground">
              Check-list para verificação diária antes do início das rotas de entrega.
              Todos os itens devem ser verificados com atenção.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
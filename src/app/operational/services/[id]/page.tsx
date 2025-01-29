import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, PenSquare } from "lucide-react"

export default function ServiceDetailsPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="mb-6">
        <Link href="/operational/services" className="flex items-center text-muted-foreground hover:text-primary">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para lista
        </Link>
      </div>

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Detalhes do Serviço</h1>
        <Link href="/operational/services/1">
          <Button>
            <PenSquare className="mr-2 h-4 w-4" />
            Editar Serviço
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Entrega Expressa Luanda
            <Badge variant="secondary">Ativo</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-1">Informações do Serviço</h3>
              <dl className="space-y-2">
                <div>
                  <dt className="text-sm text-muted-foreground">Tipo de Tarifa</dt>
                  <dd className="flex items-center gap-2">
                    <Badge variant="secondary">Tarifa Fixa</Badge>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">Tipo de Veículo</dt>
                  <dd>Van</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">Tipo de Carga</dt>
                  <dd>Geral</dd>
                </div>
              </dl>
            </div>
            
            <div>
              <h3 className="font-semibold mb-1">Valores</h3>
              <dl className="space-y-2">
                <div>
                  <dt className="text-sm text-muted-foreground">Valor Base</dt>
                  <dd className="text-lg font-semibold">40.000,00 Kz</dd>
                </div>
              </dl>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-1">Descrição</h3>
            <p>Serviço de entrega expressa dentro da cidade de Luanda com prazo máximo de 4 horas.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-1">Observações</h3>
            <p className="text-muted-foreground">Nenhuma observação registrada</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
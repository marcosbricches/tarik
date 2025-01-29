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

export default function ClientDetailsPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="mb-6">
        <Link href="/operational/clients" className="flex items-center text-muted-foreground hover:text-primary">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para lista
        </Link>
      </div>

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Detalhes do Cliente</h1>
        <Link href="/operational/clients/1">
          <Button>
            <PenSquare className="mr-2 h-4 w-4" />
            Editar Cliente
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Empresa Exemplo LTDA
            <Badge variant="default">Ativo</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-1">Informações Básicas</h3>
              <dl className="space-y-2">
                <div>
                  <dt className="text-sm text-muted-foreground">Nome Social</dt>
                  <dd>Empresa Exemplo LTDA</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">Nome Comercial</dt>
                  <dd>Exemplo Corp</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">Documento</dt>
                  <dd>12.345.678/0001-90</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">Ramo de Atividade</dt>
                  <dd>Comércio Varejista</dd>
                </div>
              </dl>
            </div>
            
            <div>
              <h3 className="font-semibold mb-1">Contato</h3>
              <dl className="space-y-2">
                <div>
                  <dt className="text-sm text-muted-foreground">Responsável</dt>
                  <dd>João Silva</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">Telefone</dt>
                  <dd>+244 923 456 789</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">E-mail</dt>
                  <dd>contato@exemplo.com</dd>
                </div>
              </dl>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-1">Endereço</h3>
            <p>Rua das Flores, 123 - Centro, Luanda - Angola</p>
          </div>

          <div>
            <h3 className="font-semibold mb-1">Horário de Circulação</h3>
            <p>06:00 às 19:00</p>
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
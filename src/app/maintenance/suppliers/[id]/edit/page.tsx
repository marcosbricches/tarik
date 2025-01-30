// src/app/maintenance/suppliers/[id]/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Pencil } from "lucide-react"
import Link from "next/link"

export default function SupplierDetails() {
  return (
    <div className="p-6 space-y-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-4">
        <Link href="/maintenance/suppliers">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold">Auto Peças Silva LTDA</h1>
            <Badge variant="success" className="bg-green-100 text-green-800">
              Ativo
            </Badge>
          </div>
          <p className="text-muted-foreground">CNPJ: 12.345.678/0001-90</p>
        </div>
        <Button asChild>
          <Link href="/maintenance/suppliers/1/edit">
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
                <p className="text-sm font-medium text-muted-foreground">Responsável</p>
                <p>João Silva</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Telefone</p>
                <p>+55 11 99999-9999</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm font-medium text-muted-foreground">E-mail</p>
                <p>contato@autopecassilva.com.br</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Endereço */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Endereço</h2>
            <div className="grid grid-cols-2 gap-y-4">
              <div className="col-span-2">
                <p className="text-sm font-medium text-muted-foreground">Endereço Completo</p>
                <p>Rua das Peças, 123 - Sala 45</p>
                <p>Bairro Centro - São Paulo/SP</p>
                <p>CEP: 01234-567</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Observações */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Observações</h2>
            <p className="text-muted-foreground">
              Fornecedor principal de peças mecânicas. Atendimento em horário comercial.
              Entrega própria para pedidos acima de R$ 1.000,00.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
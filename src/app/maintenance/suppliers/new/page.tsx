// src/app/maintenance/suppliers/new/page.tsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

export default function NewSupplier() {
  return (
    <div className="p-6 space-y-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-4">
        <Link href="/maintenance/suppliers">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Novo Fornecedor</h1>
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
                    Ative ou desative este fornecedor
                  </p>
                </div>
                <Switch />
              </div>

              <div className="space-y-2">
                <label className="font-medium">Razão Social*</label>
                <Input placeholder="Digite a razão social" />
              </div>

              <div className="space-y-2">
                <label className="font-medium">Documento*</label>
                <Input placeholder="Digite o CNPJ/NIF" />
                <p className="text-sm text-muted-foreground">
                  Brasil - CNPJ | Angola - NIF
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="font-medium">Responsável</label>
                  <Input placeholder="Digite o nome do responsável" />
                </div>

                <div className="space-y-2">
                  <label className="font-medium">Telefone</label>
                  <Input placeholder="Digite o telefone" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-medium">E-mail</label>
                <Input type="email" placeholder="Digite o e-mail" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Endereço */}
        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">Endereço</h2>
            
            <div className="grid gap-4">
              <div className="space-y-2">
                <label className="font-medium">CEP/Código Postal</label>
                <Input placeholder="Digite o CEP" />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 space-y-2">
                  <label className="font-medium">Rua</label>
                  <Input placeholder="Digite o nome da rua" />
                </div>

                <div className="space-y-2">
                  <label className="font-medium">Número</label>
                  <Input placeholder="Nº" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-medium">Complemento</label>
                <Input placeholder="Digite o complemento" />
              </div>

              <div className="space-y-2">
                <label className="font-medium">Bairro</label>
                <Input placeholder="Digite o bairro" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="font-medium">Município</label>
                  <Input placeholder="Digite o município" />
                </div>

                <div className="space-y-2">
                  <label className="font-medium">Estado/Província</label>
                  <Input placeholder="Digite o estado/província" />
                </div>
              </div>
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
          <Link href="/maintenance/suppliers">
            <Button variant="outline">Cancelar</Button>
          </Link>
          <Button>Salvar</Button>
        </div>
      </div>
    </div>
  )
}
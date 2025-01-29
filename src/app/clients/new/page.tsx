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
import { ArrowLeft } from "lucide-react"

export default function NewClientPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="mb-6">
        <Link href="/clients" className="flex items-center text-muted-foreground hover:text-primary">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para lista
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Novo Cliente</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="socialName">Nome Social *</label>
                <Input id="socialName" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="commercialName">Nome Comercial *</label>
                <Input id="commercialName" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="document">Documento *</label>
                <Input id="document" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="business">Ramo de Atividade</label>
                <Input id="business" />
              </div>
              <div className="space-y-2">
                <label htmlFor="responsible">Responsável</label>
                <Input id="responsible" />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone">Telefone *</label>
                <Input id="phone" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="email">E-mail *</label>
                <Input id="email" type="email" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="password">Senha *</label>
                <Input id="password" type="password" required />
              </div>
            </div>

            <div className="space-y-2">
              <label>Endereço Completo *</label>
              <div className="grid grid-cols-3 gap-4">
                <Input placeholder="CEP/Código Postal" />
                <Input placeholder="Rua" className="col-span-2" />
                <Input placeholder="Número" />
                <Input placeholder="Complemento" />
                <Input placeholder="Bairro" />
                <Input placeholder="Município" />
                <Input placeholder="Estado/Província" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="observations">Observações</label>
              <Textarea id="observations" />
            </div>

            <div className="flex justify-end gap-4">
              <Link href="/clients">
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
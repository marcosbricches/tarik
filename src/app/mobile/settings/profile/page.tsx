import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  ChevronLeft,
  User,
  Mail,
  Phone,
  CreditCard,
  Calendar,
  Truck,
  FileText
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background z-10">
        <div className="p-4 flex items-center gap-4">
          <Link href="/mobile/settings">
            <ChevronLeft className="h-6 w-6" />
          </Link>
          <h1 className="font-semibold">Meu Perfil</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 space-y-6">
        {/* Profile Picture */}
        <div className="flex flex-col items-center">
          <div className="h-24 w-24 bg-primary/10 rounded-full flex items-center justify-center">
            <User className="h-12 w-12 text-primary" />
          </div>
          <Button variant="link" className="mt-2">
            Alterar foto
          </Button>
        </div>

        {/* Personal Information */}
        <Card>
          <CardHeader>
            <CardTitle>Informações Pessoais</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Nome Completo</Label>
              <div className="flex gap-2">
                <User className="h-5 w-5 text-muted-foreground" />
                <span>João da Silva Santos</span>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <Label>E-mail</Label>
              <div className="flex gap-2">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span>joao.silva@example.com</span>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <Label>Telefone</Label>
              <div className="flex gap-2">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <span>(11) 98765-4321</span>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <Label>CPF</Label>
              <div className="flex gap-2">
                <CreditCard className="h-5 w-5 text-muted-foreground" />
                <span>123.456.789-00</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Documents */}
        <Card>
          <CardHeader>
            <CardTitle>Documentos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>CNH</Label>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <span>12345678900</span>
                </div>
                <Badge variant="secondary">
                  Válida até 12/2025
                </Badge>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <Label>Categorias</Label>
              <div className="flex gap-2">
                <Truck className="h-5 w-5 text-muted-foreground" />
                <div className="flex gap-2">
                  <Badge>C</Badge>
                  <Badge>D</Badge>
                  <Badge>E</Badge>
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <Label>Data de Admissão</Label>
              <div className="flex gap-2">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <span>01/03/2022</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Edit Button */}
        <Button className="w-full" size="lg">
          Solicitar Alteração de Dados
        </Button>

        <p className="text-sm text-muted-foreground text-center">
          Para alterar seus dados, entre em contato com o RH
        </p>
      </main>
    </div>
  )
}
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  ChevronLeft,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Camera,
  FileImage
} from "lucide-react"

export default function ChecklistDetailsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background z-10">
        <div className="p-4 flex items-center gap-4">
          <Link href="/mobile/dashboard">
            <ChevronLeft className="h-6 w-6" />
          </Link>
          <div className="flex-1">
            <h1 className="font-semibold">Check-list #123</h1>
            <div className="flex items-center gap-2">
              <Badge>Chegada</Badge>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">ABC-1234</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 space-y-6">
        {/* Vehicle Info */}
        <Card>
          <CardHeader>
            <CardTitle>Informações do Veículo</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Veículo</span>
              <span>Volvo FH 540</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Data/Hora</span>
              <span>31/01/2025 14:30</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Hodômetro</span>
              <span>150.430 km</span>
            </div>
          </CardContent>
        </Card>

        {/* Checklist Items */}
        <Card>
          <CardHeader>
            <CardTitle>Itens Verificados</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>Documentação em dia</span>
                </div>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="#">
                    <FileImage className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-red-500" />
                  <span>Pneus em bom estado</span>
                </div>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="#">
                    <FileImage className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-yellow-500" />
                  <span>Nível de óleo</span>
                </div>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="#">
                    <FileImage className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Observations */}
        <Card>
          <CardHeader>
            <CardTitle>Observações</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Pneus traseiros apresentando desgaste irregular. Necessário verificar 
              alinhamento e balanceamento. Nível de óleo próximo do mínimo recomendado.
            </p>
          </CardContent>
        </Card>

        {/* Photos */}
        <Card>
          <CardHeader>
            <CardTitle>Fotos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" className="h-32 flex flex-col items-center justify-center">
                <FileImage className="h-8 w-8 text-muted-foreground mb-2" />
                <span className="text-xs text-muted-foreground">Foto 1</span>
              </Button>
              <Button variant="outline" className="h-32 flex flex-col items-center justify-center">
                <FileImage className="h-8 w-8 text-muted-foreground mb-2" />
                <span className="text-xs text-muted-foreground">Foto 2</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline">Exportar PDF</Button>
          <Button>Novo Check-list</Button>
        </div>
      </main>
    </div>
  )
}
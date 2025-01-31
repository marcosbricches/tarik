import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Bell,
  Settings,
  MapPin,
  CheckSquare,
  AlertTriangle,
  Fuel,
  Truck,
  Clock,
  Calendar,
  AlertCircle,
  FileText,
  ChevronRight,
  Navigation
} from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col pb-4">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background z-10">
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="font-semibold">Olá, João</h1>
              <p className="text-sm text-muted-foreground">Motorista • ID: 12345</p>
            </div>
            <div className="flex gap-2">
              <Link href="/mobile/notifications">
                <Button variant="outline" size="icon">
                  <Bell className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/mobile/settings">
                <Button variant="outline" size="icon">
                  <Settings className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="vehicle">Veículo Atual</Label>
            <Input
              id="vehicle"
              placeholder="Digite a placa do veículo"
              defaultValue="ABC-1234 • Volvo FH 540"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 space-y-6">
        {/* Active Trip */}
        <Card className="bg-primary/5 border-primary">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Navigation className="h-5 w-5" />
                Viagem em Andamento
              </div>
              <Badge>Em Rota</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div className="space-y-1">
                  <p className="font-medium">São Paulo → Rio de Janeiro</p>
                  <p className="text-sm text-muted-foreground">430 km • 6h estimadas</p>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>31/01/2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>Iniciada às 09:30</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Link href="/mobile/trips/123/status">
                <Button className="w-full" variant="secondary">
                  Atualizar Status
                </Button>
              </Link>
              <Link href="/mobile/trips/123">
                <Button className="w-full">
                  Ver Detalhes
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Link href="/mobile/checklist/new">
            <Card className="h-full hover:bg-accent transition-colors">
              <CardContent className="p-4 flex flex-col items-center justify-center text-center gap-2">
                <CheckSquare className="h-8 w-8 text-primary" />
                <span className="font-medium">Realizar Check-list</span>
                <span className="text-xs text-muted-foreground">
                  Início/Final de Viagem
                </span>
              </CardContent>
            </Card>
          </Link>

          <Link href="/mobile/occurrences/new">
            <Card className="h-full hover:bg-accent transition-colors">
              <CardContent className="p-4 flex flex-col items-center justify-center text-center gap-2">
                <AlertTriangle className="h-8 w-8 text-primary" />
                <span className="font-medium">Nova Ocorrência</span>
                <span className="text-xs text-muted-foreground">
                  Reportar Problemas
                </span>
              </CardContent>
            </Card>
          </Link>

          <Link href="/mobile/fuel">
            <Card className="h-full hover:bg-accent transition-colors">
              <CardContent className="p-4 flex flex-col items-center justify-center text-center gap-2">
                <Fuel className="h-8 w-8 text-primary" />
                <span className="font-medium">Abastecimento</span>
                <span className="text-xs text-muted-foreground">
                  Registrar Parada
                </span>
              </CardContent>
            </Card>
          </Link>

          <Link href="/mobile/trips">
            <Card className="h-full hover:bg-accent transition-colors">
              <CardContent className="p-4 flex flex-col items-center justify-center text-center gap-2">
                <Truck className="h-8 w-8 text-primary" />
                <span className="font-medium">Minhas Viagens</span>
                <span className="text-xs text-muted-foreground">
                  Histórico e Pendentes
                </span>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Alerts Section */}
        <div className="space-y-2">
          <h2 className="text-sm font-medium text-muted-foreground px-2">
            ALERTAS E LEMBRETES
          </h2>

          <Card>
            <CardContent className="p-0">
              <Link href="/mobile/checklist/new">
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center">
                      <FileText className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div>
                      <p className="font-medium">Check-list Pendente</p>
                      <p className="text-sm text-muted-foreground">
                        Necessário preencher antes de iniciar
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </Link>

              <Separator />

              <Link href="/mobile/settings/profile">
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                      <AlertCircle className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <p className="font-medium">CNH Próxima do Vencimento</p>
                      <p className="text-sm text-muted-foreground">
                        Vence em 30 dias
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
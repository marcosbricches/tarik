import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  ChevronLeft,
  Bell,
  AlertTriangle,
  Clock,
  CheckCircle2,
  FileText,
  Route
} from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background z-10">
        <div className="p-4 flex items-center gap-4">
          <Link href="/mobile/dashboard">
            <ChevronLeft className="h-6 w-6" />
          </Link>
          <div className="flex-1">
            <h1 className="font-semibold">Notificações</h1>
            <p className="text-sm text-muted-foreground">Seus alertas e avisos</p>
          </div>
          <Button variant="ghost" size="sm">
            Limpar todas
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <ScrollArea className="flex-1">
        <main className="p-4 space-y-6">
          {/* Today's Notifications */}
          <div className="space-y-2">
            <h2 className="text-sm font-medium text-muted-foreground px-2">HOJE</h2>
            
            <Card>
              <CardContent className="p-0">
                <Link href="/mobile/trips/123">
                  <div className="p-4 flex gap-3">
                    <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center">
                      <AlertTriangle className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-medium">Alerta de Rota</p>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          30min atrás
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Área de risco detectada no trajeto. Mantenha-se na rota sugerida.
                      </p>
                    </div>
                  </div>
                </Link>

                <Separator />

                <Link href="/mobile/checklist">
                  <div className="p-4 flex gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-medium">Check-list Pendente</p>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          2h atrás
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Não se esqueça de preencher o check-list do veículo ABC-1234.
                      </p>
                    </div>
                  </div>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Yesterday's Notifications */}
          <div className="space-y-2">
            <h2 className="text-sm font-medium text-muted-foreground px-2">ONTEM</h2>
            
            <Card>
              <CardContent className="p-0">
                <Link href="/mobile/trips/122">
                  <div className="p-4 flex gap-3">
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-medium">Viagem Finalizada</p>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          1d atrás
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Viagem #122 concluída com sucesso. Documentos recebidos.
                      </p>
                    </div>
                  </div>
                </Link>

                <Separator />

                <Link href="/mobile/trips/121">
                  <div className="p-4 flex gap-3">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Route className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-medium">Nova Rota Disponível</p>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          1d atrás
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Nova rota São Paulo → Rio de Janeiro atribuída.
                      </p>
                    </div>
                  </div>
                </Link>
              </CardContent>
            </Card>
          </div>
        </main>
      </ScrollArea>
    </div>
  )
}
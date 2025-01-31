import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import {
  ChevronLeft,
  Bell,
  Route,
  AlertTriangle,
  FileText,
  MessageSquare,
  Clock,
  AlertCircle
} from "lucide-react"

export default function NotificationSettingsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background z-10">
        <div className="p-4 flex items-center gap-4">
          <Link href="/mobile/settings">
            <ChevronLeft className="h-6 w-6" />
          </Link>
          <h1 className="font-semibold">Configurações de Notificações</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 space-y-6">
        {/* General Notifications */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-primary" />
              <CardTitle>Notificações Gerais</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label>Ativar Notificações</Label>
                <p className="text-sm text-muted-foreground">
                  Receber todas as notificações do app
                </p>
              </div>
              <Switch />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label>Som</Label>
                <p className="text-sm text-muted-foreground">
                  Alertas sonoros para notificações
                </p>
              </div>
              <Switch />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label>Vibração</Label>
                <p className="text-sm text-muted-foreground">
                  Alertas vibratórios para notificações
                </p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Types of Notifications */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              <CardTitle>Tipos de Notificação</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Route className="h-5 w-5 text-muted-foreground" />
                <span>Novas Rotas</span>
              </div>
              <Switch />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-5 w-5 text-muted-foreground" />
                <span>Alertas de Risco</span>
              </div>
              <Switch />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-muted-foreground" />
                <span>Check-list Pendente</span>
              </div>
              <Switch />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <span>Lembretes de Parada</span>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Important Note */}
        <Card className="bg-yellow-50 border-yellow-200">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div>
                <p className="font-medium text-yellow-800">Importante</p>
                <p className="text-sm text-yellow-700">
                  Alertas críticos de segurança não podem ser desativados para sua proteção.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Save Button */}
        <Button className="w-full" size="lg">
          Salvar Configurações
        </Button>
      </main>
    </div>
  )
}
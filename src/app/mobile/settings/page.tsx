import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  ChevronLeft,
  User,
  Bell,
  Moon,
  Shield,
  HelpCircle,
  LogOut,
  ChevronRight,
  Smartphone
} from "lucide-react"
import { Switch } from "@/components/ui/switch"

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background z-10">
        <div className="p-4 flex items-center gap-4">
          <Link href="/mobile/dashboard">
            <ChevronLeft className="h-6 w-6" />
          </Link>
          <h1 className="font-semibold">Configurações</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 space-y-6">
        {/* Profile Section */}
        <Card>
          <CardContent className="p-4">
            <Link href="/mobile/settings/profile">
              <div className="flex items-center">
                <div className="flex-1">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div className="mt-2">
                    <p className="font-medium">João Silva</p>
                    <p className="text-sm text-muted-foreground">motorista@example.com</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </div>
            </Link>
          </CardContent>
        </Card>

        {/* Settings Groups */}
        <div className="space-y-6">
          {/* App Settings */}
          <div className="space-y-2">
            <h2 className="text-sm font-medium text-muted-foreground px-2">
              CONFIGURAÇÕES DO APP
            </h2>
            <Card>
              <CardContent className="p-0">
                <Link href="/mobile/settings/notifications">
                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                      <Bell className="h-5 w-5 text-primary" />
                      <span>Notificações</span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </div>
                </Link>
                <Separator />
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <Moon className="h-5 w-5 text-primary" />
                    <span>Modo Escuro</span>
                  </div>
                  <Switch />
                </div>
                <Separator />
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <Smartphone className="h-5 w-5 text-primary" />
                    <span>Modo Offline</span>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Security */}
          <div className="space-y-2">
            <h2 className="text-sm font-medium text-muted-foreground px-2">
              SEGURANÇA
            </h2>
            <Card>
              <CardContent className="p-0">
                <Link href="/mobile/settings/security">
                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-primary" />
                      <span>Alterar Senha</span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </div>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Support */}
          <div className="space-y-2">
            <h2 className="text-sm font-medium text-muted-foreground px-2">
              SUPORTE
            </h2>
            <Card>
              <CardContent className="p-0">
                <Link href="/mobile/settings/help">
                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                      <HelpCircle className="h-5 w-5 text-primary" />
                      <span>Ajuda</span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </div>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Logout */}
          <Button 
            variant="destructive" 
            className="w-full mt-6"
            size="lg"
          >
            <LogOut className="h-5 w-5 mr-2" />
            Sair do Aplicativo
          </Button>
        </div>

        {/* App Info */}
        <div className="text-center text-sm text-muted-foreground">
          <p>Versão 1.0.0</p>
          <p>© 2025 Transport App. Todos os direitos reservados.</p>
        </div>
      </main>
    </div>
  )
}
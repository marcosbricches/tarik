// app/notifications/settings/page.tsx
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function NotificationSettingsPage() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/notifications">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold">Configurações de Notificações</h1>
          <p className="text-muted-foreground">Gerencie suas preferências de notificações</p>
        </div>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Notificações por E-mail</CardTitle>
            <CardDescription>Configure quais notificações você deseja receber por e-mail</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="email-status">Atualizações de status da rota</Label>
              <Switch id="email-status" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="email-delivery">Confirmação de entrega</Label>
              <Switch id="email-delivery" defaultChecked />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notificações do Sistema</CardTitle>
            <CardDescription>Configure as notificações que aparecerão no sino do sistema</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold mb-3">Motoristas e Administrativo</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="driver-license">Vencimento da carteira de condução</Label>
                  <Switch id="driver-license" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="driver-license-expired">Carteira de condução vencida</Label>
                  <Switch id="driver-license-expired" defaultChecked />
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-sm font-semibold mb-3">Motoristas</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="new-delivery">Nova alocação de entregas</Label>
                  <Switch id="new-delivery" defaultChecked />
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-sm font-semibold mb-3">Administrativo</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="fleet-doc">Vencimento de documentos da frota</Label>
                  <Switch id="fleet-doc" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="fleet-doc-expired">Documentos da frota vencidos</Label>
                  <Switch id="fleet-doc-expired" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="stock-min">Reposição de produtos (estoque mínimo)</Label>
                  <Switch id="stock-min" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="checklist-missing">Check-list não preenchido</Label>
                  <Switch id="checklist-missing" defaultChecked />
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-sm font-semibold mb-3">Oficina</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="trip-occurrence">Nova ocorrência de viagem</Label>
                  <Switch id="trip-occurrence" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="checklist-occurrence">Ocorrências do check-list</Label>
                  <Switch id="checklist-occurrence" defaultChecked />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
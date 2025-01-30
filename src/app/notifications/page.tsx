// app/notifications/page.tsx
import { Bell, Check, Trash2, Settings } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function NotificationsPage() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <Bell className="h-6 w-6" />
          <h1 className="text-2xl font-bold">Notificações</h1>
          <Badge variant="destructive" className="rounded-full">12</Badge>
        </div>
        <div className="flex gap-2">
        <Link href="/notifications/settings">
              <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Configurações de Notificações</Button>
            </Link>
          <Button variant="outline" size="sm">
            <Check className="h-4 w-4 mr-2" />
            Marcar todas como lidas
          </Button>
          <Button variant="outline" size="sm">
            <Trash2 className="h-4 w-4 mr-2" />
            Limpar todas
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-[400px]">
          <TabsTrigger value="all">Todas</TabsTrigger>
          <TabsTrigger value="unread">Não lidas</TabsTrigger>
          <TabsTrigger value="read">Lidas</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Hoje</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                <div className="h-2 w-2 rounded-full bg-destructive mt-2" />
                <div className="flex-1">
                  <p className="font-medium">Carteira de motorista próxima do vencimento</p>
                  <p className="text-sm text-muted-foreground">Motorista João Silva - Vence em 30 dias</p>
                  <p className="text-xs text-muted-foreground mt-1">Hoje às 14:30</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                <div className="h-2 w-2 rounded-full bg-destructive mt-2" />
                <div className="flex-1">
                  <p className="font-medium">Nova ocorrência de viagem registrada</p>
                  <p className="text-sm text-muted-foreground">Veículo XYZ-1234 - Problema no freio</p>
                  <p className="text-xs text-muted-foreground mt-1">Hoje às 11:15</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">Anterior</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-lg">
                <div className="h-2 w-2 rounded-full bg-secondary mt-2" />
                <div className="flex-1">
                  <p className="font-medium">Checklist não preenchido</p>
                  <p className="text-sm text-muted-foreground">Rota finalizada sem checklist - Motorista Carlos Santos</p>
                  <p className="text-xs text-muted-foreground mt-1">Ontem às 18:45</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg">
                <div className="h-2 w-2 rounded-full bg-secondary mt-2" />
                <div className="flex-1">
                  <p className="font-medium">Reposição de produtos necessária</p>
                  <p className="text-sm text-muted-foreground">Estoque mínimo atingido - Óleo para motor</p>
                  <p className="text-xs text-muted-foreground mt-1">Ontem às 15:20</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="unread">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Hoje</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                <div className="h-2 w-2 rounded-full bg-destructive mt-2" />
                <div className="flex-1">
                  <p className="font-medium">Carteira de motorista próxima do vencimento</p>
                  <p className="text-sm text-muted-foreground">Motorista João Silva - Vence em 30 dias</p>
                  <p className="text-xs text-muted-foreground mt-1">Hoje às 14:30</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                <div className="h-2 w-2 rounded-full bg-destructive mt-2" />
                <div className="flex-1">
                  <p className="font-medium">Nova ocorrência de viagem registrada</p>
                  <p className="text-sm text-muted-foreground">Veículo XYZ-1234 - Problema no freio</p>
                  <p className="text-xs text-muted-foreground mt-1">Hoje às 11:15</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                <div className="h-2 w-2 rounded-full bg-destructive mt-2" />
                <div className="flex-1">
                  <p className="font-medium">Documento do veículo vencido</p>
                  <p className="text-sm text-muted-foreground">Veículo ABC-5678 - Licenciamento vencido</p>
                  <p className="text-xs text-muted-foreground mt-1">Hoje às 09:45</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="read">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Anterior</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-lg">
                <div className="h-2 w-2 rounded-full bg-secondary mt-2" />
                <div className="flex-1">
                  <p className="font-medium">Checklist não preenchido</p>
                  <p className="text-sm text-muted-foreground">Rota finalizada sem checklist - Motorista Carlos Santos</p>
                  <p className="text-xs text-muted-foreground mt-1">Ontem às 18:45</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg">
                <div className="h-2 w-2 rounded-full bg-secondary mt-2" />
                <div className="flex-1">
                  <p className="font-medium">Reposição de produtos necessária</p>
                  <p className="text-sm text-muted-foreground">Estoque mínimo atingido - Óleo para motor</p>
                  <p className="text-xs text-muted-foreground mt-1">Ontem às 15:20</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg">
                <div className="h-2 w-2 rounded-full bg-secondary mt-2" />
                <div className="flex-1">
                  <p className="font-medium">Manutenção preventiva agendada</p>
                  <p className="text-sm text-muted-foreground">Veículo DEF-9012 - Troca de óleo</p>
                  <p className="text-xs text-muted-foreground mt-1">Ontem às 10:15</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">Esta semana</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-lg">
                <div className="h-2 w-2 rounded-full bg-secondary mt-2" />
                <div className="flex-1">
                  <p className="font-medium">Nova entrega alocada</p>
                  <p className="text-sm text-muted-foreground">Rota #12345 - São Paulo → Rio de Janeiro</p>
                  <p className="text-xs text-muted-foreground mt-1">Segunda às 09:30</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg">
                <div className="h-2 w-2 rounded-full bg-secondary mt-2" />
                <div className="flex-1">
                  <p className="font-medium">Ocorrência resolvida</p>
                  <p className="text-sm text-muted-foreground">Manutenção concluída - Veículo XYZ-1234</p>
                  <p className="text-xs text-muted-foreground mt-1">Segunda às 08:15</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
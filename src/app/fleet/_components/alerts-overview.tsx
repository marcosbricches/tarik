// src/app/fleet/_components/alerts-overview.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertItem } from "./alert-item"

export function AlertsOverview() {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Alertas Críticos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <AlertItem 
                severity="high"
                title="Manutenção Atrasada"
                description="Veículo ABC-1234 - 3 dias atrasado"
              />
              <AlertItem 
                severity="high"
                title="Licença Vencida"
                description="Veículo XYZ-5678 - Vencido há 2 dias"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Alertas Moderados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <AlertItem 
                severity="medium"
                title="CNH Próxima ao Vencimento"
                description="3 motoristas - Próximos 30 dias"
              />
              <AlertItem 
                severity="medium"
                title="Revisão Programada"
                description="5 veículos - Próximos 15 dias"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Alertas Baixos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <AlertItem 
                severity="low"
                title="Check-list Pendente"
                description="2 veículos - Hoje"
              />
              <AlertItem 
                severity="low"
                title="Documentação a Renovar"
                description="4 veículos - Próximos 60 dias"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

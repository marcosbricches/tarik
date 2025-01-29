// src/app/fleet/_components/recent-alerts.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertItem } from "./alert-item"

export function RecentAlerts() {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Alertas Recentes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <AlertItem 
            severity="high"
            title="Manutenção Atrasada"
            description="Veículo ABC-1234 - 3 dias atrasado"
          />
          <AlertItem 
            severity="medium"
            title="Documento Próximo ao Vencimento"
            description="CNH Motorista João Silva - 15 dias"
          />
        </div>
      </CardContent>
    </Card>
  )
}


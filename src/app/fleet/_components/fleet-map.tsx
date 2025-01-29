// src/app/fleet/_components/fleet-map.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function FleetMap() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Veículos em Rota</CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        <div className="h-[400px] rounded-md border bg-slate-50 p-4">
          Mapa de Veículos
        </div>
      </CardContent>
    </Card>
  )
}
// src/app/fleet/map/_components/fleet-summary.tsx
'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Vehicle } from "./types"

interface FleetSummaryProps {
  vehicles: Vehicle[]
}

export function FleetSummary({ vehicles }: FleetSummaryProps) {
  const summary = {
    moving: vehicles.filter(v => v.status === "moving").length,
    stopped: vehicles.filter(v => v.status === "stopped").length,
    inactive: vehicles.filter(v => v.status === "inactive").length,
    total: vehicles.length
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      <Card>
        <CardContent className="pt-4">
          <div className="text-sm font-medium text-muted-foreground">Total da Frota</div>
          <div className="text-2xl font-bold">{summary.total}</div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="pt-4">
          <div className="text-sm font-medium text-emerald-600">Em Movimento</div>
          <div className="text-2xl font-bold">{summary.moving}</div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="pt-4">
          <div className="text-sm font-medium text-yellow-600">Parados</div>
          <div className="text-2xl font-bold">{summary.stopped}</div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="pt-4">
          <div className="text-sm font-medium text-muted-foreground">Inativos</div>
          <div className="text-2xl font-bold">{summary.inactive}</div>
        </CardContent>
      </Card>
    </div>
  )
}
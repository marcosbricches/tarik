// src/app/fleet/vehicles/_components/vehicle-status-badge.tsx
import { Badge } from "@/components/ui/badge"

type VehicleStatus = "available" | "inactive" | "maintenance"

interface VehicleStatusBadgeProps {
  status: VehicleStatus
}

const statusConfig = {
  available: { label: "Disponível", variant: "default" as const },
  inactive: { label: "Inativo", variant: "secondary" as const },
  maintenance: { label: "Em Manutenção", variant: "destructive" as const }
}

export function VehicleStatusBadge({ status }: VehicleStatusBadgeProps) {
  const config = statusConfig[status]
  return <Badge variant={config.variant}>{config.label}</Badge>
}
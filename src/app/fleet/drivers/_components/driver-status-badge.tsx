// src/app/fleet/drivers/_components/driver-status-badge.tsx
import { Badge } from "@/components/ui/badge"

type DriverStatus = "active" | "inactive"

interface DriverStatusBadgeProps {
  status: DriverStatus
}

const statusConfig = {
  active: { label: "Ativo", variant: "default" as const },
  inactive: { label: "Inativo", variant: "secondary" as const }
}

export function DriverStatusBadge({ status }: DriverStatusBadgeProps) {
  const config = statusConfig[status]
  return <Badge variant={config.variant}>{config.label}</Badge>
}
// src/app/fleet/_components/alert-item.tsx
import { AlertCircle, Clock } from "lucide-react"

interface AlertItemProps {
  severity: "high" | "medium" | "low"
  title: string
  description: string
}

export function AlertItem({ severity, title, description }: AlertItemProps) {
  const severityColors = {
    high: "text-red-500",
    medium: "text-yellow-500",
    low: "text-blue-500"
  }

  return (
    <div className="flex items-center space-x-4">
      <AlertCircle className={`h-6 w-6 ${severityColors[severity]}`} />
      <div className="space-y-1">
        <p className="text-sm font-medium leading-none">
          {title}
        </p>
        <p className="text-sm text-muted-foreground">
          {description}
        </p>
      </div>
      <div className="ml-auto font-medium">
        <Clock className="h-4 w-4" />
      </div>
    </div>
  )
}


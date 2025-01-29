// src/app/fleet/map/_components/route-details.tsx
'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Vehicle } from "./types"
import { ScrollArea } from "@/components/ui/scroll-area"

interface RouteDetailsProps {
  vehicle: Vehicle | null
}

export function RouteDetails({ vehicle }: RouteDetailsProps) {
  if (!vehicle) return null

  const stops = [
    { location: "Posto BR - São Paulo", time: "08:00", status: "completed" },
    { location: "Cliente A - Guarulhos", time: "09:30", status: "completed" },
    { location: "Cliente B - São José dos Campos", time: "11:00", status: "next" },
    { location: "Cliente C - Rio de Janeiro", time: "15:00", status: "pending" }
  ]

  return (
    <Card className="absolute bottom-4 left-4 w-[400px]">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Detalhes da Rota</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <span className="text-sm text-muted-foreground">Veículo</span>
              <p className="font-medium">{vehicle.plate} - {vehicle.model}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Motorista</span>
              <p className="font-medium">{vehicle.driver}</p>
            </div>
          </div>

          <div>
            <span className="text-sm text-muted-foreground">Paradas</span>
            <ScrollArea className="h-[200px] mt-2">
              <div className="space-y-3">
                {stops.map((stop, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className={`
                      w-2 h-2 mt-2 rounded-full
                      ${stop.status === 'completed' ? 'bg-emerald-500' : 
                        stop.status === 'next' ? 'bg-yellow-500' : 'bg-muted'}
                    `} />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{stop.location}</p>
                      <p className="text-sm text-muted-foreground">{stop.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <span className="text-sm text-muted-foreground">Progresso</span>
              <p className="font-medium">{vehicle.progress}%</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Última Atualização</span>
              <p className="font-medium">{vehicle.lastUpdate}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
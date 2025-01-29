// src/app/fleet/map/_components/types.ts
'use client'

export type VehicleStatus = "moving" | "stopped" | "inactive"

export interface Vehicle {
  id: number
  plate: string
  model: string
  driver: string
  status: VehicleStatus
  currentLocation: string
  destination: string
  progress: number
  lastUpdate: string
}
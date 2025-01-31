import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import {
  ChevronLeft,
  Camera,
  Clock,
  MapPin,
  CheckCircle2,
  Truck,
  PackageCheck,
  Navigation
} from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function TripStatusPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background z-10">
        <div className="p-4 flex items-center gap-4">
          <Link href="/mobile/trips/123">
            <ChevronLeft className="h-6 w-6" />
          </Link>
          <div>
            <h1 className="font-semibold">Atualizar Status</h1>
            <p className="text-sm text-muted-foreground">Viagem #123</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 space-y-6">
        {/* Current Status */}
        <Card>
          <CardHeader>
            <CardTitle>Status Atual</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col gap-1">
              <Label>Selecione o novo status</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Escolha o status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="started">
                    <div className="flex items-center gap-2">
                      <Truck className="h-4 w-4" />
                      <span>Iniciada</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="loading">
                    <div className="flex items-center gap-2">
                      <PackageCheck className="h-4 w-4" />
                      <span>Carregamento</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="in_route">
                    <div className="flex items-center gap-2">
                      <Navigation className="h-4 w-4" />
                      <span>Em Rota</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="delivered">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Entregue</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Separator />

            <div className="space-y-2">
              <Label>Localização Atual</Label>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>São Paulo, SP - Via Anhanguera, KM 123</span>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Horário da Atualização</Label>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>31/01/2025 15:30</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Documents */}
        <Card>
          <CardHeader>
            <CardTitle>Documentos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" className="h-auto py-4 flex flex-col gap-2">
                <Camera className="h-5 w-5" />
                <span className="text-sm">Documento de Carga</span>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex flex-col gap-2">
                <Camera className="h-5 w-5" />
                <span className="text-sm">Comprovante de Entrega</span>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              Tire fotos legíveis dos documentos quando necessário
            </p>
          </CardContent>
        </Card>

        {/* Stop Details */}
        <Card>
          <CardHeader>
            <CardTitle>Detalhes da Parada</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Tipo de Parada</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rest">Descanso</SelectItem>
                  <SelectItem value="fuel">Abastecimento</SelectItem>
                  <SelectItem value="maintenance">Manutenção</SelectItem>
                  <SelectItem value="other">Outro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Observações</Label>
              <Textarea 
                placeholder="Descreva detalhes adicionais sobre a parada ou atualização..."
                className="min-h-[100px]"
              />
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <Button className="w-full" size="lg">
          Confirmar Atualização
        </Button>
      </main>
    </div>
  )
}
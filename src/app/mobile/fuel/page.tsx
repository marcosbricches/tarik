import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { ChevronLeft, Camera, MapPin, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function FuelPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background z-10">
        <div className="p-4 flex items-center gap-4">
          <Link href="/mobile/dashboard">
            <ChevronLeft className="h-6 w-6" />
          </Link>
          <div>
            <h1 className="font-semibold">Registrar Abastecimento</h1>
            <p className="text-sm text-muted-foreground">ABC-1234 • Volvo FH 540</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 space-y-6">
        {/* Location Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Localização Atual
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Posto Example • Rodovia BR-116, km 432
            </p>
            <p className="text-sm text-muted-foreground">
              São Paulo, SP
            </p>
          </CardContent>
        </Card>

        {/* Fuel Form */}
        <Card>
          <CardHeader>
            <CardTitle>Dados do Abastecimento</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* KM Alert */}
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Quilometragem informada é menor que a última registrada (150.430 km)
              </AlertDescription>
            </Alert>

            <div className="space-y-2">
              <Label htmlFor="odometer">Quilometragem Atual</Label>
              <Input
                id="odometer"
                type="number"
                placeholder="Digite a quilometragem"
              />
              <p className="text-xs text-muted-foreground">
                Última leitura: 150.430 km
              </p>
            </div>

            <Separator />

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="liters">Quantidade (L)</Label>
                <Input
                  id="liters"
                  type="number"
                  placeholder="0.00"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="total">Valor Total (R$)</Label>
                <Input
                  id="total"
                  type="number"
                  placeholder="0.00"
                />
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <Label>Comprovante</Label>
              <Button 
                variant="outline" 
                className="w-full flex items-center justify-center gap-2"
              >
                <Camera className="h-4 w-4" />
                Tirar foto do comprovante
              </Button>
              <p className="text-xs text-muted-foreground">
                Tire uma foto legível do comprovante fiscal
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="sticky bottom-4">
          <Button className="w-full" size="lg">
            Registrar Abastecimento
          </Button>
        </div>
      </main>
    </div>
  )
}
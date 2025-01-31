import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { ChevronLeft, Camera } from "lucide-react"

export default function NewChecklistPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background z-10">
        <div className="p-4 flex items-center gap-4">
          <Link href="/mobile/dashboard">
            <ChevronLeft className="h-6 w-6" />
          </Link>
          <div>
            <h1 className="font-semibold">Check-list do Veículo</h1>
            <p className="text-sm text-muted-foreground">ABC-1234 • Volvo FH 540</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 space-y-6">
        {/* Odometer Section */}
        <Card>
          <CardHeader>
            <CardTitle>Hodômetro</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Label htmlFor="odometer">Quilometragem atual</Label>
              <Input
                id="odometer"
                type="number"
                placeholder="Digite a quilometragem"
              />
              <p className="text-sm text-muted-foreground">
                Última leitura: 150.430 km
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Checklist Items */}
        <div className="space-y-4">
          {/* Documentation */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Documentação</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>CRLV está em dia?</Label>
                <RadioGroup defaultValue="yes">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="doc-yes" />
                    <Label htmlFor="doc-yes">Sim</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="doc-no" />
                    <Label htmlFor="doc-no">Não</Label>
                  </div>
                </RadioGroup>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label>Seguro está válido?</Label>
                <RadioGroup defaultValue="yes">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="insurance-yes" />
                    <Label htmlFor="insurance-yes">Sim</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="insurance-no" />
                    <Label htmlFor="insurance-no">Não</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </Card>

          {/* Vehicle Condition */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Condições do Veículo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Estado dos pneus</Label>
                <RadioGroup defaultValue="good">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="good" id="tires-good" />
                    <Label htmlFor="tires-good">Bom</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="regular" id="tires-regular" />
                    <Label htmlFor="tires-regular">Regular</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="bad" id="tires-bad" />
                    <Label htmlFor="tires-bad">Ruim</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label>Anexar foto</Label>
                <Button variant="outline" className="w-full">
                  <Camera className="mr-2 h-4 w-4" />
                  Tirar foto
                </Button>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label>Nível de óleo</Label>
                <RadioGroup defaultValue="good">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="good" id="oil-good" />
                    <Label htmlFor="oil-good">Normal</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="low" id="oil-low" />
                    <Label htmlFor="oil-low">Baixo</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Submit Button */}
        <div className="sticky bottom-4">
          <Button className="w-full" size="lg">
            Finalizar Check-list
          </Button>
        </div>
      </main>
    </div>
  )
}
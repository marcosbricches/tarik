import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, PenSquare } from "lucide-react"

export default function CargoTypeDetailsPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="mb-6">
        <Link href="/cargo-types" className="flex items-center text-muted-foreground hover:text-primary">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para lista
        </Link>
      </div>

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Detalhes do Tipo de Carga</h1>
        <Link href="/cargo-types/1/edit">
          <Button>
            <PenSquare className="mr-2 h-4 w-4" />
            Editar Tipo de Carga
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Inflamáveis
            <Badge variant="secondary">Ativo</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">Subcategorias</h3>
            <div className="flex gap-2 flex-wrap">
              <Badge variant="secondary">Diesel</Badge>
              <Badge variant="secondary">Gasolina</Badge>
              <Badge variant="secondary">Querosene</Badge>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-1">Observações</h3>
            <p>Requer licença especial para transporte de produtos inflamáveis. Necessário seguir normas de segurança específicas.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
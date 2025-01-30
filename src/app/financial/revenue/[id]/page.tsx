// financial/revenue/[id]/page.tsx
import { Button } from "@/components/ui/button"
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, FileText, Pencil } from "lucide-react"

export default function ViewRevenuePage() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/financial/revenue">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold">Detalhes da Receita</h1>
            <p className="text-sm text-muted-foreground">ID: 123456</p>
          </div>
        </div>
        <div className="flex gap-4">
          <Link href="/financial/revenue/1/edit">
            <Button>
              <Pencil className="mr-2 h-4 w-4" />
              Editar
            </Button>
          </Link>
        </div>
      </div>

      {/* Status Card */}
      <Card>
        <CardHeader>
          <CardTitle>Status da Receita</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-6">
          <div>
            <p className="text-sm text-muted-foreground">Status</p>
            <Badge variant="outline" className="mt-1">Em Aberto</Badge>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Valor</p>
            <p className="text-xl font-semibold mt-1">R$ 1.500,00</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Vencimento</p>
            <p className="font-medium mt-1">10/02/2025</p>
          </div>
        </CardContent>
      </Card>

      {/* Details Card */}
      <Card>
        <CardHeader>
          <CardTitle>Informações da Receita</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-muted-foreground">Cliente</p>
              <p className="font-medium mt-1">Empresa ABC Ltda</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Recorrência</p>
              <p className="font-medium mt-1">Mensal (Todo dia 10)</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Data Final</p>
              <p className="font-medium mt-1">10/12/2025</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Criado em</p>
              <p className="font-medium mt-1">01/02/2025</p>
            </div>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Observações</p>
            <p className="mt-1">Faturamento referente aos serviços prestados no mês de Janeiro de 2025.</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-2">Anexos</p>
            <Button variant="outline" className="h-auto py-4 px-4">
              <FileText className="mr-2 h-4 w-4" />
              <div className="flex flex-col items-start">
                <span>Nota Fiscal #123.pdf</span>
                <span className="text-xs text-muted-foreground">PDF • 156 KB</span>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
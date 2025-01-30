// financial/expense/[id]/page.tsx
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

export default function ViewExpensePage() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/financial/expense">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold">Detalhes da Despesa</h1>
            <p className="text-sm text-muted-foreground">ID: 123456</p>
          </div>
        </div>
        <div className="flex gap-4">
          <Link href="/financial/expense/1/edit">
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
          <CardTitle>Status da Despesa</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-6">
          <div>
            <p className="text-sm text-muted-foreground">Status</p>
            <Badge variant="outline" className="mt-1">Em Aberto</Badge>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Valor</p>
            <p className="text-xl font-semibold mt-1">R$ 2.500,00</p>
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
          <CardTitle>Informações da Despesa</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-muted-foreground">Tipo</p>
              <Badge variant="secondary" className="mt-1">Fornecedor</Badge>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Fornecedor/Colaborador</p>
              <p className="font-medium mt-1">Fornecedor XYZ</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Categoria de Custo</p>
              <p className="font-medium mt-1">Operação</p>
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
            <p className="mt-1">Pagamento referente aos serviços de manutenção realizados em Janeiro de 2025.</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-2">Anexos</p>
            <Button variant="outline" className="h-auto py-4 px-4">
              <FileText className="mr-2 h-4 w-4" />
              <div className="flex flex-col items-start">
                <span>Nota Fiscal #789.pdf</span>
                <span className="text-xs text-muted-foreground">PDF • 245 KB</span>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
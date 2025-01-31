import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import {
  ChevronLeft,
  Camera,
  AlertTriangle,
  Clock,
  Plus,
  AlertCircle
} from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function OccurrencesPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background z-10">
        <div className="p-4 flex items-center gap-4">
          <Link href="/mobile/dashboard">
            <ChevronLeft className="h-6 w-6" />
          </Link>
          <div className="flex-1">
            <h1 className="font-semibold">Ocorrências</h1>
            <p className="text-sm text-muted-foreground">ABC-1234 • Volvo FH 540</p>
          </div>
          <Link href="/mobile/occurrences/new">
            <Button size="icon">
              <Plus className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 space-y-6">
        {/* New Occurrence Form */}
        <Card>
          <CardHeader>
            <CardTitle>Nova Ocorrência</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Prioridade</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a prioridade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Baixa</SelectItem>
                  <SelectItem value="medium">Média</SelectItem>
                  <SelectItem value="high">Alta</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Descrição do Problema</Label>
              <Textarea 
                placeholder="Descreva detalhadamente o problema..."
                className="min-h-[120px]"
              />
            </div>

            <div className="space-y-2">
              <Label>Evidências</Label>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" className="h-auto py-4 flex flex-col gap-2">
                  <Camera className="h-5 w-5" />
                  <span className="text-sm">Tirar Foto</span>
                </Button>
                <Button variant="outline" className="h-auto py-4 flex flex-col gap-2">
                  <Camera className="h-5 w-5" />
                  <span className="text-sm">Gravar Vídeo</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Occurrences */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Ocorrências Recentes</h2>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <Badge variant="destructive">Alta Prioridade</Badge>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  2h atrás
                </div>
              </div>
              <p className="text-sm mb-2">
                Ruído anormal no motor durante aceleração.
              </p>
              <div className="flex gap-2">
                <Badge variant="secondary">2 fotos</Badge>
                <Badge variant="secondary">1 vídeo</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline">Baixa Prioridade</Badge>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  1d atrás
                </div>
              </div>
              <p className="text-sm mb-2">
                Luz interna do painel não está funcionando.
              </p>
              <div className="flex gap-2">
                <Badge variant="secondary">1 foto</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Warning */}
        <Card className="bg-yellow-50 border-yellow-200">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div>
                <p className="font-medium text-yellow-800">Lembrete</p>
                <p className="text-sm text-yellow-700">
                  Registre ocorrências assim que identificar problemas para agilizar manutenções preventivas.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
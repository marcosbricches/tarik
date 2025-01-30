// src/app/maintenance/workshop/work-orders/[id]/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, Plus } from "lucide-react"
import Link from "next/link"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"

export default function WorkOrderDetails() {
  return (
    <div className="p-6 space-y-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-4">
        <Link href="/maintenance/workshop">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold">OS #123</h1>
            <Badge className="bg-blue-100 text-blue-800">Em Andamento</Badge>
          </div>
          <p className="text-muted-foreground">Veículo: ABC-1234</p>
        </div>
        <Button>Finalizar OS</Button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Informações Básicas */}
        <Card className="md:col-span-2">
          <CardContent className="p-6 space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Informações Básicas</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Mecânico</p>
                  <p>João Silva</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Data Prevista</p>
                  <p>30/01/2025</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Início</p>
                  <p>30/01/2025 08:00</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Previsão de Término</p>
                  <p>30/01/2025 10:00</p>
                </div>
              </div>
            </div>

            <Separator />

            {/* Itens de Manutenção */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Itens de Manutenção</h2>
              
              <div className="space-y-4">
                {/* Item 1 */}
                <div className="border rounded-lg p-4 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">Freios com desgaste excessivo</h3>
                        <Badge variant="destructive" className="bg-red-100 text-red-800">Alta</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Identificado no check-list do motorista
                      </p>
                    </div>
                    <Badge>Em Andamento</Badge>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="font-medium">Peças Utilizadas</label>
                      <div className="flex gap-2">
                        <Select>
                          <SelectTrigger className="flex-1">
                            <SelectValue placeholder="Selecionar peça" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">Pastilha de Freio</SelectItem>
                            <SelectItem value="2">Disco de Freio</SelectItem>
                          </SelectContent>
                        </Select>
                        <Input type="number" placeholder="Qtd" className="w-24" />
                        <Button>Adicionar</Button>
                      </div>

                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Peça</TableHead>
                            <TableHead>Quantidade</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>Pastilha de Freio</TableCell>
                            <TableCell>4 un</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>

                    <div className="space-y-2">
                      <label className="font-medium">Observações</label>
                      <Textarea 
                        placeholder="Adicione observações sobre este item"
                        className="resize-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="border rounded-lg p-4 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">Troca de óleo preventiva</h3>
                        <Badge className="bg-yellow-100 text-yellow-800">Média</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Manutenção preventiva programada
                      </p>
                    </div>
                    <Badge variant="secondary">Pendente</Badge>
                  </div>
                </div>
              </div>

              <Button variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Adicionar Novo Item
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Timeline */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Histórico</h2>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">30/01 08:00</p>
                </div>
                <div className="ml-6 pb-4 border-l pl-4">
                  <p className="font-medium">OS Iniciada</p>
                  <p className="text-sm text-muted-foreground">
                    Mecânico: João Silva
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">30/01 09:15</p>
                </div>
                <div className="ml-6 pb-4 border-l pl-4">
                  <p className="font-medium">Item Concluído</p>
                  <p className="text-sm text-muted-foreground">
                    Freios reparados com sucesso
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="space-y-2">
                <label className="font-medium">Adicionar Nota</label>
                <Textarea 
                  placeholder="Digite uma nota sobre o andamento"
                  className="resize-none"
                />
                <Button className="w-full">Adicionar</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
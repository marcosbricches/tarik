import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
  Clock,
  Search,
  Filter
} from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function TripsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background z-10">
        <div className="p-4 flex items-center gap-4">
          <Link href="/mobile/dashboard">
            <ChevronLeft className="h-6 w-6" />
          </Link>
          <h1 className="font-semibold">Minhas Viagens</h1>
        </div>

        {/* Search and Filter */}
        <div className="px-4 pb-4 space-y-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar viagens..."
              className="pl-9"
            />
          </div>
          <div className="flex gap-2">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="active">Em Andamento</SelectItem>
                <SelectItem value="completed">Concluídas</SelectItem>
                <SelectItem value="pending">Pendentes</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 space-y-6">
        {/* Active Trips */}
        <div className="space-y-2">
          <h2 className="text-sm font-medium text-muted-foreground px-2">
            EM ANDAMENTO
          </h2>
          
          <Card>
            <Link href="/mobile/trips/123">
              <CardContent className="p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                    Em Rota
                  </Badge>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div className="space-y-1">
                      <p className="font-medium">São Paulo → Rio de Janeiro</p>
                      <p className="text-sm text-muted-foreground">430 km • 6h estimadas</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>31/01/2025</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>Iniciada às 09:30</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Link>
            </Card>
            </div>
        {/* Pending Trips */}
        <div className="space-y-2">
          <h2 className="text-sm font-medium text-muted-foreground px-2">
            PENDENTES
          </h2>
          
          <Card>
            <Link href="/mobile/trips/124">
              <CardContent className="p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline">Aguardando Início</Badge>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div className="space-y-1">
                      <p className="font-medium">Rio de Janeiro → São Paulo</p>
                      <p className="text-sm text-muted-foreground">430 km • 6h estimadas</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>01/02/2025</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>Início previsto: 08:00</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Link>
          </Card>
        </div>

        {/* Completed Trips */}
        <div className="space-y-2">
          <h2 className="text-sm font-medium text-muted-foreground px-2">
            CONCLUÍDAS
          </h2>
          
          <Card>
            <Link href="/mobile/trips/122">
              <CardContent className="p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Concluída</Badge>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div className="space-y-1">
                      <p className="font-medium">São Paulo → Curitiba</p>
                      <p className="text-sm text-muted-foreground">408 km • 5h30 realizadas</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>30/01/2025</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>Finalizada às 15:30</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Link>
          </Card>
        </div>
      </main>
    </div>
  )
}
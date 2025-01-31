import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  ChevronLeft,
  ChevronRight,
  Search,
  Phone,
  MessagesSquare,
  BookOpen,
  PlayCircle,
  History,
  HelpCircle
} from "lucide-react"

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background z-10">
        <div className="p-4 flex items-center gap-4">
          <Link href="/mobile/settings">
            <ChevronLeft className="h-6 w-6" />
          </Link>
          <h1 className="font-semibold">Ajuda</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 space-y-6">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar ajuda..."
            className="pl-9"
          />
        </div>

        {/* Quick Help */}
        <Card>
          <CardContent className="p-0">
            <Link href="/mobile/settings/help/chat">
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MessagesSquare className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Chat com Suporte</p>
                    <p className="text-sm text-muted-foreground">Atendimento 24h</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </div>
            </Link>

            <Separator />

            <Link href="tel:0800123456">
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Central de Atendimento</p>
                    <p className="text-sm text-muted-foreground">0800 123 456</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </div>
            </Link>
          </CardContent>
        </Card>

        {/* Help Topics */}
        <div className="space-y-2">
          <h2 className="text-sm font-medium text-muted-foreground px-2">TÓPICOS DE AJUDA</h2>
          
          <Card>
            <CardContent className="p-0">
              <Link href="/mobile/settings/help/guides">
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <span>Guias e Tutoriais</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </Link>

              <Separator />

              <Link href="/mobile/settings/help/videos">
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <PlayCircle className="h-5 w-5 text-primary" />
                    <span>Vídeos Explicativos</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </Link>

              <Separator />

              <Link href="/mobile/settings/help/faq">
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-primary" />
                    <span>Perguntas Frequentes</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </Link>

              <Separator />

              <Link href="/mobile/settings/help/history">
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <History className="h-5 w-5 text-primary" />
                    <span>Histórico de Atendimentos</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Version Info */}
        <div className="text-center text-sm text-muted-foreground space-y-1">
          <p>Versão do App: 1.0.0</p>
          <p>Em caso de emergência, ligue para 0800 123 456</p>
        </div>
      </main>
    </div>
  )
}
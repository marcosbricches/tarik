import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ChevronLeft, AlertCircle, KeyRound, Shield, Eye, EyeOff } from "lucide-react"

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background z-10">
        <div className="p-4 flex items-center gap-4">
          <Link href="/mobile/settings">
            <ChevronLeft className="h-6 w-6" />
          </Link>
          <h1 className="font-semibold">Segurança</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 space-y-6">
        {/* Password Change Card */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <KeyRound className="h-5 w-5 text-primary" />
              <CardTitle>Alterar Senha</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current">Senha Atual</Label>
              <div className="relative">
                <Input
                  id="current"
                  type="password"
                  placeholder="Digite sua senha atual"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full"
                >
                  <Eye className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <Label htmlFor="new">Nova Senha</Label>
              <div className="relative">
                <Input
                  id="new"
                  type="password"
                  placeholder="Digite a nova senha"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full"
                >
                  <EyeOff className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Mínimo 4 caracteres, incluindo letras, números e caracteres especiais
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm">Confirmar Nova Senha</Label>
              <div className="relative">
                <Input
                  id="confirm"
                  type="password"
                  placeholder="Digite novamente a nova senha"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full"
                >
                  <EyeOff className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Tips */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <CardTitle>Dicas de Segurança</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Nunca compartilhe sua senha com outras pessoas.
              </AlertDescription>
            </Alert>

            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="min-w-[6px] h-[6px] rounded-full bg-primary mt-2" />
                Use senhas diferentes para cada conta
              </li>
              <li className="flex items-start gap-2">
                <span className="min-w-[6px] h-[6px] rounded-full bg-primary mt-2" />
                Evite usar informações pessoais na senha
              </li>
              <li className="flex items-start gap-2">
                <span className="min-w-[6px] h-[6px] rounded-full bg-primary mt-2" />
                Troque sua senha regularmente
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Action Button */}
        <div className="space-y-4">
          <Button className="w-full" size="lg">
            Salvar Nova Senha
          </Button>
        </div>
      </main>
    </div>
  )
}
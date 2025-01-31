import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      {/* Logo */}
      <div className="w-full max-w-[200px] mb-8">
        <Image
          src="/logo.png"
          alt="Logo"
          width={200}
          height={80}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Login Card */}
      <Card className="w-full max-w-[400px]">
        <CardHeader>
          <h1 className="text-2xl font-bold text-center">Login do Motorista</h1>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Error Alert - Only shown when there's an error */}
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Email ou senha inválidos
            </AlertDescription>
          </Alert>

          {/* Login Form */}
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              type="password"
              placeholder="Digite sua senha"
              className="w-full"
            />
          </div>

          <Button className="w-full" size="lg">
            Entrar
          </Button>
        </CardContent>

        <CardFooter className="flex justify-center">
          <Link 
            href="/mobile/auth/recover-password"
            className="text-sm text-primary hover:underline"
          >
            Esqueceu sua senha?
          </Link>
        </CardFooter>
      </Card>

      {/* Version Info */}
      <p className="text-muted-foreground text-sm mt-8">
        Versão 1.0.0
      </p>
    </div>
  )
}
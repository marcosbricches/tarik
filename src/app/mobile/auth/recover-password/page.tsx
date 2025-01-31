import Link from "next/link"
import Image from "next/image"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle2, AlertCircle } from "lucide-react"

export default function RecoverPasswordPage() {
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

      {/* Recover Password Card */}
      <Card className="w-full max-w-[400px]">
        <CardHeader>
          <div className="flex items-center mb-4">
            <Link 
              href="/mobile/auth/login"
              className="text-muted-foreground hover:text-primary"
            >
              <ChevronLeft className="h-6 w-6" />
            </Link>
          </div>
          <h1 className="text-2xl font-bold">Recuperar Senha</h1>
          <p className="text-sm text-muted-foreground">
            Digite seu e-mail para receber as instruções de recuperação de senha
          </p>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Success Alert - Only shown after successful submission */}
          <Alert className="bg-green-100 border-green-200">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-600">
              E-mail enviado com sucesso! Verifique sua caixa de entrada.
            </AlertDescription>
          </Alert>

          {/* Error Alert - Only shown when there's an error */}
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              E-mail não encontrado ou usuário inativo
            </AlertDescription>
          </Alert>

          {/* Form */}
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              className="w-full"
            />
          </div>

          <Button className="w-full" size="lg">
            Enviar instruções
          </Button>
        </CardContent>

        <CardFooter className="flex justify-center">
          <Link 
            href="/mobile/auth/login"
            className="text-sm text-primary hover:underline"
          >
            Voltar para o login
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
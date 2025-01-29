import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Recuperar Senha</CardTitle>
          <CardDescription>
            Digite seu e-mail para receber um link de recuperação de senha
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <label htmlFor="email">E-mail</label>
            <Input id="email" type="email" placeholder="exemplo@exemplo.com.br" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full">Enviar Link</Button>
          <Link href="/auth/login" className="text-sm text-blue-600 hover:underline">
            Voltar para o login
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
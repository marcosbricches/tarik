import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Entre com suas credenciais para acessar o sistema</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email">E-mail</label>
            <Input id="email" type="email" placeholder="exemplo@exemplo.com.br" />
          </div>
          <div className="space-y-2">
            <label htmlFor="password">Senha</label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full">Entrar</Button>
          <Link href="/auth/reset-password" className="text-sm text-blue-600 hover:underline">
            Esqueceu sua senha?
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
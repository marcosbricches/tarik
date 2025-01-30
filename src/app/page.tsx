// src/app/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface Module {
  title: string
  path: string
  description: string
  pages: {
    name: string
    path: string
    status?: "ready" | "in-progress" | "planned"
  }[]
}

const modules: Module[] = [
  {
    title: "Notificações e Relatórios",
    path: "/notifications",
    description: "Gestão completa de todas as finanças",
    pages: [
      {
        name: "Notificações",
        path: "/notifications",
        status: "ready"
      },
      {
        name: "Relatórios",
        path: "/reports",
        status: "ready"
      }
    ]
  },
  {
    title: "Financeiro",
    path: "/financial",
    description: "Gestão completa de todas as finanças",
    pages: [
      {
        name: "Dashboard",
        path: "/financial",
        status: "ready"
      },
      {
        name: "Receitas",
        path: "/financial/revenue",
        status: "ready"
      },
      {
        name: "Despesas",
        path: "/financial/expense",
        status: "ready"
      }
    ]
  },
  {
    title: "Manutenção e Oficina",
    path: "/maintenance",
    description: "Gestão completa de manutenções, estoque e check-lists",
    pages: [
      {
        name: "Check-lists",
        path: "/maintenance/checklists",
        status: "ready"
      },
      {
        name: "Oficina: Realizar Check-list",
        path: "/maintenance/workshop-checklist",
        status: "ready"
      },
      {
        name: "Produtos",
        path: "/maintenance/products",
        status: "ready"
      },
      {
        name: "Fornecedores",
        path: "/maintenance/suppliers",
        status: "ready"
      },
      {
        name: "Gestão de Estoque",
        path: "/maintenance/inventory",
        status: "ready"
      },
      {
        name: "Itens de Manutenção",
        path: "/maintenance/maintenance-items",
        status: "ready"
      },
      {
        name: "Gestão de Manutenções",
        path: "/maintenance/workshop",
        status: "ready"
      }
    ]
  },
  {
    title: "Operacional",
    path: "/operational",
    description: "Gestão de cargas, serviços e rotas",
    pages: [
      {
        name: "Tipos de Cargas",
        path: "/operational/cargo-types",
        status: "ready"
      },
      {
        name: "Clientes",
        path: "/operational/clients",
        status: "ready"
      },
      {
        name: "Serviços",
        path: "/operational/services",
        status: "ready"
      },
      {
        name: "Ordens",
        path: "/operational/orders",
        status: "ready"
      },
      {
        name: "Tracking",
        path: "/operational/tracking",
        status: "ready"
      },
      {
        name: "Rotas",
        path: "/operational/routes",
        status: "ready"
      }
    ]
  },
  {
    title: "Gestão de Frota",
    path: "/fleet",
    description: "Gerenciamento completo da frota de veículos",
    pages: [
      {
        name: "Mapa de Veículos",
        path: "/fleet/map",
        status: "ready"
      },
      {
        name: "Tipos de Veículos",
        path: "/fleet/vehicle-types",
        status: "ready"
      },
      {
        name: "Marcas e Modelos",
        path: "/fleet/brands-models",
        status: "ready"
      },
      {
        name: "Veículos",
        path: "/fleet/vehicles",
        status: "ready"
      },
      {
        name: "Motoristas",
        path: "/fleet/drivers",
        status: "ready"
      },
      {
        name: "Check-lists",
        path: "/fleet/checklist",
        status: "ready"
      }
    ]
  },
  {
    title: "Operacional",
    path: "/operational",
    description: "Gestão de clientes, cargas e serviços",
    pages: [
      {
        name: "Tipos de Cargas",
        path: "/operational/cargo-types",
        status: "ready"
      },
      {
        name: "Clientes",
        path: "/operational/clients",
        status: "ready"
      },
      {
        name: "Serviços",
        path: "/operational/services",
        status: "ready"
      }
    ]
  },
  {
    title: "Administração",
    path: "/admin",
    description: "Gerenciamento de acessos e configurações do sistema",
    pages: [
      {
        name: "Níveis de Acesso",
        path: "/admin/access-levels",
        status: "ready"
      },
      {
        name: "Documentos",
        path: "/admin/documents",
        status: "ready"
      },
      {
        name: "Usuários",
        path: "/admin/users",
        status: "ready"
      }
    ]
  },
  {
    title: "Autenticação",
    path: "/auth",
    description: "Controle de acesso e segurança",
    pages: [
      {
        name: "Login",
        path: "/auth/login",
        status: "ready"
      },
      {
        name: "Recuperar Senha",
        path: "/auth/reset-password",
        status: "ready"
      }
    ]
  }
]

function getStatusColor(status: string | undefined) {
  switch (status) {
    case "ready":
      return "bg-emerald-500"
    case "in-progress":
      return "bg-yellow-500"
    case "planned":
      return "bg-slate-500"
    default:
      return "bg-slate-500"
  }
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container py-6">
          <h1 className="text-3xl font-bold">Protótipo Visual de Alta Fidelidade</h1>
          <p className="mt-2 text-muted-foreground">
            Explore as funcionalidades implementadas no sistema
          </p>
        </div>
      </header>

      <main className="container py-8 flex-1">
        <div className="grid gap-6">
          {modules.map((module) => (
            <Card key={module.path}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl">{module.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      {module.description}
                    </p>
                  </div>
                  <Badge variant="outline">
                    {module.pages.length} páginas
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {module.pages.map((page) => (
                    <Link
                      key={page.path}
                      href={page.path}
                      className="group relative rounded-lg border p-4 hover:border-primary transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">{page.name}</h3>
                        <div 
                          className={`h-2 w-2 rounded-full ${getStatusColor(page.status)}`} 
                          title={page.status}
                        />
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Acessar página →
                      </p>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <footer className="border-t">
        <div className="container py-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-sm">Pronto</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-yellow-500" />
              <span className="text-sm">Em Desenvolvimento</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-slate-500" />
              <span className="text-sm">Planejado</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
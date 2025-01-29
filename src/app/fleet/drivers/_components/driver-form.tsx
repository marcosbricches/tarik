// src/app/fleet/drivers/_components/driver-form.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

interface DriverFormProps {
  isEditing?: boolean
  initialData?: any
}

export function DriverForm({ isEditing, initialData }: DriverFormProps) {
  return (
    <Tabs defaultValue="personal" className="space-y-4">
      <TabsList>
        <TabsTrigger value="personal">Dados Cadastrais</TabsTrigger>
        <TabsTrigger value="professional">Dados Profissionais</TabsTrigger>
        <TabsTrigger value="bank">Dados Bancários</TabsTrigger>
        <TabsTrigger value="others">Outras Informações</TabsTrigger>
      </TabsList>

      <TabsContent value="personal">
        <Card>
          <CardContent className="pt-6 space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label>Status</Label>
                <div className="text-sm text-muted-foreground">
                  Ativo ou Inativo
                </div>
              </div>
              <Switch defaultChecked={initialData?.status === "active"} />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Nome Completo</Label>
                <Input defaultValue={initialData?.name} />
              </div>
              <div className="space-y-2">
                <Label>Categoria da Habilitação</Label>
                <Select defaultValue={initialData?.licenseCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="A">A</SelectItem>
                    <SelectItem value="B">B</SelectItem>
                    <SelectItem value="C">C</SelectItem>
                    <SelectItem value="D">D</SelectItem>
                    <SelectItem value="E">E</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Número da Habilitação</Label>
                <Input defaultValue={initialData?.license} />
              </div>
              <div className="space-y-2">
                <Label>Data de Validade da Habilitação</Label>
                <Input 
                  type="date" 
                  defaultValue={initialData?.licenseExpiry}
                />
              </div>
              <div className="space-y-2">
                <Label>Documento de Identificação</Label>
                <Input defaultValue={initialData?.document} />
              </div>
              <div className="space-y-2">
                <Label>Data de Nascimento</Label>
                <Input 
                  type="date"
                  defaultValue={initialData?.birthDate}
                />
              </div>
              <div className="space-y-2">
                <Label>Estado Civil</Label>
                <Select defaultValue={initialData?.maritalStatus}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o estado civil" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single">Solteiro(a)</SelectItem>
                    <SelectItem value="married">Casado(a)</SelectItem>
                    <SelectItem value="divorced">Divorciado(a)</SelectItem>
                    <SelectItem value="widowed">Viúvo(a)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Telefone</Label>
                <Input defaultValue={initialData?.phone} />
              </div>
              <div className="col-span-2 space-y-2">
                <Label>Endereço Completo</Label>
                <Textarea defaultValue={initialData?.address} />
              </div>
              <div className="space-y-2">
                <Label>E-mail</Label>
                <Input 
                  type="email"
                  defaultValue={initialData?.email}
                />
              </div>
              <div className="space-y-2">
                <Label>Senha</Label>
                <Input 
                  type="password"
                  placeholder={isEditing ? "••••••••" : "Digite a senha"}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="professional">
        <Card>
          <CardContent className="pt-6 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Cargo</Label>
                <Input defaultValue={initialData?.position} />
              </div>
              <div className="space-y-2">
                <Label>Data de Início</Label>
                <Input 
                  type="date"
                  defaultValue={initialData?.startDate}
                />
              </div>
              <div className="space-y-2">
                <Label>Tempo de Experiência (meses)</Label>
                <Input 
                  type="number"
                  defaultValue={initialData?.experience}
                />
              </div>
              <div className="col-span-2 space-y-2">
                <Label>Histórico de Empresas</Label>
                <Textarea defaultValue={initialData?.previousCompanies} />
              </div>
              <div className="col-span-2 grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>Horário Inicial</Label>
                  <Input 
                    type="time"
                    defaultValue={initialData?.workStart}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Horário Final</Label>
                  <Input 
                    type="time"
                    defaultValue={initialData?.workEnd}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Intervalo (minutos)</Label>
                  <Input 
                    type="number"
                    defaultValue={initialData?.breakTime}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="bank">
        <Card>
          <CardContent className="pt-6 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Banco</Label>
                <Input defaultValue={initialData?.bankName} />
              </div>
              <div className="space-y-2">
                <Label>Código do Banco</Label>
                <Input defaultValue={initialData?.bankCode} />
              </div>
              <div className="space-y-2">
                <Label>Agência</Label>
                <Input defaultValue={initialData?.bankBranch} />
              </div>
              <div className="space-y-2">
                <Label>Número da Conta</Label>
                <Input defaultValue={initialData?.bankAccount} />
              </div>
              <div className="space-y-2">
                <Label>SWIFT</Label>
                <Input defaultValue={initialData?.swiftCode} />
              </div>
              <div className="space-y-2">
                <Label>IBAN</Label>
                <Input defaultValue={initialData?.ibanCode} />
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="others">
        <Card>
          <CardContent className="pt-6 space-y-6">
            <div className="space-y-2">
              <Label>Observações</Label>
              <Textarea 
                className="min-h-[150px]"
                defaultValue={initialData?.observations}
              />
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <div className="flex justify-end space-x-2">
        <Button variant="outline">Cancelar</Button>
        <Button>
          {isEditing ? "Salvar Alterações" : "Criar Motorista"}
        </Button>
      </div>
    </Tabs>
  )
}
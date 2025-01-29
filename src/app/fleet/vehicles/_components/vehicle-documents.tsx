// src/app/fleet/vehicles/_components/vehicle-documents.tsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus, X } from "lucide-react"

interface Document {
  type: string
  number?: string
  expiryDate?: string
}

interface VehicleDocumentsProps {
  documents?: Document[]
}

export function VehicleDocuments({ documents = [] }: VehicleDocumentsProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label>Documentos</Label>
        <Button type="button" variant="outline" size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Adicionar Documento
        </Button>
      </div>
      <div className="space-y-4">
        {documents.map((doc, index) => (
          <div key={index} className="grid grid-cols-3 gap-4">
            <Input placeholder="Tipo de Documento" defaultValue={doc.type} />
            <Input placeholder="Número" defaultValue={doc.number} />
            <div className="flex gap-2">
              <Input 
                type="date" 
                placeholder="Data de Validade"
                defaultValue={doc.expiryDate}
              />
              <Button type="button" variant="ghost" size="icon">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
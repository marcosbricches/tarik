// src/app/orders/new/page.tsx
import { OrderForm } from "@/app/operational/orders/_components/order-form"

export default function NewOrderPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Novo Pedido</h1>
      </div>
      <OrderForm />
    </div>
  )
}
// src/app/orders/[id]/edit/page.tsx
import { OrderForm } from '@/app/orders/_components/order-form';

export default function EditOrderPage() {
    return (
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Editar Pedido #1234</h1>
        </div>
        <OrderForm isEditing />
      </div>
    )
  }
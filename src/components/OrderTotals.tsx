import { OrderItem } from "../types"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}

export default function OrderTotals({order, tip, placeOrder} : OrderTotalsProps) {
  return (
    <div>
      
    </div>
  )
}

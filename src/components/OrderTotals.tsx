import { useMemo } from "react";
import { formatCurrency } from "../helpers";
import { OrderItem } from "../types";

type OrderTotalsProps = {
  order: OrderItem[];
  tip: number;
  placeOrder: () => void;
};

export default function OrderTotals({
  order,
  tip,
  placeOrder,
}: OrderTotalsProps) {
  const subTotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );
  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propina:</h2>
        <p>
          Subtotal a pagar: {""}
          <span className="font-bold">{formatCurrency(subTotalAmount)}</span>
        </p>
        <p>
          Propina: {""}
          <span className="font-bold">{formatCurrency(3)}</span>
        </p>
        <p>
          Total a Pagar: {""}
          <span className="font-bold">{formatCurrency(5)}</span>
        </p>
      </div>
      <button
        className="w-full bg-black p-3 uppercase hover:cursor-pointer text-white font-bold mt-10 disabled:opacity-10"
        disabled={false}
        onClick={placeOrder}
      >
        Guardar Orden
      </button>
    </>
  );
}

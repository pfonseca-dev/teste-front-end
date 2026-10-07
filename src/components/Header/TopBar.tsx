import { ShieldCheck, Truck, CreditCard } from "lucide-react";

export function TopBar() {
  return (
    <div className="top-bar">
        <div className="top-bar__content container">
            <span><ShieldCheck size={16} />Compra<strong> 100% Segura</strong></span>
            <span><Truck size={16} /> <strong>Frete Grátis</strong> acima de R$ 200</span>
            <span><CreditCard size={16} /> <strong>Parcele</strong> suas compras</span>
        </div>
    </div>
  )
}
import { seguroIcon, caminhaIcon, cartaoIcon } from "../../assets";

export function TopBar() {
  return (
    <div className="top-bar">
        <div className="top-bar__content container">
            <span><img src={seguroIcon} alt="" className="top-bar__icon" />Compra<strong> 100% Segura</strong></span>
            <span><img src={caminhaIcon} alt="" className="top-bar__icon" /> <strong>Frete Grátis</strong> acima de R$ 200</span>
            <span><img src={cartaoIcon} alt="" className="top-bar__icon" /> <strong>Parcele</strong> suas compras</span>
        </div>
    </div>
  )
}

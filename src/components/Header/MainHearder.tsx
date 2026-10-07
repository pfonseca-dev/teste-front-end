import { Logo } from "../../assets/index";
import { Search, Heart, UserRound, ShoppingCart, Package } from "lucide-react";

export function MainHeader() {
  return (
    <div className="main-header">
        <div className="main-header__content container">
            <a href="/" className="main-header__logo">
                <img src={Logo} alt="Logo" />
            </a>
            <form className="main-header__search">
                <input type="search" placeholder="O que você está buscando?" aria-label="Buscar produtos" />
                <button type="submit" aria-label="Buscar">
                    <Search size={20} />
                </button>
            </form>
            <nav className="main-header__actions" aria-label="Ações do usuário">
                <button className="main-header__action" aria-label="Pedidos"><Package size={20} /></button>
                <button className="main-header__action" aria-label="Favoritos"><Heart size={20} /></button>
                <button className="main-header__action" aria-label="Minha Conta"><UserRound size={20} /></button>
                <button className="main-header__action" aria-label="Carrinho de compras"><ShoppingCart size={20} /></button>
            </nav>
        </div>
    </div>
  )
}
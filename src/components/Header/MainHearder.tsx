import { 
    Logo,
    buscarIcon,
    carrinhoIcon,
    contaIcon,
    favoritosIcon,
    pedidoIcon,
} from "../../assets/index";

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
                    <img src={buscarIcon} alt="" className="main-header__search-image" />
                </button>
            </form>
            <nav className="main-header__actions" aria-label="Ações do usuário">
                <button className="main-header__action" aria-label="Pedidos">
                    <img src={pedidoIcon} alt="" className="main-header__orders" />
                </button>
                <button className="main-header__action" aria-label="Favoritos">
                    <img src={favoritosIcon} alt="" className="main-header__favority" />
                </button>
                <button className="main-header__action" aria-label="Minha Conta">
                    <img src={contaIcon} alt="" className="main-header__account" />
                </button>
                <button className="main-header__action" aria-label="Carrinho de compras">
                    <img src={carrinhoIcon} alt="" className="main-header__cart" />
                </button>
            </nav>
        </div>
    </div>
  )
}
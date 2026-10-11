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
                <img src={Logo} alt="Econverse — página inicial" />
            </a>
            <form className="main-header__search" role="search" aria-label="Busca de produtos" onSubmit={(event) => event.preventDefault()}>
                <input type="search" placeholder="O que você está buscando?" aria-label="Buscar produtos (indisponível neste teste)" aria-disabled="true" readOnly tabIndex={-1} title="Busca indisponível neste teste" />
                <button type="submit" aria-label="Buscar" aria-disabled="true" tabIndex={-1} title="Busca indisponível neste teste">
                    <img src={buscarIcon} alt="" className="main-header__search-image" />
                </button>
            </form>
            <div className="main-header__actions" role="group" aria-label="Ações do usuário (indisponíveis neste teste)">
                <button type="button" className="main-header__action" aria-label="Pedidos" aria-disabled="true" tabIndex={-1} title="Pedidos indisponíveis neste teste">
                    <img src={pedidoIcon} alt="" className="main-header__orders" />
                </button>
                <button type="button" className="main-header__action" aria-label="Favoritos" aria-disabled="true" tabIndex={-1} title="Favoritos indisponíveis neste teste">
                    <img src={favoritosIcon} alt="" className="main-header__favority" />
                </button>
                <button type="button" className="main-header__action" aria-label="Minha Conta" aria-disabled="true" tabIndex={-1} title="Conta indisponível neste teste">
                    <img src={contaIcon} alt="" className="main-header__account" />
                </button>
                <button type="button" className="main-header__action" aria-label="Carrinho de compras" aria-disabled="true" tabIndex={-1} title="Carrinho indisponível neste teste">
                    <img src={carrinhoIcon} alt="" className="main-header__cart" />
                </button>
            </div>
        </div>
    </div>
  )
}

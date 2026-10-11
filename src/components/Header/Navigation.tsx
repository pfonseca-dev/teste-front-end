import { coroaIcon } from "../../assets";

const navigationLinks = [
  'TODAS CATEGORIAS',
  'SUPERMERCADO',
  'LIVROS',
  'MODA',
  'LANÇAMENTOS',
  'OFERTAS DO DIA',
  'ASSINATURA',
];

const navigationTargets: Record<string, string> = {
  'TODAS CATEGORIAS': '#categories',
  'OFERTAS DO DIA': '#products',
};

export function Navigation() {
  const activeLink = 'OFERTAS DO DIA';

  return (
    <nav className="navigation" aria-label="Navegação principal">
      <ul className="navigation__list container">
        {navigationLinks.map((link) => (
          <li key={link} className="navigation__item">
            <a
              href={navigationTargets[link]}
              role={navigationTargets[link] ? undefined : 'link'}
              aria-disabled={navigationTargets[link] ? undefined : true}
              title={navigationTargets[link] ? undefined : 'Página indisponível neste teste'}
              className={`navigation__link ${
                link === activeLink ? 'navigation__link--active' : ''
              }`}
            >
              {link === 'ASSINATURA' && <img src={coroaIcon} alt="" className="navigation__signature" />}
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

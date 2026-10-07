import { Crown } from "lucide-react"

const navigationLinks = [
  'TODAS CATEGORIAS',
  'SUPERMERCADO',
  'LIVROS',
  'MODA',
  'LANÇAMENTOS',
  'OFERTAS DO DIA',
  'ASSINATURA',
];

export function Navigation() {
  const activeLink = 'OFERTAS DO DIA';

  return (
    <nav className="navigation" aria-label="Navegação principal">
      <ul className="navigation__list container">
        {navigationLinks.map((link) => (
          <li key={link} className="navigation__item">
            <a
              href="#"
              className={`navigation__link ${
                link === activeLink ? 'navigation__link--active' : ''
              }`}
            >
              {link === 'ASSINATURA' && <Crown size={16} />}
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
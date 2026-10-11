import {
    tecnologiaIcon, 
    supermercadoIcon, 
    bebidasIcon, 
    ferramentasIcon, 
    saudeIcon, 
    esportesIcon, 
    modaIcon
} from '../../assets'
import './Categories.scss';

const categories = [
    { name: 'Tecnologia', icon: tecnologiaIcon, active: true },
    { name: 'Supermercado', icon: supermercadoIcon, active: false},
    { name: 'Bebidas', icon: bebidasIcon, active: false },
    { name: 'Ferramentas', icon: ferramentasIcon, active: false },
    { name: 'Saúde', icon: saudeIcon, active: false },
    { name: 'Esportes e Fitness', icon: esportesIcon, active: false },
    { name: 'Moda', icon: modaIcon, active: false }
];

export function Categories() {
    return (
        <section id="categories" className="categories" aria-label="Categorias de produtos">
            <div className="container">
                <ul className="categories__list">
                    {categories.map(({ name, icon, active }) => (
                        <li key={name}
                        className={`categories__item ${
                            active ? 'categories__item--active' : ''
                        }`}
                        >
                            <button type="button" className="categories__button" aria-disabled="true" tabIndex={-1} title="Filtro por categoria indisponível neste teste">
                                <span className="categories__icon">
                                    <img src={icon} alt="" className="categories__image"/>
                                </span>
                                <span className="categories__label">{name}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

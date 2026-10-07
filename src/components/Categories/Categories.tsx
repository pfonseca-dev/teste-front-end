import { MonitorSmartphone, Store, Wine, Wrench, HeartHandshake, Dumbbell,Shirt } from "lucide-react";
import './Categories.scss';

const categories = [
    { name: 'Tecnologia', icon: MonitorSmartphone },
    { name: 'Supermercado', icon: Store },
    { name: 'Bebidas', icon: Wine },
    { name: 'Ferramentas', icon: Wrench },
    { name: 'Saúde', icon: HeartHandshake },
    { name: 'Esportes e Fitness', icon: Dumbbell },
    { name: 'Moda', icon: Shirt }
];

export function Categories() {
    return (
        <section className="categories" aria-label="Categorias de produtos">
            <div className="container">
                <ul className="categories__list">
                    {categories.map(({ name, icon: Icon }, index) => (
                        <li key={name}
                        className={`categories__item ${
                            index === 0 ? 'categories__item--active' : ''
                        }`}
                        >
                            <button type="button" className="categories__button">
                                <span className="categories__icon">
                                    <Icon size={36} strokeWidth={1.5} />
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
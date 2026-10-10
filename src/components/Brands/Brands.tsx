import { Logo } from "../../assets/index"
import "./Brands.scss"

const brands = [
    { id: 1, name: 'Econverse', logo: Logo},
    { id: 2, name: 'Econverse', logo: Logo},
    { id: 3, name: 'Econverse', logo: Logo},
    { id: 4, name: 'Econverse', logo: Logo},
    { id: 5, name: 'Econverse', logo: Logo},
]

export function Brands(){
    return(
        <section className="brands" aria-label="brands-title">
            <div className="container">
                <h2 id="brands-title" className="brands__title">Navegue por marcas</h2>
                <ul className="brands__list">
                    {brands.map((brand) =>
                        <li key={brand.id} className="brands__item">
                            <div className="brands__circle">
                                <img src={brand.logo} alt={brand.name} className="brands__logo"/>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </section>
    )
}
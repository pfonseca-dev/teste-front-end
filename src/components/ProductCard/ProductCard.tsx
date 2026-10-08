import type { Product } from "../../types/product";
import "./ProductCard.scss"

interface ProductCardProps {
    product: Product;
    onSelect: (product: Product) => void;
}

export function ProductCard({ product, onSelect }: ProductCardProps) {
    return (
        <article className="product-card">
            <div className="product-card__image">
                <img src={product.photo} alt={product.productName} loading="lazy" />
            </div>
            <div className="product-card__content">
                <h3 className="product-card__title">{product.productName}</h3>
                <p className="product-card__price">{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                <button type="button" className="product-card__button" onClick={() => onSelect(product)}>COMPRAR</button>
            </div>
        </article>
    );
}
import type { Product } from "../../types/product";

import "./ProductCard.scss"

interface ProductCardProps {
    product: Product;
    onSelect: (product: Product) => void;
}

export function ProductCard({ product, onSelect }: ProductCardProps) {
    const formatPrice = (price: number)=>
    price.toLocaleString('pt-BR', {
        style: 'currency', currency: 'BRL'
    })

    const installmentPrice = product.installments && product.installments > 0
    ? product.price / product.installments : null;

    return (
        <article className="product-card">
            <div className="product-card__image">
                <img src={product.photo} alt={product.productName} loading="lazy" />
            </div>
            <div className="product-card__content">
                <h3 className="product-card__title">{product.productName}</h3>
                <p className="product-card__description">{product.descriptionShort}</p>
                <div className="product-card__pricing">
                    {product.oldPrice != null && (
                        <span className="product-card__old-price">
                            {formatPrice(product.oldPrice)}
                        </span>
                    )}

                    <p className="product-card__price">{formatPrice(product.price)}</p>

                    {installmentPrice !== null && (
                        <span className="product-card__installments">
                            ou {product.installments}x de{' '}
                            {formatPrice(installmentPrice)} sem juros
                        </span>
                    )}

                    {product.freeShipping && (
                        <span className="product-card__shipping">
                        Frete grátis
                        </span>
                    )}
                </div>
                <button type="button" className="product-card__button" onClick={() => onSelect(product)}>COMPRAR</button>
            </div>
        </article>
    );
}

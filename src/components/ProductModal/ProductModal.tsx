import { useEffect, useState } from 'react';
import { X, Minus, Plus } from 'lucide-react';

import type { Product } from '../../types/product';

import './ProductModal.scss';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    };
  }, [onClose])

  function decreaseQuantity() { setQuantity((current) => Math.max(1, current - 1)) }

  function increaseQuantity() { setQuantity((current) => current + 1) }

  return (
    <div className="product-modal__overlay" onMouseDown={(event) => {
        if (event.target === event.currentTarget) { onClose() }
      }}
    >
      <div className="product-modal" role="dialog" aria-modal="true" aria-labelledby="product-modal-title" aria-describedby="product-modal-description">
        <button type="button" className="product-modal__close" aria-label="Fechar detalhes do produto" onClick={onClose}>
          <X size={22} />
        </button>

        <div className="product-modal__image">
          <img src={product.photo} alt={product.productName} />
        </div>

        <div className="product-modal__content">
          <h2 id="product-modal-title" className="product-modal__title">
            {product.productName}
          </h2>

          <p className="product-modal__price">
            {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </p>

          <p id="product-modal-description" className="product-modal__description">
            {product.descriptionShort}
          </p>

          <a href="product_details" className="product-modal__details" onClick={(event) => event.preventDefault()}>
            Veja mais detalhes do produto &gt;
          </a>

          <div className="product-modal__actions">
                <div className="product-modal__quantity-control" aria-label="Quantidade do produto">
                    <button type="button" onClick={decreaseQuantity} aria-label="Diminuir quantidade" disabled={quantity === 1}>
                        <Minus size={14} />
                    </button>

                    <span aria-live="polite">
                        {String(quantity).padStart(2, '0')}
                    </span>

                    <button type="button" onClick={increaseQuantity} aria-label="Aumentar quantidade">
                        <Plus size={14} />
                    </button>
                </div>

                <button type="button" className="product-modal__buy">
                    COMPRAR
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}
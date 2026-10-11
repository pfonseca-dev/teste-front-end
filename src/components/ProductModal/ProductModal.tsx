import { useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Minus, Plus } from 'lucide-react';

import type { Product } from '../../types/product';

import './ProductModal.scss';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);

  const modalRef = useRef<HTMLDivElement>(null)
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    const modal = modalRef.current;

    if (!modal) return;

    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;
    const background = document.getElementById('root');
    const previousInert = background?.inert ?? false;

    document.body.style.overflow = 'hidden';
    if (background) background.inert = true;

    const focusableElements = () =>
      Array.from(
        modal.querySelectorAll<HTMLElement>(
          'button:not(:disabled), a[href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((element) => element.tabIndex >= 0
        && element.getAttribute('aria-disabled') !== 'true'
        && element.getClientRects().length > 0);

    (focusableElements()[0] ?? modal).focus({ preventScroll: true });

    function handleFocusIn(event: FocusEvent) {
      if (event.target instanceof Node && !modal?.contains(event.target)) {
        (focusableElements()[0] ?? modal)?.focus({ preventScroll: true });
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== 'Tab') return;

      const elements = focusableElements();

      if (elements.length === 0) {
        event.preventDefault();
        modal?.focus();
        return;
      }

      const first = elements[0];
      const last = elements[elements.length - 1];

      if (event.shiftKey) {
        if (document.activeElement === first || !modal?.contains(document.activeElement)) {
          event.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last || !modal?.contains(document.activeElement)) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('focusin', handleFocusIn);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('focusin', handleFocusIn);
      document.body.style.overflow = previousOverflow;
      if (background) background.inert = previousInert;

      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) {
        previousFocus.focus({ preventScroll: true });
      }
    };
  }, [onClose]);

  function decreaseQuantity() { setQuantity((current) => Math.max(1, current - 1)) }

  function increaseQuantity() { setQuantity((current) => current + 1) }

  return createPortal(
    <div className="product-modal__overlay" onMouseDown={(event) => {
        if (event.target === event.currentTarget) { onClose() }
      }}
    >
      <div ref={modalRef} tabIndex={-1} className="product-modal" role="dialog" aria-modal="true" aria-labelledby={titleId} aria-describedby={descriptionId}>
        <button type="button" className="product-modal__close" aria-label="Fechar detalhes do produto" onClick={onClose}>
          <X size={22} aria-hidden="true" />
        </button>

        <div className="product-modal__image">
          <img src={product.photo} alt={product.productName} />
        </div>

        <div className="product-modal__content">
          <h2 id={titleId} className="product-modal__title">
            {product.productName}
          </h2>

          <p className="product-modal__price">
            {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </p>

          <p id={descriptionId} className="product-modal__description">
            {product.descriptionShort}
          </p>

          <a className="product-modal__details" role="link" aria-disabled="true" title="Página de detalhes indisponível neste teste">
            Veja mais detalhes do produto &gt;
          </a>

          <div className="product-modal__actions">
                <div className="product-modal__quantity-control" role="group" aria-label="Quantidade do produto">
                    <button type="button" onClick={decreaseQuantity} aria-label="Diminuir quantidade" disabled={quantity === 1}>
                        <Minus size={14} aria-hidden="true" />
                    </button>

                    <span role="status" aria-label={`Quantidade: ${quantity}`}>
                        {String(quantity).padStart(2, '0')}
                    </span>

                    <button type="button" onClick={increaseQuantity} aria-label="Aumentar quantidade">
                        <Plus size={14} aria-hidden="true" />
                    </button>
                </div>

                <button type="button" className="product-modal__buy" aria-disabled="true" tabIndex={-1} title="Compra e checkout indisponíveis neste teste">
                    COMPRAR
                </button>
            </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

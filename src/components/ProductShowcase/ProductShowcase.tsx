import { useCallback, useId, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { ProductCard } from "../ProductCard/ProductCard";
import { ProductModal } from "../ProductModal/ProductModal";
import type { Product } from "../../types/product";

import "./ProductShowcase.scss";

const productCategorie = [
    'CELULAR',
    'ACESSÓRIOS',
    'TABLETS',
    'NOTEBOOKS',
    'TVS',
    'VER TODOS',
]

interface ProductShowcaseProps {
    id?: string;
    showCategories?: boolean;
    products: Product[];
    loading: boolean;
    error: string | null;
}

export function ProductShowcase({ id, showCategories = true, products, loading, error }: ProductShowcaseProps) {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

    const carouselRef = useRef<HTMLDivElement>(null);
    const titleId = useId();
    const carouselId = useId();
    const closeModal = useCallback(() => setSelectedProduct(null), []);

    function scrollCarousel(direction: 'left' | 'right') {
        const carousel = carouselRef.current;

        if (!carousel) return;

        const card = carousel.querySelector<HTMLElement>('.product-card');

        if (!card) return;

        const gap = parseFloat(getComputedStyle(carousel).columnGap) || 0;

        const distance = card.getBoundingClientRect().width + gap;

        carousel.scrollBy({
            left: direction === 'right' ? distance : -distance,
            behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
        });
    }

    function handleSelectProduct(product: Product) {
        setSelectedProduct(product);
    }

    return (
        <section id={id} className="product-showcase" aria-labelledby={titleId}>
            <div className="container">
                <header className="product-showcase__header">
                    <h2 id={titleId} className="product-showcase__title">
                        Produtos relacionados
                    </h2>

                    {showCategories ? (
                        <div className="product-showcase__categories" role="group" aria-label="Categorias da vitrine (filtros indisponíveis neste teste)">
                            {productCategorie.map((category, index) => (
                            <button key={category} type="button" aria-disabled="true" tabIndex={-1} title="Filtro indisponível neste teste" className={`product-showcase__category ${
                                index === 0 ? 'product-showcase__category--active' : ''}`}>
                                {category}
                            </button>
                            ))}
                        </div>
                    ) : (
                        <a href="#products" className="product-showcase__view-all">Ver todos</a>
                    )}
                </header>

                {loading && (
                <p className="product-showcase__message" role="status">
                    Carregando produtos...
                </p>
                )}

                {error && (
                <p className="product-showcase__message" role="alert">
                    Não foi possível carregar os produtos.
                </p>
                )}

                {!loading && !error && products.length === 0 && (
                    <p className="product-showcase__message" role="status">Nenhum produto disponível no momento.</p>
                )}

                {!loading && !error && products.length > 0 && (
                    <div className="product-showcase__carousel">
                        <button type="button" className="product-showcase__arrow product-showcase__arrow--left" aria-label="Ver produtos anteriores" aria-controls={carouselId} onClick={() => scrollCarousel('left')}>
                            <ChevronLeft size={24} aria-hidden="true" />
                        </button>

                        <div id={carouselId} className="product-showcase__grid" ref={carouselRef} tabIndex={0} role="group" aria-label="Produtos; use as setas do teclado para navegar" onKeyDown={(event) => {
                            if (event.target !== event.currentTarget) return;
                            if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
                                event.preventDefault();
                                scrollCarousel(event.key === 'ArrowLeft' ? 'left' : 'right');
                            }
                        }}>
                            {products.map((product, index) => (
                            <ProductCard
                                key={`${product.productName}-${index}`}
                                product={product}
                                onSelect={handleSelectProduct}
                            />
                            ))}
                        </div>

                        <button type="button" className="product-showcase__arrow product-showcase__arrow--right" aria-label="Ver próximos produtos" aria-controls={carouselId} onClick={() => scrollCarousel('right')}>
                            <ChevronRight size={24} aria-hidden="true" />
                        </button>
                    </div>
                )}
            </div>
            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    onClose={closeModal}
                />
            )}
        </section>
    );
}

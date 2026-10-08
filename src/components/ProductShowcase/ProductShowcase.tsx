import { useState } from "react";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { useProduct } from "../../hooks/useProduct";
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

export function ProductShowcase() {
    const { products, loading, error } = useProduct();
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const carouselRef = useRef<HTMLDivElement>(null);

    function scrollCarousel(direction: 'left' | 'right') {
        const carousel = carouselRef.current;

        if (!carousel) return;

        const card = carousel.querySelector<HTMLElement>('.product-card');

        if (!card) return;

        const gap = parseFloat(getComputedStyle(carousel).columnGap) || 0;

        const distance = card.getBoundingClientRect().width + gap;

        carousel.scrollBy({
            left: direction === 'right' ? distance : -distance,
            behavior: 'smooth',
        });
    }

    function handleSelectProduct(product: Product) {
        setSelectedProduct(product);
    }

    return (
        <section className="product-showcase">
            <div className="container">
                <header className="product-showcase__header">
                    <h2 className="product-showcase__title">
                        Produtos relacionados
                    </h2>

                    <nav className="product-showcase__categories" aria-label="Categorias da vitrine">
                        {productCategorie.map((category, index) => (
                        <button
                            key={category}
                            type="button"
                            className={`product-showcase__category ${
                            index === 0 ? 'product-showcase__category--active' : ''
                            }`}
                        >
                            {category}
                        </button>
                        ))}
                    </nav>
                </header>

                {loading && (
                <p className="product-showcase__message">
                    Carregando produtos...
                </p>
                )}

                {error && (
                <p className="product-showcase__message" role="alert">
                    Não foi possível carregar os produtos.
                </p>
                )}

                {!loading && !error && (
                    <div className="product-showcase__carousel">
                        <button type="button" className="product-showcase__arrow product-showcase__arrow--left" aria-label="Ver produtos anteriores" onClick={() => scrollCarousel('left')}>
                            <ChevronLeft size={24} />
                        </button>

                        <div className="product-showcase__grid" ref={carouselRef}>
                            {products.map((product, index) => (
                            <ProductCard
                                key={`${product.productName}-${index}`}
                                product={product}
                                onSelect={handleSelectProduct}
                            />
                            ))}
                        </div>

                        <button type="button" className="product-showcase__arrow product-showcase__arrow--right" aria-label="Ver próximos produtos" onClick={() => scrollCarousel('right')}>
                            <ChevronRight size={24} />
                        </button>
                    </div>
                )}
            </div>
            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}
        </section>
    );
}
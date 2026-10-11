import { useEffect, useState } from "react";
import { getProducts } from "../service/products";
import type { Product } from "../types/product";

export function useProduct() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let active = true;

        async function loadProducts() {
            try {
                const productsData = await getProducts();
                if (active) {
                    setProducts(productsData);
                }
            } catch (err) {
                if (active) {
                    if (err instanceof Error) {
                        setError(err.message);
                    } else {
                        setError('Erro ao carregar produtos');
                    }
                }
            } finally {
                if (active) {
                    setLoading(false);
                }
            }
        }

        loadProducts();

        return () => {
            active = false;
        };
    }, []);

    return { products, loading, error };
}   
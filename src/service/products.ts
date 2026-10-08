import type { Product, ProductResponse } from '../types/product';

const PRODUCTS_URL = '/api/products';

export async function getProducts(): Promise<Product[]> {
    const response = await fetch(PRODUCTS_URL);

    if(!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
    }

    const data: ProductResponse = await response.json();

    if(!data.success || !Array.isArray(data.products)) {
        throw new Error('Resposta inválida da API de produtos');
    }

    return data.products;
}
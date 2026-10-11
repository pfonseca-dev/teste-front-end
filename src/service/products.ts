import type { Product } from '../types/product';

const PRODUCTS_URL = '/api/products';
let pendingRequest: Promise<Product[]> | null = null;

function isProduct(value: unknown): value is Product {
    if (typeof value !== 'object' || value === null) return false;

    return 'productName' in value && typeof value.productName === 'string'
        && 'descriptionShort' in value && typeof value.descriptionShort === 'string'
        && 'photo' in value && typeof value.photo === 'string'
        && 'price' in value && typeof value.price === 'number' && Number.isFinite(value.price)
        && (!('oldPrice' in value) || (typeof value.oldPrice === 'number' && Number.isFinite(value.oldPrice)))
        && (!('installments' in value) || (typeof value.installments === 'number' && Number.isInteger(value.installments) && value.installments > 0))
        && (!('freeShipping' in value) || typeof value.freeShipping === 'boolean');
}

async function fetchProducts(): Promise<Product[]> {
    const response = await fetch(PRODUCTS_URL);

    if(!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
    }

    const data: unknown = await response.json();

    if (typeof data !== 'object' || data === null
        || !('success' in data) || data.success !== true
        || !('products' in data) || !Array.isArray(data.products)
        || !data.products.every(isProduct)) {
        throw new Error('Resposta inválida da API de produtos');
    }

    return data.products;
}

export function getProducts(): Promise<Product[]> {
    pendingRequest ??= fetchProducts().finally(() => {
        pendingRequest = null;
    });

    return pendingRequest;
}

export interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
  oldPrice?: number;
  installments?: number;
  freeShipping?: boolean;
}

export interface ProductResponse {
    success: boolean;
    products: Product[];
}

import { Product } from "@/types/product";

const API_URL = "https://dummyjson.com/products";

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await response.json();

  return data.products;
}

export async function searchProducts(
  query: string,
  limit = 30
): Promise<Product[]> {
  const url = new URL(`${API_URL}/search`);
  url.searchParams.set("q", query);
  url.searchParams.set("limit", String(limit));

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to search products");
  }

  const data: { products: Product[] } = await response.json();
  return data.products;
}

export async function getProduct(id: string): Promise<Product | null> {
  const response = await fetch(`${API_URL}/${id}`);

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  return response.json();
}
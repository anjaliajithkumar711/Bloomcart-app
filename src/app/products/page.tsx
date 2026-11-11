import { Suspense } from "react";
import ProductCard from "@/components/ProductCard";
import { getProducts, searchProducts } from "@/services/productServices";

export default function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string | string[] }>;
}) {
  return (
    <Suspense
      fallback={
        <section className="max-w-7xl mx-auto px-6 py-12">
          <p className="text-center text-gray-500">Loading products...</p>
        </section>
      }
    >
      <ProductsContent searchParams={searchParams} />
    </Suspense>
  );
}

async function ProductsContent({
  searchParams,
}: {
  searchParams: Promise<{ q?: string | string[] }>;
}) {
  const { q } = await searchParams;
  const searchQuery = (Array.isArray(q) ? q[0] : q)?.trim() ?? "";
  const products = searchQuery
    ? await searchProducts(searchQuery)
    : await getProducts();

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">

      <h1 className="text-3xl font-bold text-center mb-3">
        {searchQuery ? `Search Results for "${searchQuery}"` : "Our Products"}
      </h1>

      <p className="text-gray-500 text-center mb-10">
        {searchQuery
          ? `${products.length} product${products.length === 1 ? "" : "s"} found.`
          : "Find your favourite products here."}
      </p>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">
          No products found. Try a different search.
        </p>
      )}

    </section>
  );
}
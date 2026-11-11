"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Product } from "@/types/product";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchError, setSearchError] = useState("");
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setProducts([]);
      setLoading(false);
      setSearchError("");
      return;
    }

    const controller = new AbortController();
    setLoading(true);
    setSearchError("");

    const timer = setTimeout(async () => {
      try {
        const response = await fetch(
          `/api/products/search?q=${encodeURIComponent(query.trim())}`,
          { signal: controller.signal }
        );

        const data: { products?: Product[]; message?: string } =
          await response.json();

        if (!response.ok) {
          throw new Error(data.message ?? "Search failed");
        }

        setProducts(data.products ?? []);
      } catch (error) {
        if (!(error instanceof Error && error.name === "AbortError")) {
          setProducts([]);
          setSearchError(
            error instanceof Error
              ? error.message
              : "Product search is temporarily unavailable."
          );
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }, 300);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query]);

  return (
    <form
      action="/products"
      method="get"
      className="relative order-3 w-full lg:order-none lg:w-auto lg:max-w-md lg:flex-1"
    >
      <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 bg-gray-50 focus-within:border-emerald-600">

       

        <input
          type="text"
          name="q"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowResults(true);
          }}
          onFocus={() => setShowResults(true)}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setShowResults(false);
            }
          }}
          placeholder="Search products..."
          className="w-full bg-transparent outline-none text-sm"
        />

        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setShowResults(false);
            }}
            className="text-gray-500 hover:text-red-500"
          >
            search
          </button>
        )}
      </div>

      {showResults && query.trim() && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl rounded-xl mt-2 z-[100] border border-gray-200 overflow-hidden">

          {loading ? (
            <p className="p-4 text-center text-gray-500">
              Searching products...
            </p>
          ) : searchError ? (
            <p className="p-4 text-center text-red-600" role="status">
              {searchError}
            </p>
          ) : products.length > 0 ? (
            <div>
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  onClick={() => {
                    setShowResults(false);
                    setQuery("");
                  }}
                  className="flex items-center gap-3 p-3 hover:bg-emerald-50 border-b last:border-0"
                >
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-12 h-12 object-contain"
                  />

                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">
                      {product.title}
                    </p>
                    <p className="text-xs text-gray-500">
                      {product.category}
                    </p>
                  </div>

                  <span className="font-bold text-emerald-700 text-sm">
                    ${product.price}
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <p className="p-4 text-center text-gray-500">
              No products found.
            </p>
          )}

        </div>
      )}
    </form>
  );
}
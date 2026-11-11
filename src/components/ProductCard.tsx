"use client";

import Link from "next/link";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";

export default function ProductCard({
  product,
}: {
  product: Product;
}) {
  const { addToCart } = useCart();

  return (
    <div className="bg-gray-300 rounded-xl shadow-md p-4 hover:shadow-xl transition-shadow duration-300">

      <Link href={`/products/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-52 object-contain"
        />

        <h3 className="font-semibold mt-3 line-clamp-1">
          {product.title}
        </h3>
      </Link>

      <p className="text-gray-500 text-sm mt-1">
        {product.category}
      </p>

      <p className="text-emerald-700 font-bold text-xl mt-2">
        ${product.price}
      </p>

      <p className="text-yellow-600 text-sm mt-1">
        ⭐ {product.rating}
      </p>

      <button
        type="button"
        onClick={() => addToCart(product)}
        className="w-full bg-emerald-700 text-white py-2 rounded-lg mt-4 hover:bg-emerald-800"
      >
        Add to Cart
      </button>

    </div>
  );
}
"use client";

import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";

export default function AddToCart({
  product,
}: {
  product: Product;
}) {
  const { addToCart } = useCart();

  return (
    <button
      type="button"
      onClick={() => addToCart(product)}
      className="bg-emerald-950 text-white px-8 py-3 rounded-lg mt-7 hover:bg-emerald-800"
    >
      Add to Cart
    </button>
  );
}
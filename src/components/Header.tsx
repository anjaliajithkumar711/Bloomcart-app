"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import SearchBar from "@/components/SearchBar";

export default function Header() {
  const { cart } = useCart();

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="bg-gray-950 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-between items-center gap-4">

        <Link href="/" className="shrink-0 text-2xl font-bold text-emerald-800">
          Bloom<span className="text-yellow-500">Cart</span>
        </Link>

        <SearchBar />

        <nav className="order-2 flex flex-wrap items-center justify-end gap-x-6 gap-y-2 text-white font-medium lg:order-none">
          <Link href="/" className="hover:text-emerald-600">
            Home
          </Link>

          <Link href="/products" className="hover:text-emerald-600">
            Products
          </Link>

          <Link href="/about" className="hover:text-emerald-600">
            About
          </Link>

          <Link href="/contact" className="hover:text-emerald-600">
            Contact
          </Link>

          <Link
            href="/cart"
            className="bg-emerald-700 text-white px-4 py-2 rounded-lg"
          >
            Cart ({cartCount})
          </Link>
        </nav>

      </div>
    </header>
  );
}
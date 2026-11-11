import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-2xl font-bold text-yellow-400">
           Bloom<span className="text-yellow-500">Cart</span>
        </h2>

        <p className="text-gray-400 mt-2">
          Your happiness, delivered to your doorstep.
        </p>

        <div className="flex justify-center gap-6 mt-5">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <p className="text-gray-500 mt-6 text-sm">
          © 2026 BloomCart. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
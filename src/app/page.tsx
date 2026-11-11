import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/services/productServices";

export default async function Home() {
  const products = await getProducts();

  const featuredProducts = products.slice(0, 8);

  return (
    <div>

      <section className="bg-teal-200 py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-xl">
            <p className="text-emerald-700 font-semibold">
              Welcome to BloomCart
            </p>

            <h1 className="text-5xl font-bold text-gray-900 mt-4">
              Discover Your
              <span className="text-emerald-700">
                {" "}Favourite Products
              </span>
            </h1>

            <p className="text-gray-600 mt-5">
              Explore amazing products at affordable prices.
              Enjoy shopping with BloomCart.
            </p>

            <Link
              href="/products"
              className="inline-block bg-yellow-400 px-8 py-3 rounded-lg font-bold mt-7 hover:bg-yellow-500"
            >
              Shop Now
            </Link>
          </div>

        </div>
      </section>


      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">
            Featured Products
          </h2>

          <p className="text-gray-500 mt-2">
            Explore our popular products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

        <div className="text-center mt-10">
          <Link
            href="/products"
            className="bg-emerald-700 text-white px-8 py-3 rounded-lg"
          >
            View All Products
          </Link>
        </div>

      </section>

    </div>
  );
}
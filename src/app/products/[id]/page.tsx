import { getProduct } from "@/services/productServices";
import { notFound } from "next/navigation";
import AddToCart from "@/components/AddToCart";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <div className="bg-white rounded-xl shadow p-8">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-96 object-contain"
          />
        </div>

        <div>

          <p className="text-emerald-700 font-semibold">
            {product.category}
          </p>

          <h1 className="text-3xl font-bold mt-3">
            {product.title}
          </h1>

          <p className="text-yellow-600 mt-3">
            ⭐ {product.rating} / 5
          </p>

          <h2 className="text-3xl font-bold text-emerald-700 mt-5">
            ${product.price}
          </h2>

          <p className="text-gray-600 mt-5">
            {product.description}
          </p>

          <AddToCart product={product} />

        </div>

      </div>

    </section>
  );
}
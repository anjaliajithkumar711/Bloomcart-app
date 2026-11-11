import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">

      <div className="text-center">

        <h1 className="text-4xl font-bold text-emerald-700">
          About BloomCart
        </h1>

        <p className="text-gray-600 mt-6 leading-8">
          BloomCart is an online shopping platform designed
          to make shopping simple, convenient and enjoyable.
          We offer a wide range of products at affordable prices.
        </p>

      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-16">

        <div className="bg-emerald-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold">
            Our Mission
          </h2>

          <p className="text-gray-600 mt-4">
            Our mission is to provide customers with a simple
            and convenient online shopping experience.
          </p>
        </div>

        <div className="bg-yellow-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold">
            Our Vision
          </h2>

          <p className="text-gray-600 mt-4">
            We aim to become a trusted shopping destination
            by offering quality products and great service.
          </p>
        </div>

      </div>

      <div className="text-center mt-12">
        <Link
          href="/products"
          className="bg-emerald-700 text-white px-8 py-3 rounded-lg"
        >
          Explore Products
        </Link>
      </div>

    </section>
  );
}
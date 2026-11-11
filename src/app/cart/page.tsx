"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  } = useCart();

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">

      <h1 className="text-3xl font-bold mb-8">
        Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold">
            Your cart is empty!
          </h2>

          <p className="text-gray-500 mt-3">
            Start shopping and add some products.
          </p>
        </div>
      ) : (

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="md:col-span-2 space-y-5">

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center gap-5 bg-white shadow rounded-xl p-5"
              >

                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-28 h-28 object-contain"
                />

                <div className="flex-1">
                  <h2 className="font-semibold">
                    {item.title}
                  </h2>

                  <p className="text-emerald-700 font-bold mt-2">
                    ${item.price}
                  </p>

                  <div className="flex items-center gap-3 mt-3">

                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="border px-3 py-1 rounded"
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="border px-3 py-1 rounded"
                    >
                      +
                    </button>

                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 text-sm mt-3"
                  >
                    Remove
                  </button>

                </div>

              </div>
            ))}

          </div>

          <div className="bg-emerald-50 rounded-xl p-6 h-fit">

            <h2 className="text-xl font-bold">
              Order Summary
            </h2>

            <div className="flex justify-between mt-6">
              <span>Products</span>
              <span>{cart.length}</span>
            </div>

            <div className="flex justify-between mt-4">
              <span>Total Amount</span>
              <span className="font-bold text-emerald-700">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            <button
              className="w-full bg-emerald-700 text-white py-3 rounded-lg mt-7"
              onClick={() => alert("Checkout feature coming soon!")}
            >
              Checkout
            </button>

          </div>

        </div>

      )}

    </section>
  );
}
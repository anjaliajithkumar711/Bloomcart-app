import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col justify-center items-center text-center">

      <h1 className="text-8xl font-bold text-emerald-700">
        404
      </h1>

      <h2 className="text-2xl font-bold mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-3">
        Sorry! The page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="bg-emerald-700 text-white px-8 py-3 rounded-lg mt-6"
      >
        Back to Home
      </Link>

    </div>
  );
}
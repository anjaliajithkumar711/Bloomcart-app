"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="text-center py-32">

      <h1 className="text-3xl font-bold text-red-600">
        Something went wrong!
      </h1>

      <p className="text-gray-500 mt-3">
        Unable to load the page.
      </p>

      <button
        onClick={() => reset()}
        className="bg-emerald-700 text-white px-6 py-3 rounded-lg mt-6"
      >
        Try Again
      </button>

    </div>
  );
}
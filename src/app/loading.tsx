export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen">

      <div className="text-center">

        <div className="w-12 h-12 border-4 border-emerald-700 border-t-transparent rounded-full animate-spin mx-auto"></div>

        <p className="mt-5 text-emerald-700 font-semibold">
          Loading BloomCart...
        </p>

      </div>

    </div>
  );
}
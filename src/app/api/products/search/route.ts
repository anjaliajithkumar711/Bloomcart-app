import { searchProducts } from "@/services/productServices";

export async function GET(request: Request) {
  const query = new URL(request.url).searchParams.get("q")?.trim();

  if (!query) {
    return Response.json({ products: [] });
  }

  try {
    const products = await searchProducts(query, 6);
    return Response.json({ products });
  } catch (error) {
    console.error("Product search request failed:", error);
    return Response.json(
      { message: "Product search is temporarily unavailable." },
      { status: 502 }
    );
  }
}

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    console.log("Contact Message:", {
      name,
      email,
      message,
    });

    return NextResponse.json(
      { message: "Message received successfully" },
      { status: 200 }
    );

  } catch {
    return NextResponse.json(
      { message: "Invalid request" },
      { status: 400 }
    );
  }
}
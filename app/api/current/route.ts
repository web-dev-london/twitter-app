import { NextRequest, NextResponse } from "next/server";
import serverAuth from "@/app/auth/serverAuth";

export async function GET(req: NextRequest) {
  try {
    console.log("Request received at /api/current");
    const { currentUser } = await serverAuth(req);

    if (!currentUser) {
      return NextResponse.json({ error: "User not authenticated" }, { status: 401 });
    }

    console.log("Authenticated user:", currentUser);
    return NextResponse.json(currentUser, { status: 200 });
  } catch (error: any) {
    console.error("API Error:", error.message || error);
    return NextResponse.json({ error: error.message || "Something went wrong" }, { status: 500 });
  }
}

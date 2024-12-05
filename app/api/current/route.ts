import { NextRequest, NextResponse } from "next/server";
import serverAuth from "@/app/auth/serverAuth";


export async function GET(req: NextRequest) {
  try {
    const { currentUser } = await serverAuth(req);
    return NextResponse.json(currentUser, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
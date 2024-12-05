import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { z } from "zod";
import bcypt from "bcrypt";

const registerSchema = z.object({
  name: z.string(),
  email: z.string(),
  username: z.string(),
  password: z.string()
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, username, password } = registerSchema.parse(body);
    const hashedPassword = await bcypt.hash(password, 12);

    if (!name || !email || !username || !password) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    const user = await prisma.user.create({
      data: {
        name,
        email,
        username,
        hashedPassword
      },
    });
    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
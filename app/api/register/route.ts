import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { z } from "zod";
import bcrypt from "bcrypt";


const registerSchema = z.object({
  name: z.string(),
  email: z.string().email(), // Ensure valid email format
  username: z.string().min(3), // Username must have at least 3 characters
  password: z.string().min(6), // Enforce minimum password length
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, username, password } = registerSchema.parse(body);

    const hashedPassword = await bcrypt.hash(password, 12);

    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { username }],
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Email or username already taken" },
        { status: 400 }
      );
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        username,
        hashedPassword,
      },
    });


    return NextResponse.json({
      id: user.id,
      name: user.name,
      email: user.email,
      username: user.username,
    });
  } catch (error) {
    console.error("Error registering user:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors.map((e) => e.message).join(", ") },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
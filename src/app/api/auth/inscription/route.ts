import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const { email, password, phoneNumber } = body;

  // ? cration d'utilisateur

  const handleCreateUser = async () => {
    const passwordHashed = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        email: email,
        password: passwordHashed,
        // displaName: "nouhou",
        phoneNumber: phoneNumber,
        token: password + email + phoneNumber,
      },
    });
  };
  // ? recherche d'utilisateur
  const handleUserExist = async (email: string) => {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  };

  try {
    const user = await handleUserExist(email);

    if (user) {
      return NextResponse.json({ message: "cette address email existe déjà" });
    }

    await handleCreateUser();

    cookies().set("access_token", email + phoneNumber + password, {
      secure: true,
      httpOnly: true,
      maxAge: 2419200,
    });

    return NextResponse.json({ message: "Utilisateur créé avec succès" });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ message: error.message });
  }
}

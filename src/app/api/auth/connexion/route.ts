import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;
  const handlUserExist = async (email: string) => {
    const userData = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return userData;
  };
  try {
    const userData = await handlUserExist(email);

    if (!userData) {
      return NextResponse.json({
        message: "cette utilisateur n'existe pas sur la base de donnée",
      });
    }

    const userPasswordInDb = userData.password;

    if (password === userPasswordInDb) {
      cookies().set("access_token", userData.token, {
        secure: true,
        httpOnly: true,
        maxAge: 2419200,
      });
    }

    return NextResponse.json({ message: "connexion avec succèss" });
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      message:
        "Une erreur est survenue lors de la soumission du formulaire veillez ressayer plus tard",
    });
  }
}

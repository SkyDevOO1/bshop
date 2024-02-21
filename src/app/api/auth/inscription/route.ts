import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export async function POST(request: Request) {
  const body = await request.json();
  const { email, password, phoneNumber } = body;
  let errorMsg: string;
  const insertUserInDataBsase = async () => {
    cookies().set("access_token", phoneNumber, {
      secure: true,
      httpOnly: true,
      maxAge: 2419200,
    });
    await prisma.user.create({
      data: {
        email,
        password,
        token: phoneNumber,
        displaName: "nouhou",
      },
    });
  };

  try {
    const userwithemail = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (userwithemail) {
      errorMsg = "un utilisateur avec cette address email existe déjà";
      return NextResponse.json({
        errorMsg,
      });
    }
    await insertUserInDataBsase();
  } catch (error) {
    errorMsg = "Une erreur est survenue";

    return NextResponse.json({ errorMsg });
  }
}

import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { connexionToken } = body;
  const user = await prisma.user.findUnique({
    where: {
      token: connexionToken as string,
    },
  });

  // if (user) {
  //   return NextResponse.json(user);
  // }
  return NextResponse.json({ message: "User not found" });
}

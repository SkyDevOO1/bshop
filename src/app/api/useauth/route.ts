import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookie = cookies().get("access_token")?.value;
  const user = await prisma.user.findMany({
    where: {
      token: cookie,
    },
  });

  if (user) {
    return NextResponse.json({ user }, { status: 200 });
  }
  return NextResponse.json({ message: "user not found" }, { status: 404 });
}

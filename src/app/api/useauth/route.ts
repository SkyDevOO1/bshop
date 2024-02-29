import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { getToken } = body;
  const cookie = cookies().get(getToken)?.value;
  // const user = await prisma.user.findMany({
  //   where: {
  //     token: cookie,
  //   },
  // });

  return NextResponse.json({ cookie }, { status: 200 });
}

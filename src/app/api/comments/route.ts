import { getAuthSession } from "@/utlis/auth";
import prisma from "@/utlis/connect";
import { NextResponse } from "next/server";

// Get all comments of a post
export const GET = async (req: { url: string | URL }) => {
  const { searchParams } = new URL(req.url);
  const postSlug = searchParams.get("postSlug");

  try {
    const comments = await prisma.comment.findMany({
      where: {
        ...(postSlug && { postSlug }),
      },
      include: { user: true },
    });
    return new NextResponse(JSON.stringify(comments), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ message: "GET response error" }), {
      status: 500,
    });
  }
};

// Create Comment
export const POST = async (req: { json: () => any }) => {
  const session = await getAuthSession();

  if (!session || !session.user) {
    return new NextResponse(JSON.stringify({ message: "Not Authenticated" }), {
      status: 401,
    });
  }

  try {
    const body = await req.json();
    const comment = await prisma.comment.create({
      data: {
        ...body,
        userEmail: session.user.email,
      },
    });
    return new NextResponse(JSON.stringify(comment), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ message: "GET response error" }), {
      status: 500,
    });
  }
};

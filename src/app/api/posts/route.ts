import { NextApiRequest } from "next";
import prisma from "@/utlis/connect";
import { NextResponse } from "next/server";

export const GET = async (req: NextApiRequest) => {
  if (!req.url) {
    return new NextResponse(JSON.stringify({ message: "URL is undefined" }), {
      status: 400,
    });
  }

  const { searchParams } = new URL(req.url);

  const pageParam = searchParams.get("page");

  if (pageParam === null) {
    return new NextResponse(
      JSON.stringify({ message: "page parameter is missing" }),
      { status: 400 }
    );
  }

  const page = parseInt(pageParam, 10);

  const POST_PER_PAGE = 2;

  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (page - 1),
  };

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count(),
    ]);
    return new NextResponse(JSON.stringify({ posts, count }), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ message: "GET response error" }), {
      status: 500,
    });
  }
};

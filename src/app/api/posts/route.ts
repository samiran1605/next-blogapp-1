import { NextApiRequest } from "next";
import prisma from "@/utlis/connect";
import { NextResponse } from "next/server";
import { getAuthSession } from "@/utlis/auth";

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
  const cat = searchParams.get("cat");

  const POST_PER_PAGE = 2;

  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (page - 1),
    where: {
      ...(cat && { catSlug: cat }),
    },
  };

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({ where: query.where }),
    ]);
    return new NextResponse(JSON.stringify({ posts, count }), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ message: "GET response error" }), {
      status: 500,
    });
  }
};

//Create a post
export const POST = async (req: { json: () => any }) => {
  const session = await getAuthSession();

  if (!session || !session.user) {
    return new NextResponse(JSON.stringify({ message: "Not Authenticated" }), {
      status: 401,
    });
  }

  try {
    const body = await req.json();
    const post = await prisma.post.create({
      data: {
        ...body,
        userEmail: session.user.email,
      },
    });
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ message: "GET response error" }), {
      status: 500,
    });
  }
};

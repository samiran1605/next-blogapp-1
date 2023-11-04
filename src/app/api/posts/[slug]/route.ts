import { NextApiRequest } from "next";
import prisma from "@/utlis/connect";
import { NextResponse } from "next/server";

type paramsType = {
  slug: string;
};

// Get single post
export const GET = async (
  req: NextApiRequest,
  { params }: { params: paramsType }
) => {
  const { slug } = params;

  try {
    const post = await prisma.post.update({
      where: { slug },
      data: { views: { increment: 1 } },
      include: { user: true },
    });
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ message: "GET response error" }), {
      status: 500,
    });
  }
};

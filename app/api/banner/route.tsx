import { NextResponse, ImageResponse } from "next/server";
import { loadFonts } from "./loadFont";

// learn more about serverless functions in vercel
// https://vercel.com/docs/functions/serverless-functions

// learn more about satori
// https://github.com/vercel/satori
// https://github.com/vercel/examples/blob/main/edge-functions/vercel-og-nextjs/pages/api/emoji.tsx

// learn more about the iconify api
// https://iconify.design/docs/api/svg.html

export const GET = async (req: Request) => {
  const url = new URL(req.url);
  const searchParams = url.searchParams;

  // 1142 x 571

  return new ImageResponse(
    (
      <div tw="h-full w-full bg-white flex items-center px-14">
        <h1 tw="text-5xl font-black">Hello World</h1>
      </div>
    ),
    {
      width: 1142,
      height: 571,
      emoji: "twemoji",
      fonts: await loadFonts("Regular", "Bold"),
    }
  );

  // NextResponse.json({ url: req.url, params: req.query }, { status: 200 });
};

/*
title
description

natmfat/banner
An banner generator to make your projects shine
gql logo, typescript logo

https://api.iconify.design/logos/graphql.svg?height=50
*/

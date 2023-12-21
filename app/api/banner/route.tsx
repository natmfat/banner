import { ImageResponse } from "next/server";
import { loadFonts } from "./loadFont";
import { getIcon } from "./getIcon";

// learn more about serverless functions in vercel
// https://vercel.com/docs/functions/serverless-functions

// learn more about satori
// https://github.com/vercel/satori
// https://github.com/vercel/examples/blob/main/edge-functions/vercel-og-nextjs/pages/api/emoji.tsx

const fonts = loadFonts("Regular", "Bold");

export const GET = async (req: Request) => {
  const url = new URL(req.url);
  const searchParams = url.searchParams;

  const title = searchParams.get("title") || "Untitled Project";
  const description = searchParams.get("description");
  const stack = (searchParams.get("stack") || "").split(",");

  return new ImageResponse(
    (
      <div
        tw="h-full w-full bg-white flex flex-col justify-center items-start p-14"
        style={{ fontFamily: "Inter" }}
      >
        <h1 tw="text-7xl leading-tight font-normal flex m-0">
          <span>natmfat /</span>
          <span tw="font-bold ml-6">{title}</span>
        </h1>
        {description && (
          <p tw="leading-snug max-w-4xl text-4xl text-slate-400 m-0">
            {description}
          </p>
        )}
        <div tw="flex mt-3" style={{ gap: 16 }}>
          {stack.map((tech: string) => {
            const icon = getIcon(tech);
            return (
              icon && (
                <img
                  src={`data:image/svg+xml;utf8,${encodeURIComponent(icon)}`}
                  key={tech}
                  width={38}
                  height={38}
                />
              )
            );
          })}
        </div>
      </div>
    ),
    {
      width: 1100,
      height: 400,
      emoji: "twemoji",
      fonts: await fonts,
      headers: {
        // https://github.com/vercel/next.js/discussions/47933
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",

        // https://stackoverflow.com/questions/62005208/api-caching-for-next-js
        // cache for 1 day
        "Cache-Control": "s-maxage=86400",
      },
    }
  );
};

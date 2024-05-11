"use client";

import Image from "next/image";
import { useState } from "react";
import { Anchor } from "tanukui/components/Anchor";
import { IconButton } from "tanukui/components/IconButton.js";
import { InlineCode } from "tanukui/components/InlineCode";
import { Loading } from "tanukui/components/Loading";
import { Surface } from "tanukui/components/Surface";
import { View } from "tanukui/components/View.js";
import { ClipboardIcon } from "tanukui/icons";
import { copyToClipboard } from "./lib/copyToClipboard";

const API_CODE = `${process.env.NEXT_PUBLIC_SITE_URL}/api/banner?title=banner&description=Banners that make your projects shine ✨&stack=typescript,nextdotjs`;

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="max-w-3xl px-4 mx-auto">
      <Surface
        elevated
        className="border border-interactive mt-20 rounded-lg w-full aspect-[1100/400] overflow-hidden">
        <Loading loading={loading}>
          <View>
            <Image
              src="/api/banner?title=banner&description=Banners that make your projects shine ✨&stack=typescript,nextdotjs"
              width={1100}
              height={400}
              alt="Project banner"
              className="max-w-full w-full h-full"
              onLoad={() => setLoading(false)}
            />
          </View>
        </Loading>
      </Surface>

      <Surface asChild elevated>
        <code className="relative mt-3 block p-2 rounded-lg border border-interactive">
          {API_CODE}
          <IconButton
            alt="Copy API"
            className="absolute top-2 right-2"
            onClick={() => copyToClipboard(API_CODE)}>
            <ClipboardIcon />
          </IconButton>
        </code>
      </Surface>

      <View asChild>
        <ul className="mt-3 gap-1">
          <li>
            <InlineCode>title</InlineCode> Title of your project
          </li>
          <li>
            <InlineCode>description</InlineCode> Describe your project
            (optional)
          </li>
          <li>
            <InlineCode>stack</InlineCode> Technologies used, logos from{" "}
            <Anchor
              href="https://github.com/simple-icons/simple-icons"
              target="_blank"
              rel="noreferrer">
              simple-icon
            </Anchor>
          </li>
        </ul>
      </View>
    </main>
  );
}

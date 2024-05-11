import type { Metadata } from "next";
import "./globals.css";

import "tanukui/styles/core.css";
import "tanukui/styles/themes/light.css";

export const metadata: Metadata = {
  title: "Banner",
  description: "Banners that make your projects shine ✨",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}

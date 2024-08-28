import type { Metadata } from "next";
import "./tailwind.css";

import "tanukui/styles/core.css";

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
      <body className="overflow-x-hidden" data-theme="dark">
        {children}
      </body>
    </html>
  );
}

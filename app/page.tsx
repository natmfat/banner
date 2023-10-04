import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto">
      <Image
        src="/api/banner?title=banner&description=Banners that make your projects shine ✨&stack=typescript,nextdotjs"
        width={1100}
        height={400}
        alt="Project banner"
        className="max-w-full border border-slate-300 rounded-lg mt-20"
      />

      <code className="mt-4 block p-2 border border-slate-300 bg-slate-100 rounded-lg">
        /api/banner?title=banner&description=Banners that make your projects
        shine ✨&stack=typescript,nextdotjs
      </code>

      <ul className="mt-2">
        <li>
          <code>title</code> Title of your project
        </li>
        <li>
          <code>description</code> Describe your project (optional)
        </li>
        <li>
          <code>stack</code> Technologies used, logos from{" "}
          <a
            href="https://github.com/simple-icons/simple-icons"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            simple-icon
          </a>
        </li>
      </ul>
    </main>
  );
}

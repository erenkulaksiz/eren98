import Link from "next/link";

export function Source() {
  return (
    <div className="source">
      <div className="source-gh">
        <span>
          I always loved open source development. Heres source codes of this
          website (Dont forget to star the repo!):{" "}
        </span>
        <Link
          passHref
          href="https://github.com/erenkulaksiz/eren98"
          target="_blank"
        >
          https://github.com/erenkulaksiz/eren98
        </Link>
      </div>
      <div className="source-tech">
        <b>Technologies that I've built this app with:</b>
        <ul>
          <li>Next.js</li>
          <li>Typescript</li>
          <li>98.css</li>
        </ul>
      </div>
    </div>
  );
}

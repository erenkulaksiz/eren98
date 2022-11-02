import Link from "next/link";
import Image from "next/image";

export function Projects() {
  return (
    <div className="projects">
      <div className="status-bar-field project-field">
        <Link
          href="https://notal.app"
          passHref
          target="_blank"
          title="Notal"
          className="project-link"
        >
          <Image
            src="/icons/notal.png"
            width={100}
            height={28}
            alt="notal icon"
          />
          <h4>Notal</h4>
        </Link>
        <div className="project-desc">
          Open source task management and devrels platform from the future.
        </div>
      </div>
      <div className="status-bar-field project-field">
        <Link
          href="https://github.com/erenkulaksiz/Topla"
          passHref
          target="_blank"
          title="Topla"
          className="project-link"
        >
          <Image
            src="/icons/topla.png"
            width={80}
            height={40}
            alt="topla icon"
          />
          <h4>Topla</h4>
        </Link>
        <div className="project-desc">
          Topla is an Android app, main target is for practicing basic algebra,
          made for primary&high school students. You can challenge yourself in
          this app too, to see how fast you can calculate!
        </div>
      </div>
    </div>
  );
}

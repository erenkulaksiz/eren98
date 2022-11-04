import Link from "next/link";
import Image from "next/image";

export function Stories() {
  return (
    <div className="stories">
      <fieldset>
        <Link
          href="https://erenkulaksiz.medium.com/react-i%C3%A7in-daha-zor-technical-interview-sorular%C4%B1-b%C3%B6l%C3%BCm-1-4089358180a3"
          passHref
          target="_blank"
          title="Notal"
          className="story-link"
        >
          <Image
            src="/icons/react_daha_1.png"
            width={160}
            height={90}
            alt="medium story logo"
            className="story-logo"
          />
          <div className="story-title">
            Daha Zor React Interview Soruları Bölüm #1
          </div>
        </Link>
      </fieldset>
    </div>
  );
}

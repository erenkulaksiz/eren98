import Link from "next/link";
import Image from "next/image";

export function Socials() {
  return (
    <div className="socials">
      <Link
        href="https://github.com/erenkulaksiz"
        passHref
        target="_blank"
        title="Github"
      >
        <Image
          src="/icons/github.png"
          width={64}
          height={64}
          alt="github icon"
        />
      </Link>
      <Link
        href="https://twitter.com/erencode"
        passHref
        target="_blank"
        title="Twitter"
      >
        <Image
          src="/icons/twitter.png"
          width={64}
          height={64}
          alt="twitter icon"
        />
      </Link>
      <Link href="mailto:erenkulaksz@gmail.com" passHref title="E-mail">
        <Image src="/icons/email.png" width={64} height={64} alt="email icon" />
      </Link>
    </div>
  );
}

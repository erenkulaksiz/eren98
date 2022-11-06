import Link from "next/link";
import Image from "next/image";

export function Socials() {
  return (
    <div className="socials">
      <div className="status-bar">
        <p className="status-bar-field">
          <Link
            href="https://github.com/erenkulaksiz"
            passHref
            target="_blank"
            title="Github"
            className="social-link"
          >
            <Image
              src="/icons/github.png"
              width={64}
              height={64}
              alt="github icon"
            />
            <span>Github</span>
          </Link>
        </p>
      </div>
      <div className="status-bar">
        <p className="status-bar-field">
          <Link
            href="https://twitter.com/erencode"
            passHref
            target="_blank"
            title="Twitter"
            className="social-link"
          >
            <Image
              src="/icons/twitter.png"
              width={64}
              height={64}
              alt="twitter icon"
            />
            <span>Twitter</span>
          </Link>
        </p>
      </div>
      <div className="status-bar">
        <p className="status-bar-field">
          <Link
            href="https://codepen.io/erenkulaksiz/pens/public"
            passHref
            target="_blank"
            title="Codepen"
            className="social-link"
          >
            <Image
              src="/icons/codepen.png"
              width={64}
              height={64}
              alt="codepen icon"
            />
            <span>Codepen</span>
          </Link>
        </p>
      </div>
      <div className="status-bar">
        <p className="status-bar-field">
          <Link
            href="https://medium.com/@erenkulaksiz"
            passHref
            target="_blank"
            title="Medium"
            className="social-link"
          >
            <Image
              src="/icons/medium.png"
              width={64}
              height={64}
              alt="medium icon"
            />
            <span>Medium</span>
          </Link>
        </p>
      </div>
      <div className="status-bar">
        <p className="status-bar-field">
          <Link
            href="https://linkedin.com/erenkulaksiz"
            passHref
            target="_blank"
            title="Linkedin"
            className="social-link"
          >
            <Image
              src="/icons/linkedin.png"
              width={64}
              height={64}
              alt="linkedin icon"
            />
            <span>Linkedin</span>
          </Link>
        </p>
      </div>
      <div className="status-bar">
        <p className="status-bar-field">
          <Link
            href="mailto:erenkulaksz@gmail.com"
            passHref
            title="E-mail"
            className="social-link"
          >
            <Image
              src="/icons/email.png"
              width={64}
              height={64}
              alt="email icon"
            />
            <span>E-mail</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

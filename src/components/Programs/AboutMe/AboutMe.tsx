import Image from "next/image";

export function AboutMe() {
  return (
    <div className="about-me">
      <div className="status-bar">
        <p className="status-bar-field">
          <Image
            src="/eren98.png"
            width={200}
            height={200}
            alt="eren"
            priority
          />
        </p>
      </div>
      <span className="about-me-title">Hey, I'm Eren Kulaksiz.</span>
      <span className="about-me-desc">
        {
          "I live in Istanbul and currently on second grade of Computer Programming in Istanbul Arel University. I'm a passionate Frontend Developer that enjoys while designing UI's with Figma, and converting them to pixel-perfect codes. I enjoy learning new technologies also trying to constantly improve myself."
        }
      </span>
      <span>Here are some quick facts: </span>
      <ul>
        <li>Favourite film: Interstellar</li>
        <li>Nationality: Turkish</li>
        <li>Currently living in: Türkiye</li>
        <li>Favourite language: JavaScript</li>
        <li>Most hated field of software: PHP :P</li>
      </ul>
    </div>
  );
}

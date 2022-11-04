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
      <span
        className="about-me-desc"
        dangerouslySetInnerHTML={{
          __html:
            "I live in <b>Istanbul</b> and currently on second grade of Computer Programming in Istanbul Arel University. I'm a passionate Frontend Developer that enjoys while designing UI's with Figma, and converting them to pixel-perfect codes. I enjoy learning new technologies also trying to constantly improve myself.",
        }}
      />
      <span>
        I love <b>quality</b> people and using <b>quality</b> products. Thats
        why i always try to build quality products that myself and people can
        use.
      </span>
      <span>Here are some quick facts: </span>
      <ul>
        <li>
          Favourite film: <b>Interstellar</b>
        </li>
        <li>
          Nationality: <b>Turkish</b>
        </li>
        <li>
          Currently living in: <b>Turkey</b>
        </li>
        <li>
          Favourite language: <b>JavaScript</b>
        </li>
      </ul>
    </div>
  );
}

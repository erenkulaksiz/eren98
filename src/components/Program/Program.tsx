import Image from "next/image";
import type { ProgramProps } from "./Program.types";

export function Program({ title, icon, id, onClick }: ProgramProps) {
  return (
    <button
      className="program"
      onDoubleClick={(e) =>
        typeof onClick == "function" && onClick({ event: e, id: id ?? "" })
      }
      onTouchEnd={(e) =>
        typeof onClick == "function" && onClick({ event: e, id: id ?? "" })
      }
    >
      <Image width={32} height={32} src={icon ?? ""} alt={title} />
      <span className="program-title">{title}</span>
    </button>
  );
}

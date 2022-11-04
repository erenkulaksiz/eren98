import Image from "next/image";

import { useWindowDimensions } from "@hooks";
import { Program } from "@components";
import type { ProgramProps } from "@components/Program/Program.types";

export function RecycleBin({
  onProgramClick,
}: {
  onProgramClick: (id: string) => void;
}) {
  const { height, width } = useWindowDimensions();
  const notepad = {
    id: "notepad",
    title: "note.txt",
    icon: "/icons/notepad.png",
    controls: { close: true, minimize: true },
    hidden: false,
    showInTaskbar: true,
    children: <div>asdkak</div>,
    initialPos: {
      x: width / 3.5,
      y: height / 4,
    },
    windowWidth: width / 3,
  } as ProgramProps;

  return (
    <div className="recycle-container">
      <fieldset className="recycle-header">
        <div className="file">
          <div className="vertical-seperator"></div>
          <button>File</button>
          <button>Edit</button>
          <button>View</button>
          <button>Go</button>
          <button>Favorites</button>
          <button>Help</button>
        </div>
        <div className="buttons">
          <div className="vertical-seperator"></div>
          <button disabled className="nav">
            <Image src="/icons/_back.png" width={20} height={18} alt="back" />
            <span>Back</span>
          </button>
          <Image
            src="/icons/_alt.png"
            width={12}
            height={10}
            alt="_alt"
            className="alt"
          />
          <button disabled className="nav">
            <Image
              src="/icons/_forward.png"
              width={20}
              height={18}
              alt="forward"
            />
            <span>Forward</span>
          </button>
          <Image
            src="/icons/_alt.png"
            width={12}
            height={10}
            alt="_alt"
            className="alt"
          />
          <button disabled className="nav">
            <Image src="/icons/_up.png" width={20} height={18} alt="up" />
            <span>Up</span>
          </button>
          <div className="vertical-inside"></div>
          <button disabled className="nav">
            <Image src="/icons/_cut.png" width={16} height={20} alt="cut" />
            <span>Cut</span>
          </button>
          <button disabled className="nav">
            <Image src="/icons/_copy.png" width={20} height={20} alt="copy" />
            <span>Copy</span>
          </button>
          <button disabled className="nav">
            <Image src="/icons/_paste.png" width={20} height={24} alt="paste" />
            <span>Paste</span>
          </button>
          <div className="vertical-inside"></div>
          <button disabled className="nav">
            <Image src="/icons/_undo.png" width={18} height={18} alt="undo" />
            <span>Undo</span>
          </button>
          <div className="vertical-inside"></div>
        </div>
        <div className="address">
          <div className="vertical-seperator"></div>
          <div className="address-content">
            <span className="address-text">Address</span>
            <select className="address-select">
              <option className="address-select">
                <span>Recycle</span>
              </option>
            </select>
          </div>
        </div>
      </fieldset>
      <pre className="recycle-content">
        <Program {...notepad} onClick={({ id }) => onProgramClick(id)} />
      </pre>
    </div>
  );
}

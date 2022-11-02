import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import type { WindowProps } from "@components/Window/Window.types";

export function Taskbar({
  windows,
  lastIndex,
  onWindowClick,
  boundaries,
}: {
  windows: Array<WindowProps>;
  lastIndex: number;
  onWindowClick: (index: number) => void;
  boundaries: DOMRect | undefined;
}) {
  const [startOpen, setStartOpen] = useState<boolean>(false);
  const [time, setTime] = useState(new Date());

  const shutdownButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  function onShuwdownButtonHover() {
    if (!shutdownButtonRef.current) return;
    const { x, y, width, height } =
      shutdownButtonRef.current.getBoundingClientRect();
    //setStartOpen(false);
    if (!boundaries) return;
    const randomX = Math.floor(Math.random() * boundaries?.right - width);
    const randomY = Math.floor(Math.random() * boundaries?.bottom - height);
    shutdownButtonRef.current.style.position = "absolute";
    shutdownButtonRef.current.style.left = `${randomX}px`;
    shutdownButtonRef.current.style.bottom = `${randomY}px`;
  }

  return (
    <div className="taskbar-container">
      <div className="taskbar-left">
        <button
          className={startOpen ? "start-button-open" : "start-button"}
          onClick={() => setStartOpen(!startOpen)}
        >
          <Image
            width={16}
            height={16}
            src="/windows_logo.png"
            alt="windows start button logo"
          />
          <b className="start-button__text">Start</b>
        </button>
        <div className={startOpen ? "start-menu" : "start-menu-hidden"}>
          <div className="start-menu-logo">
            <span>
              <b>Windows</b> 98
            </span>
          </div>
          <div className="start-menu-buttons">
            <div className="start-menu-seperator"></div>
            <button
              className="start-menu-button"
              onMouseEnter={() => onShuwdownButtonHover()}
              onDragStart={() => onShuwdownButtonHover()}
              ref={shutdownButtonRef}
            >
              <Image
                src="/icons/shutdown.png"
                width={38}
                height={38}
                alt="shutdown"
              />
              <span>Shutdown...</span>
            </button>
            <span className="start-menu-button-d">
              <span>
                It looks like you can't keep up with the shutdown button...
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="taskbar-center">
        {windows.map((window, index) =>
          window.showInTaskbar ? (
            <button
              className={
                index == lastIndex
                  ? "taskbar-program-active"
                  : "taskbar-program"
              }
              onClick={() => {
                onWindowClick(index);
                setStartOpen(false);
              }}
              key={window.id}
            >
              {window.icon && (
                <Image
                  src={window.icon}
                  width={16}
                  height={16}
                  alt={window.title}
                />
              )}
              <span className="taskbar-program-title">{window.title}</span>
            </button>
          ) : null
        )}
      </div>
      <div className="taskbar-right">
        <div className="taskbar-seperator"></div>
        <div className="taskbar-status">
          {time.getHours().toString().padStart(2, "0")}:
          {time.getMinutes().toString().padStart(2, "0")}
        </div>
      </div>
    </div>
  );
}

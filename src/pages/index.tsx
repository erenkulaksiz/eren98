import { useEffect, useState, useRef } from "react";
import Head from "next/head";

import { Taskbar, Window, Program, Seo } from "@components";
import { useWindowDimensions } from "@hooks";
import { getLaunchablePrograms } from "@constants";
import type { WindowProps } from "@components/Window/Window.types";

export default function Home() {
  const { height, width } = useWindowDimensions();
  const [lastIndex, setLastIndex] = useState<number>(0);
  const [windows, setWindows] = useState<Array<WindowProps>>([
    {
      id: "popup_1",
      title: "Welcome",
      controls: { close: true },
      hidden: false,
      showInTaskbar: false,
      children: (
        <div className="popup-1">
          <p>You know that you can drag these windows, right?</p>
          <div className="popup-1-btn">
            <button
              style={{ width: 64 }}
              onClick={() => onPopupClose("popup_1")}
            >
              Okay
            </button>
          </div>
        </div>
      ),
      initialPos: {
        x: width / 2.5,
        y: height / 2,
      },
    },
  ]);
  const ref = useRef<HTMLDivElement>(null);
  const boundaries = ref.current?.getBoundingClientRect();

  useEffect(() => {
    onProgramClick({ id: "about_me" });
    onProgramClick({ id: "socials" });
    onProgramClick({ id: "projects" });
    setLastIndex(0);
  }, []);

  const launchablePrograms = getLaunchablePrograms(width, height, (id) =>
    onProgramClick({ id })
  );

  function onPopupClose(id: string) {
    const _windows = windows;
    const window = windows.findIndex((window) => window.id == id);
    _windows[window].hidden = true;
    setWindows([..._windows]);
  }

  function onWindowClose(index?: number) {
    if (typeof index != "number") return;
    const _windows = windows;
    _windows[index].hidden = true;
    _windows[index].showInTaskbar = false;
    setWindows([..._windows]);
  }

  function onWindowMouseDown(index?: number) {
    if (typeof index != "number") return;
    // when drag starts, we want to move the window to the top
    setLastIndex(index);
  }

  function onProgramClick({ id }: { id: string }) {
    const program = launchablePrograms.find((program) => program.id == id);
    const findWindowIndex = windows.findIndex((window) => window.id == id);
    if (findWindowIndex != -1) {
      const _windows = windows;
      _windows[findWindowIndex].hidden = false;
      _windows[findWindowIndex].showInTaskbar = true;
      setLastIndex(windows.findIndex((window) => window.id == id));
      setWindows([..._windows]);
      return;
    }
    if (!program) return;
    const _windows = windows;
    _windows.push(program);
    setWindows([...windows]);
    setLastIndex(_windows.length - 1); // focus when program starts
  }

  function onWindowMinimize(index: number) {
    const _windows = windows;
    _windows[index].hidden = true;
    setWindows([..._windows]);
    const availableWindows = [] as Array<WindowProps>;
    _windows.forEach((el) => {
      if (el.hidden == false && el.showInTaskbar == true) {
        availableWindows.push(el);
      }
    });
    if (availableWindows.length == 0) {
      setLastIndex(0);
      return;
    }
    const random = Math.floor(Math.random() * availableWindows.length);
    const randomWindow = availableWindows[random].id;
    const getRandomIndexWindowOnWindows = _windows.findIndex(
      (window) => window.id == randomWindow
    );
    setLastIndex(getRandomIndexWindowOnWindows);
  }

  function onTaskbarWindowClick(index: number) {
    const _windows = windows;
    _windows[index].hidden = false;
    setWindows([..._windows]);
    setLastIndex(index);
  }

  return (
    <main className="container" ref={ref}>
      <Head>
        <title>erenk.dev</title>
        <Seo />
      </Head>
      {windows.map((window: WindowProps, index: number) => (
        <Window
          {...window}
          index={index}
          onClose={(index) => onWindowClose(index)}
          key={index + "_w"}
          onMouseDown={(index) => onWindowMouseDown(index)}
          onMinimize={(index: number) => onWindowMinimize(index)}
          lastIndex={lastIndex}
        />
      ))}
      <div className="program-container">
        {launchablePrograms.map((program: WindowProps, index: number) => {
          if (program?.showInScreen == false) return;
          return (
            <Program
              {...program}
              key={index + "_p"}
              onClick={({ id }) => onProgramClick({ id })}
            />
          );
        })}
      </div>
      <Taskbar
        windows={windows}
        lastIndex={lastIndex}
        onWindowClick={(index) => onTaskbarWindowClick(index)}
        boundaries={boundaries}
      />
    </main>
  );
}

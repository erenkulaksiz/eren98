import { useEffect, useState, useRef } from "react";
import Head from "next/head";

import {
  Taskbar,
  Window,
  Program,
  AboutMe,
  Socials,
  Projects,
} from "@components";
import { useWindowDimensions } from "@hooks";
import type { WindowProps } from "@components/Window/Window.types";

export default function Home() {
  const { height, width } = useWindowDimensions();
  const ref = useRef<HTMLDivElement>(null);
  const boundaries = ref.current?.getBoundingClientRect();
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
  useEffect(() => {
    onProgramClick({ id: "about_me" });
    onProgramClick({ id: "socials" });
    onProgramClick({ id: "projects" });
    setLastIndex(0);
  }, []);

  const launchablePrograms = [
    {
      id: "about_me",
      title: "About Me",
      icon: "/icons/about.png",
      controls: { close: true, minimize: true },
      hidden: false,
      showInTaskbar: true,
      children: <AboutMe />,
      initialPos: {
        x: width / 3.5,
        y: height / 4,
      },
      windowWidth: 260,
    },
    {
      id: "socials",
      title: "Social Links",
      icon: "/icons/socials.png",
      controls: { close: true, minimize: true },
      hidden: false,
      showInTaskbar: true,
      children: <Socials />,
      initialPos: {
        x: width / 2.4,
        y: height / 3,
      },
    },
    {
      id: "projects",
      title: "Projects",
      icon: "/icons/projects.png",
      controls: { close: true, minimize: true },
      hidden: false,
      showInTaskbar: true,
      children: <Projects />,
      initialPos: {
        x: width / 2,
        y: height / 1.8,
      },
      windowWidth: 400,
    },
  ] as Array<WindowProps>;

  function onPopupClose(id: string) {
    const _windows = windows;
    const window = windows.findIndex((window) => window.id == id);
    _windows[window].hidden = true;
    setWindows([...windows]);
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

  function onProgramClick({
    event,
    id,
  }: {
    event?: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>;
    id: string;
  }) {
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
        <meta name="description" content="Eren Kulaksiz's Personal Website" />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <head
          dangerouslySetInnerHTML={{
            __html: `
<!-- https://i.pinimg.com/originals/60/c1/4a/60c14a43fb4745795b3b358868517e79.png -->
`,
          }}
        ></head>
        <meta
          property="apple-mobile-web-app-capable"
          name="apple-mobile-web-app-capable"
          content="yes"
        />
        <meta
          property="apple-mobile-web-app-status-bar-style"
          name="apple-mobile-web-app-status-bar-style"
          content="default"
        />
        <meta
          property="format-detection"
          name="format-detection"
          content="telephone=no"
        />
        <meta
          property="mobile-web-app-capable"
          name="mobile-web-app-capable"
          content="yes"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta property="twitter:card" name="twitter:card" content="summary" />
        <meta
          property="twitter:url"
          name="twitter:url"
          content="https://erenk.dev"
        />
        <meta
          property="twitter:creator"
          name="twitter:creator"
          content="@erencode"
        />
        <meta property="twitter:site" name="twitter:site" content="@erencode" />
        <meta property="og:type" name="og:type" content="website" />
        <meta property="og:site_name" name="og:site_name" content="erenk.dev" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-V0RX3S6JG7`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-V0RX3S6JG7', {page_path: window.location.pathname,});`,
          }}
        />
      </Head>
      {windows.map((window, index: number) => (
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
        {launchablePrograms.map((program: WindowProps, index: number) => (
          <Program
            {...program}
            key={index + "_p"}
            onClick={({ event, id }) => onProgramClick({ event, id })}
          />
        ))}
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

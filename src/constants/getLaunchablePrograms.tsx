import {
  AboutMe,
  Socials,
  Projects,
  Source,
  RecycleBin,
  Stories,
  Notepad,
} from "@components";

import type { WindowProps } from "@components/Window/Window.types";

export function getLaunchablePrograms(
  width: number,
  height: number,
  onProgramClick: (id: string) => void
) {
  return [
    {
      id: "recycle",
      title: "Recycle Bin",
      icon: "/icons/recycle.png",
      controls: { close: true, minimize: true },
      hidden: false,
      showInTaskbar: true,
      children: <RecycleBin onProgramClick={onProgramClick} />,
      windowBodyClass: "window-body recycle",
      initialPos: {
        x: width / 6,
        y: height / 5,
      },
      windowWidth: width / 3 < 400 ? 400 : width / 3,
    },
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
        x: width / 2 - 200,
        y: height / 1.8,
      },
      windowWidth: 400,
    },
    {
      id: "source",
      title: "Source Code",
      icon: "/icons/source.png",
      controls: { close: true, minimize: true },
      hidden: false,
      showInTaskbar: true,
      children: <Source />,
      initialPos: {
        x: width / 2.6,
        y: height / 2.9,
      },
      windowWidth: 200,
    },
    {
      id: "medium",
      title: "My Medium Stories",
      icon: "/icons/p_medium.png",
      controls: { close: true, minimize: true },
      hidden: false,
      showInTaskbar: true,
      children: <Stories />,
      initialPos: {
        x: width / 2.6,
        y: height / 2.9,
      },
    },
    {
      id: "notepad",
      title: "note.txt",
      icon: "/icons/notepad.png",
      controls: { close: true, minimize: true },
      hidden: false,
      showInTaskbar: true,
      children: <Notepad />,
      initialPos: {
        x: width / 4.5,
        y: height / 6,
      },
      showInScreen: false,
      windowBodyClass: "notepad",
      windowWidth: width / 3 < 300 ? 300 : width / 3,
    },
  ] as Array<WindowProps>;
}

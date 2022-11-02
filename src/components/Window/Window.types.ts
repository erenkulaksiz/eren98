import { ReactNode } from "react";

export interface WindowProps {
  children: ReactNode;
  title: string;
  id?: string;
  controls?: {
    minimize?: boolean;
    maximize?: boolean;
    close?: boolean;
  };
  onMinimize?: (index: number) => void;
  onMaximize?: () => void;
  onClose?: (index?: number) => void;
  onMouseDown?: (index?: number) => void;
  draggable?: boolean;
  hidden: boolean;
  index?: number;
  initialPos?: {
    x: number;
    y: number;
  };
  lastIndex?: number;
  showInTaskbar?: boolean;
  icon?: string;
  windowWidth?: number;
  windowHeight?: number;
}

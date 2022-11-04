import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
  TouchEvent,
} from "react";
import Image from "next/image";

import { useWindowDimensions } from "@hooks";
import type { WindowProps } from "./Window.types";

export function Window({
  children,
  title,
  controls,
  onMinimize,
  onMaximize,
  onClose,
  onMouseDown,
  hidden,
  draggable = true,
  index,
  windowWidth,
  windowHeight,
  initialPos = {
    x: 0,
    y: 0,
  },
  lastIndex,
  icon,
  windowBodyClass,
}: WindowProps) {
  const { height, width } = useWindowDimensions();
  const position = useRef<{ x: number; y: number }>({
    x: initialPos?.x,
    y: initialPos?.y,
  });
  const ref = useRef<HTMLDivElement>(null);
  const focusedWindow = lastIndex == index;

  useEffect(() => {
    // move window to that initial position
    if (ref.current) {
      ref.current.style.transform = `translate(${position.current.x}px, ${position.current.y}px)`;
    }
  }, []);

  const _onMouseDown = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (typeof onMouseDown == "function") onMouseDown(index);
      if (!draggable) return;
      const onMouseMove = (event: MouseEvent) => {
        event.stopPropagation();
        event.preventDefault();
        const boundaries = ref.current?.getBoundingClientRect();
        if (!boundaries) return;
        // Y axis
        if (boundaries?.left >= 0 && boundaries?.right <= width) {
          position.current = {
            ...position.current,
            x:
              position.current.x + event.movementX <= 0
                ? 0
                : position.current.x + event.movementX,
          };
        } else {
          if (boundaries?.right >= width) {
            if (event.movementX > 0) return;
            position.current = {
              ...position.current,
              x: width - boundaries.width,
            };
          } else if (boundaries?.left <= 0) {
            position.current = {
              ...position.current,
              x: 0,
            };
          }
        }
        // X axis
        if (boundaries?.top >= 0 && boundaries?.bottom <= height) {
          position.current = {
            ...position.current,
            y:
              position.current.y + event.movementY <= 0
                ? 0
                : position.current.y + event.movementY,
          };
        } else {
          if (boundaries?.bottom >= height) {
            if (event.movementY > 0) return;
            position.current = {
              ...position.current,
              y: height - boundaries.height,
            };
          } else if (boundaries?.top <= 0) {
            position.current = {
              ...position.current,
              y: 0,
            };
          }
        }
        if (ref.current) {
          ref.current.style.transform = `translate(${position.current.x}px, ${position.current.y}px)`;
        }
      };
      const onMouseUp = (event: MouseEvent) => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    },
    [position, ref]
  );

  const onDragStart = useCallback(
    (event: TouchEvent) => {
      if (typeof onMouseDown == "function") onMouseDown(index);
      if (!draggable) return;
      const onTouchMove = (event: any) => {
        event.stopPropagation();
        const boundaries = ref.current?.getBoundingClientRect();
        if (!boundaries) return;

        console.log(event.touches[0].clientX, event.touches[0].clientY);

        if (boundaries?.left >= 0 && boundaries?.right <= width) {
          position.current = {
            ...position.current,
            x:
              event.touches[0].clientX <= 0
                ? 0
                : event.touches[0].clientX - boundaries.width / 2,
          };
        } else {
          if (boundaries?.right >= width) {
            position.current = {
              ...position.current,
              x: width - boundaries.width,
            };
          } else if (boundaries?.left <= 0) {
            position.current = {
              ...position.current,
              x: 0,
            };
          }
        }
        if (boundaries?.top >= 0 && boundaries?.bottom <= height) {
          position.current = {
            ...position.current,
            y:
              event.touches[0].clientY <= 0 ? 0 : event.touches[0].clientY - 14,
          };
        } else {
          if (boundaries?.bottom >= height) {
            position.current = {
              ...position.current,
              y: height - boundaries.height,
            };
          } else if (boundaries?.top <= 0) {
            position.current = {
              ...position.current,
              y: 0,
            };
          }
        }
        if (ref.current) {
          ref.current.style.transform = `translate(${position.current.x}px, ${position.current.y}px)`;
        }
      };
      const onTouchEnd = (event: any) => {
        document.removeEventListener("touchmove", onTouchMove);
        document.removeEventListener("touchend", onTouchEnd);
      };
      document.addEventListener("touchmove", onTouchMove);
      document.addEventListener("touchend", onTouchEnd);
    },
    [position, ref]
  );

  return (
    <div
      style={{
        width: windowWidth,
        height: windowHeight,
        zIndex: focusedWindow ? 100 : 1,
        display: hidden ? "none" : "block",
      }}
      title={title}
      className="window"
      ref={ref}
      onMouseDown={() => typeof onMouseDown == "function" && onMouseDown(index)}
      onTouchEnd={() => typeof onMouseDown == "function" && onMouseDown(index)}
    >
      <div
        className={focusedWindow ? "title-bar" : "title-bar inactive"}
        onMouseDown={_onMouseDown}
        onTouchStart={(e: TouchEvent<HTMLDivElement>) => onDragStart(e)}
        onTouchEnd={(e: TouchEvent<HTMLDivElement>) => {
          console.log("touch end", e);
          console.log("tocuh pos", e.changedTouches[0].clientX);
        }}
      >
        <div className="title-bar-text">
          {icon && (
            <Image
              width={16}
              height={16}
              src={icon}
              alt="icon"
              style={{ marginRight: "4px" }}
            />
          )}
          {title}
        </div>
        {(controls?.maximize || controls?.minimize || controls?.close) && (
          <div className="title-bar-controls">
            {controls?.minimize && (
              <button
                aria-label="Minimize"
                onClick={() =>
                  typeof onMinimize == "function" && onMinimize(index ?? 0)
                }
              />
            )}
            {controls?.maximize && (
              <button aria-label="Maximize" onClick={onMaximize} />
            )}
            {controls?.close && (
              <button
                aria-label="Close"
                onClick={() => typeof onClose == "function" && onClose(index)}
              />
            )}
          </div>
        )}
      </div>
      <div className={windowBodyClass ? windowBodyClass : "window-body"}>
        {children}
      </div>
    </div>
  );
}

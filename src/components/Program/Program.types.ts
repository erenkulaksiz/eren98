import { WindowProps } from "@components/Window/Window.types";

export interface ProgramProps extends WindowProps {
  title: string;
  icon?: string;
  id?: string;
  onClick?: ({
    event,
    id,
  }: {
    event: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>;
    id: string;
  }) => void;
}

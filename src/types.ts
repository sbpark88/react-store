import { ReactElement, ReactNode } from "react";

export interface OuterComponent {
  children?: ReactElement | null;
}

export interface ChildrenComponent {
  children?: ReactNode;
}

import React from "react";
import { IconType } from "react-icons";
export interface Meals {
  img?: string | IconType;
  title: string;
  type: string;
  children?: React.ReactNode;
}

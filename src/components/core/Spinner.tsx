import React, { FC } from "react";
import { RiseLoader } from "react-spinners";

export const Spinner: FC<{ size?: number; color?: string }> = ({
  size = 100,
  color = "#FFFFFF",
}) => {
  return <RiseLoader color={color} size={size} />;
};

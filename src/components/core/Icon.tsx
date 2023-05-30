import { createElement, FC } from "react";
import type { IconType } from "react-icons";

export const Icon: FC<{ icon: string | IconType }> = ({ icon }) => {
  if (typeof icon === "string") {
    return (
      <img
        alt={"icon"}
        src={icon}
        className={"w-16"}
        style={{ strokeWidth: 6 }}
      />
    );
  }
  return createElement(icon, { className: "text-6xl text-[#072837]" });
};

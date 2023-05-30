import {createElement, FC} from "react";
import {IconType} from "react-icons";

export const Icon: FC <{icon: string | IconType}> = ({icon}) => {

  console.log(icon);
  if (icon === typeof String) {
    return <img alt={'icon'} src={icon}/>
  }
  return createElement(icon, {className: "text-6xl text-[#072837]"});
}


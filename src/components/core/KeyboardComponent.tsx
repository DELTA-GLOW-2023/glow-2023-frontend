import React, { FC } from "react";
import Keyboard from "react-simple-keyboard";

export const KeyboardComponent: FC<{
  onChangeValue: (input: string) => void;
}> = ({ onChangeValue }) => {
  return (
    <Keyboard
      theme={"keyboard hg-theme-default hg-layout-default"}
      layout={{
        default: [
          "q w e r t y u i o p {bksp}",
          "a s d f g h j k l",
          "z x c v b n m",
          "{space}",
        ],
      }}
      mergeDisplay
      display={{
        "{bksp}": "<",
      }}
      onChange={(input) => {
        {
          onChangeValue(input);
        }
      }}
    />
  );
};

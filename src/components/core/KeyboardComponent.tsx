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
          "Q W E R T Y U I O P",
          "A S D F G H J K L",
          "Z X C V B N M {bksp}",
          "{space}",
        ],
      }}
      mergeDisplay
      display={{
        "{bksp}": "⌫",
        "{space}": "⎵",
      }}
      onChange={(input) => {
        {
          onChangeValue(input.toLowerCase());
        }
      }}
    />
  );
};

import React from "react";
import { ThemeProps } from "..";

function Main({ theme, ...rest }: ThemeProps) {
  return (
    <div>
      <p className={theme === "light" ? "lightMainText" : "darkMainText"}>
        Main
      </p>
    </div>
  );
}

export default Main;

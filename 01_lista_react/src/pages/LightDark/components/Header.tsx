import { ThemeProps } from "..";

function Header({ theme, ...rest }: ThemeProps) {
  return (
    <div>
      <h2 className={theme === "light" ? "lightTitle" : "darkTitle"}>Header</h2>
    </div>
  );
}

export default Header;

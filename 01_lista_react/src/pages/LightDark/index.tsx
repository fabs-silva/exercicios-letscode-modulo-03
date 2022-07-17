import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Menu from "./components/Menu";
import "./styles.css";

export interface ThemeProps {
  theme: "light" | "dark";
}

export interface RoleProps {
  theme: "light" | "dark";
  role: "user" | "admin";
}

function LightDark() {
  const [isClickedTheme, setIsClickedTheme] = useState<boolean>(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const [isClickedRole, setIsClickedRole] = useState<boolean>(false);
  const [role, setRole] = useState<"user" | "admin">("user");

  function handleThemeClick() {
    isClickedTheme ? setTheme("light") : setTheme("dark");
    setIsClickedTheme(!isClickedTheme);
  }

  function handleRoleClick() {
    isClickedRole ? setRole("admin") : setRole("user");

    setIsClickedRole(!isClickedRole);
  }
  return (
    <div className={theme === "light" ? "lightBackground" : "darkBackground"}>
      <Menu theme={theme} role={role} />
      <h1 className={theme === "light" ? "lightTitle" : "darkTitle"}>
        LightDark
      </h1>
      <Header theme={theme} />
      <Main theme={theme} />
      <button onClick={handleThemeClick}>Alterar Tema</button>
      <button onClick={handleRoleClick}>Alterar Usuário</button>
    </div>
  );
}

export default LightDark;

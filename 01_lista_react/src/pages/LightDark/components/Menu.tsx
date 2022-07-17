import { RoleProps } from "..";

function Menu({ theme, role, ...rest }: RoleProps) {
  return (
    <nav className={theme === "light" ? "lightMenu" : "darkMenu"}>
      <h2 className={theme === "light" ? "lightTitle" : "darkTitle"}>
        Bem-vindo, {role}
      </h2>
      <ul className={theme === "light" ? "lightLinks" : "darkLinks"}>
        {role === "admin" && (
          <>
            <li>Cadastros</li>
            <li>Financeiro</li>
          </>
        )}
        <li>Relatórios</li>
      </ul>
    </nav>
  );
}

export default Menu;

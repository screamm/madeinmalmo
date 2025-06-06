import { Link } from "react-router-dom";
import "./Header.scss";
import type { HeaderProps } from "../types";
import headerBg from "../assets/header-bg.png";

export const Header = ({ title, links }: HeaderProps) => {
  return (
    <header className="header" style={{ backgroundImage: `url(${headerBg})` }}>
      {links && (
        <nav className="nav">
          {links.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
        </nav>
      )}
      <h1 className="title">{title}</h1>
    </header>
  );
};

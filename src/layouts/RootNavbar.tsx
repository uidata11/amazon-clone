import { Suspense, lazy } from "react";
import { Link, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";

interface Props {
  menuHandler: () => void;
  isMenuActive: boolean;
}

interface Menu {
  to: string;
  name: string;
}

export const RootNavbar = ({ menuHandler }: Props) => {
  const menus: Menu = [
    { to: "/", name: "Home" },
    { to: "/cart", name: "Cart" },
    { to: "/product", name: "Prodect" },
    { to: "/myacount", name: "MyAcount" },
  ];

  const location = useLocation();

  return (
    <nav
      className={twMerge("fixed top-10 right-0 border w-full bg-white z-10 ")}
    >
      {menus.map(({ name, to }) => {
        const isCurrentPath = to === location.pathname;
        return (
          <Link
            key={name}
            to={to}
            onClick={menuHandler}
            className={twMerge(
              "hover:bg-gray-200 hover:text-bg",
              isCurrentPath && "text-theme hover:text-warning"
            )}
          >
            {name}
          </Link>
        );
      })}
    </nav>
  );
};

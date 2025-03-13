import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { RootNavbar } from "./RootNavbar";
import { IoMenu } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { MdLightMode, MdModeNight } from "react-icons/md";

const RootLayout = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const menuHandler = () => setIsMenuActive((p) => !p);
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    console.log({ isMenuActive });
  }, [isMenuActive]);

  return (
    <>
      <header>
        <div className="border flex gap-x-2.5 max-w-300 mx-auto">
          <img src="" alt="logo" className="h-10 w-25 bg-gray-300" />
          <form className="flex flex-1 gap-x-2.5">
            <input
              type="text"
              className="flex-1 outline-none bg-bg px-2.5 "
              placeholder="검색어를 입력해주세요. "
            />
            <button>
              <FaSearch />
            </button>
          </form>
          <button onClick={() => setTheme((p) => !p)}>
            {theme ? <MdModeNight /> : <MdLightMode />}
          </button>
          <button className="text-2xl w-10" md:hidden onClick={menuHandler}>
            <IoMenu />
          </button>
        </div>
      </header>

      {isMenuActive && <RootNavbar menuHandler={menuHandler} />}

      <Outlet />
    </>
  );
};

export default RootLayout;

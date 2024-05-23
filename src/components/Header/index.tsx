import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useScript from "./useScript";
const Svg1 = require("@site/static/img/1.svg").default;
const Svg2 = require("@site/static/img/2.svg").default;
const Svg3 = require("@site/static/img/3.svg").default;
const Svg4 = require("@site/static/img/4.svg").default;

type Menu = {
  to: string;
  label: string;
};

const Header = () => {
  const { siteConfig } = useDocusaurusContext();
  useScript();

  const menus = (siteConfig.themeConfig?.navbar as any)?.items || [];

  const closeMobileMenu = () => {};

  return (
    <>
      <div className="relative w-full h-20 opacity-0 pointer-events-none"></div>
      <header id="header" className="absolute top-0 z-50 w-full h-20">
        <div className="flex items-center justify-between h-full max-w-5xl pl-6 pr-4 mx-auto border-b border-l-0 border-r-0 border-transparent select-none lg:border-r lg:border-l lg:rounded-b-xl">
          <a
            href="/"
            className="h-5 text-base group relative z-30 flex items-center space-x-1.5 text-black dark:text-white font-semibold"
          >
            <span className="text-xl -translate-y-0.5 group-hover:-rotate-12 group-hover:scale-[1.2] ease-in-out duration-300">
              ✦
            </span>
            <span className="-translate-y-0.5"> aria</span>
          </a>

          <div
            id="mobileMenuBackground"
            onClick={() => closeMobileMenu()}
            className="fixed inset-0 z-20 hidden w-screen h-screen duration-300 ease-out bg-white/90 dark:bg-neutral-950/90"
          ></div>
          <nav className="relative z-30 flex flex-row-reverse justify-start w-full text-sm sm:justify-end text-neutral-500 dark:text-neutral-400 sm:flex-row">
            <div
              id="openMenu"
              className="flex flex-col items-end justify-center w-6 h-6 ml-4 cursor-pointer sm:hidden"
            >
              <Svg1 />
            </div>
            <div
              id="closeMenu"
              className="flex flex-col items-end justify-center hidden w-6 h-6 ml-4 -translate-x-1 cursor-pointer sm:hidden"
            >
              <Svg2 />
            </div>
            <div
              id="menu"
              className="fixed top-[75px] ease-out duration-300 sm:top-0 sm:py-0 pt-7 pb-4 dm:mx-0 left-0 z-40 flex-col items-end justify-start hidden w-full h-auto text-sm sm:h-auto sm:relative sm:flex-row sm:flex sm:text-sm sm:w-auto sm:pr-0 sm:pt-0"
            >
              <div className="absolute inset-0 top-0 right-0 block w-full h-full px-3 sm:hidden">
                <div className="relative w-full h-full bg-white border border-dashed border-neutral-300 dark:border-neutral-700 backdrop-blur-sm rounded-xl dark:bg-neutral-950"></div>
              </div>
              {menus.map((menu) => {
                return (
                  <a
                    key={menu.label}
                    href={menu.url}
                    className="relative flex items-center justify-center w-full px-3 py-2 font-medium tracking-wide text-center duration-200 ease-out sm:py-0 sm:mb-0 md:w-auto hover:text-neutral-900 dark:hover:text-white"
                  >
                    {menu.label}
                  </a>
                );
              })}
            </div>
            <div
              id="darkToggle"
              className="relative flex items-center pl-6 ml-4 font-medium tracking-wide cursor-pointer text-neutral-800 group dark:text-white"
            >
              <div className="absolute left-0 flex items-center justify-center w-6 h-6 overflow-hidden border-b border-transparent horizon group-hover:border-neutral-600">
                <>
                  <Svg3 />
                  <Svg4 />
                </>
              </div>
              <span className="hidden sm:inline-block">
                <span id="dayText" className="ml-2">
                  Day mode
                </span>
                <span id="nightText" className="hidden ml-2">
                  Night mode
                </span>
              </span>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

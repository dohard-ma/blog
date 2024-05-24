import React, { useState, useEffect, useCallback } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Logo from "../Logo";
import Svg1 from "@site/static/img/1.svg";
import Svg2 from "@site/static/img/2.svg";
import Svg3 from "@site/static/img/3.svg";
import Svg4 from "@site/static/img/4.svg";
import styles from "./index.module.css";

type Menu = {
  to: string;
  label: string;
};

const MenuLink = ({ to, label }) => (
  <a
    href={to}
    className="relative flex items-center justify-center w-full px-3 py-2 font-medium tracking-wide text-center duration-200 ease-out sm:py-0 sm:mb-0 md:w-auto hover:text-neutral-900 dark:hover:text-white"
  >
    {label}
  </a>
);

const Menu = ({ menus, mobileMenuOpen }) => {
  const [menuTop, setMenuTop] = useState("");
  useEffect(() => {
    const evaluateHeaderPosition = () => {
      if (window.scrollY > 16) {
        setMenuTop("top-[56px]");
      } else {
        setMenuTop("top-[75px]");
      }
    };
    window.addEventListener("scroll", () => {
      evaluateHeaderPosition();
    });

    return window.removeEventListener("scroll", evaluateHeaderPosition);
  }, []);

  return (
    <div
      className={
        `fixed top-[75px] ease-out duration-300 sm:top-0 w-full left-0 sm:py-0 pt-7 pb-4 dm:mx-0 z-40 flex-col items-end justify-start h-auto text-sm sm:text-base sm:h-auto sm:relative sm:flex-row sm:flex sm:text-sm sm:w-auto sm:pr-0 sm:pt-0` +
        (!mobileMenuOpen ? "left-0 hidden w-full " : "") +
        menuTop
      }
    >
      <div className="absolute inset-0 top-0 right-0 block w-full h-full px-3 sm:hidden">
        <div className="relative w-full h-full bg-white border border-dashed border-neutral-300 dark:border-neutral-700 backdrop-blur-sm rounded-xl dark:bg-neutral-950"></div>
      </div>
      {menus.map((menu) => (
        <MenuLink key={menu.label} to={menu.to} label={menu.label} />
      ))}
    </div>
  );
};

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [iconClass, setIconClass] = useState("");

  useEffect(() => {
    const isDarkMode = localStorage.getItem("dark_mode") === "true";
    setDarkMode(isDarkMode);
    document.documentElement.classList.add("duration-300"); // Ensure transition duration is applied
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }
    setIconClass(styles.rising); // Apply rising animation for night mode
  }, []);

  const toggleDarkMode = useCallback(() => {
    const newDarkMode = !darkMode;
    localStorage.setItem("dark_mode", String(newDarkMode));

    setIconClass(styles.setting); // Apply rising animation for night mode

    setTimeout(() => {
      setDarkMode(newDarkMode);
      if (newDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      setIconClass(styles.rising); // Apply rising animation for night mode
    }, 500); // The length of the animation
  }, [darkMode]);

  return (
    <div
      onClick={toggleDarkMode}
      className="relative flex items-center pl-6 ml-4 font-medium tracking-wide cursor-pointer text-neutral-800 group dark:text-white border-transparent"
    >
      <span className="absolute left-0 flex items-center justify-center w-6 h-6 overflow-hidden border-b border-transparent horizon group-hover:border-neutral-600">
        <span className={styles.horizon}>
          {darkMode ? (
            <Svg4 className={iconClass} />
          ) : (
            <Svg3 className={iconClass} />
          )}
        </span>
      </span>
      <span className="ml-2">{darkMode ? "Night mode" : "Day mode"}</span>
    </div>
  );
};

const MobileMenuIcon = ({ isOpen, setOpen }) => {
  return (
    <div
      onClick={() => setOpen(!isOpen)}
      className="flex flex-col items-end justify-center w-6 h-6 ml-4 cursor-pointer sm:hidden"
    >
      {isOpen ? <Svg2 /> : <Svg1 />}
    </div>
  );
};

const Header = () => {
  const { siteConfig } = useDocusaurusContext();
  const menus = (siteConfig.themeConfig?.navbar as any)?.items || [];
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldStick = window.scrollY > 16;
      setIsSticky(shouldStick);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="relative w-full h-20 opacity-0 pointer-events-none"></div>

      <header className="absolute top-0 z-50 w-full h-20">
        <div className="flex items-center justify-between h-full max-w-5xl pl-6 pr-4 mx-auto border-b border-l-0 border-r-0 border-transparent select-none lg:border-r lg:border-l lg:rounded-b-xl">
          <Logo />

          <div
            onClick={() => setMobileMenuOpen(false)}
            className={
              (!mobileMenuOpen ? `hidden` : "") +
              ` fixed inset-0 z-20 w-screen h-screen duration-300 ease-out bg-white/90 dark:bg-neutral-950/90` +
              isSticky
                ? "border-neutral-300/50 bg-white/80 dark:border-neutral-600/40 dark:bg-neutral-900/60 backdrop-blur-2xl"
                : "border-transparent"
            }
          ></div>

          <nav
            className={
              "relative z-30 flex flex-row-reverse justify-start w-full text-sm sm:justify-end text-neutral-500 dark:text-neutral-400 sm:flex-row"
            }
          >
            <MobileMenuIcon
              isOpen={mobileMenuOpen}
              setOpen={setMobileMenuOpen}
            />
            <Menu menus={menus} mobileMenuOpen={mobileMenuOpen} />
            <DarkModeToggle />
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

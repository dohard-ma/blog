import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

type Menu = {
  to: string;
  label: string;
};

const html = (menus: Menu[]) => {
  const tpl = menus.reduce((pre, menu) => {
    return (
      pre +
      `<a
href={menu.url}
class="relative flex items-center justify-center w-full px-3 py-2 font-medium tracking-wide text-center duration-200 ease-out sm:py-0 sm:mb-0 md:w-auto hover:text-neutral-900 dark:hover:text-white"
>` +
      menu.label +
      `</a>`
    );
  }, "");

  return `
<div class="relative w-full h-20 opacity-0 pointer-events-none"></div>
<header id="header" class="absolute top-0 z-50 w-full h-20">
  <div
    class="flex items-center justify-between h-full max-w-5xl pl-6 pr-4 mx-auto border-b border-l-0 border-r-0 border-transparent select-none lg:border-r lg:border-l lg:rounded-b-xl"
  >
  <a
  href="/"
  class="h-5 text-base group relative z-30 flex items-center space-x-1.5 text-black dark:text-white font-semibold"
>
  <span
    class="text-xl -translate-y-0.5 group-hover:-rotate-12 group-hover:scale-[1.2] ease-in-out duration-300"
    >✦</span
  >
  <!-- Logo Text -->
  <span class="-translate-y-0.5"> aria</span>
</a>

    <div
      id="mobileMenuBackground"
      onclick="closeMobileMenu()"
      class="fixed inset-0 z-20 hidden w-screen h-screen duration-300 ease-out bg-white/90 dark:bg-neutral-950/90"
    >
    </div>
    <nav
      class="relative z-30 flex flex-row-reverse justify-start w-full text-sm sm:justify-end text-neutral-500 dark:text-neutral-400 sm:flex-row"
    >
      <div
        id="openMenu"
        class="flex flex-col items-end justify-center w-6 h-6 ml-4 cursor-pointer sm:hidden"
      >
        <svg
          class="w-8 h-8 dark:text-neutral-200"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"><path d="M4 8h16M4 16h16"></path></svg
        >
      </div>
      <div
        id="closeMenu"
        class="flex flex-col items-end justify-center hidden w-6 h-6 ml-4 -translate-x-1 cursor-pointer sm:hidden"
      >
        <svg
          class="w-6 h-6 text-neutral-600 dark:text-neutral-200"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"><path d="M6 18L18 6M6 6l12 12"></path></svg
        >
      </div>
      <div
        id="menu"
        class="fixed top-[75px] ease-out duration-300 sm:top-0 w-full left-0 sm:py-0 pt-7 pb-4 dm:mx-0 left-0 z-40 flex-col items-end justify-start hidden w-full h-auto text-sm sm:text-base sm:h-auto sm:relative sm:flex-row sm:flex sm:text-sm sm:w-auto sm:pr-0 sm:pt-0"
      >
        <div
          class="absolute inset-0 top-0 right-0 block w-full h-full px-3 sm:hidden"
        >
          <div
            class="relative w-full h-full bg-white border border-dashed border-neutral-300 dark:border-neutral-700 backdrop-blur-sm rounded-xl dark:bg-neutral-950"
          >
          </div>
        </div>
        ${tpl}
      </div>
      <div
        id="darkToggle"
        class="relative flex items-center pl-6 ml-4 font-medium tracking-wide cursor-pointer text-neutral-800 group dark:text-white"
      >
        <div
          class="absolute left-0 flex items-center justify-center w-6 h-6 overflow-hidden border-b border-transparent horizon group-hover:border-neutral-600"
        >
          <svg
            class="absolute w-6 h-6 transition duration-700 transform ease"
            id="sun"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            ><path
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            ></path></svg
          >
          <svg
            class="absolute hidden w-6 h-6 transition duration-700 transform ease"
            id="moon"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            ><path
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            ></path></svg
          >
        </div>
        <span class="hidden sm:inline-block">
          <span id="dayText" class="ml-2">Day mode</span>
          <span id="nightText" class="hidden ml-2">Night mode</span>
        </span>
      </div>
    </nav>
  </div>
</header>
`;
};
const Header = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: html((siteConfig.themeConfig?.navbar as any)?.items || []),
      }}
    ></div>
  );
};

export default Header;

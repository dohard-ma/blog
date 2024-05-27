import LogoSvg from "@site/static/img/logo.svg";

const Logo = () => (
  <a
    href="/"
    className="hover:no-underline hover:text-inherit h-5 text-base group relative z-30 flex items-center space-x-1.5 text-black dark:text-white font-semibold"
  >
    <span className="text-xl -translate-y-0.5 group-hover:-rotate-12 group-hover:scale-[1.2] ease-in-out duration-300">
      <LogoSvg className="logo" />
    </span>
    <span className="-translate-y-0.5"> blog</span>
  </a>
);

export default Logo;

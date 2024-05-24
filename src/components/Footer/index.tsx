import Logo from "../Logo";
import Github from "@site/static/img/github.svg";
import Twitter from "@site/static/img/twitter.svg";

const Footer = () => {
  return (
    <section className="text-gray-700 bg-white border-t sm:mt-20 dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800">
      <div className="container flex flex-col items-center py-8 mx-auto px-7 max-w-7xl sm:flex-row">
        <Logo />
        <p className="mt-4 text-sm text-neutral-700 dark:text-neutral-100 sm:ml-4 sm:pl-4 sm:border-l sm:border-neutral-300 dark:sm:border-neutral-700 sm:mt-0">
          © {new Date().getFullYear()} Aria
        </p>
        <span className="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
          <a
            href="https://x.com/Ma_cm_"
            target="_blank"
            className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
          >
            <span className="sr-only">𝕏</span>

            <Twitter className="w-6 h-6 dark:stroke-black stroke-white" />
          </a>

          <a
            href="https://github.com/dohard-ma"
            target="_blank"
            className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
          >
            <span className="sr-only">GitHub</span>
            <Github className="w-6 h-6 dark:stroke-black stroke-white" />
          </a>
        </span>
      </div>
    </section>
  );
};

export default Footer;

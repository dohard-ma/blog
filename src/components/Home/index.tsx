import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Button from "../Button";
import Separator from "../Separator";
import Writings from "../Writings";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easy to Use",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: "Powered by React",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Extend or customize your website by reusing React. Docusaurus can be
        extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  return (
    <>
      <div className="relative z-20 w-full max-w-4xl mx-auto mt-16 px-7 md:mt-24 lg:mt-32 xl:px-0">
        <div className="flex flex-col items-center md:flex-row">
          <div className="relative w-full md:w-1/2">
            <h1 className="mb-5 text-4xl font-bold leading-tight md:text-4xl lg:text-5xl dark:text-white">
              Hello, I'm Dohard.
            </h1>
            <p className="mb-6 text-base text-neutral-600 dark:text-neutral-400">
              I'm a front-end programmer living in Shenzhen.{" "}
              <br className="hidden lg:block" />I focus on Web development.{" "}
              <br className="hidden lg:block" />
            </p>
            <p className="mb-2 font-semibold text-neutral-800 dark:text-neutral-200">
              I can help you out with:
            </p>
            <ul className="py-2 space-y-[3px] text-sm list-disc list-inside text-neutral-500 dark:text-neutral-400">
              <li>React.js Development</li>
              <li>Node.js Development</li>
              <li>and more...</li>
            </ul>
            <Button text="Follow me on 𝕏" link="https://x.com/Ma_cm_" />
          </div>
          <div className="relative justify-end hidden w-full mt-10 md:flex md:pl-10 md:w-1/2 md:mt-0 md:translate-y-4 xl:translate-y-0">
            <div className="relative z-50 w-full">
              <div className="absolute bottom-0 z-40 w-16 h-16 -translate-x-6 -translate-y-1/2 lg:top-auto top-0 lg:-translate-y-[330px] rounded-full">
                <span className="relative z-20 flex items-center justify-center w-full h-full text-2xl border-8 border-white rounded-full dark:border-neutral-950 bg-neutral-100 dark:bg-neutral-900">
                  <span className="flex items-center justify-center w-full h-full bg-white border border-dashed rounded-full dark:bg-neutral-950 border-neutral-300 dark:border-neutral-700">
                    👋
                  </span>
                </span>
              </div>
              <div className="relative z-30 px-10 translate-x-0 -translate-y-px border border-dashed rounded-2xl bg-gradient-to-r dark:from-neutral-950 dark:via-black dark:to-neutral-950 from-white via-neutral-50 to-white border-neutral-300 dark:border-neutral-700">
                <img
                  src="/img/20240508-183733-removebg-preview.png"
                  loading="eager"
                  decoding="auto"
                  className="relative z-30 w-full object-contain aspect-[790/1189] md:max-w-md mx-auto dark:-translate-y-0.5 rounded"
                />
              </div>
              {/* <div className="absolute bottom-0 right-0 z-20 w-full h-full lg:h-[420px] translate-x-0 -translate-y-px border border-dashed rounded-2xl bg-gradient-to-r dark:from-neutral-950 dark:via-black dark:to-neutral-950 from-white via-neutral-50 to-white border-neutral-300 dark:border-neutral-700"></div> */}
            </div>
          </div>
        </div>
      </div>

      <Separator text="Some of my writing" />
      <Writings />
    </>
  );
}

import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import Header from "../components/header";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const techs = [
    "HTML",
    "(S)CSS",
    "Vue.js",
    "Next.js",
    "Javascript (ES6+)",
    "Express",
    "Node.js",
  ];
  const socials = [
    { name: "Email", url: "mailto:kholid060@gmail.com" },
    { name: "GitHub", url: "https://github.com/kholid060" },
    { name: "Twitter", url: "https://twitter.com/kholid060" },
  ];

  return (
    <main className="container">
      <Header />
      <div className={clsx("hero hero--primary", styles.heroBanner)}>
        <title>Ahmad Kholid</title>
        <meta
          name="google-site-verification"
          content="aAgYE222QWO3SsuHi1POvt_-ulDwtEpuxtMpZSM3PgQ"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </div>
      <section className="pt-24 md:pt-40 pb-48" style={{ minHeight: "500px" }}>
        <h1 className="text-5xl font-semibold mb-4 bg-gradient-to-br from-blue-400 to-indigo-600 text-transparent bg-clip-text">
          Hi, I'm Kholid. <br />
          Front-End Developer.
        </h1>
        <p className="max-w-xl">
          I'm a self-taught front-end developer based in Indonesia. And focused
          on building interactive web apps and some browser extensions.
        </p>
        <div className="mt-4">
          <p>Here are a few technologies I've been working with recently:</p>
          <ul className="list-disc list-inside grid grid-cols-2 max-w-md mt-4">
            {techs.map((tech) => (
              <li>{tech}</li>
            ))}
          </ul>
        </div>
        <a
          href="mailto:kholid060@gmail.com"
          className="mt-12 inline-block"
          rel="noopener noreferrer"
        >
          <button className="primary">Contact me</button>
        </a>
      </section>
      <section className="py-24 border-t border-gray-800 text-center">
        <ul className="space-x-8">
          {socials.map((social) => (
            <li className="inline-block">
              <a
                href={social.url}
                title={social.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <Icon path={social.icon} size={1.2}></Icon> */}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

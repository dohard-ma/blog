import Layout from "../layouts/main";
import Home from "@site/src/components/Home";

import styles from "./index.module.css";

export default function HomePage(): JSX.Element {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

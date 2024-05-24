import Header from "../components/Header";
import SquareLines from "../components/SquareLines";
import Footer from "../components/Footer";

type Props = {
  children: JSX.Element;
};

function Layout(props: Props): JSX.Element {
  return (
    <main className="antialiased bg-white dark:bg-neutral-950">
      <SquareLines />
      <Header />
      {props.children}
      <Footer />
    </main>
  );
}

export default Layout;

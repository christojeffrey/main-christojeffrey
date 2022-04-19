import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>uh masi kosong</h1>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

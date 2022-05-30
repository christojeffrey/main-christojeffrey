import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import NavBar from "../components/navbar/navbar";
const Home: NextPage = () => {
  return (
    <div className={`${styles.container} bg-grey-lightest`}>
      {/* <Header /> */}
      <NavBar />
      <main className={`${styles.main} `}>
        <div className="text-5xl text-black font-semibold">Hello! I'm Jeff</div>
        <div>
          computer science student, <b>software developer</b>, and ... a human
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;

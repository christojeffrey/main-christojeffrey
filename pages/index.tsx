import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
// import Header from "../components/header/header";
// import Footer from "../components/footer/footer";
import NavBar from "../components/navbar/navbar";
import { animated, useSpring } from "react-spring";
const Home: NextPage = () => {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
  return (
    <animated.div style={props}>
      <div className={`${styles.container} bg-grey-lightest`}>
        {/* <Header /> */}
        <NavBar />
        <main className={`${styles.main} `}>
          <div className="text-5xl text-black font-semibold">Hello! I&apos;m Jeff</div>
          <div className="text-xl ">
            computer science student, <b>software developer</b>, and ... a human
          </div>
        </main>
        {/* <Footer /> */}
      </div>
    </animated.div>
  );
};

export default Home;

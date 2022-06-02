import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Header from "../components/header/header";
// import Footer from "../components/footer/footer";
import NavBar from "../components/navbar/navbar";
import { animated, useSpring } from "react-spring";
const Home: NextPage = () => {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
  return (
    <animated.div style={props}>
      {/* canvas */}
      <div className={`min-h-screen bg-grey`}>
        <Header />
        <NavBar />
        {/* hero */}
        <div className="bg-grey-lightest h-screen text-center flex flex-col justify-center align-center">
          <div className="text-5xl text-black font-semibold">Hello! I&apos;m Jeff</div>
          <div className="text-xl">
            computer science student, <b>software developer</b>, and ... a human
          </div>
        </div>
        {/* hero */}
        {/* project goes here */}
        <div>
          <div className="bg-grey-darkest h-[50vh] text-center flex flex-col justify-center align-center">1</div>
          <div> 2</div>
        </div>
        {/* project goes here */}
        {/* <Footer /> */}
      </div>
      {/* canvas */}
    </animated.div>
  );
};

export default Home;

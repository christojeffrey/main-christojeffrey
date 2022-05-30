import { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import NavBar from "../components/navbar/navbar";
import styles from "../styles/Home.module.css";

const About = () => {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
  return (
    <animated.div style={props}>
      <div className={`${styles.container} bg-grey-lightest`}>
        {/* <Header /> */}
        <NavBar />
        <main className={`${styles.main} `}>
          <div className="text-xl ">about me?</div>
        </main>
        {/* <Footer /> */}
      </div>
    </animated.div>
  );
};

export default About;

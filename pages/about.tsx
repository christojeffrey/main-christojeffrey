import { useSpring, animated } from "react-spring";
import NavBar from "../components/navbar/navbar";
import styles from "../styles/Home.module.css";
import { HighlightedText, TextClickCopy, SocialLink } from "../components/modifiedText/modifiedText";
const About = () => {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
  return (
    <animated.div style={props}>
      <div className={`${styles.container} bg-grey-lightest`}>
        {/* <Header /> */}
        <NavBar />
        <main className={`${styles.main} `}>
          <div className="text-3xl">about me?</div>
          <div className="text-xl w-1/2">
            Christopher <HighlightedText>Jeffrey</HighlightedText> is student at Insitut Teknologi Bandung, majoring at <HighlightedText>Computer Science</HighlightedText>. Currently in his 5<span className="text-sm leading-loose">th</span>{" "}
            semester. With few weeks left before his 20, he is dying for purpose in this absurd universe. In the meantime, tech industry keeps him busy. you can reach him by email at{" "}
            <TextClickCopy>christopherjeffrey492@gmail.com</TextClickCopy>
          </div>
          {/* other social media link */}
          <div className="m-5 p-5">
            <div className="text-2xl text-center">find me on</div>
            <SocialLink link="https://github.com/christojeffrey">github</SocialLink>
            <SocialLink link="https://www.linkedin.com/in/christojeffrey/">linkedin</SocialLink>
            <SocialLink link="https://www.instagram.com/christojeffrey/">instagram</SocialLink>
            <SocialLink link="https://unsplash.com/@christojeffrey">unsplash</SocialLink>
          </div>
        </main>
        {/* <Footer /> */}
      </div>
    </animated.div>
  );
};

export default About;

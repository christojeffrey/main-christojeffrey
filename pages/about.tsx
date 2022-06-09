import { useSpring, animated } from "react-spring";
import NavBar from "../components/navbar/navbar";
// import styles from "../styles/Home.module.css";
import Header from "../components/header/header";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaUnsplash } from "react-icons/fa";
import { HighlightedText, TextClickCopy, SocialLink } from "../components/modifiedText/modifiedText";
const About = () => {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
  return (
    <animated.div style={props}>
      <div className={` bg-neutral-100 text-neutral-900 min-h-screen`}>
        <Header />
        <NavBar />
        <main className={`pt-8 centerx `}>
          <div className="md:text-2xl text-xl">about me</div>
          <div className="md:text-base text-sm w-3/4 md:w-1/2">
            Christopher <HighlightedText>Jeffrey</HighlightedText> is student at Insitut Teknologi Bandung, majoring at <HighlightedText>Computer Science</HighlightedText>. Currently in his 5<span className="text-sm leading-loose">th</span>{" "}
            semester. With few weeks left before his 20, he is dying for purpose in this absurd universe. In the meantime, tech industry keeps him busy. you can reach him by email at{" "}
            <TextClickCopy>christopherjeffrey492@gmail.com</TextClickCopy>
          </div>
          {/* other social media link */}
          <div className="m-10 p-5 text-neutral-600">
            <div className="text-xl text-center">find me on</div>
            <div className="text-sm md:text-base centerxy">
              <SocialLink link="https://github.com/christojeffrey">
                <AiFillGithub />
              </SocialLink>
              <SocialLink link="https://www.linkedin.com/in/christojeffrey/">
                <AiFillLinkedin />
              </SocialLink>
              <SocialLink link="https://www.instagram.com/christojeffrey/">
                <AiFillInstagram />
              </SocialLink>
              <SocialLink link="https://unsplash.com/@christojeffrey">
                <FaUnsplash />
              </SocialLink>
            </div>
          </div>
        </main>
        {/* <Footer /> */}
      </div>
    </animated.div>
  );
};

export default About;

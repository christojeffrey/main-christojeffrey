import type { NextPage } from "next";
import Header from "../components/header/header";
// import Footer from "../components/footer/footer";
import NavBar from "../components/navbar/navbar";
import { animated, useSpring } from "react-spring";
import Image from "next/image";
import project1 from "../public/project1.png";

const Home: NextPage = () => {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
  return (
    <animated.div style={props}>
      {/* canvas */}
      <div className={`min-h-screen bg-neutral-100`}>
        <Header />
        <NavBar />
        {/* hero */}
        <div className="bg-neutral-100 h-screen centerxy">
          <div className="px-5 md:text-center">
            <div className="text-base md:text-2xl text-neutral-900 font-semibold font-sans">Hello! </div>
            <div className="text-xs md:text-sm">
              My name is Jeff and I&apos;m a computer science student, <b>software developer</b>, and ... a human
            </div>
          </div>
        </div>
        {/* hero */}
        {/* project goes here */}
        <div className=" bg-neutral-200 centerx">
          <div className="p-10 text-neutral-700">projects are being made ...</div>
          {/* <div className="centerxy w-3/4 m-7 p-5">
            <div className="w-1/2">
              <div className="text-neutral-900 text-xl">Parade Wisuda ITB</div>
              <div className=""> i did backend stuff! including deploying </div>
              <div className="flex">
                {["test", "tes", "tos"].map((e) => {
                  return (
                    <div key={e} className="text-center text-primary-900 text-sm font-semibold border-2 border-primary-500 bg-primary-100 w-8 rounded-full">
                      {e}
                    </div>
                  );
                })}
              </div>
              <div className="flex">
                <div className="text-base">more!</div>
                <div className="border-2 w-6 h-6 border-neutral-600 text-neutral-600 rounded-full centerxy text-center">⇒</div>
              </div>
            </div>
            <div className="w-1/2">
              <Image className="" src={project1} alt="Picture of project1"></Image>
            </div>
          </div> */}
        </div>
        {/* project goes here */}
        {/* <Footer /> */}
      </div>
      {/* canvas */}
    </animated.div>
  );
};

export default Home;

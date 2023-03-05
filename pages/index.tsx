import type { NextPage } from "next";
import Header from "../components/header/header";
// import Footer from "../components/footer/footer";
import NavBar from "../components/navbar/navbar";
import { animated, useSpring } from "react-spring";
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
          <div className="centerxy text-base md:text-xl text-neutral-900 font-semibold font-sans pt-6">Projects</div>
          <Project title="Parade Wisuda ITB" desc="i did backend stuff! including deploying" mediaURL="paradewisudaitb.mp4" moreURL="https://wispril22.netlify.app/" />
          <Project reverse title="IF Reviewed" desc="a 'survey' of communication style for ITB informatics students." mediaURL="ifreviewed.mp4" moreURL="https://hmif.christojeffrey.com" />
          <Project title="SPE Esperance" desc="a 3D online exhibition" mediaURL="speesperance.mp4" moreURL="https://speesperance.com" />
          <Project reverse title="Gitbot" desc="LINE bot that can hook to a github repository and give you update via chat" mediaURL="gitbot.mp4" moreURL="https://line.me/R/ti/p/@144ggpeg" />
          <Project title="Markdown Viewer" desc="alternative way to see markdown documentation from github" mediaURL="markdownviewer.mp4" moreURL="https://md.christojeffrey.com" />
          {/* project markdown viewer*/}
        </div>
        {/* project goes here */}
        <div className="centerxy text-base md:text-xl text-neutral-900 font-semibold font-sans pt-6">Experiences</div>
        <div className=" bg-neutral-100 centerx">
          <Experience
            name="Tiket.com"
            link="https://tiket.com"
            desc="My responsibilities as a Frontend Engineer intern at tiket.com involve collaborating with a team to maintain existing code, debug issues, and implement new features within the company's larger division."
            startDate="Aug 22"
            endDate="Jan 23"
          />
          <Experience
            name="Atlito"
            link="https://talent.usedeall.com/companies/atlito"
            desc="My role as a Backend Engineer intern for a growing startup involves working towards the development of a social sports platform."
            startDate="Jul 22"
            endDate="Aug 22"
          />
        </div>
        <div className=" bg-neutral-200 centerx">
          <div className="p-10 text-neutral-700">more are being done while you&apos;re reading this!</div>
        </div>
        {/* <Footer /> */}
      </div>
      {/* canvas */}
    </animated.div>
  );
};

const Experience = ({ name, link, desc, startDate, endDate }: any) => {
  const handleTitleOnClick = () => {
    // redirect to moreURL
    window.location.href = link;
  };
  return (
    <div className="flex flex-col md:flex-row md:justify-center md:items-center w-3/4 p-2">
      <div className="md:w-1/2">
        <div onClick={handleTitleOnClick} className="w-full hover:text-primary-900 hover:cursor-pointer rounded-md md:py-6 px-2 md:text-left">
          <div className="text-neutral-900 text-md md:text-xl">{name}</div>
          <div className="text-2xs md:text-xs">
            {startDate} - {endDate}
          </div>
          <div className="w-full flex text-sm md:text-md">{desc}</div>
        </div>
      </div>
    </div>
  );
};
const Project = ({ title, desc, moreURL, mediaURL, reverse }: any) => {
  const handleTitleOnClick = () => {
    // redirect to moreURL
    window.location.href = moreURL;
  };
  return (
    <>
      <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} md:justify-center md:items-center w-3/4 m-7 p-5`}>
        <div className="md:w-1/2 p-4">
          <div className={` w-full hover:text-primary-900 rounded-md hover:cursor-pointer md:py-6 px-2 ${reverse ? "md:text-right" : "md:text-left"}`} onClick={handleTitleOnClick}>
            <div className="text-neutral-900 text-md md:text-xl">{title}</div>
            <div className="text-sm md:text-md">{desc}</div>
          </div>
          <div className={`w-full flex text-sm md:text-md ${reverse ? "md:justify-end" : "md:justify-start"}`}>
            <a
              href={moreURL}
              className={`
            hover:text-neutral-900 text-primary-700 text-sm px-2`}
            >
              try me!
            </a>
          </div>
        </div>
        <div className="md:w-1/2 p-4 centerxy">
          {/* video */}
          <video className="max-h-14 rounded-xl" controls muted>
            <source src={mediaURL} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};

export default Home;

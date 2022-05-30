import { useState } from "react";
import Link from "next/link";
const Burger = ({ showOverlay, setShowOverlay }: { showOverlay: Boolean; setShowOverlay: any }) => {
  return (
    <>
      <div className="z-10 absolute m-3 right-0 py-5 pr-10" onClick={() => setShowOverlay(!showOverlay)}>
        <div className={`block absolute  h-1.5 w-10 bg-red transform transition duration-500 ease-in-out ${showOverlay ? "rotate-45" : "-translate-y-3"}`}></div>
        <div className={`block absolute h-1.5 w-10  bg-red transform transition duration-500 ease-in-out ${showOverlay ? "opacity-0" : ""}`}></div>
        <div className={`block absolute h-1.5 w-10  bg-red transform transition duration-500 ease-in-out ${showOverlay ? "-rotate-45" : "translate-y-3"}`}></div>
      </div>
    </>
  );
};

const Overlay = () => {
  return (
    <div className="bg-grey-darkest absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center ease-in-out duration-300 transition-transform">
      <>
        <Link href="/">
          <a className="text-white text-2xl">HOME</a>
        </Link>
        <Link href="/about">
          <a className="text-white text-2xl">ABOUT</a>
        </Link>
        <Link href="https://blog.christojeffrey.com">
          <a className="text-white text-2xl">BLOG</a>
        </Link>
      </>
    </div>
  );
};

const NavBar = () => {
  const [showOverlay, setShowOverlay] = useState(true);
  return (
    <>
      <Burger showOverlay={showOverlay} setShowOverlay={setShowOverlay} />
      {showOverlay && <Overlay />}
    </>
  );
};
export default NavBar;

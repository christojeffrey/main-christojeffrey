import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import { useSpring, animated, useTrail, a } from "react-spring";
import React from "react";

const Burger = ({ showOverlay, setShowOverlay }: { showOverlay: Boolean; setShowOverlay: any }) => {
  return (
    <>
      <div
        className="z-10 absolute m-3 right-0 py-5 pr-10"
        onClick={() => {
          setShowOverlay(!showOverlay);
        }}
      >
        <div className={`rounded-md block absolute h-1.5 w-10 bg-red-darker transform transition duration-300 ease-in-out ${showOverlay ? "rotate-45" : "-translate-y-3"}`}></div>
        <div className={`rounded-md block absolute h-1.5 w-10 bg-red-darker transform transition duration-300 ease-in-out ${showOverlay ? "opacity-0" : ""}`}></div>
        <div className={`rounded-md block absolute h-1.5 w-10 bg-red-darker transform transition duration-300 ease-in-out ${showOverlay ? "-rotate-45" : "translate-y-3"}`}></div>
      </div>
    </>
  );
};

const Trail = ({ open, children }: { open: any; children: any }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={styles.trailsText} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

const Overlay = ({ showOverlay }: { showOverlay: boolean }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(showOverlay);
  }, [showOverlay]);

  return (
    <div
      className={`
    bg-grey-darker absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center ${styles.overlay} ${showOverlay ? styles.overlayActive : ""}`}
    >
      <>
        <div className={styles.container}>
          <Trail open={open}>
            <Link href="/">
              <a className={`text-white text-5xl ${styles.navLink}`}>HOME</a>
            </Link>
            <Link href="/about">
              <a className={`text-white text-5xl ${styles.navLink}`}>ABOUT</a>
            </Link>
            <Link href="https://blog.christojeffrey.com">
              <a className={`text-white text-5xl ${styles.navLink}`}>BLOG</a>
            </Link>
          </Trail>
        </div>
      </>
    </div>
  );
};

const NavBar = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <>
      <Burger showOverlay={showOverlay} setShowOverlay={setShowOverlay} />
      <Overlay showOverlay={showOverlay} />
    </>
  );
};
export default NavBar;

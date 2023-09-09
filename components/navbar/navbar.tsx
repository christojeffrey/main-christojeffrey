import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import { useSpring, animated, useTrail, a } from "react-spring";
import React from "react";

const Burger = ({ showOverlay, setShowOverlay }: { showOverlay: Boolean; setShowOverlay: any }) => {
  let burgerBasicClass = "rounded-md block absolute h-2 w-7 transform transition duration-300 ease-in-out";
  return (
    <>
      <div
        className={`z-10 absolute m-4 right-0 py-5 pr-7 `}
        onClick={() => {
          setShowOverlay(!showOverlay);
        }}
      >
        <div className={`${burgerBasicClass} ${showOverlay ? "rotate-45 bg-white" : "bg-primary-900 -translate-y-3"}`}></div>
        <div className={`${burgerBasicClass} ${showOverlay ? "opacity-0 bg-white" : "bg-primary-900"}`}></div>
        <div className={`${burgerBasicClass} ${showOverlay ? "-rotate-45 bg-white" : "bg-primary-900 translate-y-3"}`}></div>
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

  let navbarLinkClass = `text-primary-100 text-xl md:text-5xl ${styles.navLink}`;
  return (
    <div
      className={`
    bg-primary-800 w-screen h-screen flex flex-col items-center justify-center ${styles.overlay} ${showOverlay ? styles.overlayActive : ""}`}
    >
      <>
        <Trail open={open}>
          <Link href="/">
            <a className={navbarLinkClass}>HOME</a>
          </Link>
          <Link href="/about">
            <a className={navbarLinkClass}>ABOUT</a>
          </Link>
          <Link href="https://photos.christojeffrey.com">
            <a className={navbarLinkClass}>PHOTOS</a>
          </Link>
          <Link href="https://more.christojeffrey.com">
            <a className={navbarLinkClass}>MORE</a>
          </Link>
        </Trail>
      </>
    </div>
  );
};

const NavBar = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayBellow, setOverlayBellow] = useState(false);
  useEffect(() => {
    // wait for 500ms, then setoverlayhidden true
    if (showOverlay === false) {
      setTimeout(() => {
        setOverlayBellow(true);
        console.log("overlayBellow", overlayBellow);
      }, 500);
    } else {
      setOverlayBellow(false);
      console.log("overlayBellow", overlayBellow);
    }
  }, [showOverlay]);
  return (
    <>
      <div className={``}>
        <div className="top-0 right-0 fixed z-20">
          <Burger showOverlay={showOverlay} setShowOverlay={setShowOverlay} />
        </div>
        <div className={`top-0 right-0 fixed ${overlayBellow ? "-z-10" : "z-10"}`}>
          <Overlay showOverlay={showOverlay} />
        </div>
      </div>
    </>
  );
};

export default NavBar;

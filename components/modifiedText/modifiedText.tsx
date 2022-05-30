import styles from "./modifiedText.module.css";
import { useEffect, useState } from "react";

export const HighlightedText = ({ children }) => {
  return <span className={styles.highlight}>{children}</span>;
};

export const TextClickCopy = ({ children }: { children: any }) => {
  const [text, setText] = useState(children);

  const onClick = () => {
    navigator.clipboard.writeText(children);
    // change children for a few second
    setText("text copied!");
    setTimeout(() => {
      setText(children);
    }, 1000);
  };

  return (
    <span onClick={onClick} className={styles.highlight}>
      {text}
    </span>
  );
};

export const SocialLink = ({ link, children }) => {
  return (
    <span className=" m-3 hover:text-red font-bold text-md">
      <a href={link}>{children}</a>
    </span>
  );
};

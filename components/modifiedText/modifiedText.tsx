import { useEffect, useState } from "react";

export const HighlightedText = ({ children }: { children: any }) => {
  return <span className="highlight">{children}</span>;
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
    <span onClick={onClick} className="highlight hover:text-primary-700">
      {text}
    </span>
  );
};

export const SocialLink = ({ link, children }: { link: any; children: any }) => {
  return (
    <span className="m-1 hover:text-red font-thin">
      <a href={link}>{children}</a>
    </span>
  );
};

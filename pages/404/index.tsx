import styles from "./styles.module.css";
const FourOhFour = () => {
  return (
    <div className="bg-black w-screen h-screen text-center flex flex-col justify-center align-center">
      <div className={`${styles.glitch} ${styles.hero} ${styles.layers} overflow-hidden`} data-text="page not found">
        <span>page not found</span>
      </div>
    </div>
  );
};
export default FourOhFour;

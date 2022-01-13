import Navbar from "./Navbar";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className={styles.container}>{children}</div>;
    </>
  );
}

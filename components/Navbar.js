import Link from "next/link";
import styles from "./Navbar.module.css";
export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <ul className={styles.items}>
          <li className={styles.hover}>
            <h2>meetapp</h2>
          </li>
          <Link href="/">
            <li className={styles.hover}>all meetups</li>
          </Link>
          <Link href="/addmeetup">
            <li className={styles.hover}>add meetup</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

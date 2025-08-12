import styles from "./navigation.module.css";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className={"row " + styles.navigationBar}>
      <div>
        <Link href="/" className={"btn " + styles.footerBtn}>
          Home
        </Link>
        <Link href="/my-stats" className={"btn " + styles.footerBtn}>
          My Stats
        </Link>
        <Link href="/data-entry" className={"btn " + styles.footerBtn}>
          Data Entry
        </Link>
      </div>
    </div>
  );
};

export default Navigation;

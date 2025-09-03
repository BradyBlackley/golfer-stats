import styles from "./navigation.module.css";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className={"flex justify-start bg-[#183848] border border-solid border-black rounded-md " + styles.navigationBar}>
        <Link href="/" className={"rounded-lg text-white px-3 py-2 hover:bg-[#858c36] hover:text-gray-900 " + styles.footerBtn}>
          Home
        </Link>
        <Link href="/my-stats" className={"rounded-lg text-white px-3 py-2 hover:bg-[#858c36] hover:text-gray-900 " + styles.footerBtn}>
          My Stats
        </Link>
        <Link href="/data-entry" className={"rounded-lg text-white px-3 py-2 hover:bg-[#858c36] hover:text-gray-900 " + styles.footerBtn}>
          Data Entry
        </Link>
    </div>
  );
};

export default Navigation;

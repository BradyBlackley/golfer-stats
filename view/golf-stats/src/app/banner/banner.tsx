import Image from "next/image";
import logoFilePath from "./tempLogo.jpg"
import styles from "./banner.module.css"

type BannerProps = {
    headerText: string;
};

const Banner = ({headerText}: BannerProps) => {
    return (
        <div className={"row mb-1 " + styles.banner}>
            <div className="col-5">
                <Image src={logoFilePath} alt="logo" className={styles.logo} />
            </div>
            <div className="col-7 mt-5">
                {headerText}
            </div>
        </div>
    );
};

export default Banner;
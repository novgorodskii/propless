import Image from "next/image";
import styles from './Header.module.css';
const Header = () => {
  return(
    <div className={styles.header}>
      <div>
        <Image src={'/logo.svg'} width={40} height={40} layout='fixed' priority alt="logo" />
      </div>
    </div>
  )
};

export default Header;
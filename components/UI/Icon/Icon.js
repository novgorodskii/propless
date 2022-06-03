
import Image from 'next/image';
import styles from './Icon.module.css';

const Icon = ({img, bg}) => {
  return (
    <div className={styles.icon} style={{background: bg}}>
      <Image src={img} layout='fixed' width={24} height={24} priority alt='icon'/>
    </div>
  )
};

export default Icon;
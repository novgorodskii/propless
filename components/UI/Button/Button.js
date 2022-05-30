import Image from 'next/image';
import styles from './Button.module.css';

const Button = ({title, icon}) => {
  return (
    <div className={styles.btn}>
      <div>{title}</div>
      <div className={styles.icon}>
        <Image width={12} height={12} layout='fixed' alt='plus' src={icon} />
      </div>
    </div>
  )
}

export default Button;
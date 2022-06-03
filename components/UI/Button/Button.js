import Image from 'next/image';
import styles from './Button.module.css';

const Button = ({title, icon, click}) => {
  return (
    <div className={styles.btn} onClick={() => click()}>
      <div>{title}</div>
      {
        icon ? 
        <div className={styles.icon}>
          <Image width={12} height={12} layout='fixed' alt='plus' src={icon} />
        </div> : null
      }
    </div>
  )
}

export default Button;
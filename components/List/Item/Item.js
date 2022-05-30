import Image from 'next/image';
import Button from '../../UI/Button';
import styles from './Item.module.css';
const Item = ({item}) => {

  console.log(item, 'items');
  return (
    <div className={styles.item}>
      <div className={styles.header}>
        <div className={styles.icon}>
          <Image width={32} height={32} layout="fixed" src={item.icon} alt={item.name}/>
          <span>{item.name}</span>
        </div>
        <div className={styles.price}>{item.price}</div>
      </div>

      <div className={styles.main}>
        <div className={styles.plan}>{item.plan}</div>
        <div className={styles.freePlace}>Осталось мест: {item.freePlace}</div>
      </div>

      <div className={styles.btn}>
        <Button title="Получить доступ" icon="/plus.svg" />
      </div>
    </div>
  )
}

export default Item; 
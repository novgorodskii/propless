import Image from 'next/image';
import { useContext, useEffect } from 'react';
import { ProductsContext } from '../../../context/context';
import Button from '../../UI/Button';
import styles from './Item.module.css';
const Item = ({item}) => {
  const {plan,places,name,price,icon,currency} = item.attributes;
  const { setShow, show } = useContext(ProductsContext);
  const shows = () => setShow(true);
  useEffect(() => {
    console.log(show, 'show');
  }, [show]);
  return (
    <div className={styles.item}>
      <div className={styles.header}>
        <div className={styles.icon}>
          <Image width={32} height={32} layout="fixed" src={icon} alt={name}/>
          <span>{name}</span>
        </div>
        <div className={styles.price}>{price} {currency}</div>
      </div>

      <div className={styles.main}>
        <div className={styles.plan}>{plan}</div>
        <div className={styles.freePlace}>Осталось мест: {places}</div>
      </div>

      <div className={styles.btn}>
        <Button click={shows} title="Получить доступ" icon="/plus.svg" />
      </div>
    </div>
  )
}

export default Item; 
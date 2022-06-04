
import { useState } from 'react';
import Button from '../Button';
import Icon from '../Icon';
import Input from '../Input';
import styles from './Modal.module.css';
import { fetcher } from '../../../lib/api';

const Modal = ({close}) => {
  const [ value, setValue ] = useState('');
  const subsResponsec = () => fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: {
        email_consumer: value,
        order_id: 1
      },
    }),
  }).then(() => close());

  return (
    <div className={styles.modal}>
      <div className={styles.window}>
        <h3>Введите почту</h3>
        <Input type="mail" changeInput={setValue} />
        <div className={styles.close} onClick={() => close()}>
          <Icon bg='#F4F4F4' img='/icons/atoms/delete.svg'/>
        </div>
        <div className={styles.btn}>
          <Button title='Отправить' click={() => {subsResponsec()}} />
        </div>
      </div>
    </div>
  )
}

export default Modal;
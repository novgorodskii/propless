
import styles from './List.module.css';
import items from '../../api/list';
import Item from './Item/Item';

const List = () => {
  return (
    <div className={styles.list}>
      {
        items?.map(item => {
          return (
            <Item key={item.id} item={item}/>
          )
        })
      }
    </div>
  )
}

export default List; 

import styles from './List.module.css';
import Item from './Item/Item';

const List = ({subs}) => {
  console.log(subs, 'subs');
  return ( subs.length > 0 ?
    <div className={styles.list}>
      {
        subs?.map(item => {
          return (
            <Item key={item.id} item={item}/>
          )
        })
      }
    </div> : null
  )
}

export default List;
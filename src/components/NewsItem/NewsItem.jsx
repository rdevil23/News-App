import { formatTimeAgo } from '../../helpers/formatTimeAgo';
import styles from './styles.module.css';

const NewsItem = ({ item }) => {
  return (
    <li className={styles.item}>
      <div className={styles.wrapper} style={{ backgroundImage: `url(${item.image})` }}>
        {item.image === 'None' ? (
          <p className={styles.notfound}>{"Banner dosn't exist on source!"}</p>
        ) : null}
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.extra}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>
      </div>
    </li>
  );
};

export default NewsItem;
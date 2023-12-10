import { formatTimeAgo } from '../../helpers/formatTimeAgo';
import styles from './styles.module.css';

const NewsBanner = ({ item }) => {
  return (
    <div className={styles.header}>
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.date}>
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  );
};

export default NewsBanner;

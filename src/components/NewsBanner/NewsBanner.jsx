import { formatDate } from '../../helpers/formatDate';
import styles from './styles.module.css';

const NewsBanner = ({ item }) => {
  return (
    <div className={styles.header}>
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.date}>{formatDate(new Date())}</p>
    </div>
  );
};

export default NewsBanner;

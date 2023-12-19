import { useTheme } from '../../context/ThemeContext';
import { formatTimeAgo } from '../../helpers/formatTimeAgo';
import { INews } from '../../interfaces';
import styles from './styles.module.css';

interface Props {
  item: INews;
}

const NewsItem = ({ item }: Props) => {
  const { isDark } = useTheme();

  return (
    <li className={styles.item}>
      <div
        className={`${styles.wrapper} ${isDark ? styles.dark : styles.light}`}
        style={{ backgroundImage: `url(${item.image})` }}
      >
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

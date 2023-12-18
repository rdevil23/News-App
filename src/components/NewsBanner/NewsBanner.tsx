import { formatTimeAgo } from '../../helpers/formatTimeAgo';
import { INews } from '../../interfaces';
import Banner from '../Banner/Banner';
import styles from './styles.module.css';

interface Props {
  item: INews;
}

const NewsBanner = ({ item }: Props) => {
  return (
    <div className={styles.banner}>
      <Banner image={item?.image} />
      <h3 className={styles.title}>{item?.title}</h3>
      <p className={styles.extra}>
        {formatTimeAgo(item?.published)} by {item?.author}
      </p>
    </div>
  );
};

export default NewsBanner;

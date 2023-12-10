import NewsBanner from '../NewsBanner/NewsBanner';
import styles from './styles.module.css';

const Main = () => {
  return (
    <main className={styles.main}>
      <NewsBanner />
    </main>
  );
};

export default Main;

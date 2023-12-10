import { useEffect, useState } from 'react';
import NewsBanner from '../components/NewsBanner/NewsBanner';
import styles from './styles.module.css';
import { getNews } from '../api/apiNews';

const Main = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await getNews();
        setNews(res.news);
        console.log(res.news);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);
  return (
    <main className={styles.main}>{news.length > 0 ? <NewsBanner item={news[0]} /> : null}</main>
  );
};

export default Main;

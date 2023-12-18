import styles from './styles.module.css';

interface image {
  image: string;
}

const Banner = ({ image }: image) => {
  return (
    <div className={styles.wrapper}>
      {image ? <img src={image} alt="news" className={styles.banner} /> : null}
    </div>
  );
};

export default Banner;

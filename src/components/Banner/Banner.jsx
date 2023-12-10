import styles from './styles.module.css';

const Banner = ({ image }) => {
  return (
    <div className={styles.wrapper}>
      {image ? <img src={image} alt="news" className={styles.banner} /> : null}
    </div>
  );
};

export default Banner;

import styles from "./skeleton.module.css";

export const SkeletonCard = () => {
  return (
    <div className={styles.skeletonCard}>
      <div className={`${styles.img} ${styles.skeleton}`}></div>
      <div className={`${styles.title} ${styles.skeleton}`}></div>
      <div className={`${styles.subtitle} ${styles.skeleton}`}></div>
      <div className={styles.footer}>
        <div className={`${styles.link} ${styles.skeleton}`}></div>
        <div className={`${styles.date} ${styles.skeleton}`}></div>
      </div>
    </div>
  );
};

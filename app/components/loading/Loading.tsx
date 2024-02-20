import styles from "./Loading.module.scss";
export default function Loading() {
  return (
    <div className={styles.box}>
      <div className={styles.loader}></div>
    </div>
  );
}

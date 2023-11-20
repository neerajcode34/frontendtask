import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <main className={styles.imageParent}>
      <img className={styles.imageIcon} alt="" src="/image@2x.png" />
      <img className={styles.frameChild} alt="" src="/ellipse-1@2x.png" />
      <label className={styles.text}>
        <p className={styles.blankLine}>&nbsp;</p>
      </label>
      <button className={styles.frameItem} />
      <label className={styles.text1}>
        <p className={styles.blankLine}>&nbsp;</p>
      </label>
      <label className={styles.text2}>
        <p className={styles.blankLine}>&nbsp;</p>
      </label>
      <label className={styles.text3}>
        <p className={styles.blankLine}>&nbsp;</p>
      </label>
      <button className={styles.frameInner} />
      <button className={styles.rectangleButton} />
      <button className={styles.frameChild1} />
    </main>
  );
};

export default FrameComponent;

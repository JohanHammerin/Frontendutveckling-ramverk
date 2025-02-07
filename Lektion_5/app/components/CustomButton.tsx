import styles from "./CustomButton.module.css";

//classname === class
//id === id (remains the same)
export function CustomButton() {
  return (
    <div>
      <button className={styles.btn}>Click me</button>
    </div>
  );
}

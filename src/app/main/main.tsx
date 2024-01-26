import { Outlet } from "react-router-dom";
import styles from './main.module.scss';

export function Main() {
  return (
    <div className={styles.main}>
      <Outlet />
    </div>
  );
}

export default Main;

import { Outlet } from "react-router-dom";
// import { Footer } from "@components/footer";
// import { Header } from "@components/header";
import styles from "./main-layout-page.module.scss";

export const MainLayoutPage = () => {
  return (
    <div className={styles.mainLayout__wrapper}>
      {/* <Header /> */}
      <main className={styles.main}>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

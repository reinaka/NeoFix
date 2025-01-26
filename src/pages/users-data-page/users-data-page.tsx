import { UsersTable } from "@components/index";
import styles from "./users-data-page.module.scss";
import { SetData } from "@components/set-date/set-data";

export const UsersDataPage = () => {
  return (
    <div className={styles.wrapper}>
      <SetData />
      <UsersTable />
    </div>
  );
};

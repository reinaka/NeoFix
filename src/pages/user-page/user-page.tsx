import { UserProfile } from "@components/index";
import { useUsersDataStore } from "@store/useUsersData.store";
import { useParams, Navigate } from "react-router-dom";
import { Button } from "antd";
import { NavLink } from "react-router-dom";
import styles from "./user-page.module.scss";
import { ChangeStatusDropdown } from "@components/change-status-dropdown/change-status-dropdown";

export const UserPage = () => {
  const id: string | undefined = useParams().userId;
  const user = id
    ? useUsersDataStore.use.storeData()?.filter(user => user.id === id)[0]
    : null;

  return !user ? (
    <Navigate to="*" replace />
  ) : (
    <div className={styles.page__wrapper}>
        <div className={styles.button__wrapper}>
            <Button variant="filled" type="primary">
                <NavLink to="/">К таблице</NavLink>
            </Button>
        </div>
        <div className={styles.content}>
          <div className={styles.profile__wrapper}>
            <UserProfile user={user} badge />
            {id && <ChangeStatusDropdown userId={id} />}
          </div>
        </div>
  </div>
  );
};

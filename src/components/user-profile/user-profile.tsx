import { Badge } from "antd";
import { UserT } from "@utils/User.type";
import { UserItem } from "./user-item/user-item";
import getColor from "@utils/getColor";
import styles from "./user-profile.module.scss";

const getContent = (user: UserT) => (
  <div className={styles.profile__wrapper}>
    <h1>{`${user.lastName} ${user.firstName}`}</h1>
    <div className={styles.data__wrapper}>
      <UserItem title="Статус" content={<Badge key={user.statusId} color={getColor(user.statusId)} text={user.statusId} />} />
      <UserItem title="Направление" content={user.directionId} />
      <UserItem title="Город" content={user.city} />
      <UserItem title="Телефон" content={user.phone} />
      <UserItem title="Email" content={user.email} />
      <UserItem title="Telegram" content={user.telegram} />
    </div>
  </div>
);

export const UserProfile = ({
  user,
  badge,
}: {
  user: UserT;
  badge?: boolean;
}) => {
  return badge ? (
    <Badge.Ribbon text={user.statusId} color={getColor(user.statusId)}>
      {getContent(user)}
    </Badge.Ribbon>
  ) : (
    <div>{getContent(user)}</div>
  );
};

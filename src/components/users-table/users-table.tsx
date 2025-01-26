import { useUsersDataStore } from "@store/useUsersData.store";
import { Spin, Table } from "antd";
import { Key } from "antd/es/table/interface";
import { UserT } from "@utils/User.type";
import { OpenProfilePopover } from "./open-profile-popover";

const getUniqueKeys = (usersData: UserT[], columnValue: keyof UserT) => {
  const uniqueKeys = new Set();
  usersData.forEach((user: UserT) => uniqueKeys.add(user[columnValue]));
  return uniqueKeys;
};

const filters = (usersData: UserT[], columnValue: keyof UserT) => {
  const uniqueKeys = getUniqueKeys(usersData, columnValue);
  return Array.from(uniqueKeys).map(key => {
    return { text: key as React.ReactNode, value: key as React.Key | boolean };
  });
};

const handleFilter =
  (columnValue: keyof UserT) => (value: boolean | Key, record: UserT) => {
    return record[columnValue].includes(value as string);
  };

const handleSortStrings = (columnValue: keyof UserT) => (a: UserT, b: UserT) =>
  a[columnValue].localeCompare(b[columnValue]);

const getTableCols = (usersData: UserT[]) => [
  {
    title: "Имя",
    dataIndex: "lastName",
    key: "lastName",
    filters: filters(usersData, "lastName"),
    onFilter: handleFilter("lastName"),
    sorter: handleSortStrings("lastName"),
    ellipsis: true,
    fixed: true,
    render: (text: string, record: UserT) => {
      return (
        <OpenProfilePopover
          text={text}
          record={record}
          linkAddress={`/users/${record.id}`}
        />
      );
    },
  },
  {
    title: "Направление",
    dataIndex: "directionId",
    key: "directionId",
    filters: filters(usersData, "directionId"),
    onFilter: handleFilter("directionId"),
    sorter: handleSortStrings("directionId"),
    ellipsis: true,
  },
  {
    title: "Город",
    dataIndex: "city",
    key: "city",
    filters: filters(usersData, "city"),
    onFilter: handleFilter("city"),
    sorter: handleSortStrings("city"),
    ellipsis: true,
  },
  {
    title: "Дата",
    dataIndex: "date",
    key: "date",
    filters: filters(usersData, "date"),
    onFilter: handleFilter("date"),
    sorter: (a: UserT, b: UserT) =>
      new Date(a.date).valueOf() - new Date(b.date).valueOf(),
    ellipsis: true,
  },
  {
    title: "Статус",
    dataIndex: "statusId",
    key: "statusId",
    filters: filters(usersData, "statusId"),
    onFilter: handleFilter("statusId"),
    sorter: handleSortStrings("statusId"),
    ellipsis: true,
  },
];

export const UsersTable = () => {
  const usersData = useUsersDataStore.use.storeData();

  return !usersData ? (
    <Spin />
  ) : (
    <Table
      dataSource={usersData}
      columns={getTableCols(usersData)}
      rowKey="id"
      bordered
      loading={!usersData}
      showSorterTooltip={false}
      size="large"
      style={{ maxWidth: "100%", width: "100%" }}
      scroll={{ x: true }}
    />
  );
};

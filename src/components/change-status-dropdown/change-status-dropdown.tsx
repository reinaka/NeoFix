import { Dropdown, Button, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useUsersDataStore } from "@store/useUsersData.store";

export const ChangeStatusDropdown = ({ userId }: { userId: string }) => {
  const changeStatus = useUsersDataStore.use.changeStatus();
  const handleChangeStatus = (userId: string, newStatus: string) => {
    changeStatus(userId, newStatus);
  };

  const items = [
    {
      key: "onConsideration",
      label: (
        <div
          onClick={() => handleChangeStatus(userId, "Заявка на рассмотрении")}
        >
          Заявка на рассмотрении
        </div>
      ),
    },
    {
      key: "approved",
      label: (
        <div onClick={() => handleChangeStatus(userId, "Заявка одобрена")}>
          Заявка одобрена
        </div>
      ),
    },
    {
      key: "denied",
      label: (
        <div onClick={() => handleChangeStatus(userId, "Заявка отклонена")}>
          Заявка отклонена
        </div>
      ),
    },
  ];

  return (
    <Dropdown menu={{ items }}>
      <Button
        onClick={e => e.preventDefault()}
        size="large"
        variant="filled"
        color="blue"
      >
        <Space>
          Изменить статус
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  );
};

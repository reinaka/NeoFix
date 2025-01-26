import { useState } from "react";
import { Popover, Button, Modal } from "antd";
import { UserT } from "@utils/User.type";
import { UserProfile } from "@components/user-profile";
import { useNavigate } from "react-router-dom";
import { ChangeStatusDropdown } from "@components/change-status-dropdown/change-status-dropdown";

type OpenProfilePopoverPropsT = {
  text: string;
  record: UserT;
  linkAddress?: string;
};

export const OpenProfilePopover = ({
  text,
  record,
}: OpenProfilePopoverPropsT) => {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpenModal = () => {
    setModalOpen(true);
    history.pushState(null, "", `#/users/${record.id}`);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    history.replaceState(null, "", "/");
  };

  return (
    <Popover
      placement="topLeft"
      title={`${record.lastName} ${record.firstName}`}
      content={
        <>
          <Button onClick={handleOpenModal}>Посмотреть профиль</Button>
          <Modal
            centered
            open={modalOpen}
            onOk={handleOpenModal}
            onCancel={handleCloseModal}
            footer={[
              <ChangeStatusDropdown
                key="changeStatusDropdown"
                userId={record.id}
              />,
              <Button
                key="goToProfile"
                type="link"
                onClick={() => {
                  history.replaceState(null, "", "/");
                  navigate(`/users/${record.id}`);
                }}
              >
                Перейти в профиль
              </Button>,
            ]}
          >
            <UserProfile user={record} />
          </Modal>
        </>
      }
      trigger="click"
    >
      <a>{`${text} ${record.firstName}`}</a>
    </Popover>
  );
};

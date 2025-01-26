import { DatePickerForm } from "@components/datepicker-form/datepicker-form";
import { WelcomeMessageForm } from "@components/welcome-message-form/welcome-message-from";
import { useApplyDateStore } from "@store/useApplyDate.store";
import { Collapse, CollapseProps, Tag } from "antd";

export const SetData = () => {
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "Установить даты приема заявок",
      children: <DatePickerForm name="applyDate" />,
    },
    {
      key: "2",
      label: "Установить приветственное сообщение",
      children: <WelcomeMessageForm name="welcomeMessage" />,
    },
  ];

  const startDate = useApplyDateStore.use.startDate();
  const finishDate = useApplyDateStore.use.finishDate();

  return (
    <>
      {startDate && finishDate && (
        <Tag bordered={false} color="blue">
          {`Даты приема заявок: ${startDate} - ${finishDate}`}
        </Tag>
      )}
      <Collapse items={items} />
    </>
  );
};

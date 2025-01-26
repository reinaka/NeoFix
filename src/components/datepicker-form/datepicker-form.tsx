import { useState } from "react";
import { Form, DatePicker, Button } from "antd";
import { useApplyDateStore } from "@store/useApplyDate.store";

export const DatePickerForm = ({
  label,
  name,
}: {
  label?: string;
  name: string;
}) => {
  const [form] = Form.useForm();
  const { RangePicker } = DatePicker;
  const [values, setValues] = useState<[string, string] | undefined[]>([
    undefined,
    undefined,
  ]);

  type RangeValue = Parameters<
    NonNullable<React.ComponentProps<typeof DatePicker.RangePicker>["onChange"]>
  >[0];

  function onSelectDate(
    dates: RangeValue | null,
    dateStrings: [string, string],
  ) {
    console.log(dates);
    setValues(dateStrings);
  }

  const setDates = useApplyDateStore.use.setDates();

  const handleSubmit = (values: [string, string] | undefined) => {
    if (values && values[0] !== undefined && values[1])
      setDates(values[0], values[1]);
  };

  return (
    <Form layout="vertical" form={form}>
      <Form.Item label={label} name={name}>
        <RangePicker onChange={onSelectDate} />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          disabled={!values[0] || !values[1]}
          onClick={() => handleSubmit(values as [string, string] | undefined)}
        >
          Установить
        </Button>
      </Form.Item>
    </Form>
  );
};

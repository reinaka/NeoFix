import { useState } from "react";
import { Form, Input, Button } from "antd";
import { useWelcomeMessageStore } from "@store/useWelcomeMessage.store";

export const WelcomeMessageForm = ({
  label,
  name,
}: {
  label?: string;
  name: string;
}) => {
  const [form] = Form.useForm();
  const [input, setInput] = useState<string | undefined>(undefined);

  const setWelcomeMessage = useWelcomeMessageStore.use.setWelcomeMessage();

  const handleSubmit = (input: string | undefined) => {
    setWelcomeMessage(input as string);
    form.resetFields([name]);
    setInput(undefined);
  };

  return (
    <Form layout="vertical" form={form} onFinish={() => handleSubmit(input)}>
      <Form.Item label={label} name={name}>
        <Input onChange={e => setInput(e.target.value)} />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          disabled={!input}
          htmlType="submit"
          onClick={() => handleSubmit(input)}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

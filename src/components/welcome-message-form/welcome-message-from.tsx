import { useState } from "react";
import { Form, Input, Button } from "antd";
import { useWelcomeMessageStore } from "@store/useWelcomeMessage.store";
import styles from "./welcome-message-from.module.scss";

export const WelcomeMessageForm = ({
  label,
  name,
}: {
  label?: string;
  name: string;
}) => {
  const welcomeMessage = useWelcomeMessageStore.use.welcomeMessage();
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
      {welcomeMessage !== undefined && <p className={styles.message}><span>Сохраненное сообщение: </span>{welcomeMessage}</p>}
      <Form.Item>
        <Button
          type="primary"
          disabled={!input}
          htmlType="submit"
          onClick={() => handleSubmit(input)}
        >
          Cохранить
        </Button>
      </Form.Item>
    </Form>
  );
};

import { Htag, Button, Text, Tag } from "../components";

export default function Home() {
  return (
    <div>
      <Htag tag="h1">text</Htag>
      <Button appearance={"primary"}>Кнопка</Button>
      <Button appearance={"ghost"}>Кнопка</Button>
      <Text size="s">Small</Text>
      <Text>Medium</Text>
      <Text size="l">Large</Text>
      <Tag size="s" color="green">
        Тег
      </Tag>
      <Tag size="s" color="red">
        Тег2
      </Tag>
      <Tag size="m" color="primary">
        Тег3
      </Tag>
      <Tag size="m" color="ghost">
        Тег4
      </Tag>
    </div>
  );
}

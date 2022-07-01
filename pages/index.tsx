import { Htag } from "../components/index";
import { Button } from "../components/Button/Button";

export default function Home() {
  return (
    <div>
      <Htag tag="h1">text</Htag>
      <Button appearance={"primary"}>Кнопка</Button>
      <Button appearance={"ghost"}>Кнопка</Button>
    </div>
  );
}

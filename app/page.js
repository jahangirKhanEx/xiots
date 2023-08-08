"use client";
import { Button } from "antd";
import { GlobalStyle } from "./styles/global";

export default function Home() {
  return (
    <main>
      <GlobalStyle />
      <Button type="primary">Primary Button</Button>
    </main>
  );
}

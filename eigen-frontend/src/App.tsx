import { FC } from "react";
import { Layout } from "antd";
import Header from "./components/layouts/Header";
import Content from "./components/layouts/Content";
import NewsList from "./components/news/NewsList";

const App: FC = () => {
  return (
    <Layout className="layout">
      <Header />

      <Content>
        <NewsList />
      </Content>
    </Layout>
  );
};

export default App;

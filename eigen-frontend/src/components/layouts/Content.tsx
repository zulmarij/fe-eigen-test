import { FC, ReactNode } from "react";
import { Layout, theme } from "antd";

const { Content: BaseContent } = Layout;

interface ContentProps {
  children: ReactNode;
}

const Content: FC<ContentProps> = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <BaseContent style={{ padding: "0 50px" }}>
      <div
        className="site-layout-content"
        style={{ background: colorBgContainer }}
      >
        <div style={{ padding: 20 }}>{children}</div>
      </div>
    </BaseContent>
  );
};

export default Content;

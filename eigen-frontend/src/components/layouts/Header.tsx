import { Layout } from "antd";
import { FC } from "react";

const { Header: BaseHeader } = Layout;

const Header: FC = () => {
  return (
    <BaseHeader data-testid="header" style={{ display: "flex", alignItems: "center" }}>
      <h1 style={{ color: "#FFFFFF" }}>News</h1>
    </BaseHeader>
  );
};

export default Header;

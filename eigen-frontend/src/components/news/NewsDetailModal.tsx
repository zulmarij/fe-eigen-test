import { FC } from "react";
import { Modal, Space, Tag, Button, Typography } from "antd";
import { NewsArticle } from "../../types";
import TimeAgo from "../TimeAgo";

const { Text } = Typography;

interface NewsDetailModalProps {
  isModalOpen: boolean;
  onCancel: () => void;
  news: NewsArticle | null;
}

const NewsDetailModal: FC<NewsDetailModalProps> = ({
  isModalOpen,
  onCancel,
  news,
}) => {
  return (
    <Modal
      centered
      title={news?.title}
      open={isModalOpen}
      onCancel={onCancel}
      footer={[
        <Button key="back" onClick={onCancel}>
          Return
        </Button>,
        <Button key="link" href={news?.url} type="primary">
          Read More
        </Button>,
      ]}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Space size={[0, 8]} wrap style={{ marginBottom: 2 }}>
          <Tag color="processing">{news?.source.name}</Tag>
          <TimeAgo timestamp={news?.publishedAt} />
        </Space>
        <Text>{news?.content}</Text>
      </div>
    </Modal>
  );
};

export default NewsDetailModal;

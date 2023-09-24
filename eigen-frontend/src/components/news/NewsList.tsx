import { FC, useState } from "react";
import { Card, Col, Empty, Input, Row, Typography } from "antd";
import useFetch from "../../hooks/useFetch";
import NewsListSkeleton from "./NewsListSkeleton";
import NewsDetailModal from "./NewsDetailModal";
import { NewsArticle } from "../../types";

const { Search } = Input;
const { Title } = Typography;

const NewsList: FC = () => {
  const [query, setQuery] = useState<any>("React Js");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [news, setNews] = useState<NewsArticle | null>(null);
  const { data, isLoading } = useFetch("everything", {
    q: query,
  });

  const onSearch = (value: any) => {
    setQuery(value);
  };

  const showModal = (value: NewsArticle) => {
    setNews(value);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setNews(null);
  };

  return (
    <div>
      <Title level={2} style={{ fontSize: 20, margin: 0 }}>
        Search: {query.toUpperCase()}
      </Title>
      <Search
        placeholder="input search text"
        onSearch={onSearch}
        style={{ margin: "10px 0px 20px 0px" }}
      />

      {!isLoading && data?.length === 0 && (
        <Empty
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
          }}
        />
      )}

      <Row gutter={[25, 20]}>
        {isLoading ? (
          <NewsListSkeleton />
        ) : (
          data?.map((item, i: number) => (
            <Col
              key={i}
              sm={{ span: 12 }}
              md={{ span: 12 }}
              lg={{ span: 6 }}
              xl={{ span: 6 }}
              xxl={{ span: 4 }}
              style={{ height: "20rem" }}
            >
              <Card
                hoverable
                onClick={() => showModal(item)}
                cover={
                  <img
                    alt={item.title}
                    src={item.urlToImage}
                    style={{ height: "12rem" }}
                  />
                }
                style={{ height: "100%" }}
                bodyStyle={{
                  overflow: "hidden",
                  display: "-webkit-box",
                  lineClamp: 3,
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                }}
              >
                <Title level={3} style={{ fontSize: 18, margin: 0 }}>
                  {item.title}
                </Title>
              </Card>
            </Col>
          ))
        )}
      </Row>
      <NewsDetailModal
        news={news}
        isModalOpen={isModalOpen}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default NewsList;

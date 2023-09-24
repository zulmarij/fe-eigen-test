import { ReactElement, FC } from "react";
import { Card, Col, Skeleton } from "antd";

const NewsListSkeleton: FC = () => {
  const renderItems = (): ReactElement[] => {
    const items: ReactElement[] = [];
    for (let i = 0; i < 20; i++) {
      items.push(
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
            loading
            hoverable
            cover={
              <Skeleton.Image
                style={{ width: "100%", height: "12rem" }}
                active
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
            <Skeleton active />
          </Card>
        </Col>
      );
    }
    return items;
  };

  return <>{renderItems()}</>;
};

export default NewsListSkeleton;

// TimeAgo.tsx
import { FC } from "react";
import { Typography } from 'antd';


const { Text } = Typography;


interface TimeAgoProps {
  timestamp?: string;
}

const TimeAgo: FC<TimeAgoProps> = ({ timestamp }) => {
  const getTimeAgo = (time: string): string => {
    const now = new Date();
    const past = new Date(time);
    const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);

    if (diffInSeconds < 60) {
      return `${diffInSeconds} seconds ago`;
    } else if (diffInSeconds < 3600) {
      return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    } else if (diffInSeconds < 86400) {
      return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    } else {
      return `${Math.floor(diffInSeconds / 86400)} days ago`;
    }
  };

  if (!timestamp) {
    return <Text type="secondary">No timestamp provided</Text>;
  }

  return <Text type="secondary">{getTimeAgo(timestamp)}</Text>;
};

export default TimeAgo;

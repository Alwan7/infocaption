import React from "react";
import { Card } from 'antd';
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, EyeOutlined  } from '@ant-design/icons';

const ContentDetails = ({ item }) => {
  const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
 
  return (
     <>
      <List.Item
       style={{ border: '1px solid black' }}
        key={item.name}
        actions={[
          <IconText icon={EyeOutlined } text={item.views.views365days} key="list-vertical-star-o" />,
          
        ]}
        extra={
          <img
            width={272}
            alt="InfoCaption"
            src={`https://support.infocaption.com/${item.thumbnailURL}`}
          />
        }
      >
        <List.Item.Meta
          title={<a href={item.fullURL}>{item.name}</a>}
          description={`Published ${item.publicationDate} by ${item.FirstLastName}`}
          
        />
        {item.summary}
      </List.Item>
        
      
    
    </>
  );
};

export default ContentDetails;

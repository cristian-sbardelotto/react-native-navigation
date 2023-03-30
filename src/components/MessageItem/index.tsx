import React from 'react';
import { Text } from 'react-native';

import { ContactGroup, ContactName, ContactContainer } from './styles';

interface MessageProps {
  name: string;
  date: string;
  lastMessage: string;
}

export const MessageItem = (contactInfo: MessageProps) => {
  return (
    <ContactContainer>
      <ContactGroup>
        <ContactName>{contactInfo.name}</ContactName>
        <Text>{contactInfo.date}</Text>
      </ContactGroup>

      <Text><Text style={{ fontWeight: 'bold' }}>You: </Text>{contactInfo.lastMessage}</Text>
    </ContactContainer>
  );
};

import React from 'react';
import { Text } from 'react-native';

import { ContactGroup, ContactName, ContactContainer } from './styles';

export const MessageItem = ({
  name = 'Unknown',
  date = '01/01/2000',
  lastMessage = 'Hello!'
}) => {
  return (
    <ContactContainer>
      <ContactGroup>
        <ContactName>{name}</ContactName>
        <Text>{date}</Text>
      </ContactGroup>

      <Text><Text style={{ fontWeight: 'bold' }}>You: </Text>{lastMessage}</Text>
    </ContactContainer>
  );
};

import React from 'react';
import { Text } from 'react-native';
import { ContactProps } from '../../types';

import { ContactGroup, ContactName, ContactContainer } from './styles';

export const MessageItem = (contactInfo: ContactProps) => {
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

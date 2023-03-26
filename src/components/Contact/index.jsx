import React from 'react';
import { Text } from 'react-native';

import { ContactGroup, ContactName, ContactContainer } from './styles';

export const Contact = ({ name = 'Unknown', number = 123456789 }) => {
  return (
    <ContactContainer>
      <ContactGroup>
        <ContactName>{name}</ContactName>
        <Text>{number}</Text>
      </ContactGroup>
    </ContactContainer>
  );
};

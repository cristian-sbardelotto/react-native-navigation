import React from 'react';
import { Text } from 'react-native';

import { ContactModal } from '../../components/ContactModal';

import { ContactGroup, ContactName, ContactContainer } from './styles';

export const ContactItem = ({ name = 'Unknown', number = '123456789' }) => {
  return (
    <ContactContainer>
      <ContactGroup>
        <ContactName>{name}</ContactName>
        <Text>{number}</Text>
      </ContactGroup>
      <ContactModal />
    </ContactContainer>
  );
};

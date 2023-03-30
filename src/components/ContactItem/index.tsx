import React from 'react';
import { Text } from 'react-native';

import { ContactModal } from '../../components/ContactModal';

import { ContactGroup, ContactName, ContactContainer } from './styles';

import { ContactProps } from '../../types';

export const ContactItem = (contactInfo: ContactProps) => {
  return (
    <ContactContainer>
      <ContactGroup>
        <ContactName>{contactInfo.name}</ContactName>
        <Text>{contactInfo.number}</Text>
      </ContactGroup>
      <ContactModal />
    </ContactContainer>
  );
};

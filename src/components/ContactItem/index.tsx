import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';

import { ContactModal } from '../../components/ContactModal';

import { IContact } from '../../types';

import { ContactGroup, ContactName, ContactContainer } from './styles';

interface ContactProps {
  contacts: IContact[];
}

export const ContactItem = ({ contacts }: ContactProps) => {
  return (
    <View>
      {contacts &&
        contacts.map((contact) => (
          <ContactContainer key={contact.id}>
            <ContactGroup>
              <ContactName>{contact.name}</ContactName>
              <Text>{contact.number}</Text>
            </ContactGroup>
            <ContactModal />
          </ContactContainer>
        ))}
    </View>
  );
};

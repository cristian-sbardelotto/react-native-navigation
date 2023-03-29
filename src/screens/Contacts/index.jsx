import React from 'react';

import { ContactItem } from '../../components/ContactItem';

import { ContactsList, Title } from './styles';

const Contacts = () => {
  return (
    <>
      <Title>My Contacts: 5</Title>
      <ContactsList>
        <ContactItem name='Cristian'/>
        <ContactItem name='John' />
        <ContactItem name='Marta' />
        <ContactItem name='Joseph' />
        <ContactItem name='Frisk' />
      </ContactsList>
    </>
  );
};

export default Contacts;

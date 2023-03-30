import React from 'react';

import { ContactItem } from '../../components/ContactItem';

import { contactsList } from '../../data';

import { Container, Title } from './styles';

const Contacts = () => {
  return (
    <>
      <Title>My Contacts: 5</Title>

      <Container>
        <ContactItem contacts={contactsList}/>
      </Container>
    </>
  );
};

export default Contacts;

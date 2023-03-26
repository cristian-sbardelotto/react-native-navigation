import React from 'react';

import { Contact } from '../../components/Contact';

import { ContactsList, Title } from './styles';

const Contacts = () => {
  return (
    <>
      <Title>My Contacts: 5</Title>
      <ContactsList>
        <Contact name='Cristian' number={111111111} />
        <Contact name='John' number={222222222} />
        <Contact name='Marta' number={333333333} />
        <Contact name='Joseph' number={444444444} />
        <Contact name='Frisk' number={55555555} />
      </ContactsList>
    </>
  );
};

export default Contacts;

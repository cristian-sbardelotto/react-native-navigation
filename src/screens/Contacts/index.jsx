import React from 'react';

import { ContactItem } from '../../components/ContactItem';

import { ContactsList, Title } from './styles';

const Contacts = () => {
  return (
    <>
      <Title>My Contacts: 5</Title>
      <ContactsList>
        <ContactItem name='Cristian' number={111111111} />
        <ContactItem name='John' number={222222222} />
        <ContactItem name='Marta' number={333333333} />
        <ContactItem name='Joseph' number={444444444} />
        <ContactItem name='Frisk' number={55555555} />
      </ContactsList>
    </>
  );
};

export default Contacts;

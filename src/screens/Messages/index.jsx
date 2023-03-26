import React from 'react';

import { ContactMessage } from '../../components/ContactMessage';

import { MessagesList } from './styles';

const Messages = () => {
  return (
    <MessagesList>
      <ContactMessage name="Cristian" date="03/26/23" lastMessage="See u!" />
      <ContactMessage name="Marta" date="08/21/22" lastMessage="Goodbye!" />
    </MessagesList>
  );
};

export default Messages;

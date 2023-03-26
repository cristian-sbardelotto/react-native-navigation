import React from 'react';

import { ContactMessage } from '../../components/ContactMessage';

const Messages = () => {
  return (
    <>
      <ContactMessage name="Cristian" date="03/26/23" lastMessage="See u!" />
      <ContactMessage name="Marta" date="08/21/22" lastMessage="Goodbye!" />
    </>
  );
};

export default Messages;

import React from 'react';

import { MessageItem } from '../../components/MessageItem';

import { MessagesList } from './styles';

const Messages = () => {
  return (
    <MessagesList>
      <MessageItem name="Cristian" date="03/26/23" lastMessage="See u!" />
      <MessageItem name="Marta" date="08/21/22" lastMessage="Goodbye!" />
    </MessagesList>
  );
};

export default Messages;

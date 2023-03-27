import React from 'react';
import { Button, Text } from 'react-native';

import { ContactItem } from '../../components/CallItem';

import { CallsList } from './styles';

const Calls = () => {
  return (
    <CallsList>
      <ContactItem name='Frisk' date='10/10/16' />
      <ContactItem name='Frisk' date='10/10/23' />
      <ContactItem name='John' date='04/23/18' />
      <ContactItem name='Joseph' date='02/03/21' />
    </CallsList>
  );
};

export default Calls;

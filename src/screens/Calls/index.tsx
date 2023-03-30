import React from 'react';

import { CallItem } from '../../components/CallItem';

import { CallsList } from './styles';

const Calls = () => {
  return (
    <CallsList>
      <CallItem name='Frisk' date='10/10/16' />
      <CallItem name='Frisk' date='10/10/23' />
      <CallItem name='John' date='04/23/18' />
      <CallItem name='Joseph' date='02/03/21' />
    </CallsList>
  );
};

export default Calls;

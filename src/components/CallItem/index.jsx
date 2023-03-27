import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { CallContainer, CallDate, CallName, CallGroup } from './styles';

export const ContactItem = ({ name = 'Unknown', date = '123456789' }) => {
  const generateRandomColor = () => {
    const color = Math.random();
    return color > 0.5 ? 'red' : 'green';
  }

  return (
    <CallContainer>
      <CallGroup>
        <Icon name="phone" size={30} color={generateRandomColor()}  />
        <CallName>{name}</CallName>
      </CallGroup>
      <CallDate>{date}</CallDate>
    </CallContainer>
  );
};

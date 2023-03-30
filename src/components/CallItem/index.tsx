import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { CallContainer, CallDate, CallName, CallGroup } from './styles';

import { ContactProps } from '../../types';

export const CallItem = (contactInfo: ContactProps) => {
  const generateRandomColor = () => {
    const color = Math.random();
    return color > 0.5 ? 'red' : 'green';
  }

  return (
    <CallContainer>
      <CallGroup>
        <Icon name="phone" size={30} color={generateRandomColor()}  />
        <CallName>{contactInfo.name}</CallName>
      </CallGroup>
      <CallDate>{contactInfo.date}</CallDate>
    </CallContainer>
  );
};

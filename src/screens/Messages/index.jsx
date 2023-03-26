import React from 'react';
import { Button } from 'react-native';
import { Article } from './styles';

import { Container } from '../../utils';

const Messages = ({ navigation }) => {
  return (
    <Container>
      <Article>Messages</Article>
      <Button title="Ir para tela B" onPress={() => navigation.navigate('Contacts')} />
      <Button title="Ir para tela C" onPress={() => navigation.navigate('Calls')} />
    </Container>
  );
};

export default Messages;

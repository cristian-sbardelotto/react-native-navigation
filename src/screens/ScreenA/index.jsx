import React from 'react';
import { Button } from 'react-native';
import { Article } from './styles';

import { Container } from '../../utils';

const ScreenA = ({ navigation }) => {
  const goToScreenB = () => navigation.navigate('ScreenB');
  const goToScreenC = () => navigation.navigate('ScreenC');

  return (
    <Container>
      <Article>ScreenA</Article>
      <Button title="Ir para tela B" onPress={goToScreenB} />
      <Button title="Ir para tela C" onPress={goToScreenC} />
    </Container>
  );
};

export default ScreenA;

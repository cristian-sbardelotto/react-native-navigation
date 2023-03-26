import React from 'react';
import { Button } from 'react-native';
import { Article } from './styles';

import { Container } from '../../utils';

const ScreenC = () => {
  return (
    <Container>
      <Button title="Clicar no botão" />
      <Article>This is the ScreenC</Article>
    </Container>
  );
};

export default ScreenC;

import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, Text } from './style';

type InputProps = TextInputProps;

const Input: React.FC<InputProps> = ({ ...rest }) => (
  <Container>
    <Text {...rest} />
  </Container>
);

export default Input;

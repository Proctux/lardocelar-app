import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInputField } from './style';

type InputProps = TextInputProps;

const Input: React.FC<InputProps> = ({ ...rest }) => (
  <Container>
    <TextInputField placeholderTextColor="#8b8b8b" {...rest} />
  </Container>
);

export default Input;

import React from 'react';
import { TextProps } from 'react-native';

import { Container, Text } from './style';

interface LabelProps extends TextProps {
  children: string;
}

const Label: React.FC<LabelProps> = ({ children, ...rest }) => (
  <Container>
    <Text {...rest}>{children}</Text>
  </Container>
);

export default Label;

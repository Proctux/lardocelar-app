import React from 'react';
import { TextProps } from 'react-native';

import { Container, Text } from './style';

interface CustomTextProps extends TextProps {
  color: string;
  size: number;
}

const CustomText: React.FC<CustomTextProps> = ({ children, color }) => (
  <Container>
    <Text color={color}>{children}</Text>
  </Container>
);

export default CustomText;

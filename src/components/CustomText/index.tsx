import React from 'react';
import { TextProps } from 'react-native';

import { Container, Text } from './style';

interface CustomTextProps extends TextProps {
  color?: string;
  fontSize?: number;
}

const CustomText: React.FC<CustomTextProps> = ({
  children,
  color = '#CCB38D',
  fontSize,
  ...rest
}) => (
  <Container>
    <Text color={color} fontSize={fontSize} {...rest}>
      {children}
    </Text>
  </Container>
);

export default CustomText;

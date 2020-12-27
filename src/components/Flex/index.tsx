import React from 'react';

import { Container } from './style';

interface FlexProps {
  children: React.ReactNode;
  marginBottom?: number;
  marginTop?: number;
  alignItems?: string;
  justifyContent?: string;
}

const Flex: React.FC<FlexProps> = ({ children, ...rest }) => (
  <Container {...rest}>{children}</Container>
);

export default Flex;
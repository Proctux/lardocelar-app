import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { ButtonContainer, ButtonText } from './style';

interface ButtonProps extends TouchableOpacityProps {
  children: string | number;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <ButtonContainer {...rest}>
    <ButtonText>{children}</ButtonText>
  </ButtonContainer>
);

export default Button;

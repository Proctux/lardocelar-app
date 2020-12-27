import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { ButtonContainer, ButtonText } from './style';

interface ButtonProps extends TouchableOpacityProps {
  children: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <ButtonContainer {...rest}>
      <ButtonText>{children}</ButtonText>
    </ButtonContainer>
  )
}

export default Button;

import styled from 'styled-components/native';
import { theme } from '../../utils/constants/themeConstants';

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  justify-content: center;
`;

export const SignUpContainer = styled.View`
  height: 56px;
`;

export const BackButtonContainer = styled.View`
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
  height: 48px;
  width: 48px;
  border: 1px solid ${theme.lightColor};
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;

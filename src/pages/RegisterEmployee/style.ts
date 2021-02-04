import styled from 'styled-components/native';
import { theme } from '../../utils/constants/themeConstants';

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  justify-content: center;
`;

export const ButtonContainer = styled.View`
  margin-top: 24px;
  height: 56px;
`;

export const BackButtonContainer = styled.View`
  height: 48px;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;

export const BackButton = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  border: 1px solid ${theme.lightColor};
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;

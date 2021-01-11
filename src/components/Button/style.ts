import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const ButtonContainer = styled(TouchableOpacity)`
  width: 100%;
  height: 56px;
  background-color: #ccb38d;

  justify-content: center;
  border-radius: 12px;
`;

export const ButtonText = styled.Text`
  color: #7e2f37;
  text-align: center;

  font-size: 14px;
  font-weight: 500;
`;

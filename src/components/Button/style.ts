import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const ButtonContainer = styled(TouchableOpacity)`
 width: 100%;
 height: 56px;
 background-color: #CCB38D;

 justify-content: center;
 border-radius: 12px;
`;

export const ButtonText = styled.Text`
  color: #7E2F37;
  text-align: center;

  font-size: 14px;
  font-weight: 500;
`;

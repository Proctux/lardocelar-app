import styled, { css } from 'styled-components/native';
import { Dimensions } from 'react-native';

interface ModalContainerProps {
  fullScreen?: boolean;
}

const SCREE_HEIGHT = Dimensions.get('window').height;

export const ButtomContainer = styled.View`
  flex: 1;
  height: 50px;
  flex-direction: row;
`;

export const ModalContainer = styled.View<ModalContainerProps>`
  ${props =>
    props.fullScreen &&
    css`
      flex: 1;
    `}
  max-height: ${SCREE_HEIGHT - 50};
  background-color: #000;
  justify-content: center;
`;

export const Card = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: #ccb38d;
  border: 1px solid #5e2129;
  border-radius: 12px;

  height: 96px;
`;

export const CardImage = styled.Image`
  height: 56px;
  width: 56px;
  border-radius: 12px;
`;

export const CardInfo = styled.View`
  margin-left: 12px;
`;

export const CardText = styled.Text`
  color: #5e2129;
  font-weight: bold;
`;

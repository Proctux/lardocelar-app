import styled, { css } from 'styled-components/native';
import { Dimensions } from 'react-native';

interface ModalContainerProps {
  fullScreen?: boolean;
}

interface CardProps {
  isSelected: boolean;
}

interface CardTextProps {
  isSelected: boolean;
}

const SCREE_HEIGHT = Dimensions.get('window').height;

export const ButtomContainer = styled.View`
  flex: 1;
  height: 50px;
  flex-direction: row;
`;

export const ModalContainer = styled.View<ModalContainerProps>`
  ${props =>
    // eslint-disable-next-line operator-linebreak
    props.fullScreen &&
    css`
      flex: 1;
    `}
  max-height: ${SCREE_HEIGHT - 50};
  background-color: #000;
  justify-content: center;
`;

export const Card = styled.TouchableOpacity<CardProps>`
  flex: 1;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: #ccb38d;
  border: 1px solid #5e2129;
  border-radius: 12px;

  height: 96px;

  ${props =>
    // eslint-disable-next-line operator-linebreak
    props.isSelected &&
    css`
      border: 1px solid #fff;
      border-radius: 12px;
      background-color: #5e2129;
    `}
`;

export const CardImage = styled.Image`
  height: 56px;
  width: 56px;
  border-radius: 12px;
`;

export const CardInfo = styled.View`
  margin-left: 12px;
`;

export const CardText = styled.Text<CardTextProps>`
  color: #5e2129;
  font-weight: bold;

  ${props =>
    // eslint-disable-next-line operator-linebreak
    props.isSelected &&
    css`
      color: #ccb38d;
    `}
`;

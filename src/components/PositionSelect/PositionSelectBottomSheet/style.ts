/* eslint-disable operator-linebreak */
import styled, { css } from 'styled-components/native';
import { theme } from '../../../utils/constants/themeConstants';

interface CardProps {
  isSelected: boolean;
}

interface CardTextProps {
  isSelected: boolean;
}

export const Card = styled.TouchableOpacity<CardProps>`
  background-color: ${theme.lightColor};
  align-items: center;
  justify-content: center;
  border-radius: 12px;

  height: 50px;
  margin-bottom: 8px;

  ${props =>
    props.isSelected &&
    css`
      background-color: ${theme.darkRedColor};
      border: 1px solid #fff;
      border-radius: 12px;
    `}
`;

export const CardText = styled.Text<CardTextProps>`
  color: ${theme.darkRedColor};
  font-weight: bold;

  ${props =>
    props.isSelected &&
    css`
      color: ${theme.lightColor};
    `}
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
`;

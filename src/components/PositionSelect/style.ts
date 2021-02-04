import styled, { css } from 'styled-components/native';
import { theme } from '../../utils/constants/themeConstants';

interface PositionSelectorTextProps {
  placeholder?: boolean;
}

export const Select = styled.TouchableOpacity`
  height: 50px;
  width: 100%;
  background-color: #5e2129;
  border-radius: 12px;
  justify-content: center;
`;

export const PositionSelectorText = styled.Text<PositionSelectorTextProps>`
  color: ${theme.lightColor};
  margin-left: 12px;

  ${props =>
    // eslint-disable-next-line operator-linebreak
    props.placeholder &&
    css`
      color: ${theme.creamColor};
    `}
`;

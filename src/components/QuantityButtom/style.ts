import styled from 'styled-components/native';
import { theme } from '../../utils/constants/themeConstants';

export const QuantityContainer = styled.View`
  background-color: ${theme.lightColor};
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100px;
  border-radius: 12px;
`;

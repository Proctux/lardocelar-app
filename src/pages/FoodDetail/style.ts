import styled from 'styled-components/native';
import { theme } from '../../utils/constants/themeConstants';

interface HourContainerProps {
  isSelected: boolean;
  disabled?: boolean;
}

interface HourTextProps {
  isSelected: boolean;
  disabled?: boolean;
}

export const TopContainer = styled.View`
  height: 180px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.lightColor};
`;

export const ImageContainer = styled.View`
  height: 180px;
  margin: -70px 0;
  align-items: center;
  justify-content: center;
`;

export const FoodImage = styled.Image`
  height: 180px;
  width: 250px;
  border-radius: 16px;
`;

export const Container = styled.View`
  flex: 1;
  padding: 16px;
  margin-top: 120px;
`;

export const HourContainer = styled.TouchableOpacity<HourContainerProps>`
  width: 80px;
  height: 40px;
  margin: 8px;
  border-radius: 12px;
  border: 1px solid ${theme.lightColor};

  align-items: center;
  justify-content: center;

  background-color: ${props =>
    props.isSelected ? theme.lightColor : 'transparent'};
`;

export const HourText = styled.Text<HourTextProps>`
  color: ${props =>
    props.disabled
      ? '#764D51'
      : props.isSelected
        ? theme.darkRedColor
        : theme.lightColor};
`;

export const InputContainer = styled.View`
  border: 1px solid ${theme.lightColor};
  border-radius: 12px;
  height: 150px;
  margin-top: 12px;
`;

export const BackButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  margin-bottom: 10px;
`;

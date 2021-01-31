import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface IconMainProps {
  iconSize: number;
  iconColor: string;
}

const iconStyle = ({ iconSize, iconColor }: IconMainProps) => ({
  color: iconColor,
  size: iconSize,
});

export const Icon = styled(MaterialIcons).attrs(iconStyle)<IconMainProps>``;

export const CommunityIcon = styled(MaterialCommunityIcons).attrs(
  iconStyle,
)<IconMainProps>``;

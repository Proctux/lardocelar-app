import React from 'react';

import { Icon, CommunityIcon } from './style';

interface CustomIconProps {
  iconColor: string;
  name: string;
  iconSize: number;
  materialCommunity?: boolean;
}

const CustomIcon: React.FC<CustomIconProps> = ({
  iconColor,
  name,
  iconSize,
  materialCommunity = false,
  ...props
}) =>
  materialCommunity ? (
    <CommunityIcon
      iconColor={iconColor}
      name={name}
      iconSize={iconSize}
      {...props}
    />
  ) : (
    <Icon iconColor={iconColor} name={name} iconSize={iconSize} {...props} />
  );

export default CustomIcon;

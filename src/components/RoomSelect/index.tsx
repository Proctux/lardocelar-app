import React, { useState } from 'react';
import { TouchableOpacityProps } from 'react-native';

import { BottomSheet, RoomSelector } from './style';

type RoomSelectProps = TouchableOpacityProps;

const RoomSelect: React.FC<RoomSelectProps> = ({ onPress }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
      <RoomSelector onPress={handleVisibility} />

      <BottomSheet visible={false} />
    </>
  );
};

export default RoomSelect;

import React, { useState } from 'react';

import BottomSheet from '../BottomSheet';

import {
  RoomSelector,
  RoomSelectorText,
  RoomSelectorPlaceholder,
} from './style';

interface RoomSelectProps {
  onApply(selectedRoom: number): void;
  selectedRoom: number;
}

const RoomSelect: React.FC<RoomSelectProps> = ({ onApply, selectedRoom }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
      <RoomSelector onPress={handleVisibility}>
        {selectedRoom ? (
          <RoomSelectorText>{selectedRoom}</RoomSelectorText>
        ) : (
          <RoomSelectorPlaceholder>Escolha um quarto</RoomSelectorPlaceholder>
        )}
      </RoomSelector>

      <BottomSheet
        visible={isVisible}
        onClose={() => setIsVisible(false)}
        onApply={onApply}
        selectedRoom={selectedRoom}
      />
    </>
  );
};

export default RoomSelect;

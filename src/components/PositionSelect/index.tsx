import React, { useState } from 'react';

import PositionSelectBottomSheet from './PositionSelectBottomSheet';

import { Select, PositionSelectorText } from './style';

interface PositionSelectProps {
  selectedPosition: string;
  onApply(): void;
}

const PositionSelect: React.FC<PositionSelectProps> = ({
  selectedPosition,
  onApply,
}) => {
  const [isVsible, setIsVisible] = useState(false);

  return (
    <>
      <Select onPress={() => setIsVisible(true)}>
        {selectedPosition ? (
          <PositionSelectorText>{selectedPosition}</PositionSelectorText>
        ) : (
          <PositionSelectorText placeholder>
            Selecione um cargo
          </PositionSelectorText>
        )}
      </Select>

      <PositionSelectBottomSheet
        onClose={() => setIsVisible(false)}
        onApply={onApply}
        selectedPosition={selectedPosition}
        isVisible={isVsible}
      />
    </>
  );
};

export default PositionSelect;

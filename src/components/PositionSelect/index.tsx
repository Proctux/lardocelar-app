import React, { useState } from 'react';

import PositionSelectBottomSheet from './PositionSelectBottomSheet';

import { Select, PositionSelectorText } from './style';

interface PositionSelectProps {
  selectedPosition: string;
  onApply(selectedPosition: string): void;
}

const PositionSelect: React.FC<PositionSelectProps> = ({
  selectedPosition,
  onApply,
}) => {
  const [isVsible, setIsVisible] = useState(false);

  return (
    <>
      <Select>
        {selectedPosition ? (
          <PositionSelectorText>{selectedPosition}</PositionSelectorText>
        ) : (
          <PositionSelectorText>Selecione um cargo</PositionSelectorText>
        )}
      </Select>

      <PositionSelectBottomSheet
        onClose={() => setIsVisible(false)}
        onApply={onApply}
        selectedPosition={selectedPosition}
        visible={isVsible}
      />
    </>
  );
};

export default PositionSelect;

import React, { useState } from 'react';
import { ScrollView, FlatList, View } from 'react-native';

import BottomSheetModal from '../../BottomSheetModal';
import Button from '../../Button';

import { Card, CardText, ButtonContainer } from './style';

interface PositionSelectBottomSheetProps {
  onClose(): void;
  onApply(selectedPosition: string | null): void;
  isVisible: boolean;
  selectedPosition: string;
}

const hotelPositions = [
  { function: 'Gerente' },
  { function: 'Recepcionista' },
  { function: 'Cozinheiro' },
  { function: 'Zelador' },
  { function: 'Faxineiro' },
];

const PositionSelectBottomSheet: React.FC<PositionSelectBottomSheetProps> = ({
  onApply,
  onClose,
  isVisible,
  selectedPosition: selectedPositionInitialValue,
}) => {
  const [positions] = useState(hotelPositions);
  const [selectedPosition, setSelectedPosition] = useState(
    selectedPositionInitialValue || null,
  );

  const handleOnPressCard = item => {
    setSelectedPosition(item.function);
  };

  const renderItem = ({ item }) => (
    <Card
      isSelected={item.function === selectedPosition}
      onPress={() => handleOnPressCard(item)}
    >
      <CardText isSelected={item.function === selectedPosition}>
        {item.function}
      </CardText>
    </Card>
  );

  const handleApply = () => {
    onApply(selectedPosition);
    onClose();
  };

  const renderButtons = () => (
    <ButtonContainer>
      <Button onPress={handleApply}>Aplicar</Button>
      <Button onPress={onClose}>Cancelar</Button>
    </ButtonContainer>
  );

  return (
    <BottomSheetModal isVisible={isVisible}>
      <View>
        <ScrollView>
          <FlatList
            contentContainerStyle={{ flex: 1 }}
            data={positions}
            renderItem={renderItem}
            keyExtractor={item => item.function}
          />
          {renderButtons()}
        </ScrollView>
      </View>
    </BottomSheetModal>
  );
};

export default PositionSelectBottomSheet;

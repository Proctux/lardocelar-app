import React, { useCallback, useState } from 'react';

import Button from '../Button';
import CustomText from '../CustomText';

import { QuantityContainer } from './style';

interface QuantityProps {
  amount: number;
  addQuantity(): void;
  removeQuantity(): void;
}

const QuantityButtom: React.FC<QuantityProps> = ({
  amount,
  addQuantity,
  removeQuantity,
}) => {
  const handleAddQuantity = () => addQuantity();

  const handleRemoveQuantity = () => removeQuantity();

  return (
    <QuantityContainer>
      <Button onPress={handleRemoveQuantity}>-</Button>
      <CustomText color="#7e2f37">{amount}</CustomText>
      <Button onPress={handleAddQuantity}>+</Button>
    </QuantityContainer>
  );
};

export default QuantityButtom;

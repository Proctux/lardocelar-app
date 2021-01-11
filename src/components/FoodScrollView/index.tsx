import React from 'react';
import { FlatList } from 'react-native';

import { FoodContainer, FoodImage } from './style';

import coffeImg from '../../assets/coffe.png';

interface Food {
  food_id: number;
  name: string;
  stock: number;
  price: number;
}

interface FoodScrollViewProps {
  label: string;
  type: string;
  foodsData: Food[];
}

const FoodScrollView: React.FC<FoodScrollViewProps> = ({
  label,
  type,
  foodsData,
}) => {
  const renderItem = ({ item }: any) => (
    <FoodContainer key={item.food_id}>
      <FoodImage source={{ uri: item.image }} />
    </FoodContainer>
  );

  return (
    <FlatList
      data={foodsData}
      renderItem={renderItem}
      keyExtractor={item => item.name}
      horizontal
    />
  );
};

export default FoodScrollView;

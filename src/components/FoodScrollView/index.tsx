import React from 'react';
import { FlatList } from 'react-native';

import { FoodContainer, FoodImage } from './style';

interface Food {
  food_id: number;
  name: string;
  stock: number;
  price: number;
}

interface FoodScrollViewProps {
  type: string;
  foodsData: Food[];
}

const FoodScrollView: React.FC<FoodScrollViewProps> = ({ type, foodsData }) => {
  const renderItem = ({ item }: any) =>
    item.type === type ? (
      <FoodContainer key={item.food_id}>
        <FoodImage
          source={{ uri: `http://localhost:3333/files/${item.image}` }}
        />
      </FoodContainer>
    ) : (
      <></>
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

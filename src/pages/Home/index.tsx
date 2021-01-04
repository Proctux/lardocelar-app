import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';

import avatarImg from '../../assets/avatarImg.png';
import CustomText from '../../components/CustomText';
import FoodScrollView from '../../components/FoodScrollView';
import Flex from '../../components/Flex';
import api from '../../services/api';

import { Container, HeaderContainer, ImageContainer, HeaderContainerFields, BodyContainer } from './style';

interface Food {
  food_id: number;
  name: string;
  stock: number;
  price: number;
}

const Home: React.FC = () => {
  const [foods, setFoods] = useState<Food[]>([]);

  useEffect(() => {
    async function loadFoods(): Promise<void> {
      const response = await api.get('foods')

      setFoods(response.data);
    }

    loadFoods();
  }, []);

  return (
    <Container>
      <Flex marginBottom={40} alignItems="center" justifyContent="center">
        <HeaderContainer>
          <ImageContainer source={avatarImg} />

          <HeaderContainerFields>
            <CustomText color="#CCB38D">Hóspede: Luiz Fernando</CustomText>
            <CustomText color="#CCB38D" fontSize={18}>Quarto: 301</CustomText>
          </HeaderContainerFields>
        </HeaderContainer>
      </Flex>

      <BodyContainer>
        <FoodScrollView label="Café da manhã" type="breakfast" foodsData={foods} />
        <FoodScrollView label="Café da manhã" type="breakfast" foodsData={foods} />
        <FoodScrollView label="Café da manhã" type="breakfast" foodsData={foods} />
      </BodyContainer>

    </Container>
  )
};

export default Home;

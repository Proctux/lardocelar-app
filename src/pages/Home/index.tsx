import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';

import avatarImg from '../../assets/avatarImg.png';
import CustomText from '../../components/CustomText';
import FoodScrollView from '../../components/FoodScrollView';
import Flex from '../../components/Flex';
import api from '../../services/api';

import {
  Container,
  HeaderContainer,
  ImageContainer,
  HeaderContainerFields,
  BodyContainer,
  ButtomContainer,
} from './style';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';

interface Food {
  food_id: number;
  name: string;
  stock: number;
  price: number;
}

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  room_id: string;
}

const Home: React.FC = () => {
  const [foods, setFoods] = useState<Food[]>([]);
  const [guest, setGuest] = useState<User>({} as User);
  const [roomNumber, setRoomNumber] = useState();

  const { signOut, user } = useAuth();

  console.log(foods);

  useEffect(() => {
    async function loadFoods(): Promise<void> {
      const response = await api.get('foods');

      setFoods(response.data);
      setGuest(user);
    }

    loadFoods();
  }, []);

  const showRoomNumber = () => {};

  return (
    <Container>
      <Flex marginBottom={40} alignItems="center" justifyContent="center">
        <HeaderContainer>
          <ImageContainer source={{ uri: user.avatar }} />

          <HeaderContainerFields>
            <CustomText color="#CCB38D">{`Hospede: ${guest.name}`}</CustomText>
            <CustomText color="#CCB38D" fontSize={18}>
              Quarto: 301
            </CustomText>
          </HeaderContainerFields>
        </HeaderContainer>
      </Flex>

      <BodyContainer>
        <FoodScrollView
          label="Café da manhã"
          type="breakfast"
          foodsData={foods}
        />
        <FoodScrollView
          label="Café da manhã"
          type="breakfast"
          foodsData={foods}
        />
        <FoodScrollView
          label="Café da manhã"
          type="breakfast"
          foodsData={foods}
        />
      </BodyContainer>

      <ButtomContainer>
        <Button onPress={() => signOut()}>Sair</Button>
      </ButtomContainer>
    </Container>
  );
};

export default Home;

import React, { useState, useEffect, useCallback } from 'react';

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
  ItemSeparator,
} from './style';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';
import Label from '../../components/Label';

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

interface Room {
  room_number: number;
  busy: boolean;
  vip: boolean;
  id: string;
}

const Home: React.FC = () => {
  const [foods, setFoods] = useState<Food[]>([]);
  const [guest, setGuest] = useState<User>({} as User);
  const [roomsList, setRoomsList] = useState<Room[]>([]);

  const { signOut, user } = useAuth();

  useEffect(() => {
    async function loadFoodsAndRooms(): Promise<void> {
      const response = await api.get('foods');
      const responseRooms = await api.get('rooms');

      setFoods(response.data);
      setRoomsList(responseRooms.data);
      setGuest(user);
    }

    loadFoodsAndRooms();
  }, []);

  const filteredRoom = roomsList
    .filter(room => room.id === user.room_id)
    .map(item => item.room_number)[0];

  return (
    <Container>
      <Flex marginBottom={40} alignItems="center" justifyContent="center">
        <HeaderContainer>
          <ImageContainer
            source={{ uri: `http://localhost:3333/files/${user.avatar}` }}
          />

          <HeaderContainerFields>
            <CustomText color="#CCB38D">{`Hospede: ${guest.name}`}</CustomText>
            <CustomText color="#CCB38D" fontSize={18}>
              {`Quarto: ${filteredRoom}`}
            </CustomText>
          </HeaderContainerFields>
        </HeaderContainer>
      </Flex>

      <Flex marginBottom={48}>
        <BodyContainer>
          <Flex marginBottom={12}>
            <Label>Café da manhã</Label>
            <ItemSeparator />
            <Flex marginTop={12} alignItems="center">
              <FoodScrollView type="breakfast" foodsData={foods} />
            </Flex>
          </Flex>

          <Flex marginBottom={12}>
            <Label>Almoço</Label>
            <ItemSeparator />
            <Flex marginTop={12} alignItems="center">
              <FoodScrollView type="lunch" foodsData={foods} />
            </Flex>
          </Flex>

          <Label>Jantar</Label>
          <ItemSeparator />
          <Flex marginTop={12} alignItems="center">
            <FoodScrollView type="dinner" foodsData={foods} />
          </Flex>
        </BodyContainer>
      </Flex>

      <ButtomContainer>
        <Button onPress={() => signOut()}>Sair</Button>
      </ButtomContainer>
    </Container>
  );
};

export default Home;

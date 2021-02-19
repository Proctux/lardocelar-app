import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import CustomIcon from '../../components/CustomIcon';
import { theme } from '../../utils/constants/themeConstants';
import EmployeeHome from '../../components/EmployeeHome';
import UserHome from '../../components/UserHome';

import { User } from '../../utils/dtos/user';
import { Food } from '../../utils/dtos/foods';
import { Room } from '../../utils/dtos/rooms';

import { Container, ButtomContainer, LogoutButtom } from './style';

const Home: React.FC = () => {
  const [foods, setFoods] = useState<Food[]>([]);
  const [userInfo, setUserInfo] = useState<User>({} as User);
  const [roomsList, setRoomsList] = useState<Room[]>([]);

  const { signOut, user } = useAuth();

  useEffect(() => {
    async function loadFoodsAndRooms(): Promise<void> {
      const response = await api.get('foods');
      const responseRooms = await api.get('rooms');

      setFoods(response.data);
      setRoomsList(responseRooms.data);
      setUserInfo(user);
    }

    loadFoodsAndRooms();
  }, []);

  const filteredRoom = roomsList
    .filter(room => room.id === user.room_id)
    .map(item => item.room_number)[0];

  return (
    <Container>
      {user.position ? (
        <EmployeeHome userInfo={userInfo} foods={foods} />
      ) : (
        <UserHome
          userInfo={userInfo}
          foods={foods}
          filteredRoom={filteredRoom}
        />
      )}

      <ButtomContainer>
        <LogoutButtom onPress={() => signOut()}>
          <CustomIcon
            name="logout"
            iconColor={`${theme.lightColor}`}
            iconSize={28}
          />
        </LogoutButtom>
      </ButtomContainer>
    </Container>
  );
};

export default Home;

import React from 'react';

import Flex from '../Flex';
import Label from '../Label';
import CustomText from '../CustomText';
import FoodScrollView from '../FoodScrollView';

import { Food } from '../../utils/dtos/foods';
import { User } from '../../utils/dtos/user';

import {
  BodyContainer,
  ItemSeparator,
  HeaderContainer,
  HeaderContainerFields,
  ImageContainer,
} from './style';

interface UserHomeProps {
  userInfo: User;
  filteredRoom: number;
  foods: Food[];
}

const UserHome: React.FC<UserHomeProps> = ({
  userInfo,
  filteredRoom,
  foods,
}) => (
  <Flex marginBottom={40} alignItems="center" justifyContent="center">
    <HeaderContainer>
      <ImageContainer
        source={{ uri: `http://localhost:3333/files/${userInfo.avatar}` }}
      />

      <HeaderContainerFields>
        <CustomText color="#CCB38D">{`Hospede: ${userInfo.name}`}</CustomText>
        <CustomText color="#CCB38D" fontSize={18}>
          {`Quarto: ${filteredRoom}`}
        </CustomText>
      </HeaderContainerFields>
    </HeaderContainer>

    <Flex marginBottom={48} marginTop={48}>
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
  </Flex>
);

export default UserHome;

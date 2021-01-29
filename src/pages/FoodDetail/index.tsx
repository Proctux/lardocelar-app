/* eslint-disable @typescript-eslint/ban-types */
import React, { useMemo } from 'react';
import reactotron from 'reactotron-react-native';
import { format, startOfHour } from 'date-fns';
import { ScrollView } from 'react-native';

import ItemSeparator from '../../components/ItemSeparator';
import Label from '../../components/Label';
import CustomText from '../../components/CustomText';

import {
  TopContainer,
  Container,
  ImageContainer,
  FoodImage,
  HourContainer,
  HourText,
} from './style';
import Flex from '../../components/Flex';

interface Props {
  route: any;
  navigation: any;
}

const FoodDetail: React.FC<Props> = ({ route }) => {
  reactotron.log(route);
  const { food } = route.params;

  const initialHour = useMemo(() => {
    if (food.type === 'breakfast') return 7;
    if (food.type === 'lunch') return 11;
    return 18;
  }, [food]);

  const breakFastHourArray = Array.from({ length: 4 }, (_, index) =>
    // eslint-disable-next-line prettier/prettier
    format(startOfHour(new Date()).setHours(initialHour + index), 'p'));

  const lunchHourArray = Array.from({ length: 4 }, (_, index) =>
    // eslint-disable-next-line prettier/prettier
    format(startOfHour(new Date()).setHours(initialHour + index), 'p'));

  const dinnerHourArray = Array.from({ length: 3 }, (_, index) =>
    // eslint-disable-next-line prettier/prettier
    format(startOfHour(new Date()).setHours(initialHour + index), 'p'));

  const renderHourArray = useMemo(() => {
    if (food.type === 'breakfast') return breakFastHourArray;
    if (food.type === 'lunch') return lunchHourArray;
    return dinnerHourArray;
  }, [breakFastHourArray, lunchHourArray, dinnerHourArray, food]);

  const renderHour = (hour: number) => (
    <HourContainer>
      <HourText>{hour}</HourText>
    </HourContainer>
  );

  const renderDate = () => {
    <HourContainer>{/* <HourText>{date}</HourText> */}</HourContainer>;
  };

  return (
    <>
      <TopContainer />
      <ImageContainer>
        <FoodImage
          source={{ uri: `http://localhost:3333/files/${food.image}` }}
        />
      </ImageContainer>
      <Container>
        <Label style={{ fontSize: 16 }}>Descrição</Label>
        <ItemSeparator />
        <Flex alignItems="center" justifyContent="center" marginTop={16}>
          <CustomText>{food.description}</CustomText>
        </Flex>

        <Label style={{ fontSize: 16 }}>Horários</Label>
        <ItemSeparator />
        <ScrollView
          horizontal
          contentContainerStyle={{
            height: 50,
            justifyContent: 'center',
          }}
        >
          {renderHourArray.map((hourItem: any) => renderHour(hourItem))}
        </ScrollView>

        <Label style={{ fontSize: 16 }}>Data</Label>
        <ItemSeparator />
        <ScrollView
          horizontal
          contentContainerStyle={{
            height: 50,
            justifyContent: 'center',
          }}
        >
          {renderHourArray.map((hourItem: any) => renderItem(hourItem))}
        </ScrollView>

        <Label style={{ fontSize: 16 }}>Observações</Label>
        <ItemSeparator />
      </Container>
    </>
  );
};

export default FoodDetail;

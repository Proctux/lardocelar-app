/* eslint-disable @typescript-eslint/ban-types */
import React, { useMemo, useState } from 'react';
import { format, startOfHour, addDays } from 'date-fns';
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
  InputContainer,
} from './style';
import Flex from '../../components/Flex';
import Input from '../../components/Input';

interface Props {
  route: any;
  navigation: any;
}

const FoodDetail: React.FC<Props> = ({ route }) => {
  // reactotron.log(route);
  const { food } = route.params;

  const [selectedHour, setSelectedHour] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const initialHour = useMemo(() => {
    if (food.type === 'breakfast') return 7;
    if (food.type === 'lunch') return 11;
    return 18;
  }, [food]);

  const breakFastHourArray = Array.from({ length: 4 }, (_, index) =>
    // eslint-disable-next-line prettier/prettier
    startOfHour(new Date()).setHours(initialHour + index));

  const lunchHourArray = Array.from(
    { length: 4 },
    (_, index) =>
      // eslint-disable-next-line prettier/prettier
      startOfHour(new Date()).setHours(initialHour + index), 'p',
  );

  const dinnerHourArray = Array.from(
    { length: 3 },
    (_, index) =>
      // eslint-disable-next-line prettier/prettier
      startOfHour(new Date()).setHours(initialHour + index), 'p',
  );

  const renderHourArray = useMemo(() => {
    if (food.type === 'breakfast') return breakFastHourArray;
    if (food.type === 'lunch') return lunchHourArray;
    return dinnerHourArray;
  }, [breakFastHourArray, lunchHourArray, dinnerHourArray, food]);

  const handleSelectedHour = (value: string) => {
    setSelectedHour(value);
  };

  const handleSelectedDate = (value: string) => {
    setSelectedDate(value);
  };

  const renderHour = (hour: string) => (
    <HourContainer
      onPress={() => handleSelectedHour(hour)}
      isSelected={hour === selectedHour}
    >
      <HourText isSelected={hour === selectedHour}>{hour}</HourText>
    </HourContainer>
  );

  const renderDate = (date: string) => (
    <HourContainer
      onPress={() => handleSelectedDate(date)}
      isSelected={date === selectedDate}
    >
      <HourText isSelected={date === selectedDate}>{date}</HourText>
    </HourContainer>
  );

  return (
    <ScrollView>
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

        <Flex marginTop={24}>
          <Label style={{ fontSize: 16 }}>Horários</Label>
          <ItemSeparator />
          <Flex>
            <ScrollView
              horizontal
              contentContainerStyle={{
                height: 50,
                justifyContent: 'center',
              }}
            >
              {renderHourArray.map((hourItem: any) =>
                renderHour(format(hourItem, 'p')),)}
            </ScrollView>
          </Flex>
        </Flex>

        <Flex marginTop={24} marginBottom={24}>
          <Label style={{ fontSize: 16 }}>Data</Label>
          <ItemSeparator />
          <Flex>
            <ScrollView
              horizontal
              contentContainerStyle={{
                height: 50,
                justifyContent: 'center',
              }}
            >
              {renderHourArray.map((dateItem: any, index: number) =>
                renderDate(format(addDays(dateItem, index), 'dd/MM')),
              )}
            </ScrollView>
          </Flex>
        </Flex>

        <Label style={{ fontSize: 16 }}>Observações</Label>
        <ItemSeparator />
        <InputContainer>
          <Input
            style={{ height: 148 }}
            placeholder="Ex: tirar cebola, tomate..."
            textAlign="center"
          />
        </InputContainer>
      </Container>
    </ScrollView>
  );
};

export default FoodDetail;

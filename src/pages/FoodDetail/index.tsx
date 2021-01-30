/* eslint-disable @typescript-eslint/ban-types */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { format, startOfHour, addDays, parseISO } from 'date-fns';
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
import QuantityButtom from '../../components/QuantityButtom';
import Button from '../../components/Button';
import api from '../../services/api';

interface Props {
  route: any;
  navigation: any;
}

interface Availability {
  hour: number;
  available: boolean;
  hourFormatted?: number;
}

const FoodDetail: React.FC<Props> = ({ route }) => {
  // reactotron.log(route);
  const { food } = route.params;

  const [selectedHour, setSelectedHour] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [quantity, setQuantity] = useState(0);

  const [availability, setAvailability] = useState<Availability[]>([]);

  useEffect(() => {
    async function loadAvailability() {
      const response = await api.get(`orders/${food.type}-availability`, {
        params: {
          day: String(selectedDate.getDate()),
          month: String(selectedDate.getMonth() + 1),
          year: String(selectedDate.getFullYear()),
        },
      });

      setAvailability(response.data);
    }

    loadAvailability();
  }, [selectedDate]);

  const availabilityDateHour = availability.map(({ hour, available }) => ({
    hour,
    available,
    hourFormatted: format(new Date().setHours(hour), 'HH:00'),
  }));

  const handleAddQuantity = useCallback(() => {
    setQuantity(quantity + 1);
  }, [quantity]);

  const handleRemoveQuantity = useCallback(() => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }, [quantity]);

  const renderTotalPrice = useCallback(
    () => `R$${(food.price * quantity).toFixed(2)}`,
    [food.price, quantity],
  );

  useEffect(() => {
    renderTotalPrice();
  }, [renderTotalPrice]);

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

  const handleSelectedHour = (value: number) => {
    setSelectedHour(value);
  };

  const handleSelectedDate = (value: string) => {
    const [day, month] = value.split('/');
    setSelectedDate(parseISO(`${new Date().getFullYear()}-${month}-${day}`));
  };

  const renderDate = (date: string) => (
    <HourContainer
      onPress={() => handleSelectedDate(date)}
      isSelected={date === format(selectedDate, 'dd/MM')}
    >
      <HourText isSelected={date === format(selectedDate, 'dd/MM')}>
        {date}
      </HourText>
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
              {availabilityDateHour.map(
                ({ hour, available, hourFormatted }) => (
                  <HourContainer
                    onPress={() => handleSelectedHour(hour)}
                    isSelected={hour === selectedHour}
                    disabled={!available}
                  >
                    <HourText isSelected={hour === selectedHour}>
                      {hourFormatted}
                    </HourText>
                  </HourContainer>
                ),
              )}
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
                renderDate(format(addDays(dateItem, index), 'dd/MM')))}
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

        <Flex marginTop={12} flexDirection="row">
          <QuantityButtom
            amount={quantity}
            addQuantity={handleAddQuantity}
            removeQuantity={handleRemoveQuantity}
          />
          <Button style={{ marginLeft: 120 }}>{renderTotalPrice()}</Button>
        </Flex>
      </Container>
    </ScrollView>
  );
};

export default FoodDetail;

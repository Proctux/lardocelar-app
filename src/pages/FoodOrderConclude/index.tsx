import React, { useCallback, useMemo } from 'react';
import { format } from 'date-fns';

import { useNavigation } from '@react-navigation/native';
import CustomText from '../../components/CustomText';
import CustomIcon from '../../components/CustomIcon';
import Flex from '../../components/Flex';

import { Container, ButtonContainer } from './style';
import Button from '../../components/Button';

interface FoodOrderConcludeProps {
  route: any;
  navigate: any;
}

const FoodOrderConclude: React.FC<FoodOrderConcludeProps> = ({ route }) => {
  const { food, order } = route.params;

  const { reset } = useNavigation();

  const handleOkPressed = useCallback(() => {
    reset({
      routes: [
        {
          name: 'Home',
        },
      ],
      index: 0,
    });
  }, [reset]);

  const handleFoodType = useMemo(() => {
    if (food.type === 'breakfast') return 'Café da manhã';
    if (food.type === 'lunch') return 'Almoço';
    return 'Jantar';
  }, [food]);

  const parsedDate = format(new Date(order.date), 'HH:00');

  return (
    <Container>
      <CustomIcon name="check-circle" iconSize={64} iconColor="#008000" />
      <Flex marginTop={16} alignItems="center">
        <CustomText fontSize={24}>
          {`${handleFoodType} agendado com sucesso`}
        </CustomText>
      </Flex>
      <Flex marginTop={8} marginBottom={24} alignItems="center">
        <CustomText fontSize={16}>{`Horário: ${parsedDate}`}</CustomText>
      </Flex>

      <ButtonContainer>
        <Button onPress={handleOkPressed}>Voltar para o início</Button>
      </ButtonContainer>
    </Container>
  );
};

export default FoodOrderConclude;

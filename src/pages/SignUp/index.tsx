import React, { useCallback, useState, useEffect } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';
import Flex from '../../components/Flex';
import Input from '../../components/Input';
import Label from '../../components/Label';
import logoImg from '../../assets/logo.png';
import RoomSelect from '../../components/RoomSelect';
import signUpHelper from '../../utils/helpers/signUpHelper';
import api from '../../services/api';

import {
  Container,
  SignUpContainer,
  BackButtonContainer,
  BackButton,
} from './style';
import CustomIcon from '../../components/CustomIcon';
import { theme } from '../../utils/constants/themeConstants';

interface RoomProps {
  id: string;
  room_number: number;
  busy: boolean;
  vip: boolean;
}

const SignUp: React.FC = () => {
  const { control, handleSubmit } = useForm();
  const [roomList, setRoomList] = useState<RoomProps[]>([]);

  const navigation = useNavigation();
  const defaultValues = signUpHelper.createFormDefaultValues();

  useEffect(() => {
    async function loadRoomsList() {
      const response = await api.get('rooms/available-rooms');

      setRoomList(response.data);
    }

    loadRoomsList();
  }, []);

  const handleSignUp = useCallback(
    async data => {
      try {
        const { name, email, password, room_number } = data;

        const roomId = roomList
          .filter(room => room.room_number === room_number)
          .map(room => room.id)[0];

        await api.post('users', { name, email, password, room_id: roomId });

        navigation.navigate('Login');
      } catch (err) {
        console.log(err);
      }
    },
    [roomList, navigation],
  );

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView
        contentContainerStyle={{ flex: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <Container>
          <Flex justifyContent="center" alignItems="center" marginBottom={48}>
            <Image source={logoImg} />
          </Flex>

          <Flex marginTop={16}>
            <Label>Nome</Label>
            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <Input
                  placeholder="Digite o nome do usuário"
                  onChangeText={item => onChange(item)}
                  onBlur={onBlur}
                  value={value}
                  returnKeyType="next"
                  autoCorrect={false}
                  autoCapitalize="none"
                />
              )}
              name="name"
              defaultValue={defaultValues.name}
              rules={{ required: 'É necessário preencher este campo' }}
            />
          </Flex>

          <Flex marginTop={16}>
            <Label>Email</Label>
            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <Input
                  placeholder="Informe um email"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  returnKeyType="next"
                  value={value}
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="email-address"
                />
              )}
              name="email"
              defaultValue={defaultValues.email}
              rules={{ required: 'É necessário preencher este campo' }}
            />
          </Flex>

          <Flex marginTop={16}>
            <Label>Senha</Label>
            <Controller
              control={control}
              render={({ onChange, onBlur, value }) => (
                <Input
                  placeholder="Digite uma senha"
                  secureTextEntry
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  autoCapitalize="none"
                  returnKeyType="next"
                />
              )}
              name="password"
              defaultValue={defaultValues.password}
              rules={{ required: 'É necessário preencher este campo' }}
            />
          </Flex>
          <Flex marginTop={16} marginBottom={24}>
            <Label>Quarto</Label>
            <Controller
              control={control}
              render={({ onChange, value }) => (
                <RoomSelect onApply={onChange} selectedRoom={value} />
              )}
              name="room_number"
              defaultValue={defaultValues.room_number}
              rules={{ required: 'É necessário preencher este campo' }}
            />
          </Flex>

          <SignUpContainer>
            <Button onPress={handleSubmit(handleSignUp)}>Cadastrar</Button>
          </SignUpContainer>
          <Flex marginTop={16}>
            <BackButtonContainer>
              <BackButton onPress={handleGoBack}>
                <CustomIcon
                  name="home"
                  iconColor={theme.lightColor}
                  iconSize={24}
                />
              </BackButton>
            </BackButtonContainer>
          </Flex>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;

import React from 'react';
import { Image } from 'react-native';
import { Controller, useForm } from 'react-hook-form';

import Button from '../../components/Button';
import Flex from '../../components/Flex';
import Input from '../../components/Input';
import Label from '../../components/Label';
import logoImg from '../../assets/logo.png';

import { Container } from './style';
import RoomSelect from '../../components/RoomSelect';

const SignUp: React.FC = () => {
  const { control, handleSubmit, errors } = useForm();

  return (
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
              keyboardType="email-address"
            />
          )}
          name="email"
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
          rules={{ required: 'É necessário preencher este campo' }}
        />
      </Flex>
      <Flex marginTop={16}>
        <Label>Quarto</Label>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <RoomSelect onPress={onChange} />
          )}
          name="room_id"
          rules={{ required: 'É necessário preencher este campo' }}
        />
      </Flex>

      <Flex marginTop={24}>
        <Button>Cadastrar</Button>
      </Flex>
    </Container>
  );
};

export default SignUp;

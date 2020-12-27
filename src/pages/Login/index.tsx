import React, { useCallback } from 'react';
import { Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';

import logoImg from '../../assets/logo.png';
import Input from '../../components/Input';
import Flex from '../../components/Flex';
import Label from '../../components/Label';
import CustomText from '../../components/CustomText';
import loginHelper from '../../utils/helpers/loginHelper';
import api from '../../services/api';

import { Container } from './style';
import Button from '../../components/Button';

type SignInFormData = {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { control, handleSubmit, errors } = useForm<SignInFormData>();

  const navigation = useNavigation();

  const defaultValues = loginHelper.createDefaultValues();

  const onSubmit = async (data: SignInFormData) => {
    try {
      const { email, password } = data;

      const response = await api.get('login');

      if (response.data.email !== email || response.data.password !== password) {
        throw new Error('Email or password is not matching')
      }

      navigation.navigate('Home')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <KeyboardAvoidingView style={{ flex: 1}} behavior={Platform.OS === 'ios' ? 'padding' : undefined} enabled >
        <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ flex: 1 }}>
          <Container>
            <Image source={logoImg} />

            <Flex alignItems="center" marginTop={8}>
              <CustomText color="#CCB38D">Lar doce lar Hotel</CustomText>
            </Flex>

            <Flex>
              <Flex marginTop={112} marginBottom={2}>
                <Label>Usuário</Label>
              </Flex>
              <Flex>
                <Controller
                  control={control}
                  render={({ onChange, onBlur, value }) => (
                    <Input
                      placeholder="Usuário"
                      keyboardType="email-address"
                      autoCapitalize="none"
                      autoCorrect={false}
                      returnKeyType="next"
                      onBlur={onBlur}
                      onChangeText={value => onChange(value)}
                      value={value}
                    />
                  )}
                  name="email"
                  defaultValue={defaultValues.email}
                />
              </Flex>
            </Flex>

            <Flex>
              <Flex marginTop={8} marginBottom={2}>
                <Label>Senha</Label>
              </Flex>
              <Flex>
                <Controller
                  control={control}
                  render={({ onChange, onBlur, value }) => (
                    <Input
                      placeholder="Senha"
                      secureTextEntry
                      returnKeyType="send"
                      onBlur={onBlur}
                      onChangeText={value => onChange(value)}
                      value={value}
                    />
                  )}
                  name="password"
                  defaultValue={defaultValues.password}
                />
              </Flex>
            </Flex>

            <Flex marginTop={52}>
              <Button onPress={handleSubmit(onSubmit)}>Acessar</Button>
            </Flex>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  )
};

export default Login;

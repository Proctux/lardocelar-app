import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Input from '../../components/Input';
import Flex from '../../components/Flex';
import logoImage from '../../assets/logo.png';
import Label from '../../components/Label';
import Button from '../../components/Button';

import {
  Container,
  ButtonContainer,
  BackButtonContainer,
  BackButton,
} from './style';
import CustomIcon from '../../components/CustomIcon';
import { theme } from '../../utils/constants/themeConstants';

const RegisterEmployee: React.FC = () => {
  const { control, handleSubmit, defaultValues } = useForm();
  const navigation = useNavigation();

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
          <Flex alignItems="center" justifyContent="center">
            <Image source={logoImage} />
          </Flex>

          <Flex marginTop={24}>
            <Label>Nome</Label>
            <Controller
              control={control}
              render={({ onChange, value }) => (
                <Input
                  placeholder="Digite um nome"
                  value={value}
                  onChangeText={onChange}
                  returnKeyType="next"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              )}
              name="name"
              defaultValue={null}
            />
          </Flex>

          <Flex marginTop={12}>
            <Label>Email</Label>
            <Controller
              control={control}
              render={({ onChange, value }) => (
                <Input
                  placeholder="Digite um e-mail"
                  value={value}
                  onChangeText={onChange}
                  returnKeyType="next"
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType="email-address"
                />
              )}
              name="email"
              defaultValue={null}
            />
          </Flex>

          <Flex marginTop={12}>
            <Label>Senha</Label>
            <Controller
              control={control}
              render={({ onChange, value }) => (
                <Input
                  placeholder="Digite uma senha"
                  onChangeText={onChange}
                  value={value}
                  autoCapitalize="none"
                  autoCorrect={false}
                  returnKeyType="next"
                  secureTextEntry
                />
              )}
              name="password"
              defaultValue={null}
            />
          </Flex>

          {/* <Flex>
            <Label>Cargo do funcionário</Label>
            <Controller
              control={control}
              render={({ onChange, value }) => (

              )}
              name="position"
              defaultValue={null}
            />
          </Flex> */}

          <ButtonContainer>
            <Button>Cadastrar</Button>
          </ButtonContainer>

          <BackButtonContainer>
            <BackButton onPress={() => navigation.navigate('Login')}>
              <CustomIcon
                name="home"
                iconColor={theme.lightColor}
                iconSize={24}
              />
            </BackButton>
          </BackButtonContainer>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterEmployee;

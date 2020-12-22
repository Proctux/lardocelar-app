import React from 'react';
import { Image } from 'react-native';

import logoImg from '../../assets/logo.png';
import Input from '../../components/Input';
import Flex from '../../components/Flex';
import Label from '../../components/Label';
import CustomText from '../../components/CustomText';

import { Container } from './style';

const Login: React.FC = () => (
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
        <Input />
      </Flex>
    </Flex>

    <Flex>
      <Flex marginTop={8} marginBottom={2}>
        <Label>Senha</Label>
      </Flex>
      <Flex>
        <Input />
      </Flex>
    </Flex>
  </Container>
);

export default Login;

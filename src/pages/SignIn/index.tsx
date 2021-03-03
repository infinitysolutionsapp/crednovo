import React, { useRef, useState } from 'react';
import { Alert, Image, TextInput,View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Button from '../../components/Button'
import Input from '../../components/Input'
import BoxTitle from '../../components/TitleBox'
import Logo from '../../assets/logo.png'

import {
  Container,
  ImageContainer,
  BoxContainer,
  Box,

} from './styles';

// @ts-ignore
const SignIn: React.FC = ({signIn}) => {
  const navigation = useNavigation();
  const passwordInputRef = useRef<TextInput>(null);
  const [username , setUsername] = useState('')
  const [password , setPassword] = useState('')

  function navigateToHome() {
    // navigation.navigate('Home')
    signIn({ username, password })
  }

  return (

    <Container>

      <ImageContainer>
        <Image source={Logo} />
      </ImageContainer>

      <BoxContainer>

        <Box>
          <BoxTitle title="LOGIN" />
          <Input
            autoCapitalize="none"
            label="Usuário"
            returnKeyType="next"
            onSubmitEditing={() => passwordInputRef.current?.focus()}
            value={username}
            onChangeText={setUsername}
       />
          <View style={{marginTop:10}} />
          <Input
            label="Senha"
            ref={passwordInputRef}
            returnKeyType="send"
            secureTextEntry
            onSubmitEditing={navigateToHome}
            value={password}
            onChangeText={setPassword}
          />

          <Button onPress={navigateToHome}>ENTRAR</Button>

        </Box>

      </BoxContainer>

    </Container>
  );
};

export default SignIn;

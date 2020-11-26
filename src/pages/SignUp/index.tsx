import React, { useRef, useCallback } from 'react'
import { 
    Image,
    View, 
    ScrollView, 
    KeyboardAvoidingView, 
    Platform,
    TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native'

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

import { 
    Container, 
    Title, 
    BackToSignIn, 
    BackToSignInText, 
} from './styles';

const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const passwordInputRef = useRef<TextInput>(null);
    const navigation = useNavigation();

    return (
        <>
        <KeyboardAvoidingView 
            style={{flex: 1}}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            enabled
        >
            <ScrollView
                contentContainerStyle={{flex: 1}}
                keyboardShouldPersistTaps="handled"
            >
                <Container>
                    <Image source={logoImg} />

                    <View>
                        <Title>Crie sua conta</Title>
                    </View>
                    <Form ref={formRef} onSubmit={(data) => {
                        console.log(data)
                    }}>
                        <Input 
                            autoCorrect={false}
                            autoCapitalize="none"
                            keyboardType="email-address"
                            name="name" 
                            icon="user" 
                            placeholder="nome"
                            returnKeyType="next"
                            onSubmitEditing={() => {
                                passwordInputRef.current?.focus();
                            }}
                        />

                        <Input 
                            ref={passwordInputRef}
                            name="email" 
                            icon="mail" 
                            placeholder="E-mail"
                            secureTextEntry
                            returnKeyType="send"
                            onSubmitEditing={() => {
                                formRef.current?.submitForm()
                            }}
                        />

                        <Input name="password" icon="lock" placeholder="Senha" />

                        <Button onPress={() => {
                            formRef.current?.submitForm()
                            }}
                        >
                            Entrar
                        </Button>
                    </Form>
                </Container>
            </ScrollView>
        </KeyboardAvoidingView>

        <BackToSignIn onPress={() => {navigation.goBack()}}>
            <Icon name="arrow-left" size={20} color="#fff" />
            <BackToSignInText>Voltar para o Login</BackToSignInText>
        </BackToSignIn>
        </>
    );
};

export default SignUp;
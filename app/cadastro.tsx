import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, ScrollView, GestureResponderEvent } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { loginRequest, RegisterRequest } from './utils/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const router = useRouter();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [telefone, setTelefone] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [role] = useState('USER');
  const [isFormValid, setIsFormValid] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [showPasswordError, setShowPasswordError] = useState(false); // Variável para controlar exibição da mensagem de erro

  // Validação do email
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // UseEffect para monitorar mudanças nos campos do formulário e validar o formulário
  useEffect(() => {
    const isEmailValid = validateEmail(login);
    const isPasswordValid = password === confirmPassword && password.length > 0;
    const isFormFilled = login.length > 0 && password.length > 0 && confirmPassword.length > 0 && name.length > 0 && telefone.length > 0;

    setPasswordsMatch(isPasswordValid);
    setIsFormValid(isFormFilled && isEmailValid && isPasswordValid);
  }, [login, password, confirmPassword, name, telefone]);

  const handleSubmit = async (e: GestureResponderEvent) => {
    e.preventDefault();
    if (!isFormValid) return; // Impede o envio se o formulário não for válido
    try {
      await RegisterRequest({ login, password, role, name, telefone });
      const data = await loginRequest({ login, password });
      await AsyncStorage.setItem('@user_token', data.token);
      router.push('/');
    } catch (error) {
      console.error('Falha no registro:', error);
    }
  };

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View style={styles.azul}>
        <ImageBackground source={require('@/assets/images/brazurismotuc.png')} style={styles.imageSmall} />
      </View>
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.titulo}>Crie sua conta</Text>

          <View style={styles.passwordContainer}>
            <Text style={styles.label}>Nome</Text>
            <TextInput
              style={styles.input}
              placeholder="Nome de Usuário"
              value={name}
              onChangeText={setName}
              autoCapitalize="none"
              placeholderTextColor="#888"
            />
          </View>

          <View style={styles.passwordContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="exemplo@gmail.com"
              keyboardType="email-address"
              value={login}
              onChangeText={(text) => {
                setLogin(text);
                if (!validateEmail(text)) {
                  setEmailError('E-mail inválido');
                } else {
                  setEmailError('');
                }
              }}
              autoCapitalize="none"
              placeholderTextColor="#888"
            />
            {emailError ? <Text style={{ color: 'red', paddingLeft: 22 }}>{emailError}</Text> : null}
          </View>

          <View style={styles.passwordContainer}>
            <Text style={styles.label}>Telefone</Text>
            <TextInput
              style={styles.input}
              placeholder="+55 (00) 00000-0000"
              value={telefone}
              onChangeText={(text) => {
                const numericText = text.replace(/[^0-9]/g, '');
                setTelefone(numericText);
              }}
              keyboardType="numeric"
              autoCapitalize="none"
              placeholderTextColor="#888"
            />
          </View>

          <View style={styles.passwordContainer}>
            <Text style={styles.label}>Senha</Text>
            <TextInput
              style={styles.input}
              placeholder="**********"
              secureTextEntry
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                setShowPasswordError(true); // Exibe a mensagem de erro se começar a digitar
              }}
              autoCapitalize="none"
              placeholderTextColor="#888"
            />
          </View>

          <View style={styles.passwordContainer}>
            <Text style={styles.label}>Confirmar Senha</Text>
            <TextInput
              style={styles.input}
              placeholder="**********"
              secureTextEntry
              value={confirmPassword}
              onChangeText={(text) => {
                setConfirmPassword(text);
                setShowPasswordError(true); // Exibe a mensagem de erro se começar a digitar
              }}
              autoCapitalize="none"
              placeholderTextColor="#888"
            />
            {/* Exibe a mensagem de erro apenas quando o campo de senha for preenchido */}
            {showPasswordError && !passwordsMatch && (
              <Text style={{ color: 'red', paddingLeft: 22 }}>As senhas não coincidem</Text>
            )}
          </View>

          <TouchableOpacity
            style={[styles.button, !isFormValid && { backgroundColor: '#888' }]} // Desativa o botão se o formulário for inválido
            onPress={handleSubmit}
            disabled={!isFormValid}
          >
            <Text style={styles.buttonText}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>

        <Link href="/login" style={styles.link2}>Já tem uma conta? Faça Login</Link>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  form: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: -15,
    marginBottom: 34,
    textAlign: 'center',
  },
  input: {
    height: 38,
    width: 300,
    borderColor: '#0056B3',
    borderWidth: 1,
    paddingLeft: 12,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  passwordContainer: {
    width: '100%',
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  button: {
    height: 44,
    width: 200,
    backgroundColor: '#0056B3',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  link2: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 30,
    color: '#0056B3',
  },
  imageSmall: {
    width: 280,
    height: 180,
    marginTop: 36,
    borderRadius: 50,
    marginHorizontal: 6,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  azul: {
    backgroundColor: '#0056B3',
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen;

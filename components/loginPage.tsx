import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground, ScrollView, GestureResponderEvent } from 'react-native';
import { loginRequest } from '@/app/utils/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function LoginPage() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const router = useRouter();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  };

  const handleSubmit = async (e: GestureResponderEvent) => {
    e.preventDefault();
    try {
      const data = await loginRequest({ login, password });
      await AsyncStorage.setItem('@user_token', data.token);
      console.log('Login realizado com sucesso!');
      router.push('/');
      
 
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  }; 

  return (
    <>
    <ScrollView style={{backgroundColor: "#fff"}}>
      <View style={styles.azul}>
        <ImageBackground source={require('@/assets/images/brazurismotuc.png')} style={styles.imageSmall} />
      </View>
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.titulo}>Que bom que você voltou ao Brazurista!</Text>
            
          <View style={styles.passwordContainer}>
            <Text style={styles.label}>Email:</Text>
            <TextInput
              style={styles.input}
              placeholder="exemplo@gmail.com"
              keyboardType="email-address" // Configura o teclado para e-mail
              value={login}
              onChangeText={(text) => {
                setLogin(text);
                if (!validateEmail(text)) {
                  setEmailError('E-mail inválido'); // Mostra mensagem de erro se o e-mail não for válido
                } else {
                  setEmailError('');
                }
              }}
              autoCapitalize="none"
              placeholderTextColor="#888"
            />
         
            {emailError ? <Text style={{ color: 'red' }}>{emailError}</Text> : null}
          </View>

          <View style={styles.passwordContainer}>
            <Text style={styles.label}>Senha:</Text>
            <TextInput
              style={styles.input}
              placeholder="**********"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              autoCapitalize="none"
              placeholderTextColor="#888"
            />
          </View>
          
          <Link href="/redefinirSenha" style={styles.link}>Esqueceu senha? Redefinir senha</Link>
          
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ajudalink2}>
          <Link href="/cadastro" style={styles.link2}>Não tem uma conta? Cadastre-se</Link>
        </View>
      </View>
      </ScrollView>
    </>
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
    marginTop: 35,
    marginBottom: 36,
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
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 20, // Ajuste a margem esquerda para alinhar o texto
  },
  link: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#0056B3',
    marginBottom: 8,
    marginTop: 14,
  },
  link2: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    height: 44,
    width: 200,
    backgroundColor: '#0056B3',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  imageSmall: {
    width: 240,
    height: 160,
    marginTop:36,
    borderRadius: 50,
    marginHorizontal: 6,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  azul: {
    backgroundColor: '#0056B3',
    height:150, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  ajudalink2: {
    marginTop:60,
  }
});

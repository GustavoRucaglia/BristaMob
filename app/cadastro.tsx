import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground, ScrollView, GestureResponderEvent } from 'react-native';
import { Link, router } from 'expo-router';
import Checkbox from 'expo-checkbox';
import { loginRequest, RegisterRequest } from './utils/auth';


const LoginScreen = () => {
  const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [role] = useState('USER');
   
    
 
    const handleSubmit = async (e:  GestureResponderEvent) => {
      e.preventDefault();
      try {
        await RegisterRequest({ login, password, role });
        await loginRequest({ login, password });
        
      } catch (error) {
        console.error('Falha no registro:', error);
      }
     
    }
   


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
              value={nome}
              onChangeText={setNome}
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
              onChangeText={setLogin}
              autoCapitalize="none"
              placeholderTextColor="#888"
            />
          <View style={styles.passwordContainer}>
            <Text style={styles.label}>Telefone</Text>
            <TextInput
              style={styles.input}
              placeholder="+55 (00) 00000-0000"
              value={telefone}
              onChangeText={setTelefone}
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
              onChangeText={setPassword}
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
              onChangeText={setConfirmPassword}
              autoCapitalize="none"
              placeholderTextColor="#888"
            />
          </View>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit}
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
    marginTop: 4,
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
  textoCheck:{
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
    marginTop:6,
  },
  
  check: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    marginRight: 10,
    marginTop:6,
  },
  link2: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 30,
    color: '#0056B3',
  },
  button: {
    height: 40,
    width: 200,
    backgroundColor: '#0056B3',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 20,
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
    marginTop: 36,
    borderRadius: 50,
    marginHorizontal: 6,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  azul: {
    backgroundColor: '#0056B3',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen;

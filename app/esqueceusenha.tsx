import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity, Image } from 'react-native';
const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }
    // Aqui você pode adicionar a lógica de autenticação
    Alert.alert('Sucesso', 'Login realizado com sucesso!');
  };

  return (
    <>
        <StatusBar hidden={true} />
        <View style={styles.container}>
        <Text style={styles.titulo}>Esqueceu a senha?</Text>
        <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail} 
            autoCapitalize="none"
            />
        <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}
            >
            <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
        </View>
      </>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    padding: 16,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 70,
    marginBottom:40,
  },
 
  logo: {
    width: 350,
    height: 60,
    marginBottom: 5, 
    resizeMode: 'contain', 
  },
 
    input: {
      height: 28,
      width: 250,
      borderColor: '#0056B3',
      borderWidth: 1,
      marginBottom: 16,
      paddingLeft: 8,
      borderRadius: 5,
      marginTop: 20,
      marginHorizontal: 20,
      marginVertical: 10,
    },
 
    link:{
      fontSize: 14,
    fontWeight: 'bold',
    marginLeft:66,
    marginBottom: 15,
    },
 
  button:{
    height: 28,
    width: 180,
    backgroundColor: '#0056B3',
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 20,
    paddingVertical: 4,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
 
  buttonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'normal',
    
},
 
});
export default LoginScreen;

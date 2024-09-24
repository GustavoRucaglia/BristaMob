import { Link } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground, ScrollView } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }
    
    Alert.alert('Sucesso', 'Login realizado com sucesso!');
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
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail} 
            autoCapitalize="none"
            placeholderTextColor="#888"
          />
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
          <Link href="/esqueceuSenha" style={styles.link}>Esqueceu senha? Redefinir senha</Link>
          <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}
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
    textDecorationLine: 'underline',
    marginBottom: 8,
    marginTop: 14,
  },
  link2: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    height: 40,
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



  inputContainer: {
    width: '100%',
    maxWidth: 280,
    marginBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'column',
  },

  ajudalink2:{
    marginTop:60,
  }
});

export default LoginScreen;

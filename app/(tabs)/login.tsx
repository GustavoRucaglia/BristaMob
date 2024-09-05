import { Link } from 'expo-router';
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
    
    Alert.alert('Sucesso', 'Login realizado com sucesso!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
      <Text style={styles.titulo}>Entre com sua conta do Brazurista</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail} 
        autoCapitalize="none"
        />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword} 
        autoCapitalize="none"
        />
        <Link href="/esqueceusenha" style={styles.link}>Esqueceu senha? Redefinir senha</Link>
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
        >
        <Text style={styles.buttonText}  onPress={handleLogin}>Fazer Login</Text>
      </TouchableOpacity>
      </View>
      <View>
       <Link href="/cadastro" style={styles.link2}>Não tem uma conta? Cadastre-se</Link>
      </View>

      </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    padding: 16,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    paddingTop: 140,
    paddingBottom: 40,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 50,
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 55,
    marginBottom:25,
    textAlign: 'center',
  },
 
  logo: {
    width: 200,
    height: 40,
    marginBottom: 5, 
   
  },
 
    input: {
      height: 30,
      width: 275, // Largura da caixa de texto
      borderColor: '#0056B3',
      borderWidth: 1,
      paddingLeft: 12,
      borderRadius: 5,
      marginTop: 20, //em cima
      marginBottom: 8, //baixo
      marginHorizontal: 20,
      marginVertical: 10,
    },
 
    link:{
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft:66,
    marginBottom: 12,
    marginTop:5,
    },
 
  button:{
    height: 28,
    width: 180, // Largura da caixa de texto
    backgroundColor: '#0056B3',
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
    paddingVertical: 4, // Ajusta o padding vertical para reduzir o tamanho
    paddingHorizontal: 20, // Ajusta o padding horizontal para reduzir o tamanho
    textAlign: 'center',
  },
 
  buttonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
},

link2:{
fontSize: 14,
fontWeight: 'bold',
},
 
});
export default LoginScreen;

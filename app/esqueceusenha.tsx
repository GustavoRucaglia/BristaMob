import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Link } from 'expo-router';

export default function EsqueceuSenha(){
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handlePasswordReset = () => {
    if (email) {
      setMessage('Um link de recuperação foi enviado ao seu email.');
      // Adicione sua lógica de recuperação de senha aqui
    } else {
      setMessage('Por favor, insira um email válido.');
    }
  };

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View style={styles.azul}>
        <Image
          source={require('@/assets/images/brazurismotuc.png')}
          style={styles.logo}
        
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Recuperação de Senha</Text>
        <Text style={styles.message}>{message}</Text>
        <View style={styles.passwordContainer}>
        
        <Text style={styles.label}>Senha:</Text>
          <TextInput
            style={styles.input}
            placeholder="exemplo@gmail.com"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => setEmail(text)}
            accessibilityLabel="Campo de Email"
            accessibilityHint="Insira seu endereço de email"
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={handlePasswordReset}
        >
          <Text style={styles.buttonText}>Enviar Link de Recuperação</Text>
        </TouchableOpacity>
        <View style={styles.backButton}>
          <Link href="/login" style={styles.backButtonText}>Voltar para Login</Link>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  message: {
    fontSize: 16,
    color: '#0056B3',
    textAlign: 'center',
    marginBottom: 20,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#0056A6',
  },
  instructions: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 40,
    color: '#333',
    fontWeight: 'bold',
  },
  input: {
    height: 38,
    width: 300,
    borderColor: '#0056B6',
    borderWidth: 1,
    paddingLeft: 12,
    borderRadius: 10,
    marginBottom: 20,
  },
  button: {
    height: 48,
    width: 170,
    backgroundColor: '#0056B6',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  backButton: {
    marginTop: 32,
  },
  backButtonText: {
    color: '#0056B6',
    fontSize: 20,
  },
  azul: {
    backgroundColor: '#0056B3',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 240,
    height: 160,
    marginTop:36,
    borderRadius: 50,
    marginHorizontal: 6,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  passwordContainer: {
    width: '80%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

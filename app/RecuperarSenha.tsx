import { Link } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

export default function TabTwoScreen({ navigation }) {
  // State for managing the password and confirmation password values
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Function to handle password changes
  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  // Function to handle confirmation password changes
  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
  };

  // Function to handle send button press
  const handleSendPress = () => {
    if (password === confirmPassword) {
      // Logic to handle sending the password reset request
      console.log('Password:', password);
      // Add your password reset logic here
    } else {
      alert('As senhas não coincidem. Por favor, tente novamente.');
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
        <Text style={styles.title}>Recuperar Senha</Text>
        <Text style={styles.instructions}>
          Sugerimos uma senha forte com letra minúscula, letra maiúscula e números.
        </Text>
        
        <View style={styles.passwordContainer}>
          <Text style={styles.label}>Senha:</Text>
          <TextInput
            style={styles.input}
            placeholder="**********"
            secureTextEntry
            value={password}
            onChangeText={handlePasswordChange}
            autoCapitalize="none"
            placeholderTextColor="#888"
          />
        </View>
        <View style={styles.passwordContainer}>
          <Text style={styles.label}>Confirmar Senha:</Text>
          <TextInput
            style={styles.input}
            placeholder="**********"
            secureTextEntry
            value={confirmPassword}
            onChangeText={handleConfirmPasswordChange}
            autoCapitalize="none"
            placeholderTextColor="#888"
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSendPress}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
        <Link href="/login" style={styles.backButton}>
          <Text style={styles.backButtonText}>Voltar ao login</Text>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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

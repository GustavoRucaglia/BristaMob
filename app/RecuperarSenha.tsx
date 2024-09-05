import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function PasswordRecoveryScreen() {
  const [email, setEmail] = useState('');

  const handlePasswordReset = () => {
    if (email.trim() === '') {
      Alert.alert('Erro', 'Por favor, insira seu e-mail.');
      return;
    }

    Alert.alert('Sucesso', 'Um e-mail de recuperação foi enviado para ' + email);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Redefinir Senha</Text>
      
      <Text style={styles.subtitle}>Sugerimos uma senha forte com letra minúscula,letra maiúscula e números.</Text>

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={handlePasswordReset}>
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#0056B3', 
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    width: 400
  },
  button: {
    height: 40,
    borderRadius: 10,
    backgroundColor: '#0056B3',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: 200,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

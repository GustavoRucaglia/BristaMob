import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, ImageBackground } from 'react-native';
import { Link } from 'expo-router'; // Adicionando Link para navegação

const TokenVerificationScreen = () => {
  const [digit1, setDigit1] = useState('');
  const [digit2, setDigit2] = useState('');
  const [digit3, setDigit3] = useState('');
  const [digit4, setDigit4] = useState('');
  const [digit5, setDigit5] = useState('');
  const [digit6, setDigit6] = useState('');

  // Refs para focar automaticamente no próximo campo
  const digit2Ref = useRef(null);
  const digit3Ref = useRef(null);
  const digit4Ref = useRef(null);
  const digit5Ref = useRef(null);
  const digit6Ref = useRef(null);

  const handleSubmit = () => {
    const token = digit1 + digit2 + digit3 + digit4 + digit5 + digit6;

    // Verifica se todos os campos estão preenchidos corretamente
    if (token.length !== 4) {
      Alert.alert('Erro', 'O token deve conter exatamente 6 dígitos');
      return;
    }

    // Lógica de sucesso ao validar o token
    Alert.alert('Sucesso', 'Token validado com sucesso!');
  };

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View style={styles.azul}>
        <ImageBackground source={require('@/assets/images/brazurismotuc.png')} style={styles.imageSmall} />
      </View>
      <View style={styles.container}>
        <Text style={styles.titulo}>Verificação de código</Text>
        <Text style={styles.instructions}>
          Digite o token de 6 dígitos que você recebeu.
        </Text>

        {/* Quatro campos para o token, um dígito por campo */}
        <View style={styles.tokenContainer}>
          <TextInput
            style={styles.input}
            value={digit1}
           
            maxLength={1}
            keyboardType="numeric"
            placeholder="0"
            placeholderTextColor="#888"
          />
          <TextInput
            ref={digit2Ref}
            style={styles.input}
            value={digit2}
            maxLength={1}
            keyboardType="numeric"
            placeholder="0"
            placeholderTextColor="#888"
          />
          <TextInput
            ref={digit3Ref}
            style={styles.input}
            value={digit3}
           
           
            maxLength={1}
            keyboardType="numeric"
            placeholder="0"
            placeholderTextColor="#888"
          />
          <TextInput
            ref={digit4Ref}
            style={styles.input}
            value={digit4}
            onChangeText={(text) => setDigit4(text)}
            maxLength={1}
            keyboardType="numeric"
            placeholder="0"
            placeholderTextColor="#888"
          />
          <TextInput
            ref={digit5Ref}
            style={styles.input}
            value={digit5}
            
            maxLength={1}
            keyboardType="numeric"
            placeholder="0"
            placeholderTextColor="#888"
          />
          <TextInput
            ref={digit6Ref}
            style={styles.input}
            value={digit6}
           
            maxLength={1}
            keyboardType="numeric"
            placeholder="0"
            placeholderTextColor="#888"
          />
        </View>
       <Link href="/atualizarPerfil">
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Verificar o código</Text>
        </TouchableOpacity>
        </Link>
      </View>

      {/* Usando o Link para navegação */}
      <View style={styles.center}>
      <Link href="/cadastro">
  <Text style={styles.registerText}>Não tem uma conta? Cadastre-se</Text>
</Link>
</View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center:{
alignItems:'center',
marginTop:40,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: '10%',
    marginBottom: 40,
    textAlign: 'center',
  },
  azul: {
    backgroundColor: '#0056B3',
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
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
  instructions: {
    fontSize: 19,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  tokenContainer: {
    flexDirection: 'row', // Alinha os campos lado a lado
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: "10%",
  },
  input: {
    height: 48,
    width: '15%', // Cada campo terá 20% da largura da tela
    borderColor: '#0056B3',
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 24,
  },
  registerText: {
    color: '#0056b3',
    marginTop: 100,
    fontSize: 18,
    textAlign: 'center', // Alinhamento horizontal: 'center', 'left', ou 'right'
    fontWeight: 'bold',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  button: {
    height: 48,
    width: 200,
    backgroundColor: '#0056B3',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 60,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    
  },
});

export default TokenVerificationScreen;

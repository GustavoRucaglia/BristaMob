import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import Checkbox from 'expo-checkbox';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { useAuthRequest, makeRedirectUri } from 'expo-auth-session';
import { Link } from 'expo-router';
 
WebBrowser.maybeCompleteAuthSession();
 
export default function TelaInicial() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [numeroTelefone, setNumeroTelefone] = useState('');
  const [isSelected, setIsSelected] = useState(false);
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const redirectUri = makeRedirectUri({
    native: 'myapp://redirect',
  });
  
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: '',
      redirectUri,
    },
    Google.discovery
  );
 
  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      console.log(authentication);
    }
  }, [response]);
 
  const handleCadastro = () => {
    console.log('Nome:', nome);
    console.log('Telefone:', numeroTelefone);
    console.log('Email:', email);
    console.log('Senha:', senha);
    console.log('Termos aceitos:', isSelected);
  };
 
  return (
    <View style={estilos.container}>
      <View>
      <Text style={estilos.title}>Crie sua conta para aproveitar o Brazurista!</Text>
      <TextInput
        style={estilos.input}
        placeholder="Nome completo"
        keyboardType="default"
        autoCapitalize="words"
        value={nome}
        onChangeText={text => setNome(text)}
      />
      <TextInput
        style={estilos.input}
        placeholder="Telefone"
        keyboardType="phone-pad"
        maxLength={10}
        autoCapitalize="none"
        value={numeroTelefone}
        onChangeText={text => setNumeroTelefone(text)}
      />
      <TextInput
        style={estilos.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={estilos.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={senha}
        onChangeText={text => setSenha(text)}
      />
      <View style={estilos.checkboxContainer}>
        <Checkbox
          style={estilos.checkbox}
          value={isSelected}
          onValueChange={setIsSelected}
        />
        <Text style={estilos.label}>Li e concordo com os termos de uso</Text>
      </View>
      <TouchableOpacity
        style={[estilos.button, isButtonPressed && estilos.buttonPressed]}
        onPress={() => {
          handleCadastro();
          setIsButtonPressed(true);
        }}
      >
        <Text style={estilos.textButton}>Criar Conta</Text>
      </TouchableOpacity>

      </View>

      <View style={estilos.linkEntrar}>
       <Link href="/login" style={estilos.link2}>Já tem uma conta? Faça Login</Link>
      </View>
    </View>
  );
}
 
const estilos = StyleSheet.create({
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
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 250,
    height: 100,
    resizeMode: 'contain',
  },
  button: {
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
    alignSelf: 'center',
  },
  googleButton: {
    height: 30,
    width: 200,
    borderRadius: 10,
    backgroundColor: '#0056B3',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  buttonPressed: {
    backgroundColor: '#0056B3',
  },
  textButton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
  },
  checkbox: {
    alignSelf: 'center',
    height: 15,
    width: 15,
    marginLeft: 40,
  },
  label: {
    marginLeft: 8,
    fontSize: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  input: {
    height: 30,
    width: 275, 
    borderColor: '#0056B3',
    borderWidth: 1,
    paddingLeft: 8,
    borderRadius: 5,
    marginTop: 15,
    marginBottom: 5, 
    marginHorizontal: 20,
    marginVertical: 10,
  },

  forgotPassword: {
    marginTop: 10,
    color: 'blue',
  },
  
link2:{
  fontSize: 14,
  fontWeight: 'bold',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkEntrar: {

  }

});
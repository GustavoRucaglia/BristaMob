import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, ImageBackground } from 'react-native';
import { useRouter, Link } from 'expo-router'; // Importa o hook useRouter para navegação

export default function RecuperarSenhaScreen() {
  const [email, setEmail] = useState('');
  const router = useRouter(); // Hook para navegação

  // Função para lidar com a recuperação de senha
  const handlePasswordReset = () => {
    if (email) {
      console.log('Email para recuperação:', email);
      // Aqui você implementaria a lógica de recuperação de senha (enviar o token por email)
      
      // Supondo que o email seja válido e o token foi enviado com sucesso
      alert('Token de recuperação enviado para o seu email.');
      
      // Navegar para a tela de verificação de token
      router.push('/redefinirSenhad'); // Rota para a tela de verificação do token
    } else {
      alert('Por favor, insira um email válido.');
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: "#fff" }}>
      {/* Seção azul com a logo */}
      <View style={styles.azul}>
        <ImageBackground source={require('@/assets/images/brazurismotuc.png')} style={styles.logo} />
      </View>

      <View style={styles.container}>
        {/* Título */}
        <Text style={styles.title}>Esqueceu a sua senha?</Text>

        {/* Instruções */}
        <Text style={styles.instructions}>
          Se você esqueceu a sua senha, insira o seu email para enviar um token de recuperação de senha.
        </Text>

        {/* Campo de Email */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#888"
          />
        </View>

        {/* Botão de Recuperação */}
        <TouchableOpacity style={styles.button} onPress={handlePasswordReset}>
          <Text style={styles.buttonText}>Enviar Token</Text>
        </TouchableOpacity>

        {/* Link para Cadastro */}
        <Link href="/cadastro" style={styles.registerLink}>
          <Text style={styles.registerLinkText}>Não tem uma conta? Cadastre-se</Text>
        </Link>
      </View>
    </ScrollView>
 

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  azul: {
    backgroundColor: '#0056B3',
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 250,
    height: 180,
    marginTop: 36,
    borderRadius: 50,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginTop:-59,
    marginBottom: 20,
    textAlign: 'center',
  },
  instructions: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
    marginLeft:25,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    height: 38,
    borderColor: '#0056B3',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    width: '93%',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#0056B6',
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerLink: {
    marginTop: 10,
    marginLeft:10,
  },
  registerLinkText: {
    color: '#0056B6',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft:30,
  },
});

import { Link } from 'expo-router';
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Alert, ScrollView,  TouchableOpacity, Text } from 'react-native';

interface FormData {
  email: string;
  telefone: string;
  cep: string;
  assunto: string;
  mensagem: string;
}

const App: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    telefone: '',
    cep: '',
    assunto: '',
    mensagem: ''
  });

  const handleInputChange = (name: keyof FormData, value: string) => {
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    Alert.alert('Formulário Enviado', JSON.stringify(formData));
  };

  const handleReset = () => {
    setFormData({
      email: '',
      telefone: '',
      cep: '',
      assunto: '',
      mensagem: ''
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <Text style={styles.contactTitle}>Fale Conosco</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        value={formData.email}
        onChangeText={(value) => handleInputChange('email', value)}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Assunto"
        value={formData.assunto}
        onChangeText={(value) => handleInputChange('assunto', value)}
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Digite sua Mensagem"
        multiline
        numberOfLines={4}
        value={formData.mensagem}
        onChangeText={(value) => handleInputChange('mensagem', value)}
      />
      
      <TouchableOpacity
        style={[styles.button, styles.buttonPressed]}
        onPress={handleSubmit}
      >
        <Text style={styles.textButton}>Enviar</Text>
      </TouchableOpacity>
      
      
      <View style={styles.linkContainer}>
        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
 
  contactTitle: {
    fontSize: 24, 
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
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
  textArea: {
    height: 100,
  },
  
  buttonPressed: {
    backgroundColor: '#0056B3',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textButton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resetText: {
    textAlign: 'center',
    marginTop: 10,
    color: '#0056B3',
    fontWeight: 'bold',
  },
  linkContainer: {
    marginTop: 50,
    alignItems: 'center',
    
  },
  linkText: {
    fontSize: 16,
    fontWeight: 'bold',
    height: 40,
  },
});

export default App;

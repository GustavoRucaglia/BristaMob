import { API, fetchUserDetails, User } from '@/app/utils/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';

export default function ProfilePage() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const getUserData = async () => {
      const userToken = await AsyncStorage.getItem('@user_token');
      setToken(userToken);
    };

    getUserData();
  }, []);

  const { isLoading, isError, data, error } = useQuery<User>({
    queryKey: ['userData'],
    queryFn: () => fetchUserDetails(token as string),
    enabled: !!token,
  });

      const password1 = data?.password.match(/\d+/g); 
    const password2 = password1 ? password1.join('') : '';

  const logout = async () => {
    await AsyncStorage.removeItem('@user_token');
    setToken(null);
    router.push('/login');
  };

  const navigateToHome = () => {
    router.push('/');
  };

  const [inputImage, setInputImage] = useState("");

  const [formData, setFormData] = useState<User>({
    id: data?.id ?? '',
    login: data?.login ?? '',
    password: data?.password ?? '',
    username: data?.username ?? '',
    name: data?.name ?? '',
    photo: data?.photo ?? '',
    telefone: data?.telefone ?? '',
  });

  useEffect(() => {
    if (data) {
      setFormData({
        id: data?.id,
        login: data?.login,
        password: data?.password,
        username: data?.username,
        name: data?.name,
        photo: data?.photo,
        telefone: data?.telefone,
      });
      setInputImage(data?.photo || "https://wp-content.bluebus.com.br/wp-content/uploads/2017/03/31142426/twitter-novo-avatar-padrao-2017-bluebus.png");
    }
  }, [data]);

  const handleChange = (name: keyof User, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleState = useMutation({
    mutationFn: (ponto: User) => {
      return axios.put(`${API}/auth/user`, ponto, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      }).then(response => response.data);
    },
    onSuccess: () => {
      console.log('Perfil atualizado com sucesso');
    },
  });

  const handleSubmit = () => {
    handleState.mutate(formData);
    console.log(formData);
    navigateToHome();
  };

  const handleImageChange = (url: string) => {
    setInputImage(url);
    handleChange('photo', url); // Atualizar o campo da foto no formulário
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Title and Logo Section */}
        <View style={styles.header}>
          <Image
            source={require('@/assets/images/brazurismotuc.png')}
            style={styles.logoGrande}
          />
        </View>

        <View style={styles.container2}>
          <Text style={styles.textAtual}>Atualizar Seu Perfil</Text>
        </View>

        <View style={styles.profileContainer}>
          <Image source={require('@/assets/images/brazurista2.png')} style={styles.profileImage} />

          <Text style={styles.escrita}>URL da imagem</Text>
          <TextInput
            style={styles.input1}
            placeholder="URL"
            value={inputImage}
            onChangeText={(value) => handleImageChange(value)}
          />

          <Text style={styles.escrita}>Email</Text>
          <View style={styles.secaoatuali}>
            <TextInput
              style={styles.input1}
              placeholder="Email"
              value={formData.login}
              onChangeText={(value) => handleChange('login', value)}
              keyboardType="email-address"
            />
          </View>
          <Text style={styles.escrita}>UserName</Text>
          <View style={styles.secaoatuali}>
            <TextInput
              style={styles.input1}
              placeholder="Username"
              value={formData.name}
              onChangeText={(value) => handleChange('name', value)}
            />
          </View>

          <Text style={styles.escrita}>Senha</Text>
          <View style={styles.secaoatuali}>
            <TextInput
              style={styles.input1}
              placeholder="Senha"
              defaultValue={password2}
              onChangeText={(value) => handleChange('password', value)}
              secureTextEntry
            />
          </View>

          <Text style={styles.escrita}>Telefone</Text>
          <View style={styles.secaoatuali}>
            <TextInput
              style={styles.input1}
              placeholder="Telefone"
              defaultValue={formData?.telefone ?? ''} 
              onChangeText={(value) => handleChange('telefone', value)}
              keyboardType="phone-pad"
            />
          </View>
        </View>

        <View style={styles.secaoatuali}>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Atualizar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#0056B3',
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoGrande: {
    width: 280,
    height: 180,
    marginTop: 46,
    borderRadius: 50,
  },
  container2: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  textAtual: {
    fontSize: 28,
    color: "#0056b3",
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 16,
  },
  profileContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 25,
  },
  escrita: {
    fontSize: 14,
    textAlign: 'left',
    marginBottom: 2,
    marginLeft: '-80%',
  },
  input1: {
    height: 36,
    width: 290,
    borderColor: '#0056B3',
    borderWidth: 1,
    paddingLeft: 12,
    borderRadius: 10,
    marginTop: 4,
    marginBottom: 4,
  },
  secaoatuali: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },
  button: {
    height: 48,
    width: '50%',
    backgroundColor: '#0056B3',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 30,
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

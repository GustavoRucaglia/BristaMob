import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { Link, router } from 'expo-router';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMutation, useQuery } from '@tanstack/react-query';
import { API, fetchUserDetails, UpdateRequest, User } from '@/app/utils/auth';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios'; // Certifique-se de que o axios está importado

export default function ProfilePage() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const getUserData = async () => {
      const userToken = await AsyncStorage.getItem('@user_token');
      setToken(userToken);
      console.log(userToken);
    };

    getUserData();
  }, []);

  const { isLoading, isError, data, error } = useQuery<User>({
    queryKey: ['userData'],
    queryFn: () => fetchUserDetails(token as string),
    enabled: !!token, // Só habilita a query se o token estiver disponível
  });

  const logout = async () => {
    await AsyncStorage.removeItem('@user_token');
    setToken(null);
    router.push('/login');
  };

  const navigateToHome = () => {
    router.push('/');
  };

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
    }
  }, [data]);

  const handleChange = (name: keyof User, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Corrigir a função de atualização usando axios
  const handleState = useMutation({
    mutationFn: (ponto: User) => {
      return axios.put(`${API}}/auth/user`, ponto, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      }).then(response => response.data);
    },
    onSuccess: () => {
      console.log('Perfil atualizado com sucesso');
    },
  });

  const handleSubmit = () => {
    handleState.mutate(formData); // Enviar dados do formulário
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={navigateToHome}>
            <Image source={require('@/assets/images/brazurismotuc.png')} style={styles.logoGrande} />
          </TouchableOpacity>
        </View>

        <View style={styles.profileContainer}>
          <View style={styles.profileSection}>
            <Image source={require('@/assets/images/brazurista2.png')} style={styles.profileImage} />
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>@{data?.name}</Text>
              <Text style={styles.profileHandle}>{data?.login}</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.logoutButton1} onPress={logout}>
            <Entypo name="log-out" size={20} color="#0056B3" style={styles.logoutIcon} />
            <Text style={styles.logoutButtonText}>Sair da conta</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Alguns Pontos Turísticos</Text>
        <ScrollView horizontal={true} style={styles.reviewsSection}>
          {/* Mapear itens turísticos */}
          {[{ image: require('@/assets/images/cristo.jpg'), title: 'Cristo Redentor', text: 'O Cristo Redentor é um dos símbolos mais famosos do Brasil.' }].map((review, index) => (
            <View key={index} style={styles.reviewItem}>
              <Image source={review.image} style={styles.reviewImage} />
              <View style={styles.reviewTextContainer}>
                <Text style={styles.reviewTitle}>{review.title}</Text>
                <Text style={styles.reviewText}>{review.text}</Text>
              </View>
            </View>
          ))}
        </ScrollView>

        <View style={styles.bottomSection}>
          <View style={styles.bottomItem}>
            <View style={styles.imageSmall1} />
            <Link href="/roteiro" style={styles.bottomLink}>
              <Text style={styles.bottomLinkText}>Acesse seus roteiros</Text>
            </Link>
          </View>

          <View style={styles.bottomItem}>
            <Entypo name="user" size={20} color="#0056B3" style={styles.bottomIcon} />
            <Link href="/atualizarPerfil" style={styles.bottomLink}>
              <Text style={styles.bottomLinkText}>Atualizar seu Perfil</Text>
            </Link>
          </View>
        </View>
      </ScrollView>
    </View>
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

  profileContainer: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    marginHorizontal: 16,
    padding: 20,
    marginTop: "5%",
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },

  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 25,
    marginLeft:"-4%"
  },

  profileInfo: {
    marginLeft: 16,
    flex: 1,
  },

  profileName: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom:"1%"
  },

  profileHandle: {
    fontSize: 14,
    color: 'gray',
  },

  logoutButton1: {
    marginTop: "2%",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: '58%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    marginLeft:"35%"
  },

  logoutButtonText: {
    color: '#0056B3',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 8,
  },

  logoutIcon: {
    marginLeft: 5,
  },

  reviewsSection: {
    padding: 20,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: "5%",
    marginTop: "1%",
  },

  reviewItem: {
    flexDirection: 'column',
    marginTop: 8,
    backgroundColor: '#FFF',
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 8,
    height: 230,
    marginRight: 18,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },

  reviewImage: {
    width: '100%',
    height: 130,
    borderRadius: 6,
    marginHorizontal: 'auto',
    marginBottom: 10,
  },

  reviewTextContainer: {
    marginLeft: 8,
    maxWidth: 300,
  },

  reviewTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  reviewText: {
    fontSize: 14,
    color: 'gray',
  },

  bottomSection: {
    padding: 20,
  },

  bottomItem: {
    backgroundColor: '#FFF',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },

  bottomIcon: {
    marginRight: "9%",
    marginLeft:"2%"
  },

  bottomLink: {
    flex: 1,
  },

  bottomLinkText: {
    fontSize: 19,
    color: '#0056b3',
    textDecorationLine: 'none',
    
  },

  blueLine: {
    height: 2.5,
    width: 300,
    backgroundColor: '#0056B3',
    marginVertical: 10,
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 10,
  },

  logoGrande: {
    width: 280,
    height: 180,
    marginTop: 46,
    borderRadius: 50,
    marginHorizontal: 6,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  line: {
    height: 2,
    width: '80%',
    backgroundColor: '#0056B3',
    marginLeft: 10,
  },
  imageSmall1: {
    width: 100,
    height: 150,
    marginTop: "-20%",
    borderRadius: 50,
    marginHorizontal: "-4%",
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginLeft:"-11%",
    marginBottom:"-20%",
    
  },
});

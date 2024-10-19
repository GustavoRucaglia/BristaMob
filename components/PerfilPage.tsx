import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { Link, router } from 'expo-router';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQuery } from '@tanstack/react-query';
import { fetchUserDetails, User } from '@/app/utils/auth';
import { FontAwesome } from '@expo/vector-icons';

export default function ProfilePage() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const getUserData = async () => {
      const token = await AsyncStorage.getItem('@user_token');
      setToken(token);
      console.log(token);
    };

    getUserData();
  }, []);

  const { isLoading, isError, data, error } = useQuery<User>({
    queryKey: ['userData'],
    queryFn: () => fetchUserDetails(token as string),
    enabled: !!token,
  });

  const logout = async () => {
    await AsyncStorage.removeItem('@user_token');
    setToken(null);
    router.push('/login');
  };

  // Função para navegar para a rota raiz
  const navigateToHome = () => {
    router.push('/');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          {/* Envolver a logo com TouchableOpacity */}
          <TouchableOpacity onPress={navigateToHome}>
            <Image source={require('@/assets/images/brazurismotuc.png')} style={styles.logoGrande} />
          </TouchableOpacity>
        </View>

        {/* Profile Section */}
        <View style={styles.profileContainer}>
          <View style={styles.profileSection}>
            <Image source={require('@/assets/images/brazurista2.png')} style={styles.profileImage} />
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>@{data?.name}</Text>
              <Text style={styles.profileHandle}>{data?.login}</Text>
            </View>
          </View>

          {/* Logout Button */}
          <TouchableOpacity style={styles.logoutButton1} onPress={logout}>
            <Entypo name="log-out" size={20} color="#0056B3" style={styles.logoutIcon} />
            <Text style={styles.logoutButtonText}>Sair da conta</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.lineContainer}>
          <FontAwesome name="globe" size={24} color="#0056b3" />
          <View style={styles.line}></View>
        </View>

        <Text style={styles.sectionTitle}>Alguns Pontos Turísticos</Text>
        <ScrollView horizontal={true} style={styles.reviewsSection}>
          {[
            {
              image: require('@/assets/images/cristo.jpg'),
              title: 'Cristo Redentor',
              text: 'O Cristo Redentor é um dos símbolos mais famosos do Brasil e uma das Sete Maravilhas do Mundo Moderno.',
            },
            {
              image: require('@/assets/images/MASP.jpg'),
              title: 'MASP',
              text: 'O Museu de Arte de São Paulo Assis Chateaubriand (MASP) é um dos mais importantes e icônicos museus do Brasil e da América Latina.',
            },
            {
              image: require('@/assets/images/recife.jpg'),
              title: 'Recife',
              text: 'Uma cidade vibrante com rica cultura e história.',
            },
            {
              image: require('@/assets/images/lapa.jpg'),
              title: 'Lapa',
              text: 'Famosa por sua vida noturna e arquitetura histórica.',
            },
          ].map((review, index) => (
            <View key={index} style={styles.reviewItem}>
              <Image source={review.image} style={styles.reviewImage} />
              <View style={styles.reviewTextContainer}>
                <Text style={styles.reviewTitle}>{review.title}</Text>
                <Text style={styles.reviewText}>{review.text}</Text>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Bottom Section */}
        <View style={styles.bottomSection}>
          <View style={styles.bottomItem}>
            <ImageBackground source={require('@/assets/images/Design sem nome.png')} style={styles.imageSmall1} />
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

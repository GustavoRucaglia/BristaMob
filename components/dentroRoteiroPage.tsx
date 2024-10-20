import React, { useEffect, useState } from 'react';  // Importando o hook useState
import { ScrollView, View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { fetchUserDetails, Roteiro, roteiroDetails, User } from '@/app/utils/auth';
import { useQuery } from '@tanstack/react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { PontoInterrese } from '@/app/utils/api-request';

const DentroRoteiroPage = () => {
  const [sortBy, setSortBy] = useState('recent'); // Estado para controlar o filtro

  const numColumns = 2;
  const screenWidth = Dimensions.get('window').width;
  const itemWidth = screenWidth / numColumns - 20;
  const router = useRouter()
  
  const [token, setToken] = useState('');
  const { id } = useLocalSearchParams()

  const id1 = id.toString();

  const getToken = async () => {
    const token1 = await AsyncStorage.getItem('@user_token');
    if(token1){
      setToken(token1);
    }
    else{
      console.log('Token não encontrado');
    }
  }

  getToken();

  const { isLoading, isError, data, error, refetch } = useQuery<Roteiro>({
    queryKey: ['userData'],
    queryFn: () => roteiroDetails(id1, token),
    enabled: !!token,
  });

  useEffect(() => {
    refetch();
  }, []);

  const toggleSortOrder = () => {
    setSortBy(sortBy === 'recent' ? 'oldest' : 'recent');
  };

  const itineraryItems = [
    {
      id: '1',
      name: 'Copacabana',
      description: 'Copacabana é um bairro do Rio de Janeiro...',
      image: require('@/assets/images/copacabana.jpg'),
    },
    {
      id: '2',
      name: 'Copacabana',
      description: 'Copacabana é um bairro do Rio de Janeiro...',
      image: require('@/assets/images/copacabana.jpg'),
    },
    {
      id: '3',
      name: 'Copacabana',
      description: 'Copacabana é um bairro do Rio de Janeiro...',
      image: require('@/assets/images/copacabana.jpg'),
    },
    {
      id: '4',
      name: 'Copacabana',
      description: 'Copacabana é um bairro do Rio de Janeiro...',
      image: require('@/assets/images/copacabana.jpg'),
    },
    {
      id: '5',
      name: 'Cristo Redentor',
      description: 'O Cristo Redentor é uma estátua icônica...',
      image: require('@/assets/images/cristo.jpg'),
    },
  ];

  const sortedItems = [...itineraryItems].sort((a, b) => {
    return sortBy === 'recent' ? b.id.localeCompare(a.id) : a.id.localeCompare(b.id);
  });

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View style={styles.azul}>
        <ImageBackground source={require('@/assets/images/brazurismotuc.png')} style={styles.imageSmall} />
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Roteiro {data?.name}</Text>

        
          <TouchableOpacity  onPress={() => router.push(`/criarRoteirou?search=&id=${id1}`)} style={styles.iconCircle}>
            <Entypo name="plus" size={24} color="black" />
          </ TouchableOpacity>


        {data?.pontosTuristicos.map((pontos: PontoInterrese) => (
              <TouchableOpacity key={pontos.id} onPress={() => router.push(`/pontoTuristico?id=${pontos.id}`)} >
          <View style={styles.roteiroContainer}>
            <View style={styles.roteiro}>
              <ImageBackground source={{ uri: pontos.fotos }}  style={styles.image} />
              <Text style={styles.roteiroTitle}>{pontos.nome}</Text>
              <Text style={styles.roteiroDescription}>{pontos.descricao.length > 100 ? pontos.descricao.slice(0, 100) + '...' : pontos.descricao}</Text>
            </View>
          </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop:15,
    marginLeft:10,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  filterText: {
    fontSize: 16,
  },
  roteiroContainer: {
    marginBottom: 32,
  },
  roteiro: {
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  roteiroTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  roteiroDescription: {
    fontSize: 14,
    color: '#777',
  },
  iconCircle1: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'lightgray',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    width: 180,
    height: 40,
    marginLeft: 10,
    marginTop:-60,
    marginBottom:30,
  },
  iconCircle: {
    width: 50,
    height: 50,
    backgroundColor: 'lightgray',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    marginLeft: 20,
    marginTop:10,
    marginBottom:20,

  },
  imageSmall: {
    width: 240,
    height: 160,
    marginTop: 36,
    borderRadius: 50,
    marginHorizontal: 6,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  azul: {
    backgroundColor: '#0056B3',
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DentroRoteiroPage;

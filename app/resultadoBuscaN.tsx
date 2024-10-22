import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, TextInput, ImageBackground, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { getPontoInterreseSearch, PontoInterrese } from '@/app/utils/api-request';
import { useQuery } from '@tanstack/react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SearchResults1 = () => {
  const router = useRouter();
  const { search } = useLocalSearchParams();
  const [value, setValue] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Inicializando como false

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem('@user_token');
        console.log('Token encontrado:', token); // Verificação de token
        setIsLoggedIn(!!token); // Verifica se o token existe
      } catch (error) {
        console.error('Erro ao verificar token:', error); // Mensagem de erro
      }
    };

    checkLoginStatus();
  }, []);

  // Redireciona se o usuário estiver logado
  useEffect(() => {
    if (isLoggedIn) {
      router.push('/'); // Redireciona para a página inicial
    }
  }, [isLoggedIn, router]);

  const handleSearch = () => {
    // Manter a função se quiser que o usuário ainda possa buscar
  };

  const search2 = search ? search.toString() : '';
  const { data, isLoading } = useQuery({
    queryKey: ['pontosSearch', search],
    queryFn: () => getPontoInterreseSearch(search2),
    staleTime: 5 * 60 * 1000,
  });

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />; // Mostra um indicador de carregamento enquanto os dados estão sendo buscados
  }

  const renderItem = ({ item }: { item: PontoInterrese }) => (
    <View style={styles.resultContainer}>
      <TouchableOpacity onPress={() => router.push(`/buscar?search=${item.nome}`)}>
        <Image source={{ uri: item.fotos }} style={styles.image} />
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.nome}</Text>
        <Text style={styles.address}>{item.regiao}</Text>
      </View>
    </View>
  );

  return (
    <>
      <StatusBar hidden={true} />
      <View>
        <TouchableOpacity onPress={() => router.push('/')}>
          <View style={styles.header}>
            <ImageBackground source={require('@/assets/images/brazurismotuc.png')} style={styles.imageSmall} />
          </View>
        </TouchableOpacity>

        {/* Barra de Pesquisa */}
        <View style={styles.searchContainer}>
          <AntDesign style={styles.icon} name="search1" size={24} color="black" />
          <TextInput
            style={styles.searchInput}
            placeholder="Pontos turísticos"
            placeholderTextColor="black"
            value={value}
            onChangeText={setValue}
            onSubmitEditing={handleSearch}
          />
        </View>

        {/* Resultados da Busca */}
        <Text style={styles.title}>Resultados da busca por "{search}"</Text>

        {/* FlatList para renderizar os resultados */}
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => 'id-' + item.id}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  address: {
    fontSize: 14,
    color: '#555',
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    color: 'black',
    paddingLeft: 20,
    paddingBottom: 7,
    paddingTop: 25,
    fontWeight: 'bold',
  },
  resultContainer: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 110,
    marginRight: 10,
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    fontSize: 18,
    paddingLeft: 7,
    color: 'black',
  },
  header: {
    backgroundColor: '#0056B3',
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    padding: 10,
    marginBottom: 7,
    marginHorizontal: 10,
    marginTop: 15,
    height: 45,
  },
  icon: {
    marginRight: 8,
  },
  listContent: {
    paddingBottom: 20,
  },
});

export default SearchResults1;

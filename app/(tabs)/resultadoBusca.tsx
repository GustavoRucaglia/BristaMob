import React from 'react';
import { View, Image, Text, StyleSheet, TextInput, ImageBackground, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';

// Lista de resultados com imagens locais
const searchResults = [
  {
    id: '1',
    name: 'Cristo Redentor',
    address: 'Parque Nacional da Tijuca, Rio de Janeiro',
    image: require('@/assets/images/cristo.jpg'),
    link: '/pontoTuristico', // Adicione um link específico para cada item
  },
  {
    id: '2',
    name: 'Restaurante Tembui',
    address: 'Pça. Julio Prestes 16, São Paulo',
    image: require('@/assets/images/tembui.jpg'),
    link: '/pontoTuristico',
  },
  {
    id: '3',
    name: 'MASP - Museu de Arte de São Paulo',
    address: 'Av. Paulista 1578, São Paulo',
    image: require('@/assets/images/MASP.jpg'),
    link: '/pontoTuristico/',
  },
  {
    id: '4',
    name: 'Minas Gerais',
    address: 'MG, Brasil',
    image: require('@/assets/images/minas.jpg'),
    link: '/pontoTuristico/',
  },
  {
    id: '5',
    name: 'Copacabana',
    address: 'Rio de Janeiro, Brasil',
    image: require('@/assets/images/copacabana.jpg'),
    link: '/pontoTuristico/',
  },
  {
    id: '6',
    name: 'Rio de Janeiro',
    address: 'RJ, Brasil',
    image: require('@/assets/images/rioj.jpg'),
    link: '/pontoTuristico/',
  },
  {
    id: '7',
    name: 'São Paulo',
    address: 'SP, Brasil',
    image: require('@/assets/images/saopaulo.jpg'),
    link: '/pontoTuristico/',
  },
  {
    id: '8',
    name: 'Ipanema',
    address: 'Rio de Janeiro, Brasil',
    image: require('@/assets/images/ipanemarj.jpg'),
    link: '/pontoTuristico/',
  },
  {
    id: '9',
    name: 'Lapa',
    address: 'Rio de Janeiro, Brasil',
    image: require('@/assets/images/lapa.jpg'),
    link: '/pontoTuristico/',
  },
  // Adicione os outros itens com seus respectivos links
];

const SearchResults = () => {
  // Função para renderizar cada item da lista
  const renderItem = () => (
    <Link href='/'>
      <View style={styles.resultContainer}>
        <Image source={require('@/assets/images/recife.jpg')} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>Recife</Text>
          <Text style={styles.address}>Em recife</Text>
        </View>
      </View>
    </Link>
  );

  return (
    <>
      <StatusBar hidden={true} />

      {/* Imagem de Cabeçalho */}
      <View style={styles.azul}>
        <ImageBackground source={require('@/assets/images/brazurismotuc.png')} style={styles.imageSmall} />
      </View>

      {/* Barra de Pesquisa */}
      <View style={styles.searchContainer}>
        <AntDesign style={styles.icon} name="search1" size={24} color="black" />
        <TextInput
          style={styles.searchInput1}
          placeholder="Pontos turísticos no sudeste"
          placeholderTextColor="black"
        />
      </View>

      {/* Resultados da Busca */}
      <Text style={styles.title}>Resultados da busca por "PONTOS TURÍSTICOS NO SUDESTE"</Text>
      
      {/* FlatList para renderizar os resultados */}
      <FlatList
        data={searchResults}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageSmall: {
    width: 250,
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
    alignItems:'center',
  },
  title: {
    fontSize: 16,
    color: 'black',
    paddingLeft: 20,
    paddingBottom: 7,
    paddingTop: 15,
    alignItems: 'center',
    padding: 10,
    fontWeight: 'bold',
  },
  resultContainer: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 150,
    height: 125,
    marginRight: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 10,
  },
  searchInput1: {
    height: 40,
    borderColor: 'gray',
    fontSize: 18,
    paddingLeft: 7,
    color: 'black',
  },
  azul: {
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
    width: '93%',
    marginLeft: 15,
    marginRight: 100,
  },
  icon: {
    marginRight: 8,
  },
  listContent: {
    paddingBottom: 20,
  },
});

export default SearchResults;

import React, { useState } from 'react'; // Importando useState
import { View, Image, Text, StyleSheet, FlatList, Dimensions, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Entypo } from '@expo/vector-icons'; // Importando Entypo para ícones

// Lista de itens do roteiro com imagens locais
const itineraryItems = [
  {
    id: '1',
    name: 'Roteiro Rio De Janeiro',
    image: require('@/assets/images/cristo.jpg'),
    description: 'Incluídos: Leblon, Ipanema, Lapa e mais outros,',
    visited: false,
  },
  {
    id: '2',
    name: 'Roteiro São Paulo',
    image: require('@/assets/images/MASP.jpg'),
    description: 'Incluídos: Leblon, Ipanema, Lapa e mais outros,',
    visited: false,
  },
  {
    id: '3',
    name: 'Roteiro Sul',
    image: require('@/assets/images/curitiba.jpg'),
    description: 'Incluídos: Leblon, Ipanema, Lapa e mais outros,',
    visited: false,
  },
  {
    id: '4',
    name: 'Roteiro Norte',
    image: require('@/assets/images/jalapao.jpg'),
    description: 'Incluídos: Leblon, Ipanema, Lapa e mais outros,',
    visited: false,
  },
  {
    id: '5',
    name: 'Roteiro Jericoacoara',
    image: require('@/assets/images/recife.jpg'),
    description: 'Incluídos: Leblon, Ipanema, Lapa e mais outros,',
    visited: false,
  },
  {
    id: '6',
    name: 'Roteiro Lençóis Maranhenses',
    image: require('@/assets/images/maranhao.jpg'),
    description: 'Incluídos: Leblon, Ipanema, Lapa e mais outros,',
    visited: false,
  },
  {
    id: '7',
    name: 'Roteiro Piaui',
    image: require('@/assets/images/sm.jpg'),
    description: 'Incluídos: Leblon, Ipanema, Lapa e mais outros,',
    visited: true,
  },
  {
    id: '8',
    name: 'Roteiro Pernambuco',
    image: require('@/assets/images/pernambuco.jpg'),
    description: 'Incluídos: Leblon, Ipanema, Lapa e mais outros,',
    visited: true,
  },
  // Adicione mais itens conforme necessário
];

// Obtém as dimensões da tela para calcular o tamanho das colunas
const numColumns = 2;
const screenWidth = Dimensions.get('window').width;
const itemWidth = screenWidth / numColumns - 20;

const ItineraryScreen = () => {
  const [sortBy, setSortBy] = useState('recent'); // Estado para controlar o filtro

  // Função para alternar entre mais recentes e menos recentes
  const toggleSortOrder = () => {
    setSortBy(sortBy === 'recent' ? 'oldest' : 'recent');
  };

  // Função para renderizar cada item do roteiro
  const renderItem = () => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: 'https://tourb.com.br/img/lugares/rio-de-janeiro/praia-vermelha.jpg' }} style={styles.itemImage} />
      <Text style={styles.itemText}>Rio de janeiro</Text>
      <Text style={styles.itemDescription}>Cidade linda</Text>
    </View>
  );

  // Ordena a lista com base no estado `sortBy`
  const sortedItems = [...itineraryItems].sort((a, b) => {
    if (sortBy === 'recent') {
      return b.id.localeCompare(a.id); // Ordena por mais recente
    }
    return a.id.localeCompare(b.id); // Ordena por menos recente
  });

  return (
    <>
      <StatusBar hidden={true} />

      <ScrollView style={styles.container}>
      
                {/* Imagem de Cabeçalho */}
                <View style={styles.azul}>
                    <ImageBackground source={require('@/assets/images/brazurismotuc.png')} style={styles.imageSmall} />
                </View>
                <View style={styles.iconCircle}>
              <Entypo name="plus" size={24} color="black" /> 
            </View>
            
        <View style={styles.filterContainer}>
          <Text style={styles.title}>Seus Roteiros criados</Text>
          
          <View style={styles.iconCircle}>
              <Entypo name="plus" size={24} color="black" /> 
            </View>
          </View>
          {/* Botão para alternar entre "Mais recentes" e "Menos recentes" */}
          <TouchableOpacity style={styles.iconCircle1} onPress={toggleSortOrder}>
            <Entypo name={sortBy === 'recent' ? 'arrow-down' : 'arrow-up'} size={24} color="black" />
            
            <Text style={styles.filterText}>
              {sortBy === 'recent' ? 'Mais recentes' : 'Menos recentes'}
            </Text>
          </TouchableOpacity>
        

        <FlatList
          data={sortedItems} // Usar a lista ordenada
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={numColumns} // Definindo número de colunas para criar o efeito de grid
          contentContainerStyle={styles.grid}
        />
      </ScrollView>
    </>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'left',
    marginLeft: 5,
    marginTop:-105,
    
    
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  iconCircle1: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'lightgray', // Cor do fundo (cinza claro)
    borderRadius: 25, // Para tornar o botão com bordas arredondadas
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    width:180,
    height:40,
    marginLeft:15,
    marginTop:-60
  },
  filterText: {
    marginLeft: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  grid: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  itemContainer: {
    width: itemWidth, // Tamanho ajustado para cada item
    marginBottom: 20,
    marginHorizontal: 5,
    backgroundColor: '#fff', // Fundo branco
    borderRadius: 15, // Bordas arredondadas
    overflow: 'hidden',
    elevation: 5, // Sombra para dar um destaque ao card
    padding: 10, // Espaçamento interno do card
    height: 260,
  },
  azul: {
    backgroundColor: '#0056B3',
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
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
  itemImage: {
    width: '100%',
    height: itemWidth * 0.8, // Tamanho menor para a imagem
    borderRadius: 10, // Borda arredondada da imagem
  },
  itemText: {
    fontSize: 14, // Tamanho reduzido do texto
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
    color: '#333',
  },
  itemDescription: {
    fontSize: 12, // Tamanho menor para a descrição
    textAlign: 'center',
    marginTop: 10,
    color: '#666', // Cor mais clara para diferenciar do título
  },
  visitedText: {
    fontSize: 14,
    color: '#00b300', // Verde para indicar que foi visitado
    marginTop: 5,
    textAlign: 'center',
  },
  iconCircle: {
    width: 50,
    height: 50,
    backgroundColor: 'lightgray',  // Cor do fundo (cinza claro)
    borderRadius: 25,  // Para tornar a View circular
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    marginLeft:300,
    marginTop:30,
  },
});

export default ItineraryScreen;

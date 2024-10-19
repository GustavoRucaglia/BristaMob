import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TextInput, ImageBackground, FlatList, TouchableOpacity } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Link, useLocalSearchParams, useRouter } from 'expo-router';
import { getPontoInterreseSearch, PontoInterrese } from '@/app/utils/api-request';
import { useQuery } from '@tanstack/react-query';
import { useRoute } from '@react-navigation/native';

// Lista de resultados com imagens locais

const SearchResults1 = () => {
    const router = useRouter()

    const route = useRoute();
   
    const { search } = useLocalSearchParams();
   
   const [value, setValue] = useState('')
   
    const [showMore, setShowMore] = useState(false);
   
   
    const handleShowMore = () => {
      setShowMore(!showMore);
    };
   
   
    const handleSearch = () => {
      router.push(`/buscar?search=${value}`);
    };
    const search2 = search? search.toString() : ""
     const { data, error, isLoading, refetch } = useQuery({
       queryKey: ["pontosSearch", search],
       queryFn: () => getPontoInterreseSearch(search2),
       staleTime: 5 * 60 * 1000,
     });
   
    
  const renderItem = ({ item }: { item: PontoInterrese }) => (
    <View style={styles.resultContainer}>
     <TouchableOpacity  onPress={() => router.push(`/buscar?search=museu`)}>
        <Image source={{ uri: item.fotos }} style={styles.image} />
    </TouchableOpacity>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.nome}</Text>
        <Text style={styles.address}>{item.regiao}</Text>
      </View>
        <TouchableOpacity style={styles.addButton}>
          <Entypo name="plus" size={24} color="black" />
        </TouchableOpacity>

    </View>
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
      <Text style={styles.title}>Resultados da busca por "{search}"</Text>

      {/* FlatList para renderizar os resultados */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => 'id-' + item.id}
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
    width: 100,
    height: 200,
    marginRight: 10,
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  addButton: {
    paddingLeft: 10,
    backgroundColor:'#c9c9c9',
    width:'15%',
    height:'30%',
    marginTop:"7%",
    alignItems:'flex-start',
    borderRadius:500,

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
  },
  icon: {
    marginRight: 8,
    
  },
  listContent: {
    paddingBottom: 20,
  },
});

export default SearchResults1;

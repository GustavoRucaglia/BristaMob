import React, { useState } from 'react';
import { ScrollView, View, Image, Text, StyleSheet, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Link, useLocalSearchParams, useRouter } from 'expo-router';
import { useQuery } from '@tanstack/react-query';

import { useRoute } from '@react-navigation/native';
import { getPontoInterreseSearch, PontoInterrese } from '@/app/utils/api-request';


const BuscarPage = () => {
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

 

    return (
        <>
            <StatusBar hidden={true} />
            <ScrollView style={styles.container}>
                {/* Imagem de Cabeçalho */}
                <TouchableOpacity style={styles.azul} onPress={() => router.push('/')} >
                    <ImageBackground source={require('@/assets/images/brazurismotuc.png')} style={styles.imageSmall} />
               
                </TouchableOpacity>
                {/* Barra de Pesquisa */}
               
                <View style={styles.searchContainer}>
                <Link href="/resultadoBusca">
                    <AntDesign style={styles.icon} name="search1" size={24} color="black"  />
                    </Link>
                    
                    <TextInput
                        style={styles.searchInput1}
                        placeholder="Pesquise seu destino aqui..."placeholderTextColor="black"
                        onBlur={handleSearch}
                        onChangeText={(text) => setValue(text)}
                    />
                </View>

                {/* Seção: Destinos que os viajantes adoram */}
                <View style={styles.section}>
                    <View style={styles.row}>
                        <Text style={styles.title}>Destinos que os viajantes adoram</Text>
                        <AntDesign name="rightcircleo" size={26} color="black" style={{ padding: 14 }} />
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                        {data?.map((pontos: PontoInterrese) => (                       
                          <TouchableOpacity key={pontos.id} onPress={() => router.push(`/pontoTuristico?id=${pontos.id}`)}>
                        <View style={styles.card}>
                            <Image source={{ uri: pontos.fotos }} style={styles.image} />
                            <Text style={styles.cardText}>{pontos.nome}</Text>
                        </View>
                        </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                {/* Seção: Descubra destinos */}
                <View style={styles.container1}>
  <View style={styles.section}>
    <Text style={styles.title}>Descubra destinos</Text>

    <View style={styles.grid}>
      <TouchableOpacity  onPress={() => router.push(`/buscar?search=museu`)}>
        <View style={styles.gridItem}>
          <ImageBackground source={require('@/assets/images/MASP.jpg')} style={styles.image1}>
            <Text style={styles.gridText}>Museus</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity  onPress={() => router.push(`/buscar?search=restaurante`)}>
        <View style={styles.gridItem}>
          <ImageBackground source={require('@/assets/images/restaurante.jpg')} style={styles.image1}>
            <Text style={styles.gridText}>Restaurantes</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    </View>

    <View style={styles.grid}>
    <TouchableOpacity  onPress={() => router.push(`/buscar?search=natureza`)}>
        <View style={styles.gridItem}>
          <ImageBackground source={require('@/assets/images/parque.jpg')} style={styles.image1}>
            <Text style={styles.gridText}>Natureza</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    </View>

    <View style={styles.grid}>
    <TouchableOpacity  onPress={() => router.push(`/buscar?search=monumento`)}>
        <View style={styles.gridItem}>
          <ImageBackground source={require('@/assets/images/cristo.jpg')} style={styles.image1}>
            <Text style={styles.gridText}>Monumentos</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity  onPress={() => router.push(`/buscar?search=parque`)}>
        <View style={styles.gridItem}>
          <ImageBackground source={require('@/assets/images/diversao.jpg')} style={styles.image1}>
            <Text style={styles.gridText}>Parques</Text>
          </ImageBackground>
        </View>
        </TouchableOpacity>

        <TouchableOpacity  onPress={() => router.push(`/buscar?search=praia`)}>
        <View style={styles.gridItem}>
          <ImageBackground 
            source={{ uri: 'https://tourb.com.br/img/lugares/rio-de-janeiro/praia-vermelha.jpg' }} 
            style={styles.image1}>
            <Text style={styles.gridText}>Praias</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    </View>
  </View>
</View>

                <View style={styles.section}>
                    <View style={styles.row}>
                        <Text style={styles.title}>Busque por Região</Text>
                      
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                    <TouchableOpacity  onPress={() => router.push(`/buscar?search=sudeste`)} style={styles.card2}>
                        <View style={styles.card1}>
                            <Image source={require('@/assets/images/lapa.jpg')} style={styles.image2} />
                            <Text style={styles.regiaoText}>Sudeste</Text>  
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={() => router.push(`/buscar?search=sul`)} style={styles.card2}>
                        <View style={styles.card1}>
                            <Image source={require('@/assets/images/curitiba.jpg')} style={styles.image2} />
                            <Text style={styles.regiaoText}>Sul</Text>
                              </View>
                              </TouchableOpacity>
                              <TouchableOpacity  onPress={() => router.push(`/buscar?search=centro-oeste`)} style={styles.card2}>
                        <View style={styles.card1}>
                            <Image source={require('@/assets/images/df.jpg')} style={styles.image2} />
                            <Text style={styles.regiaoText}>Centro-Oeste</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={() => router.push(`/buscar?search=nordeste`)} style={styles.card2}>
                        <View style={styles.card1}>
                            <Image source={require('@/assets/images/sm.jpg')} style={styles.image2} />
                            <Text style={styles.regiaoText}>Nordeste</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={() => router.push(`/buscar?search=norte`)} style={styles.card2}>
                        <View style={styles.card1}>
                            <Image source={require('@/assets/images/amazonia.jpg')} style={styles.image2} />
                            <Text style={styles.regiaoText}>Norte</Text> 
                        </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
    </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
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
    searchInput1: {
        height: 40,
        borderColor: 'gray',
        fontSize: 18,
        paddingLeft: 10, // Adicione padding para o texto não ficar colado na borda
        color: 'black',  // Certifique-se que o texto do input seja visível
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
    regiaoImage: {
        width: 65,
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        
    },
    searchInput: {
        flex: 1,
        fontSize: 20,
        padding: 16,
        color: 'black',
    },
    icon: {
        paddingLeft: 100,
        

    },
    section: {
        marginBottom: 20,
        marginHorizontal:10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        marginLeft: 8,
    },
   
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 8,
        marginBottom: 3,
        padding: 13,
        marginLeft: -9,
    },
    
    horizontalScroll: {
        flexDirection: 'row',
    },
    card: {
        width: 200,
        marginLeft:7,
        marginRight:7,
        paddingLeft:7,
        paddingRight:10,
    },
   

    image: {
        width: '100%',
        height: 180,
        borderRadius: 8,
        paddingRight: 12,
        paddingLeft:100,
    },
    image1: {
        width: 170,
        height: 170,
        borderRadius: 10, // Arredondando as bordas
        paddingLeft: 3,
        paddingRight: 3,
        marginHorizontal: 3,
        marginBottom: 3,
        marginTop:7,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden', // Garantir que o conteúdo seja cortado pelo borderRadius
    },
    card1: {
    width: 170,
    alignItems:'center',
},
card2: {
    width: 170,
    marginLeft: 7,
    marginRight: 9,
    marginBottom: 10, 
    alignItems:'center',
},
image2: {
    width: 170,
    height: 170,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    
},

    roundedImage: {
        borderRadius: 10, // Arredondar a imagem de fundo
    },
    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardText: {
        fontSize: 19,
        marginTop: 5,
        marginLeft: 10,
    },
    grid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        maxWidth: 380,
        
    },
    gridItem: {
        width: '48%',
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    gridText: {
        position: 'absolute',
        bottom: 0, // Alinha o texto na parte de baixo da imagem
        marginBottom: 10, // Espaço entre o texto e a borda inferior da imagem
        color: 'white',
        fontSize: 20,
        fontWeight: '800',
        textAlign: 'center',
        width: '100%', // Garantir que o texto fique centralizado na largura da imagem
      
        padding: 5,
    
    },
    regiao: {
        width: '48%',
        height: 50,
    
        borderRadius: 10,
        marginBottom: 7,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        marginLeft:6,
       
    },
    regiao1: {
        width: '48%',
        height: 50,

        borderRadius: 10,
        marginBottom: 7,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        marginLeft:6,
        
        
    },
    regiao2: {
        width: '48%',
        height: 50,
        backgroundColor: 'orange',
        borderRadius: 10,
        marginBottom: 7,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        marginLeft:6,
        
    },
    regiao3: {
        width: '48%',
        height: 50,
        backgroundColor: 'blue',
        borderRadius: 10,
        marginBottom: 7,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        marginLeft:6,
        
    },
    regiao4: {
        width: '48%',
        height: 50,
        backgroundColor: 'darkblue',
        borderRadius: 10,
        marginBottom: 7,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        marginLeft:6,
    
    },
    regiaoText: {
        position: 'absolute',
        bottom: 0, // Alinha o texto na parte de baixo da imagem
        marginBottom: 10, // Espaço entre o texto e a borda inferior da imagem
        color: 'white',
        fontSize: 20,
        fontWeight: '800',
        textAlign: 'center',
        width: '100%', // Garantir que o texto fique centralizado na largura da imagem
        padding: 5,
        marginLeft:3,

    
    },
});

export default BuscarPage;

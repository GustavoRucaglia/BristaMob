import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet,ImageBackground, TouchableOpacity } from 'react-native';
import Header from '@/components/Header';
 
const App = () => {
  return (
<>
<ScrollView style={{backgroundColor: "#fff"}}>
<View style={styles.azul}>
        <ImageBackground source={require('@/assets/images/brazurismotuc.png')} style={styles.imageSmall} />
      </View>
      <View style={styles.container}>
     
   
      <Text style={styles.title}>Roteiro para Rio de Janeiro</Text>
      <View style={styles.filterContainer}>
        <Text style={styles.filterText}>Filtrar por:</Text>
        <Text style={styles.filterValue}>Recentes ▼</Text>
      </View>
 
      <View style={styles.roteiroContainer}>
        <View style={styles.roteiro}>
        <ImageBackground source={require('@/assets/images/copacabana.jpg')} style={styles.image}>
          </ImageBackground>
          <Text style={styles.roteiroTitle}>Copa Cabana</Text>
          <Text style={styles.reviewRating}>⭐ ⭐ ⭐</Text>
          <Text style={styles.roteiroDescription}>Copacabana é um bairro do Rio de Janeiro, famoso por sua praia em meia-lua, o calçadão com ondas de pedras portuguesas e sua vibrante vida cultural e turística.


</Text>
        </View>
        <View style={styles.roteiro}>
        <ImageBackground source={require('@/assets/images/cristo.jpg')} style={styles.image} />
          <Text style={styles.roteiroTitle}>Cristo Redentor</Text>
          <Text style={styles.reviewRating}>⭐ ⭐ ⭐</Text>
          <Text style={styles.roteiroDescription}>
          O Cristo Redentor é uma estátua de 38 metros de altura, situada no Morro do Corcovado, no Rio de Janeiro. Inaugurada em 1931, é um ícone do Brasil e uma das Sete Maravilhas do Mundo Moderno.

</Text>
        </View>
      </View>
 
      <View style={styles.roteiroContainer}>
        <View style={styles.roteiro}>
        <ImageBackground source={require('@/assets/images/museudoamanhajpg.jpg')} style={styles.image}>
          </ImageBackground>
          <Text style={styles.roteiroTitle}>Museu do Amanhã </Text>
          <Text style={styles.reviewRating}>⭐ ⭐ ⭐</Text>
          <Text style={styles.roteiroDescription}>O Museu do Amanhã, no Rio de Janeiro, é um museu de ciência inaugurado em 2015, projetado por Santiago Calatrava. Focado em sustentabilidade e inovação, apresenta exposições interativas sobre desafios globais. Sua arquitetura futurista é um importante ponto turístico.
</Text>
        </View>
        <View style={styles.roteiro}>
        <ImageBackground source={require('@/assets/images/ipanemarj.jpg')} style={styles.image} />
          <Text style={styles.roteiroTitle}>Praia de Ipanema</Text>
          <Text style={styles.reviewRating}>⭐ ⭐ ⭐</Text>
          <Text style={styles.roteiroDescription}>Ipanema é cenário de um belíssimo nascer e pôr-do-sol, diariamente apreciados por moradores e turistas, que costumam aplaudir o pôr- do-sol nos dias mais limpos. </Text>
        </View>
      </View>
      </View>

 
      
    
      </ScrollView>
      </>
  );
};
 
const styles = StyleSheet.create({
  container: {

    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  filterText: {
    fontSize: 16,
  },
  filterValue: {
    fontSize: 16,
    fontWeight: 'bold',
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
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  visitedText:{
    fontSize:14,
    color:'#00b300',
    marginBottom:16,
  },
  reviewRating: {
    fontSize: 10,
    color: '#FFA500',
    marginBottom: 4,
  },
  imageSmall: {
    width: 240,
    height: 160,
    marginTop:36,
    borderRadius: 50,
    marginHorizontal: 6,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  azul: {
    backgroundColor: '#0056B3',
    height:120, 
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 
export default App;

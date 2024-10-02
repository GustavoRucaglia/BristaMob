import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Título principal e ícone */}
      <View style={styles.header}>
        <Text style={styles.a}>Explore a região Sudeste</Text>
        
      </View>

      {/* Imagem principal */}
      <View style={styles.lugar2}>
        <Image source={require('@/assets/images/saopaulo.jpg')} style={styles.image} />
      </View>

      {/* Texto descritivo */}
      <Text style={styles.titulo}>O Pulso Econômico e Cultural do Brasil</Text>
      <Text style={[styles.b, styles.textCenter]}>
      A Região Sudeste do Brasil é a mais populosa e economicamente desenvolvida do país, composta pelos estados de São Paulo, Rio de Janeiro, Minas Gerais e Espírito Santo. É uma área estratégica tanto em termos de produção industrial quanto de serviços, além de possuir um papel central na história e na cultura brasileira.
      </Text>


 {/* Linha Azul */}
 <View style={styles.blueLine} />
 
      {/* Seção de pontos turísticos */}
      <View style={styles.col}>
        <Text style={styles.title}>Turistando no Sudeste</Text>
        <ScrollView horizontal={true} style={styles.row} showsHorizontalScrollIndicator={false}>
          <ImageBackground source={require('@/assets/images/cristo.jpg')} style={styles.imageSmall}>
            <Text style={styles.text}>Cristo Redentor</Text>
          </ImageBackground>
          <ImageBackground source={require('@/assets/images/lapa.jpg')} style={styles.imageSmall}>
            <Text style={styles.text}>Lapa</Text>
          </ImageBackground>
          <ImageBackground source={require('@/assets/images/museudoamanhajpg.jpg')} style={styles.imageSmall}>
            <Text style={styles.text}>Museu do Amanhã</Text>
          </ImageBackground>
          <ImageBackground source={require('@/assets/images/bahia.jpg')} style={styles.imageSmall}>
            <Text style={styles.text}>São Paulo</Text>
          </ImageBackground>
        </ScrollView>
      </View>

      {/* Seção de restaurantes */}
      <View style={styles.col}>
        <Text style={styles.title}>Restaurantes no Sudeste</Text>
        <ScrollView horizontal={true} style={styles.row} showsHorizontalScrollIndicator={false}>
          <ImageBackground source={require('@/assets/images/tembui.jpg')} style={styles.imageSmall}>
            <Text style={styles.text1}>Tembui</Text>
          </ImageBackground>
          <ImageBackground source={require('@/assets/images/tembui.jpg')} style={styles.imageSmall}>
            <Text style={styles.text1}>Tembui</Text>
          </ImageBackground>
          <ImageBackground source={require('@/assets/images/tembui.jpg')} style={styles.imageSmall}>
            <Text style={styles.text1}>Tembui</Text>
          </ImageBackground>
          <ImageBackground source={require('@/assets/images/tembui.jpg')} style={styles.imageSmall}>
            <Text style={styles.text1}>Tembui</Text>
          </ImageBackground>
        </ScrollView>
      </View>

      <View style={styles.blueLine} />
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  lugar2: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  blueLine: {
    height: 2.5, // Define a altura da linha
    width:300,
    backgroundColor: 'blue', // Cor da linha
    marginVertical: 10,
    alignSelf: 'center', 
  
  },
  titulo: {
    fontSize: 24,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 15,
    fontWeight: 'bold',
  },
  icon: {
    marginRight: 15,
  },
  a: {
    fontSize: 25,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  image: {
    width: 350,
    height: 210,
    borderRadius: 4,
    marginBottom: 10,
  },
  textCenter: {
    textAlign: 'left', // Centraliza o texto
  },
  b: {
    marginLeft: 10,
    fontSize: 16,
  },
  col: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 10,
    marginTop: 10,
  },
  text: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 6,
    fontSize: 14,
    fontWeight: 'bold',
  },
  text1: {
    textAlign: 'center',
    color: 'black',
    marginBottom: 6,
    fontSize: 14,
    fontWeight: 'bold',
  },
  imageSmall: {
    width: 170,
    height: 150,
    marginHorizontal: 5,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 7,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
  },
});

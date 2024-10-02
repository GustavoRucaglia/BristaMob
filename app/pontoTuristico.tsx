import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Título principal e ícone */}
      <View style={styles.header}>
        <Text style={styles.a}>Museu Da Arte Moderna</Text>
        <MaterialIcons name="bookmark-border" size={24} color="black" style={styles.icon} />
      </View>

      {/* Imagem principal */}
      <View style={styles.lugar2}>
        <Image source={require('@/assets/images/MASP.jpg')} style={styles.image} />
      </View>

      {/* Texto descritivo */}
      <Text style={styles.titulo}>Informações Gerais sobre:</Text>
      <Text style={[styles.b, styles.textCenter]}>
      O Museu de Arte de São Paulo Assis Chateaubriand (MASP) é um dos mais importantes e icônicos museus do Brasil e da América Latina. Fundado em 1947 por Assis Chateaubriand e o crítico de arte italiano Pietro Maria Bardi, o MASP se destaca por sua arquitetura modernista e por sua inovadora coleção de arte
      </Text>

      <Text style={styles.titulo}>Localização e Contato</Text>
      <Text style={[styles.b, styles.textCenter]}>
      Av.Paulista,1578 - Bela Vista,São Paulo - SP     
      </Text>
      <view style={{padding:5}}/>
      <Text style={[styles.b, styles.textCenter]}>
      (11)95678-1353 
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
        <Text style={styles.title}>Restaurantes de São Paulo</Text>
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
        <View style={styles.blueLine} />
      </View>
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

import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Home() {
  return (
    <ScrollView>
      <View>
        
        <Text style={styles.a}>Explore o Rio de Janeiro</Text>
        <View><MaterialIcons name="bookmark-border" size={24} color="black" /></View>
        
        <View style={styles.lugar2}>
          <Image source={{ uri: 'https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/03/1-cristo-redentor.jpg' }} style={styles.image} />
        </View>
        <Text style={styles.titulo}>Uma metrópole urbana movida pela cadência do samba</Text>
        <Text style={styles.b}>Com inúmeras praias, belíssimas montanhas e o samba e a bossa nova ao fundo, é fácil se apaixonar pelo Rio de Janeiro. Imortalizada em uma canção, a praia de Ipanema continua sendo o lugar perfeito para caminhar, pegar um bronzeado e se exibir. A maior estátua Art déco do mundo, o Cristo Redentor, convida todos a uma visita ao Corcovado. E todos os anos, durante o Carnaval, o Rio oferece uma extravagante celebração com muita festa, música, dança e fantasias.</Text>
      </View>

      <View style={styles.col}>
        <Text style={styles.title}>Turistando no Rio De Janeiro</Text>
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
      <View style={styles.col}>
        <Text style={styles.title}>Restaurantes no Rio de Janeiro</Text>
        <ScrollView horizontal={true} style={styles.row} showsHorizontalScrollIndicator={false}>
          <ImageBackground source={require('@/assets/images/cristo.jpg')} style={styles.imageSmall}>
            <Text style={styles.text}>Rio de Janeiro</Text>
          </ImageBackground>
          <ImageBackground source={require('@/assets/images/saopaulo.jpg')} style={styles.imageSmall}>
            <Text style={styles.text}>São Paulo</Text>
          </ImageBackground>
          <ImageBackground source={require('@/assets/images/curitiba.jpg')} style={styles.imageSmall}>
            <Text style={styles.text}>Rio de Janeiro</Text>
          </ImageBackground>
          <ImageBackground source={require('@/assets/images/bahia.jpg')} style={styles.imageSmall}>
            <Text style={styles.text}>São Paulo</Text>
          </ImageBackground>
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  lugar2: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  titulo: {
    fontSize: 20,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 15,
    fontWeight: 'bold',
  },
  a: {
    fontSize: 26,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 12,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 4,
    marginBottom: 10,
    marginHorizontal: 20,
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
  imageSmall: {
    width: 150,
    height: 100,
    marginHorizontal: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
});


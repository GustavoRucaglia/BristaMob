import { Link } from 'expo-router';
import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function regiaoSudeste() {
  return (
    <ScrollView>
      {/* Título principal e ícone */}
      <View style={styles.azul}>
        {/* Exibindo a logo grande */}
        <Image 
          source={require('@/assets/images/brazurismotuc.png')} // Logo grande
          style={styles.logoGrande} // Estilo ajustado para a logo grande
        />
      </View>

      <View style={styles.header}>
        <Text style={styles.a}>Explore a região <Text style={styles.c}>Sudeste</Text></Text>
      </View>

      <View style={styles.col}>
        {/* Imagem principal */}
        <View style={styles.lugar2}>
          <ScrollView horizontal={true}  showsHorizontalScrollIndicator={true}>
            
            <Image source={require('@/assets/images/cristo.jpg')} style={styles.image} />
            <Image source={require('@/assets/images/MASP.jpg')} style={styles.image} />
            <Image source={require('@/assets/images/minas.jpg')} style={styles.image} />
            <Image source={require('@/assets/images/espiritosanto.jpg')} style={styles.image} />
          </ScrollView>
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
          <Text style={styles.title}>Turistando no <Text style={styles.c1}>Sudeste</Text></Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Link href="/pontoTuristico">
              <ImageBackground source={require('@/assets/images/museudoamanhajpg.jpg')} style={styles.imageSmall1}>
                <Text style={styles.text}>Museu do Amanhã</Text>
              </ImageBackground>
            </Link>
            <View style={styles.imageContainer}>
              <Link href="/pontoTuristico">
                <ImageBackground source={require('@/assets/images/saopaulo.jpg')} style={styles.imageSmall1}>
                  <Text style={styles.text}>São Paulo</Text>
                </ImageBackground>
              </Link>
            </View>
            <View style={styles.imageContainer}>
              <Link href="/pontoTuristico">
                <ImageBackground source={require('@/assets/images/MASP.jpg')} style={styles.imageSmall1}>
                  <Text style={styles.text}>MASP</Text>
                </ImageBackground>
              </Link>
            </View>
            <View style={styles.imageContainer}>
              <Link href="/pontoTuristico">
                <ImageBackground source={require('@/assets/images/lapa.jpg')} style={styles.imageSmall1}>
                  <Text style={styles.text}>Lapa</Text>
                </ImageBackground>
              </Link>
            </View>
          </ScrollView>
        </View>

        {/* Seção de restaurantes */}
        <View style={styles.col}>
          <Text style={styles.title}>Restaurantes no <Text style={styles.c1}>Sudeste</Text></Text>
          <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false}>
            <View style={styles.imageContainer}>
              <Link href="/pontoTuristico">
                <ImageBackground source={require('@/assets/images/tembui.jpg')} style={styles.imageSmall1}>
                  <Text style={styles.text1}>Tembui</Text>
                </ImageBackground>
              </Link>
            </View>
            <View style={styles.imageContainer}>
              <Link href="/pontoTuristico">
                <ImageBackground source={require('@/assets/images/tembui.jpg')} style={styles.imageSmall1}>
                  <Text style={styles.text1}>Tembui</Text>
                </ImageBackground>
              </Link>
            </View>
            <View style={styles.imageContainer}>
              <Link href="/pontoTuristico">
                <ImageBackground source={require('@/assets/images/tembui.jpg')} style={styles.imageSmall1}>
                  <Text style={styles.text1}>Tembui</Text>
                </ImageBackground>
              </Link>
            </View>
            <View style={styles.imageContainer}>
              <Link href="/pontoTuristico">
                <ImageBackground source={require('@/assets/images/tembui.jpg')} style={styles.imageSmall1}>
                  <Text style={styles.text1}>Tembui</Text>
                </ImageBackground>
              </Link>
            </View>
          </ScrollView>
        </View>

        <View style={styles.blueLine} />
      </View>

     
        <Text style={styles.title}>Busque por outras Regiões</Text>
    
     
        <View style={styles.card1}>
          <Link href="/regiaoSul">
            <Image source={require('@/assets/images/curitiba.jpg')} style={styles.image2} />
            <Text style={styles.regiaoText}>Sul</Text>
          </Link>
        </View>
        <View style={styles.card1}>
          <Link href="/regiaoCentro">
            <Image source={require('@/assets/images/df.jpg')} style={styles.image2} />
            <Text style={styles.regiaoText}>Centro-Oeste</Text>
          </Link>
        </View>
        <View style={styles.card1}>
          <Link href="/regiaoNordeste">
            <Image source={require('@/assets/images/sm.jpg')} style={styles.image2} />
            <Text style={styles.regiaoText}>Nordeste</Text>
          </Link>
        </View>
        <View style={styles.card1}>
          <Link href="/regiaoNorte">
            <Image source={require('@/assets/images/amazonia.jpg')} style={styles.image2} />
            <Text style={styles.regiaoText}>Norte</Text>
          </Link>
        </View>
      </ScrollView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  logoGrande: {
    width: 250,
    height: 180,
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
    flexDirection: 'column',
  },
  blueLine: {
    height: 2.5,
    width: 300,
    backgroundColor: 'blue',
    marginVertical: 10,
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 40,
  },
  titulo: {
    fontSize: 24,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 15,
    fontWeight: 'bold',
  },
  a: {
    fontSize: 25,
    marginLeft: 13,
    fontWeight: 'bold',
  },
  c: {
    fontSize: 25,
    marginLeft: 5,
    fontWeight: 'bold',
    color: '#0056B3',
  },
  c1: {
    fontSize: 18,
    marginLeft: 5,
    fontWeight: 'bold',
    color: '#0056B3',
  },
  image: {
    width: 320,
    height: 210,
    marginBottom: 10,
    marginHorizontal: 5,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 7,
    overflow: 'hidden',
  },
  textCenter: {
    textAlign: 'left',
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
    color: 'white',
    marginBottom: 6,
    fontSize: 14,
    fontWeight: 'bold',
  },
  imageSmall1: {
    width: 150,
    height: 100,
    marginHorizontal: 5,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 7,
  },
  imageContainer: {
    marginRight: 10, // Ajuste o espaçamento entre as imagens
  },
  card1: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  image2: {
    width: 100,
    height: 100,
    borderRadius: 7,
  },
  regiaoText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

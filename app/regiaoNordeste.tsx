import { Link } from 'expo-router';
import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function regiaoNordeste() {
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
        <Text style={styles.a}>Explore a região <Text style={styles.c}>Nordeste</Text></Text>
      </View>

      <View style={styles.col}>
        {/* Imagem principal */}
        <View style={styles.lugar2}>
          <ScrollView horizontal={true} style={styles.row} showsHorizontalScrollIndicator={true}>
            <Image source={require('@/assets/images/recife.jpg')} style={styles.image}/>
            <Image source={require('@/assets/images/serracapivara.jpg')} style={styles.image} />
            <Image source={require('@/assets/images/elevadorlacerda.jpg')} style={styles.image} />
            <Image source={require('@/assets/images/ilheus.jpg')} style={styles.image} />
            <Image source={require('@/assets/images/sm.jpg')} style={styles.image} />

          </ScrollView>
        </View>

        {/* Texto descritivo */}
        <Text style={styles.titulo}>A Cultura Rica e Diversificada do Nordeste</Text>
<Text style={[styles.b, styles.textCenter]}>
  A Região Nordeste do Brasil é conhecida por sua rica diversidade cultural, histórica e paisagística. Composta por nove estados – Bahia, Pernambuco, Ceará, Maranhão, Paraíba, Sergipe, Alagoas, Piauí e Rio Grande do Norte – o Nordeste é o berço de manifestações culturais icônicas e de uma gastronomia singular, além de abrigar alguns dos destinos turísticos mais procurados do país.
</Text>

        {/* Linha Azul */}
        <View style={styles.blueLine} />

        {/* Seção de pontos turísticos */}
        <View style={styles.col}>
          <Text style={styles.title}>Turistando no <Text style={styles.c1}>Nordeste</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.imageContainer}>
            <Link href="/pontoTuristico">
              <ImageBackground source={require('@/assets/images/museudoamanhajpg.jpg')} style={styles.imageSmall1}>
                <Text style={styles.text}>Museu do Amanhã</Text>
              </ImageBackground>
            </Link>
            </View>
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
          <Text style={styles.title}>Restaurantes no <Text style={styles.c1}>Nordeste</Text></Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
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

      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={styles.title1}>Busque por Região</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          <Link href="/regiaoSudeste" style={styles.card2}>
            <View style={styles.card1}>
              <Image source={require('@/assets/images/lapa.jpg')} style={styles.image2} />
              <Text style={styles.regiaoText}>Sudeste</Text>
            </View>
          </Link>
          <Link href="/regiaoSul" style={styles.card2}>
            <View style={styles.card1}>
              <Image source={require('@/assets/images/curitiba.jpg')} style={styles.image2} />
              <Text style={styles.regiaoText}>Sul</Text>
            </View>
          </Link>
          <Link href="/regiaoCentro" style={styles.card2}>
            <View style={styles.card1}>
              <Image source={require('@/assets/images/df.jpg')} style={styles.image2} />
              <Text style={styles.regiaoText}>Centro-Oeste</Text>
            </View>
          </Link>
          <Link href="/regiaoNordeste" style={styles.card2}>
            <View style={styles.card1}>
              <Image source={require('@/assets/images/sm.jpg')} style={styles.image2} />
              <Text style={styles.regiaoText}>Nordeste</Text>
            </View>
          </Link>
          <Link href="/regiaoNorte" style={styles.card2}>
            <View style={styles.card1}>
              <Image source={require('@/assets/images/amazonia.jpg')} style={styles.image2} />
              <Text style={styles.regiaoText}>Norte</Text>
            </View>
          </Link>
        </ScrollView>
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
  imageContainer: {
    marginRight: 15,
    marginBottom: 20,
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
    color: '#FF4500',
  },
  c1: {
    fontSize: 18,
    marginLeft: 5,
    fontWeight: 'bold',
    color: '#FF4500',
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
    width: 170,
    height: 150,
    marginHorizontal: 5,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 7,
    overflow: 'hidden',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
  },
  section: {
    marginBottom: 20,
    marginHorizontal:10,
  },
  card1: {
    width: 170,
    marginLeft: 10,
  },
  card2: {
    width: 170,
    marginLeft: 7,
    marginRight: 9,
    marginBottom: 30,
    alignItems: 'center',
  },
  image2: {
    width: 170,
    height: 170,
    borderRadius: 10,
    marginBottom: 3,
    marginTop:7,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginLeft:50,
    
    
    
   
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
  
  }, 
  horizontalScroll: {
    flexDirection: 'row',
},
});

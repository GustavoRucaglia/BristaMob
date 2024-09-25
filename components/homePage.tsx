import Header from '@/components/Header';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, View, Image, Text, StyleSheet, ImageBackground } from 'react-native';
import { Dimensions } from 'react-native';
import { Carrossel } from './carrossel';


const { width } = Dimensions.get('window');
export const HomePage = () => {
  return (
    <>
    <Header />
      <StatusBar hidden={true} />
      <ScrollView style={styles.container}>
          <ImageBackground source={{ uri: 'https://tourb.com.br/img/lugares/rio-de-janeiro/praia-vermelha.jpg' }} style={styles.imageBig}>
            <Text style={styles.inicio}>Conheça os principais pontos turísticos do Rio de Janeiro</Text>
          </ImageBackground>
          <View style={styles.section}>
            <Carrossel title='Conheça lugares incríveis!' category='' />
          <View style={styles.col}>
            <Text style={styles.title}>Aproveite em família!</Text>
            <ScrollView horizontal={true} style={styles.row} showsHorizontalScrollIndicator={false}>
              <ImageBackground source={require('@/assets/images/portodegalinhas.jpg')} style={styles.imageSmall} ><Text style={styles.text}>Porto de Galinhas</Text></ImageBackground>

              <ImageBackground source={require('@/assets/images/tembui.jpg')} style={styles.imageSmall} ><Text style={styles.text}>Restaurantes</Text></ImageBackground>
              
              <ImageBackground source={require('@/assets/images/curitiba.jpg')} style={styles.imageSmall} ><Text style={styles.text}>Curitiba</Text></ImageBackground>
              <ImageBackground source={require('@/assets/images/df.jpg')} style={styles.imageSmall} ><Text style={styles.text}>Distrito Federal</Text></ImageBackground>
            </ScrollView>
          </View>
          <View style={styles.col}>
            <Text style={styles.title}>Sonhe com sua próxima viagem...</Text>
            <ScrollView horizontal={true} style={styles.row} showsHorizontalScrollIndicator={false}>
            <Link href={'/visiterj'}>
              <ImageBackground source={require('@/assets/images/elevadorlacerda.jpg')} style={styles.imageSmall}><Text style={styles.text}>Elevador da Lacerda</Text></ImageBackground>
            </Link>
              <ImageBackground source={require('@/assets/images/sm.jpg')} style={styles.imageSmall}><Text style={styles.text}>Simplicio Mendes</Text></ImageBackground>
              <ImageBackground source={require('@/assets/images/copacabana.jpg')} style={styles.imageSmall} ><Text style={styles.text}>Copacabana</Text></ImageBackground>
              <ImageBackground source={require('@/assets/images/lapa.jpg')} style={styles.imageSmall}><Text style={styles.text}>Lapa</Text></ImageBackground>
            </ScrollView>
          </View>
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
  inicio: {
    color: '#E6E6E6',
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'center',
  },
  imageBig: {
    width: width,
    height: 270,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 30,
    marginBottom: 20,
    
   
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#0056B3',
    height: 50,
    position: 'relative',
  },
  logo: {
    width: 280,
    height: 150,
    resizeMode: 'contain',
    position: 'absolute',
    left: -50,
    top: -45,
  },
  section: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  imageSmall: {
    width: 145,
    height: 135,
    borderRadius: 20,
    marginHorizontal: 6,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    color:'white',
    marginBottom: 5,
    fontSize: 15,
    fontWeight:'bold',
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,

  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  row: {
    flexDirection: 'row',
    height: 'auto',
  },
  col: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
    paddingBottom:10,
    paddingTop: 5,
      backgroundColor: '#fff',
      borderRadius: 8,
      paddingHorizontal: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 3,
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#999',
  },
});



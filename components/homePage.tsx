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
 <ScrollView>
      {/* Título principal e ícone */}
      <View style={styles.azul}>
        {/* Exibindo a logo grande */}
        <Image 
          source={require('@/assets/images/brazurismotuc.png')} // Logo grande
          style={styles.logoGrande} // Estilo ajustado para a logo grande
        />
      </View>
   
      <StatusBar hidden={false} />
      <ScrollView style={styles.container}>
          <ImageBackground source={{ uri: 'https://tourb.com.br/img/lugares/rio-de-janeiro/praia-vermelha.jpg' }} style={styles.imageBig}>
            <Text style={styles.inicio}>Conheça os principais pontos turísticos do Rio de Janeiro</Text>
          </ImageBackground>
          <View style={styles.section}>
            <Carrossel title='Conheça lugares incríveis!' category='' />
            <Carrossel title='Aproveite em família!' category='Parque' />
            <Carrossel title='Conheça restaurantes' category='Restaurante' />
        </View>
      </ScrollView>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  logoGrande: {
    width: 250,
    height: 180,
    marginTop: 46,
    borderRadius: 50,
    marginHorizontal: 6,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  azul: {
    backgroundColor: '#0056B3',
    height: 130,
    alignItems: 'center',
    justifyContent: 'center',
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



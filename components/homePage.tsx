import Header from '@/components/Header';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, View, Image, Text, StyleSheet, ImageBackground } from 'react-native';
import { Dimensions } from 'react-native';
import { Carrossel } from './carrossel';
import AsyncStorage from '@react-native-async-storage/async-storage';


const { width } = Dimensions.get('window');
export const HomePage = () => {
  const [token, setToken] = useState<string | null>(null);

  const getUserData = async () => {
    const token = await AsyncStorage.getItem('@user_token');
    setToken(token);
  };

  getUserData();



  
  return (
    <>
 <ScrollView>
      <Link href={'/quemSomos'}>
      <View style={styles.azul}>
        <Image 
          source={require('@/assets/images/brazurismotuc.png')}
          style={styles.logoGrande}
        />
      </View>
      </Link>
   
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
  azul: {
    backgroundColor: '#0056B3',
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', // Mudança aqui
  },
  logoGrande: {
    width: 250,
    height: 180,
    marginTop: 36,
    borderRadius: 50,
    justifyContent: 'center', // Alterado de 'flex-end' para 'center'
    alignItems: 'center',
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



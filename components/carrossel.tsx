import { getPontoInterreseFilter, PontoInterrese } from '@/app/utils/api-request';
import Header from '@/components/Header';
import { useQuery } from '@tanstack/react-query';
import { Link, useNavigation, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, View, Image, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';

interface propsCarrossel{
    title: string,
    category: string,
}


const { width } = Dimensions.get('window');
export const Carrossel = ({title, category}: propsCarrossel) => {

  const navigation = useNavigation(); 
    const { data, error, isLoading, refetch } = useQuery({
        queryKey: ["pontos", category],
        queryFn: () => getPontoInterreseFilter(category),
        staleTime: 5 * 60 * 1000,     
      });

  return (
   
          <View style={styles.col}>
            <Text style={styles.title}>{title }</Text>
            <ScrollView horizontal={true} style={styles.row} showsHorizontalScrollIndicator={false}>
                 {data?.map((pontos: PontoInterrese) => (
                   <Link  href={{
                    pathname: '/pontoTuristico',
                    params: { id: [pontos.id] }
                  }} key={pontos.id}>
                    <ImageBackground key={pontos.id} source={{ uri: pontos.fotos }} style={styles.imageSmall}>
                      <Text style={styles.text}>{pontos.nome}</Text>
                  </ImageBackground>
                  </Link>
                ))} 
            </ScrollView>
          </View>
         
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



import React, { useState, useEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useQuery } from '@tanstack/react-query';
import { getPontoInterreseById, PontoInterrese } from '@/app/utils/api-request';
import { useRoute } from '@react-navigation/native';
import { Carrossel } from './carrossel';

interface RouteParams {
  id: string;
}

export default function PontoTuristicoPage() {
  const route = useRoute();
  const { id } = route.params as RouteParams;

  const [validId, setValidId] = useState<number | null>(null);

  useEffect(() => {
    if (id) {
      setValidId(Number(id)); // Garantindo que o id seja um número
    }
  }, [id]);

  const { data, error, isLoading, refetch } = useQuery<PontoInterrese>({
    queryKey: ['pontosByIds', id],
    queryFn: () => getPontoInterreseById(validId || 0),
    staleTime: 10 * 1000,
  }, 
);



  if (isLoading) {
    return <Text>Carregando...</Text>;
  }

  if (error) {
    return <Text>Erro ao carregar o ponto turístico.</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container1}>
      <View style={styles.azul}>
        <Image 
          source={require('@/assets/images/brazurismotuc.png')} 
          style={styles.logoGrande} 
        />
      </View>

      <View style={styles.header}>
        <Text style={styles.a}>Explore {data?.nome}</Text>
        <MaterialIcons name="bookmark-border" size={24} color="black" style={styles.icon} />
      </View>

      <View style={styles.lugar2}>
        {data?.fotos && <Image source={{ uri: data?.fotos }} style={styles.image} />}
      </View>

      <Text style={styles.titulo}>Conheça mais sobre {data?.nome}</Text>
      <Text style={[styles.b, styles.textCenter]}>{data?.descricao}</Text>

      <Text style={styles.titulo}>Localização e Contato</Text>
      <Text style={[styles.b, styles.textCenter]}>Av. Paulista, 1578 - Bela Vista, São Paulo - SP</Text>
      <Text style={[styles.b, styles.textCenter]}>(11) 95678-1353</Text>

      <View style={styles.blueLine} />

      <View style={styles.col}>
        <Carrossel title={`Conheça mais ${data?.categoria}`} category={data?.categoria || ''} />
      </View>

      <View style={styles.col}>
        <ScrollView horizontal style={styles.row} showsHorizontalScrollIndicator={false}>
          <Carrossel title={`Explore pelo ${data?.regiao}`} category={data?.regiao || ''} />
        </ScrollView>
        <View style={styles.blueLine} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container1: {
    padding: 0,
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
  },
  blueLine: {
    height: 2.5,
    width: 300,
    backgroundColor: '#0056B3',
    marginVertical: 10,
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  titulo: {
    fontSize: 24,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 15,
    fontWeight: 'bold',
  },
  icon: {
    marginRight: 20,
  },
  a: {
    fontSize: 25,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  image: {
    width: 360,
    height: 230,
    borderRadius: 10,
    marginBottom: 10,
  },
  textCenter: {
    textAlign: 'left',
    padding: 10,
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

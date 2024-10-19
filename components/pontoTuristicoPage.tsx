import React, { useState, useEffect } from 'react';
import { Image, ImageBackground, Modal, Pressable, ScrollView, StyleSheet, Text, TextInput,  View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useQuery } from '@tanstack/react-query';
import { getPontoInterreseById, PontoInterrese } from '@/app/utils/api-request';
import { useRoute } from '@react-navigation/native';
import { Carrossel } from './carrossel';
import { Link, useRouter } from 'expo-router';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

interface RouteParams {
  id: string;
}

export default function PontoTuristicoPage() {
  const route = useRoute();
  const { id } = route.params as RouteParams;
  const router = useRouter();
  const [validId, setValidId] = useState<number | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [titulo, setTitulo] = useState('');

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const [secondModalVisible, setSecondModalVisible] = useState(false);

  const toggleSecondModal = () => {
    setSecondModalVisible(!secondModalVisible);
  };

  const handleCreateRoteiro = () => {
    console.log('Roteiro criado com título:', titulo);
    toggleModal(); // Fechar modal após criar o roteiro
  };

  useEffect(() => {
    if (id) {
      setValidId(Number(id)); // Garantindo que o id seja um número
    }
  }, [id]);

  const { data, error, isLoading, refetch } = useQuery<PontoInterrese>({
    queryKey: ['pontosByIds', id],
    queryFn: () => getPontoInterreseById(validId || 0),
    staleTime: 10 * 1000,
  });

  if (isLoading) {
    return <Text>Carregando...</Text>;
  }

  if (error) {
    return <Text>Erro ao carregar o ponto turístico.</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container1}>
    <View style={styles.header}>
  <TouchableOpacity onPress={() => router.push('/')}>
    <Image source={require('@/assets/images/brazurismotuc.png')} style={styles.logoGrande} />
  </TouchableOpacity>
</View>

      <Modal visible={modalVisible} animationType="slide" transparent={true} onRequestClose={toggleModal}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Pressable onPress={toggleModal}>
                <Entypo name="cross" size={24} color="black" />
              </Pressable>
            </View>

            <Image source={require('@/assets/images/B (3).png')} style={styles.modalLogo} />

            <Modal visible={secondModalVisible} animationType="slide" transparent={true} onRequestClose={toggleSecondModal}>
              <View style={styles.modalOverlay1}>
                <View style={styles.modalContent1}>
                  <View style={styles.modalHeader1}>
                    <TouchableOpacity onPress={toggleSecondModal}>
                      <Entypo name="cross" size={24} color="black" />
                    </TouchableOpacity>
                  </View>

                  <ImageBackground source={require('@/assets/images/B (3).png')} style={styles.modalLogo} />
                  <Text style={styles.modalTitle}>Crie aqui um novo Roteiro!</Text>
                  <Text style={styles.label}>Título do Roteiro</Text>
                  <TextInput style={styles.input} placeholder="Adicione um título para o seu roteiro" value={titulo} onChangeText={setTitulo} />

                  <TouchableOpacity style={styles.createButton} onPress={handleCreateRoteiro}>
                    <Text style={styles.createButtonText}>Criar roteiro</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>

            <Text style={styles.modalTitle1}>Adicione dentro de roteiros já criados por você!</Text>
            <Link href="/dentroRoteiro" onPress={toggleModal}>
              <TouchableOpacity onPress={() => router.push('/')} style={styles.itemContainer}>
                <Image source={{ uri: 'https://tourb.com.br/img/lugares/rio-de-janeiro/praia-vermelha.jpg' }} style={styles.itemImage} />
                <Text style={styles.roteiro}>Roteiro para o Rio de Janeiro</Text>
              </TouchableOpacity>
            </Link>

            <Text style={styles.modalTitle}>Adicione a um novo Roteiro!</Text>

            <TouchableOpacity onPress={toggleSecondModal}>
              <View style={styles.itemContainer1}>
                <View style={styles.iconCircle}>
                  <Entypo name="plus" size={24} color="black" />
                </View>
              </View>
            </TouchableOpacity>
            <Text style={styles.roteiro1}>Novo Roteiro</Text>
          </View>
        </View>
      </Modal>

      <View style={styles.content}>
        <Text style={styles.title}>Explore {data?.nome}</Text>
        <View style={styles.imageContainer}>
          {data?.fotos && <Image source={{ uri: data?.fotos }} style={styles.image} />}
        </View>

        <Text style={styles.sectionTitle}>Veja mais sobre</Text>
        <Text style={styles.description}>{data?.descricao}</Text>

        <Text style={styles.sectionTitle}>Localização e Contato</Text>
        <Text style={styles.contact}>Av. Paulista, 1578 - Bela Vista, São Paulo - SP</Text>
        <Text style={styles.contact}>(11) 95678-1353</Text>

        <View style={styles.separator} />

        <Carrossel title={`Conheça mais ${data?.categoria}`} category={data?.categoria || ''} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Carrossel title={`Explore pelo ${data?.regiao}`} category={data?.regiao || ''} />
        </ScrollView>
        <View style={styles.separator} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container1: {
    padding: 0,
  },
  header: {
    backgroundColor: '#0056B3',
    alignItems: 'center',
    justifyContent: 'center',
    height: 120,
  },
  logoGrande: {
    width: 280,
    height: 160,
    marginTop: 36,
    borderRadius: 50,
  },
  content: {
    paddingHorizontal: 20,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 350,
    height: 270,
    borderRadius: 10,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 15,
    color: '#0056B3',
    alignItems: 'center',
    marginBottom: '5%',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
    color: '#333',
  },
  contact: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: '5%',
  },
  separator: {
    height: 2,
    backgroundColor: '#0056B3',
    marginVertical: 20,
    marginBottom: '10%',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    width: '90%',
  },
  modalHeader: {
    alignSelf: 'flex-end',
  },
  modalLogo1: {
    width: 90,
    height: 70,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: '#0056B3',
  },
  modalTitle1: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    textAlign: 'center',
  },
  itemContainer: {
    marginVertical: 10,
  },
  itemContainer1: {
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconCircle: {
    width: 60,
    height: 60,
    backgroundColor: '#0056B3',
    borderRadius: 30, // Torna o ícone circular
    marginLeft:"100%"
  },
  roteiro: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#555',
  },
  roteiro1: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0056B3',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    width: '100%',
  },
  createButton: {
    backgroundColor: '#0056B3',
    padding: 12,
    borderRadius: 8,
    marginVertical: 10,
  },
  createButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  modalOverlay1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent1: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    width: '90%',
  },
  modalHeader1: {
    alignSelf: 'flex-end',
  },
  modalLogo: {
    width: 90,
    height: 70,
    marginBottom: 10,
  },
  modalTitle3: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: '#0056B3',
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
    color: '#333',
  },
  input4: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    width: '100%',
  },
  createButton5: {
    backgroundColor: '#0056B3',
    padding: 12,
    borderRadius: 8,
    marginVertical: 10,
  },
  createButtonText6: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  modalTitle2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    textAlign: 'center',
  },
  itemContainer2: {
    marginVertical: 10,
  },
  itemImage: {
    width: 350,
    height: 200,
    borderRadius: 10,
  },
  roteiro2: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#555',
    marginTop: 5,
  },
});

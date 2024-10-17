import React, { useState, useEffect } from 'react';
import { Image, ImageBackground, Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useQuery } from '@tanstack/react-query';
import { getPontoInterreseById, PontoInterrese } from '@/app/utils/api-request';
import { useRoute } from '@react-navigation/native';
import { Carrossel } from './carrossel';
import { Link, useRouter } from 'expo-router';
import { Entypo } from '@expo/vector-icons';

interface RouteParams {
  id: string;
}

export default function PontoTuristicoPage() {
  const route = useRoute();
  const { id } = route.params as RouteParams;

  const [validId, setValidId] = useState<number | null>(null);
  const router = useRouter();
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
    console.log("Roteiro criado com título:", titulo);
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
      <Modal
  visible={modalVisible}
  animationType="slide"
  transparent={true}
  onRequestClose={toggleModal}
>
  <View style={styles.modalOverlay}>
    <View style={styles.modalContent}>
      {/* Cabeçalho do Modal */}
      <View style={styles.modalHeader}>
      <Pressable onPress={toggleModal}>
          <Entypo name="cross" size={24} color="black" />
        </Pressable>
      </View>

      <Image 
        source={require('@/assets/images/B (3).png')} 
        style={styles.modalLogo} 
      />
      
      <Modal
  visible={secondModalVisible}
  animationType="slide"
  transparent={true}
  onRequestClose={toggleSecondModal}
>
  <View style={styles.modalOverlay1}>
    <View style={styles.modalContent1}>
      <View style={styles.modalHeader1}>
        <TouchableOpacity onPress={toggleSecondModal}>
          <Entypo name="cross" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Conteúdo do novo modal aqui */}
      <ImageBackground source={require('@/assets/images/B (3).png')} style={styles.modalLogo} />
      <Text style={styles.modalTitle}>Crie aqui um novo Roteiro!</Text>
      <Text style={styles.label}>Título do Roteiro</Text>
      <TextInput
        style={styles.input}
        placeholder="Adicione um título para o seu roteiro"
        value={titulo}
        onChangeText={setTitulo}
      />
    
      <TouchableOpacity style={styles.createButton}>
        <Text style={styles.createButtonText}>Criar roteiro</Text>
      </TouchableOpacity>
      
    </View>
      </View>
    </Modal>

        

          {/* Adicione dentro de Roteiro já criados por você! */}
          <Text style={styles.modalTitle1}>Adicione dentro de roteiros já criados por você!</Text>
          <Link href="/dentroRoteiro" onPress={toggleModal}>
      
          <View style={styles.itemContainer}>
            <Image 
              source={{ uri: 'https://tourb.com.br/img/lugares/rio-de-janeiro/praia-vermelha.jpg' }} 
              style={styles.itemImage} 
            />
            <Text style={styles.roteiro}>Roteiro para o Rio de Janeiro</Text>
          </View>
          </Link>
        
          <Text style={styles.modalTitle}>Adicione a um novo Roteiro!</Text>

          
          <TouchableOpacity onPress={toggleSecondModal}>
      <View style={styles.itemContainer1}>
        <View style={styles.iconCircle3}>
          <Entypo name="plus" size={24} color="black" />
        </View>
      </View>
    </TouchableOpacity>
    <Text style={styles.roteiro1}>Novo Roteiro</Text>

            
        </View>
      </View>
    </Modal>


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
  itemImage: {
    width: 60, // Largura da imagem
    height: 60, // Altura da imagem
    borderRadius: 5, // Bordas arredondadas na imagem
    marginRight: 10, // Espaçamento entre a imagem e o texto
  },
  roteiro: {
    fontSize: 16, // Tamanho do texto
    fontWeight: 'bold', // Texto em negrito
    color: '#333', // Cor do texto
    flex: 1, // O texto ocupa o espaço restante
  },
  roteiro1:{
    fontSize: 15, // Tamanho reduzido do texto
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '-56%',
    color: '#333',
    marginLeft: '-18%'
    
  
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
    width: 337,
    height: 230,
    borderRadius: 4,
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
 
  iconCircle: {
    width: 50,
    height: 50,
    backgroundColor: 'lightgray',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    marginRight: 15,
  },
  iconCircle3: {
    width: 50,
    height: 50,
    backgroundColor: 'lightgray',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    marginRight: 15,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '100%',
    height:'100%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginTop:'140%'
  },
  modalHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  modalOverlay1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent1: {
    width: '100%',
    height:'60%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginTop:'140%'
  },
  modalHeader1: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  modalLogo: {
    width: 600,
    height: 180,
    marginTop: -105, // Margem superior para o espaçamento
    borderRadius: 50,
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'center', // Centraliza a imagem
    marginBottom: -50,
  },
  modalTitle1: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'black',
    marginLeft:'-3%',
    marginTop:'7%'
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center', 
    marginVertical: 10, 
    marginTop: '7%',
    color:'black',
  },
  label: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    marginRight:'60%'
  },

  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    width:'96%'
  },
  createButton: {
    backgroundColor: '#0056b3',
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 180,
    height: 48,
    marginLeft: '2%',
    marginTop: 20,
  },
  createButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },

  itemContainer: {
    width: '100%', 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 20,
    backgroundColor: '#fff', 
    borderRadius: 10, 
    overflow: 'hidden',
    elevation: 5, 
    padding: 10, 
    marginHorizontal: 0, 
  },
  itemContainer1: {
    width: 302, 
    marginBottom: 20,
    marginHorizontal: 0,
    backgroundColor: '#fff', 
    borderRadius: 15, 
    overflow: 'hidden',
    elevation: 5,
    padding: 10, 
    height: '35%',
    marginLeft:10,
  }
});

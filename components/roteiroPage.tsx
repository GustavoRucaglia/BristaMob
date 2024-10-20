import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet, ImageBackground, FlatList, Image, Dimensions, ScrollView, Pressable, GestureResponderEvent } from 'react-native';
import { Entypo } from '@expo/vector-icons'; // Ícone de "X" para fechar o modal
import { Link, useRouter } from 'expo-router';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQuery } from '@tanstack/react-query';
import { fetchUserDetails, PostRoteiro, Roteiro, User } from '@/app/utils/auth';
import { PontoInterrese } from '@/app/utils/api-request';


const screenWidth = Dimensions.get('window').width;


const RoteiroPage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [titulo, setTitulo] = useState('');
  const [sortBy, setSortBy] = useState('recent');
  const [token, setToken] = useState('');
  const router = useRouter();


  const getToken = async () => {
    const token1 = await AsyncStorage.getItem('@user_token');
    if(token1){
      setToken(token1);
    }
    else{
      console.log('Token não encontrado');
    }
  }

  getToken();

  const { isLoading, isError, data, error, refetch } = useQuery<User>({
    queryKey: ['userData'],
    queryFn: () => fetchUserDetails(token),
    enabled: !!token,
  });

  useEffect(() => {
    refetch();
  }, []);

  const handleSubmit = async (e: GestureResponderEvent) => {
    e.preventDefault();
    try {
      if(token){
        await PostRoteiro(titulo, token);
      }
      setModalVisible(false);
      refetch()
      router.push('/roteiro');

    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  }; 
 

  const toggleModal = () => {
    setModalVisible(!modalVisible);
    console.log(data?.password);
  };

  
  const renderItem = ({ item }: { item: Roteiro}) => (

    <TouchableOpacity  onPress={() => router.push(`/dentroRoteiro?id=${item?.id}`)} >
    <View style={styles.itemContainer}>
      <Image source={{ uri: 'https://tourb.com.br/img/lugares/rio-de-janeiro/praia-vermelha.jpg' }} style={styles.itemImage} />
           <Text style={styles.itemText}>{item?.name}</Text>
        
      </View>
      </TouchableOpacity>

  );

  const toggleSortOrder = () => {
    setSortBy(sortBy === 'recent' ? 'oldest' : 'recent');
  };

  const handlePress = () => {
  
    console.log('Botão flutuante pressionado!');
  };

 

  return (
    <View style={styles.container}>
      <Link href='/'></Link>
      <View style={styles.azul}>
        <ImageBackground source={require('@/assets/images/brazurismotuc.png')} style={styles.imageSmall} />
        </View>
        <View style={styles.filterContainer}>
          <Text style={styles.title}>Roteiros criado por {data?.name}</Text> 
        </View>
        <TouchableOpacity onPress={toggleModal}>
            <View style={styles.iconCircle}>
              <Entypo name="plus" size={24} color="black" />
            </View>
          </TouchableOpacity>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
  <View style={styles.modalOverlay}>
    <View style={styles.modalContent}>
      <Pressable  onPress={() => setModalVisible(false)} style={{zIndex: 10}}>
          <Entypo name="cross" size={30} color="black" />
        </Pressable>
      <ImageBackground source={require('@/assets/images/B (3).png')} style={styles.imageSmall1} />
      <Text style={styles.modalTitle}>Crie aqui o seu próprio Roteiro!</Text>
      <Text style={styles.label}>Título do Roteiro</Text>
      <TextInput
        style={styles.input}
        placeholder="Adicione um título para o seu roteiro"
        onChangeText={setTitulo}
      />
      <Link href="/resultadoBusca" style={styles.bottomLink} onPress={toggleModal}>
  <Text style={styles.bottomLinkText}>Veja aqui lugares para adicionar ao seu novo roteiro</Text>
</Link>
      <TouchableOpacity style={styles.createButton} onPress={handleSubmit}>
        <Text style={styles.createButtonText}>Criar roteiro</Text>
      </TouchableOpacity>
      
    </View>
  </View>
</Modal>

      <FlatList
        data={data ? data.roteiro : []}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={1}
      />
    </View>
  );
};

// Estilos principais ajustados
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'left',
    marginLeft: '2%', // Ajustar a margem para alinhar ao design
  },
  floatingButton: {
    position: 'absolute',
    bottom: 30, 
    right: 30,
    width: 50, // Tamanho reduzido
    height: 50,
    backgroundColor: '#0056B3',
    borderRadius: 25, // Botão circular
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  floatingButtonIcon: {
    color: '#fff', // Cor branca para o ícone
    fontSize: 24,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop:10,
  },
  iconCircle: {
    width: 50,
    height: 50,
    backgroundColor: 'lightgray',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    marginLeft: 20,
    marginBottom: 20,
  },
  filterText: {
    marginLeft: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  iconCircle1: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'lightgray', // Cor do fundo (cinza claro)
    borderRadius: 25, // Para tornar o botão com bordas arredondadas
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    width:180,
    height:40,
    marginLeft:'5%',
    marginBottom:'3%',
    marginTop:'2%'
  },

  itemContainer: {
    width: '96%', // Tamanho ajustado para ocupar toda a largura da tela
    marginBottom: 20,
    marginHorizontal: 0, // Remover margem horizontal
    backgroundColor: '#fff', // Fundo branco
    borderRadius: 15, // Bordas arredondadas
    overflow: 'hidden',
    elevation: 5, // Sombra para dar um destaque ao card
    padding: 10, // Espaçamento interno do card
    height: 260,
    marginLeft:10,
  },

  itemImage: {
    width: '100%',
    height: 160,
    borderRadius: 10, 
  },
  itemText: {
    fontSize: 14, // Tamanho reduzido do texto
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
    color: '#333',
  },
  itemDescription: {
    fontSize: 12, // Tamanho menor para a descrição
    textAlign: 'center',
    marginTop: 10,
    color: '#666', // Cor mais clara para diferenciar do título
  
  },
  bottomLink: {
    marginTop: 10,
  },
  bottomLinkText: {
    fontSize: 14,
    color: '#0056b3',
    fontWeight:'bold'
  },
  

  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo semitransparente
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center', // Centraliza o texto
    marginVertical: 10, // Espaçamento vertical
    marginTop: 15,
    color:'black',
  },

  label: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },

  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  createButton: {
    backgroundColor: '#0056b3',
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 180,
    height: 48,
    marginLeft: '25%',
    marginTop: 20,
  },
  createButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },

  imageSmall1: {
    width: 600,
    height: 180,
    marginTop: -105, // Margem superior para o espaçamento
    borderRadius: 50,
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'center', // Centraliza a imagem
    marginBottom: -78,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end', // Coloca o botão de fechar no canto direito
    paddingRight: 310,
  },
  grid: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  azul: {
    backgroundColor: '#0056B3',
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:"-5%"
},
imageSmall: {
    width: 280,
    height: 180,
    marginTop: 36,
    borderRadius: 50,
    marginHorizontal: 6,
    justifyContent: 'flex-end',
    alignItems: 'center',
},
successMessageContainer: {
  position: 'absolute',
  top: '40%',
  left: 0,
  right: 0,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  padding: 20,
  borderRadius: 10,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 3,
  elevation: 5,
},
successMessageText: {
  fontSize: 18,
  color: '#0056B3',
  marginTop: 10,
  fontWeight: 'bold',
},
successMessageImage: {
  width: 100,
  height: 100,
},

});

export default RoteiroPage;

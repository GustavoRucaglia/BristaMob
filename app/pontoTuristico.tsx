import React, { useState } from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View, TouchableOpacity, TextInput, Modal } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';

export default function PontoTuristico() {
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
    toggleModal(); // Fecha o primeiro modal após criar o roteiro
  };

  return (
    <ScrollView contentContainerStyle={styles.container1}>
      <View style={styles.azul}>
        <Image 
          source={require('@/assets/images/brazurismotuc.png')}
          style={styles.logoGrande}
        />
      </View>

      <View style={styles.header}>
        <Text style={styles.a}>Museu Da Arte Moderna</Text>
        <TouchableOpacity onPress={toggleModal}>
          <View style={styles.iconCircle}>
            <Entypo name="plus" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>

      {/* Modal para adicionar roteiro */}
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
              {/* Botão de "X" para fechar o primeiro modal */}
              <TouchableOpacity onPress={toggleModal}>
                <Entypo name="cross" size={24} color="black" />
              </TouchableOpacity>
            </View>

            <Image 
              source={require('@/assets/images/B (3).png')} 
              style={styles.modalLogo} 
            />

            {/* Segundo modal (novo modal) */}
            <Modal
              visible={secondModalVisible}
              animationType="slide"
              transparent={true}
              onRequestClose={toggleSecondModal}
            >
              <View style={styles.modalOverlay1}>
                <View style={styles.modalContent1}>
                  <View style={styles.modalHeader1}>
                    {/* Botão de "X" para fechar o segundo modal */}
                    <TouchableOpacity onPress={toggleSecondModal}>
                      <Entypo name="cross" size={24} color="black" />
                    </TouchableOpacity>
                  </View>

                  <ImageBackground source={require('@/assets/images/B (3).png')} style={styles.modalLogo} />
                  <Text style={styles.modalTitle2}>Crie aqui um novo Roteiro!</Text>
                  <Text style={styles.label}>Título do Roteiro</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Adicione um título para o seu roteiro"
                    value={titulo}
                    onChangeText={setTitulo}
                  />
                  
                  <TouchableOpacity style={styles.createButton} onPress={handleCreateRoteiro}>
                    <Text style={styles.createButtonText}>Criar roteiro</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
            

            <Text style={styles.modalTitle1}>Adicione isso dentro de roteiros já criados por você!</Text>
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

      <View style={styles.lugar2}>
        <Image source={require('@/assets/images/MASP.jpg')} style={styles.image} />
      </View>

      <Text style={styles.titulo}>Informações Gerais sobre:</Text>
      <Text style={[styles.b, styles.textCenter]}>
        O Museu de Arte de São Paulo Assis Chateaubriand (MASP) é um dos mais importantes e icônicos museus do Brasil e da América Latina. Fundado em 1947 por Assis Chateaubriand e o crítico de arte italiano Pietro Maria Bardi, o MASP se destaca por sua arquitetura modernista e por sua inovadora coleção de arte.
      </Text>

      <Text style={styles.titulo}>Localização e Contato</Text>
      <Text style={[styles.b, styles.textCenter]}>
        Av. Paulista, 1578 - Bela Vista, São Paulo - SP
      </Text>
      <Text style={[styles.b, styles.textCenter]}>
        (11) 95678-1353
      </Text>

      <View style={styles.blueLine} />

      <View style={styles.col}>
        <Text style={styles.title}>Pontos turísticos</Text>
        <ScrollView horizontal={true} style={styles.row} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity onPress={() => router.push('/pontoTuristico')}>
            <ImageBackground source={require('@/assets/images/cristo.jpg')} style={styles.imageSmall}>
              <Text style={styles.text}>Cristo Redentor</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/pontoTuristico')}>
            <ImageBackground source={require('@/assets/images/jalapao.jpg')} style={styles.imageSmall}>
              <Text style={styles.text}>Jalapão</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/pontoTuristico')}>
            <ImageBackground source={require('@/assets/images/ilheus.jpg')} style={styles.imageSmall}>
              <Text style={styles.text}>Museu do Amanhã</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/pontoTuristico')}>
            <ImageBackground source={require('@/assets/images/df.jpg')} style={styles.imageSmall}>
              <Text style={styles.text}>Distrito Federal</Text>
            </ImageBackground>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.col}>
        <Text style={styles.title}>Restaurantes</Text>
        <ScrollView horizontal={true} style={styles.row} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity onPress={() => router.push('/pontoTuristico')}>
            <ImageBackground source={require('@/assets/images/tembui.jpg')} style={styles.imageSmall}>
              <Text style={styles.text1}>Tembui</Text>
            </ImageBackground>
          </TouchableOpacity>
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
    marginTop: '-66%',
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
    marginTop:"2%"
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
    textAlign: 'center', // Centraliza o texto
    marginVertical: 10, // Espaçamento vertical
    marginTop: '10%',
    color:'black',
    marginBottom:'10%'
  },
  modalTitle2: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center', // Centraliza o texto
    marginVertical: 10, // Espaçamento vertical
    marginTop: '3%',
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
    width: '100%', // Usar 100% para alinhar o container à tela
    flexDirection: 'row', // Alinha a imagem e o texto lado a lado
    alignItems: 'center', // Centraliza verticalmente o conteúdo
    marginBottom: 20, // Espaçamento entre os itens
    backgroundColor: '#fff', // Cor de fundo branco
    borderRadius: 10, // Bordas arredondadas
    overflow: 'hidden',
    elevation: 5, // Sombra para destaque
    padding: 10, // Espaçamento interno do container
    marginHorizontal: 0, // Remover margem horizontal
  },
  itemContainer1: {
    width: 302, // Tamanho ajustado para ocupar toda a largura da tela
    marginBottom: 20,
    marginHorizontal: 0, // Remover margem horizontal
    backgroundColor: '#fff', // Fundo branco
    borderRadius: 15, // Bordas arredondadas
    overflow: 'hidden',
    elevation: 5, // Sombra para dar um destaque ao card
    padding: 10, // Espaçamento interno do card
    height: '33%',
    marginLeft:10,
  },

});

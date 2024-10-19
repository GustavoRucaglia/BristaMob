import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Importa ícones se necessário
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from 'expo-router';

export default function TabTwoScreen() {
  return (
    <ScrollView style={{ backgroundColor: '#fff' }}>
      {/* Banner superior */}
      <View style={styles.banner}>
        <ImageBackground source={require('@/assets/images/brazurismotuc.png')} style={styles.imageSmall} />
      </View>

      {/* Seção "Quem Somos" */}
      <View style={styles.container}>
        
        <View style={styles.lineContainer}>
          <AntDesign style={styles.arrowleft} name="arrowleft" size={24} color="black"  />
       
      </View>
     
        <Text style={styles.title}>QUEM SOMOS?</Text>
        <Text style={styles.instructions}>
          Brazurista é o conjunto de um sistema web e um aplicativo para dispositivo móvel que facilita a criação de roteiros. Possui a funcionalidade de acessar pontos turísticos e restaurantes por todo o Brasil.Onde o usuário pode adicionar os locais de sua preferencia a um roteiro gratuito,feito por ele mesmo!
        </Text>
        <ImageBackground source={require('@/assets/images/Design sem nome.png')} style={styles.imageSmall1} />
        <Text style={styles.instructions}>
          No Brazurista, entendemos que não há uma única maneira "certa" de viajar. Por isso, oferecemos a liberdade para que você crie seu próprio roteiro de viagem, personalizado de acordo com seus interesses e estilo.
        </Text>
      </View>

      {/* Divisória com ícone */}
      <View style={styles.lineContainer}>
        <FontAwesome name="globe" size={24} color="#0056b3" />
        <View style={styles.line}></View>
      </View>

      {/* Seção "Nosso Objetivo" */}
      <View style={styles.container}>
        <Text style={styles.title}>NOSSO OBJETIVO?</Text>
        <Text style={styles.instructions}>
          Queremos inspirar e empoderar nossos clientes a explorar o mundo de maneira autêntica e significativa. Acreditamos que as melhores viagens não só enriquecem a vida do viajante, mas também têm um impacto positivo nas comunidades locais.
        </Text>
        <Text style={styles.instructions}>
          Junte-se a nós e comece a planejar a viagem dos seus sonhos com o Brazurista. Seu próximo destino espera por você!
        </Text>
      </View>

      {/* Nova linha divisória */}
      <View style={styles.lineContainer}>
        <FontAwesome name="plane" size={24} color="#0056B3" />
        <View style={styles.line}></View>
      </View>

      {/* Seção "Nossa Equipe" */}
      <View style={styles.container}>
        <Text style={styles.title}>NOSSA EQUIPE</Text>
        
        {/* Membro 1 */}
        <View style={styles.imageContainer}>
          <ImageBackground source={require('@/assets/images/shared image (3).jpg')} style={styles.imageLarge} />
          <Text style={styles.memberTitle}>Gustavo Rucaglia Bozetti Santiago Nº14</Text>
          <Text style={styles.instructions}>Programador, Back-end</Text>
        </View>

        {/* Membro 2 */}
        <View style={styles.imageContainer}>
          <ImageBackground source={require('@/assets/images/shared image (2).jpg')} style={styles.imageLarge} />
          <Text style={styles.memberTitle}>Italo Renan Monteiro da Silva Nº15</Text>
          <Text style={styles.instructions}>Banco de dados, Programador e Ajudante da Documentação</Text>
        </View>

        {/* Membro 3 */}
        <View style={styles.imageContainer}>
          <ImageBackground source={require('@/assets/images/shared image.jpg')} style={styles.imageLarge} />
          <Text style={styles.memberTitle}>Jonatas Nascimento Martins Nº16</Text>
          <Text style={styles.instructions}>Programador e Design</Text>
        </View>

        {/* Membro 4 */}
        <View style={styles.imageContainer}>
          <ImageBackground source={require('@/assets/images/shared image (5).jpg')} style={styles.imageLarge} />
          <Text style={styles.memberTitle}>Karen Cristiny Oliveira Araujo Nº23</Text>
          <Text style={styles.instructions}>Programadora do Mobile</Text>
        </View>

        {/* Membro 5 */}
        <View style={styles.imageContainer}>
          <ImageBackground source={require('@/assets/images/shared image (1).jpg')} style={styles.imageLarge} />
          <Text style={styles.memberTitle}>Nicolly Clara Damasceno da Silva Nº27</Text>
          <Text style={styles.instructions}>Programadora do Mobile</Text>
        </View>

        {/* Membro 6 */}
        <View style={styles.imageContainer}>
          <ImageBackground source={require('@/assets/images/brazurismotuc.png')} style={styles.imageLarge} />
          <Text style={styles.memberTitle}>Raquel Marques Santana Nº29</Text>
          <Text style={styles.instructions}>Programadora do Mobile</Text>
        </View>

        {/* Membro 7 */}
        <View style={styles.imageContainer}>
          <ImageBackground source={require('@/assets/images/shared image (4).jpg')} style={styles.imageLarge} />
          <Text style={styles.memberTitle}>Rayane Vieira Dos Santos Nº31</Text>
          <Text style={styles.instructions}>Designer, Responsável pela Documentação e Back-end</Text>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#0056A6',
    textAlign: 'center',
    marginTop:'-13%'
  },
  arrowleft: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  
    borderRadius: 25, // Para tornar o botão com bordas arredondadas
    shadowColor: '#000',
    
    width:200,
    height:60,
    marginLeft:'-71%',
    marginBottom:'-10%',
    marginTop:'-5%'
  },
  instructions: {
    fontSize: 18, 
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
    lineHeight: 26,
  },
  memberTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0056A6',
    marginTop: 10,
    textAlign: 'center',
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  line: {
    height: 2,
    width: '70%',
    backgroundColor: '#0056B3',
    marginLeft: 10,
  },
  banner: {
    backgroundColor: '#0056B3',
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  imageLarge: {
    width: 200,
    height: 200,
    borderRadius: 1000, // Torna a imagem arredondada
    marginTop: 10,
  },
  imageSmall1: {
    width: 1300,
    height: 300,
    marginTop: 36,
    borderRadius: 50,
    marginHorizontal: 6,
    justifyContent: 'flex-end',
    alignItems: 'center',
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
});

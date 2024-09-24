import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function TabTwoScreen() {
  return (
    <ScrollView style={{ backgroundColor: '#fff' }}>
      {/* Seção "Quem Somos" */}
      <View style={styles.container}>
        <Text style={styles.title}>QUEM SOMOS?</Text>
        <Text style={styles.instructions}>
          Brazurista é um site web e aplicativo para dispositivo móvel que facilita a criação de roteiros, tem funções, como avaliar e comentar em pontos turísticos e restaurantes.
        </Text>
        <Text style={styles.instructions}>
          No Brazurista, entendemos que não há uma única maneira "certa" de viajar. É por isso que oferecemos a liberdade e flexibilidade para que você crie o seu próprio roteiro de viagem, sob medida para os seus interesses, estilo e orçamento. Quer você seja um aventureiro intrépido em busca de emoções, um explorador cultural ansioso por descobrir novas tradições ou um amante da natureza em busca de paisagens deslumbrantes, estamos aqui para transformar seus sonhos de viagem em realidade.
        </Text>

        {/* Seção "Nosso Objetivo" */}
        <Text style={styles.title}>NOSSO OBJETIVO?</Text>
        <Text style={styles.instructions}>
          Nosso objetivo no Brazurista vai além de simplesmente organizar viagens. Queremos inspirar e empoderar nossos clientes a explorar o mundo de maneira autêntica e significativa. Acreditamos que as melhores viagens são aquelas que não apenas enriquecem a vida do viajante, mas também deixam um impacto positivo nas comunidades locais e no meio ambiente.
        </Text>
        <Text style={styles.instructions}>
          Junte-se a nós e comece a planejar a viagem dos seus sonhos com o Brazurista. Seu próximo destino espera por você!
        </Text>
      </View>

     
      {/* Seção "Nossa Equipe" */}
      <View style={styles.container}>
        <Text style={styles.title}>NOSSA EQUIPE</Text>
        <Text style={styles.team}>
          Gustavo Rucaglia Bozetti Santiago Nº14 {'\n'}
          Italo Renan Monteiro da Silva Nº15{'\n'}
          Jonatas Nascimento Nº16{'\n'}
          Karen Cristiny Nº23 {'\n'}
          Nicolly Clara Damasceno da Silva Nº27{'\n'}
          Raquel Marques Nº29 {'\n'}
          Rayane Vieira Dos Santos Nº31{'\n'}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#0056A6',
    marginTop:30,
  },
  instructions: {
    fontSize: 20, 
      textAlign: 'left',
      marginTop:17,
    marginBottom: 20,
    color: '#333',
    fontWeight: 'normal',
  },
  line: {
    height: 2.5, // Define a altura da linha
    width:300,
    backgroundColor: 'blue', // Cor da linha
    marginVertical: 10,
    alignSelf: 'center',
  },
  team: {
    fontSize: 20,
    textAlign: 'left',
    marginBottom: 20,
    color: '#333',
    fontWeight: 'normal',
  },
});

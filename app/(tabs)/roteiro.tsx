
import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet,ImageBackground, TouchableOpacity } from 'react-native';
import Header from '@/components/Header';
 
const App = () => {
  return (
<>
<Header />
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Seus Roteiros</Text>
      <View style={styles.filterContainer}>
        <Text style={styles.filterText}>Filtrar por:</Text>
        <Text style={styles.filterValue}>Recentes ▼</Text>
      </View>
 
      <View style={styles.roteiroContainer}>
        <View style={styles.roteiro}>
        <ImageBackground source={require('@/assets/images/df.jpg')} style={styles.image}>
          </ImageBackground>
          <Text style={styles.roteiroTitle}>Roteiro para Piauí</Text>
          <Text style={styles.roteiroDescription}>Incluídos: Teresina, Picos, São João e Floriano e mais outros</Text>
        </View>
        <View style={styles.roteiro}>
        <ImageBackground source={require('@/assets/images/pernambuco.jpg')} style={styles.image} />
          <Text style={styles.roteiroTitle}>Roteiro para Pernambuco</Text>
          <Text style={styles.roteiroDescription}>Incluídos: Porto de Galinhas, Buíque, Recife entre outros</Text>
        </View>
      </View>
 
      <Text style={styles.subtitle}>Roteiros que já foram visitados por você</Text>
 
        <View style={styles.roteiroContainer}>
          <View style={styles.roteiro}>
          <ImageBackground source={require('@/assets/images/cristo.jpg')} style={styles.image} />
            <Text style={styles.roteiroTitle}>Roteiro para o Rio de Janeiro</Text>
            <Text style={styles.roteiroDescription}>Incluídos: Leblon, Ipanema, Lapa e mais outros</Text>
            <Text style={styles.visitedText}>Já visitado ✓</Text>
          </View>
          <View style={styles.roteiro}>
          <ImageBackground source={require('@/assets/images/bahia.jpg')}style={styles.image} />
            <Text style={styles.roteiroTitle}>Roteiro para Bahia</Text>
            <Text style={styles.roteiroDescription}>Incluídos: Ilhéus, Salvador, Feira de Santana e mais outros</Text>
            <Text style={styles.visitedText}>Já visitado ✓</Text>
          </View>
        </View>
      
    
      </ScrollView>
      </>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  filterText: {
    fontSize: 16,
  },
  filterValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  roteiroContainer: {
    marginBottom: 32,
  },
  roteiro: {
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  roteiroTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  roteiroDescription: {
    fontSize: 14,
    color: '#777',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  visitedText:{
    fontSize:14,
    color:'#00b300',
    marginBottom:16,
  },
});
 
export default App;

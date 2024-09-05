
import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet,ImageBackground } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
 
const Avalie = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Suas avaliações e comentários</Text>
      <View style={styles.filterContainer}>
        <Text style={styles.filterText}>Filtrar por:</Text>
        <Text style={styles.filterValue}>Recentes ▼</Text>
      </View>
      <View style={styles.roteiroContainer1}>
      <AntDesign style={styles.icon} name="rightcircleo" size={15} color="black"
      ><Text style={styles.verMais}>Ver mais</Text></AntDesign>
      </View>
 
      
        <View style={styles.roteiro}>
        <Image source={require('@/assets/images/df.jpg')} style={styles.image} />
        <View style={{padding:5}}>
          <View style={{gap:10}}>
        <Text style={{width:200, paddingRight:20, fontSize:10, paddingLeft:5}}>Quando eu fui em São Paulo eu queria conhecer o MASP, na tão famosa Avenida Paulista.O Museu da Arte é o melhor museu de arte do mundo. Aproveite para ver o museu e o MASP.</Text>
       
        <Text style={{fontWeight:'bold', width:205,fontSize:12, paddingLeft:5}}>Masp-Museu da Arte de São Paulo</Text>
        </View>
          </View>
        </View>
        <View style={styles.roteiro}>
        <Image  source={require('@/assets/images/pernambuco.jpg')} style={styles.image}/>
          <View style={{padding:5}}>
          <View style={{gap:10}}>
        <Text style={{width:200, paddingRight:20, fontSize:10, paddingLeft:5}}>Quando eu fui em São Paulo eu queria conhecer o MASP, na tão famosa Avenida Paulista.O Museu da Arte é o melhor museu de arte do mundo. Aproveite para ver o museu e o MASP.</Text>
        <Text style={{fontWeight:'bold', width:205,fontSize:12, paddingLeft:5}}>Porto De Galinhas,Pernambuco</Text>
        
        </View>
        </View>
        </View>
        <View style={styles.roteiroContainer}>
          <View style={styles.roteiro}>
          <Image source={require('@/assets/images/cristo.jpg')} style={styles.image} />
          <View style={{padding:5}}>
          <View style={{gap:10}}>
           
            <Text style={{width:200, paddingRight:20, fontSize:10, paddingLeft:5}}>Quando eu fui em São Paulo eu queria conhecer o MASP, na tão famosa Avenida Paulista.O Museu da Arte é o melhor museu de arte do mundo.</Text>
            <Text style={{fontWeight:'bold', width:205,fontSize:12, paddingLeft:5}}>Copacabana,Rio de Janeiro</Text>
            </View>
        </View>
        </View>
          
          <View style={styles.roteiro}>
          <Image source={require('@/assets/images/bahia.jpg')}style={styles.image} />
          <View style={{padding:5}}>
          <View style={{gap:10}}>
           
            <Text style={{width:200, paddingRight:20, fontSize:10, paddingLeft:5}}>Quando eu fui em São Paulo eu queria conhecer o MASP, na tão famosa Avenida Paulista.O Museu da Arte é o melhor museu de arte do mundo.</Text>
            <Text style={{fontWeight:'bold', width:205,fontSize:12, paddingLeft:5}}>Elevador Lacerda,Bahia</Text>
          </View>
          </View>
        </View>
        </View>
      
  
      </ScrollView>

  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  roteiroContainer1: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
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
    width: 100,
  },
  icon: {
    marginTop: 1,
    marginLeft: 2,
    marginBottom: 6,
    
  },
  verMais: {
      fontSize: 16,
      fontWeight: 'semibold',
  },
  filterText: {
    fontSize: 16,
  },
  filterValue: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 8,
  },
  roteiroContainer: {
    marginBottom: 32,
  },
  roteiro: {
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    height: 140,
    flexDirection: 'row',
  },
  image: {
    width: 120,
    height: 140,
    borderTopLeftRadius: 6, 
    borderBottomLeftRadius: 6,
  },
  roteiroTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  paddingLeft: 210,
  
  
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
 
});
 
export default Avalie;

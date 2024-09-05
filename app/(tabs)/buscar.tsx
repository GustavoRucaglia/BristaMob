import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, View, Image, Text, StyleSheet, ImageBackground, TextInput } from 'react-native';
import { Dimensions } from 'react-native';

const Buscar = () => {
    return (
      
      <>
        <StatusBar hidden={true} />
        <ScrollView style={styles.container}>
            <View style={styles.section}>
            
            
              <View style={styles.search}>
                <AntDesign style={styles.icon} name="search1" size={24} color="black" />
                <TextInput style={styles.buscar} 
                placeholder="Pesquise seu destino aqui..."  />
              </View>
            <View style={styles.col}> 
              <View style={styles.row}>
              <Text style={styles.title}>Destinos que os viajantes adoram</Text>
               <View style={styles.roteiroContainer1}>
                <AntDesign style={styles.icon1} name="rightcircleo" size={20} color="black"
                ><Text style={styles.verMais}>Ver mais</Text></AntDesign>
                </View>
              </View>
              <View style={styles.row} >
                <View style={styles.col}>
               
                  <Link href={'/visiterj'}>
                    <Image source={require('@/assets/images/MASP.jpg')} style={styles.imageSmall} >
                  </Image>
                  </Link>
                  
                  <Text style={styles.text}>Masp,São Paulo</Text>
                </View>
                <View style={styles.col}>
                <Image source={require('@/assets/images/pernambuco.jpg')} style={styles.imageSmall} ></Image>
                <Text style={styles.text}>Porto de Galinhas,Pb</Text>
                </View>
              </View>
            </View>
            <View style={styles.col}>
              <Text style={styles.title}>Descubra destinos</Text>
             
                <View style={{flexDirection:'row',gap:10}}>
                <Image source={require('@/assets/images/copacabana.jpg')} style={{width:130,height:160,borderRadius:7,}}
                ></Image>

                <Image source={require('@/assets/images/tembui.jpg')} style={{width:210,height:160,borderRadius:7,}} ></Image>
                <Text style={styles.text}>Tembui</Text>
               <Text style={styles.text}>Restaurantes</Text>
                </View>
                <View style={{flexDirection:'row',gap:10,paddingTop:22}}>
                <Image source={require('@/assets/images/curitiba.jpg')} style={{width:210,height:160,borderRadius:7,}} ></Image>
                
                <Image source={require('@/assets/images/df.jpg')} style={{width:130,height:160,borderRadius:7,}} ></Image>
                </View>
              </View>
            
           
          </View>
        </ScrollView>
      </>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    inicio: {
      color: '#E6E6E6',
      fontSize: 20,
      fontWeight: '800',
      textAlign: 'center',
    },
    buscar:{
     backgroundColor:'white',
     width: 350,
     height: 40,
     borderColor: 'gray',
     borderWidth: 2,
     borderRadius: 11,
     marginVertical: 10,
     paddingHorizontal:6,
     
    },
   
    header: {
      alignItems: 'center',
      backgroundColor: '#0056B3',
      height: 50,
      position: 'relative',
    },
    section: {
      marginBottom: 20,
      paddingHorizontal: 10,
    },
    imageSmall: {
      width: 169,
      height: 135,
      borderRadius: 7,
      marginHorizontal: 5,
      justifyContent: 'flex-end',
      alignItems: 'center',
      flexDirection:'row',
    },
    imageDestino:{
      height: 160,
      width:140,

    },
    destino: {

    },
    roteiroContainer1:{
        
    },
    icon1:{
      marginTop: 1,
      marginLeft: 400,
      marginBottom: 6,
      color: 'black'
      
    },
    verMais:{
      fontSize: 16,
      fontWeight: 'semibold',
      color: 'black',

    },
    search:{
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 6,
      position: 'relative',
      marginVertical: 10,

    },
    icon: {
      position: 'absolute',
      right: 20,
      top: 18,
    },
    text: {
      color:'black',
      marginBottom: 5,
      fontSize: 12,
      fontWeight:'bold',
      paddingLeft:15,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      marginVertical: 10,
      paddingRight: 10,
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
      marginTop: 20,
      marginBottom: 10,
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
  
  export default Buscar;

  
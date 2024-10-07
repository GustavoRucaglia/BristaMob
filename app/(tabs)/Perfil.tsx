import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
 
export default function ProfilePage() {
  return (
    <View style={styles.container}>
       <ScrollView>
      {/* Título principal e ícone */}
      <View style={styles.azul}>
        {/* Exibindo a logo grande */}
        <Image 
          source={require('@/assets/images/brazurismotuc.png')} // Logo grande
          style={styles.logoGrande} // Estilo ajustado para a logo grande
        />
      </View>

     
 
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={require('@/assets/images/pernambuco.jpg')}
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Yasmin Silva</Text>
          <Text style={styles.profileHandle}>@yass.silva</Text>
          <Text style={styles.profileStats}>10 Avaliações  2 Comentários</Text>
        </View>
        <TouchableOpacity style={styles.editButton}>
        <View style={styles.roteiroContainer1}>

<Entypo style={styles.icon} name="pencil" size={24} color="black" />

</View>
        </TouchableOpacity>
      </View>

     
 
      {/* Reviews Section */}
      <Text style={styles.sectionTitle}>Alguns de seus favoritos</Text>
      <ScrollView  horizontal={true} style={styles.reviewsSection} >
        <View style={styles.reviewItem}>
          <Image
            source={require('@/assets/images/cristo.jpg')}
            style={styles.reviewImage}
          />
          <View style={styles.reviewTextContainer}>
            <View style={{flexDirection:'row', alignItems:'center', height:20, width:85, gap: 5, justifyContent:'space-between', marginBottom:5 }}>
            <Text style={styles.reviewTitle}>Cristo Redentor</Text>
            </View>
            
            <Text style={styles.reviewText}>
            O Cristo Redentor é um dos símbolos mais famosos do Brasil e uma das Sete Maravilhas do Mundo Moderno. 
            </Text>
          </View>
        </View>
        <View style={styles.reviewItem}>
          <Image
            source={require('@/assets/images/MASP.jpg')}
            style={styles.reviewImage}
          />
          <View style={styles.reviewTextContainer}>
            <View style={{flexDirection:'row', alignItems:'center', height:20, width:100, gap: 5, justifyContent:'space-between', marginBottom:5 }}>
            <Text style={styles.reviewTitle}>MASP</Text>
           
            </View>
      
            <Text style={styles.reviewText}>
            O Museu de Arte de São Paulo Assis Chateaubriand (MASP) é um dos mais importantes e icônicos museus do Brasil e da América Latina. 
            </Text>
          </View>
        </View>
        <Image
            source={require('@/assets/images/recife.jpg')}
            style={styles.reviewImage}
          />
          <View style={styles.reviewTextContainer}>
            <View style={{flexDirection:'row', alignItems:'center', height:20, width:85, gap: 5, justifyContent:'space-between', marginBottom:5 }}>
            <Text style={styles.reviewTitle}>Recife</Text>
            </View>
            
            <Text style={styles.reviewText}>
            O Cristo Redentor é um dos símbolos mais famosos do Brasil e uma das Sete Maravilhas do Mundo Moderno. 
            </Text>
          </View>
          <Image
            source={require('@/assets/images/lapa.jpg')}
            style={styles.reviewImage}
          />
          <View style={styles.reviewTextContainer}>
            <View style={{flexDirection:'row', alignItems:'center', height:20, width:85, gap: 5, justifyContent:'space-between', marginBottom:5 }}>
            <Text style={styles.reviewTitle}>Lapa</Text>
            </View>
            
            <Text style={styles.reviewText}>
            O Cristo Redentor é um dos símbolos mais famosos do Brasil e uma das Sete Maravilhas do Mundo Moderno. 
            </Text>
          </View>
        
        
       
        
        </ScrollView>
      </ScrollView>
 
      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.bottomLink}>
          <Text style={styles.bottomLinkText}>Crie e altere seus roteiros de viagem</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomLink}>
          <Text style={styles.bottomLinkText}>Acesse seus roteiros</Text>
        </TouchableOpacity>
      </View>
</View>

)  ;
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
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
 
  profileSection: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profileInfo: {
    marginLeft: 10,
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileHandle: {
    fontSize: 14,
    color: 'gray',
  },
  profileStats: {
    fontSize: 14,
    color: 'gray',
  },
  editButton: {
    padding: 10,
  },
  editText: {
    fontSize: 18,
  },
  reviewsSection: {
    padding: 20,
    maxHeight: 280
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 15,
  },
  reviewItem: {
    flexDirection: 'column',
    marginTop: 12,
    backgroundColor: '#FFF',
    paddingVertical: 12,
    borderRadius: 8,
    height: 220,
    gap: 5,
    marginRight: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  reviewImage: {
    width: 255,
    height: 105,
    borderRadius: 4,
    margin: 'auto',
  },
  reviewTextContainer: {
    marginLeft: 8,
    maxWidth: 300,
    maxHeight:130,
  },
  reviewTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  reviewText: {
    fontSize: 14,
    color: 'gray'
  },
  reviewRating: {
    fontSize: 14,
    color: '#FFA500',
    marginBottom: 4,
    flexDirection: "row"
  },
  bottomSection: {
    padding: 20,
  },
  bottomLink: {
    marginTop: 10,
  },
  bottomLinkText: {
    fontSize: 16,
    color: '#3366CC',
    textDecorationLine: 'underline',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#DDD',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#3366CC',
  },



  roteiroContainer1: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
},

icon: {
  marginTop: 3,
  marginLeft: 2,
  marginBottom: 8,
  marginRight:6,
  
},

verMais: {
  fontSize: 16,
  fontWeight: 'semibold',
},
});
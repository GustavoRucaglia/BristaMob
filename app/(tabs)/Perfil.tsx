
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { Link } from 'expo-router';
 
export default function ProfilePage() {
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Title and Logo Section */}
        <View style={styles.header}>
        <Image 
          source={require('@/assets/images/brazurismotuc.png')} // Logo grande
          style={styles.logoGrande} // Estilo ajustado para a logo grande
        />
        </View>
 
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <Image source={require('@/assets/images/brazurista2.png')} style={styles.profileImage} />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Yasmin Silva</Text>
            <Text style={styles.profileHandle}>@yass.silva</Text>
           
          </View>
       
        </View>
 
        {/* Reviews Section */}
        <Text style={styles.sectionTitle}>Alguns de seus favoritos</Text>
        <ScrollView horizontal={true} style={styles.reviewsSection}>
          {[
            {
              image: require('@/assets/images/cristo.jpg'),
              title: 'Cristo Redentor',
              text: 'O Cristo Redentor é um dos símbolos mais famosos do Brasil e uma das Sete Maravilhas do Mundo Moderno.',
            },
            {
              image: require('@/assets/images/MASP.jpg'),
              title: 'MASP',
              text: 'O Museu de Arte de São Paulo Assis Chateaubriand (MASP) é um dos mais importantes e icônicos museus do Brasil e da América Latina.',
            },
            {
              image: require('@/assets/images/recife.jpg'),
              title: 'Recife',
              text: 'Uma cidade vibrante com rica cultura e história.',
            },
            {
              image: require('@/assets/images/lapa.jpg'),
              title: 'Lapa',
              text: 'Famosa por sua vida noturna e arquitetura histórica.',
            },
          ].map((review, index) => (
            <View key={index} style={styles.reviewItem}>
              <Image source={review.image} style={styles.reviewImage} />
              <View style={styles.reviewTextContainer}>
                <Text style={styles.reviewTitle}>{review.title}</Text>
                <Text style={styles.reviewText}>{review.text}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
 
        {/* Bottom Section */}
        <View style={styles.bottomSection}>
        
          <Link href="/novoRoteiro" style={styles.bottomLink}>
            <Text style={styles.bottomLinkText}>Acesse seus roteiros</Text>
          </Link>
        </View>
 
        
<View style={styles.blueLine}/> 
 
 
        
      </ScrollView>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  logo: {
    width: 250,
    height: 180,
    marginTop: 10,
    borderRadius: 50,
  },
  header: {
    backgroundColor: '#0056B3',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileSection: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 25,
  },
  profileInfo: {
    marginLeft: 16,
    flex: 1,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileHandle: {
    fontSize: 18,
    color: 'gray',
  },
  
  reviewsSection: {
    padding: 20,
  
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 16,
    marginTop: 8,
  },
  reviewItem: {
    flexDirection: 'column',
    marginTop: 8,
    backgroundColor: '#FFF',
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 8,
    height: 230,
    marginRight: 18,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  reviewImage: {
    width: '100%',
    height: 130,
    borderRadius: 6,
    marginHorizontal: 'auto',
    marginBottom: 10,
  },
  reviewTextContainer: {
    marginLeft: 8,
    maxWidth: 300,
  },
  reviewTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  reviewText: {
    fontSize: 14,
    color: 'gray',
  },
  bottomSection: {
    padding: 20,
  },
  bottomLink: {
    marginTop: 6,
  },
  bottomLinkText: {
    fontSize: 19,
    color: '#3366CC',
    textDecorationLine: 'underline',
  },
  
  container2: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  textAtual: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  blueLine: {
    height: 2.5,
    width: 300,
    backgroundColor:  '#0056B3',
    marginVertical: 10,
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  input1: {
    height: 36,
    width: 240,
    borderColor: '#0056B3',
    borderWidth: 1,
    paddingLeft: 12,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  logoGrande: {
    width: 250,
    height: 180,
    marginTop: 46,
    borderRadius: 50,
    marginHorizontal: 6,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    height: 40,
    width: '80%',
    backgroundColor: '#0056B3',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 30,
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  secaoatuali:{
    alignItems: 'center',
    justifyContent: 'center',
   
    marginBottom: 20,
  }
});
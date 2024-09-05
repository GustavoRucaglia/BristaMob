import { Link,  router, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, View, Image, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const Header = () => {
  const router = useRouter()

  const handlePage = () =>{
    router.push('/')
  }
  return (
    <>
        <View style={styles.header}>
        <TouchableOpacity onPress={handlePage} style={styles.btn}>
      <Image source={require('@/assets/images/logobrazu.png')} style={styles.logo} />
        </TouchableOpacity>
        </View>
    </>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 180,
    height: 150,
    resizeMode: 'contain',
    position: 'absolute',
    left: 14,
    top: -40,
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#0056B3',
    height: 63,
    position: 'relative',
  },
  logo: {
    width: 180,
    height: 150,
  }
});

export default Header;

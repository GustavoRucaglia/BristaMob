import { Tabs } from 'expo-router';
import React, { useState } from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [ login, setLogin ] = useState(false);
  const getUserData = async () => {
    const token = await AsyncStorage.getItem('@user_token');
     if(token){
       setLogin(true);
       console.log('Dado de usuário encontrado:', token);
     }
   else {
      console.log('Nenhum dado de usuário encontrado.');
      setLogin(false);
    }
  };

  getUserData();


  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          href: '/',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={'#0056B3'} />
          ),
        }}
      />
    <Tabs.Screen
          name="buscar"
          options={{
          title: 'Buscar',
          href: '/buscar',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon  name={focused ? 'search' : 'search-outline'}  color={'#0056B3'} />
          ), 
          }}
    />

<Tabs.Screen
        name="roteiro"
        options={{
          title: 'Roteiro',
          href: login ?  '/roteiro' : null, 
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon  name={focused ? 'heart' : 'heart-outline'}  color={'#0056B3'} />
          ),
        }}
      />
        <Tabs.Screen
          name="login" 
          options={{
            title: 'Login',
            href: login ?  null : '/login', 
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'person' : 'person-outline'} color={ '#0056B3'} />
            ),
          }}
        />
         <Tabs.Screen
          name="Perfil" // Nome diferente para evitar conflito
          options={{
            title: 'Perfil',
            href: login ? '/Perfil' : null, 
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'person' : 'person-outline'} color={ '#0056B3'} />
            ),
          }}
        />
    </Tabs>
  );
}

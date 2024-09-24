import { Link } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground, ScrollView } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LoginPage } from '@/components/loginPage';

const queryClient = new QueryClient();

export default function LoginScreen() {


  return (
    <QueryClientProvider client={queryClient}>
        <LoginPage />
    </QueryClientProvider>
  );
};

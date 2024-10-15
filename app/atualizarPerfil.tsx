import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';

export default function ProfilePage() {
    const [url, setUrl] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');

    const handleUpdate = () => {
        // Handle profile update logic here
    };

    return (
        <ScrollView style={{ backgroundColor: "#fff" }}>
            {/* Title and Logo Section */}
            <View style={styles.header}>
                <Image
                    source={require('@/assets/images/brazurismotuc.png')} // Logo grande
                    style={styles.logoGrande} // Estilo ajustado para a logo grande
                />
            </View>

            <View style={styles.container2}>
                <Text style={styles.textAtual}>Atualizar Perfil</Text>

                <View style={styles.profileSection}>
                    <Image source={require('@/assets/images/brazurista2.png')} style={styles.profileImage} />
                </View>

                <Text style={styles.escritaInput}>Editar Foto:</Text>
                <TextInput
                    style={styles.input1}
                    placeholder="URL:"
                    value={url}
                    onChangeText={setUrl}
                />

                <Text style={styles.escritaInput}>Email:</Text>
                <TextInput
                    style={styles.input1}
                    placeholder="Email"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />

                <Text style={styles.escritaInput}>Senha:</Text>
                <TextInput
                    style={styles.input1}
                    placeholder="Senha"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                <Text style={styles.escritaInput}>Username:</Text>
                <TextInput
                    style={styles.input1}
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                />

                <Text style={styles.escritaInput}>Telefone:</Text>
                <TextInput
                    style={styles.input1}
                    placeholder="Telefone"
                    keyboardType="phone-pad"
                    value={phone}
                    onChangeText={setPhone}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleUpdate}
                >
                    <Text style={styles.buttonText}>Atualizar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#0056B3',
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileSection: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 25,
    },
    container2: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    textAtual: {
        fontSize: 32,
        marginBottom: 40,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 8,
    },
    input1: {
        height: 40,
        borderColor: '#0056B3',
        borderWidth: 1,
        paddingLeft: 12,
        borderRadius: 8,
        marginTop: 12,
    },
    logoGrande: {
        width: 250,
        height: 180,
        marginTop: 46,
        borderRadius: 50,
    },
    button: {
        height: 40,
        backgroundColor: '#0056B3',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    escritaInput: {
        fontWeight: 'bold',
        marginTop: 20,
    }
});

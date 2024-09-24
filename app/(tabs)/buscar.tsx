import React from 'react';
import { ScrollView, View, Image, Text, StyleSheet, TextInput, ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const Buscar = () => {
    return (
        <>
            <StatusBar hidden={true} />
            <ScrollView style={styles.container}>
                {/* Imagem de Cabeçalho */}
                <View style={styles.azul}>
                    <ImageBackground source={require('@/assets/images/brazurismotuc.png')} style={styles.imageSmall} />
                </View>

                {/* Barra de Pesquisa */}
                <View style={styles.searchContainer}>
                    <AntDesign style={styles.icon} name="search1" size={24} color="black" />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Pesquise seu destino aqui..."
                    />
                </View>

                {/* Seção: Destinos que os viajantes adoram */}
                <View style={styles.section}>
                    <View style={styles.row}>
                        <Text style={styles.title}>Destinos que os viajantes adoram</Text>
                        <AntDesign name="rightcircleo" size={26} color="black" style={{ padding: 14 }} />
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                        <View style={styles.card}>
                            <Image source={require('@/assets/images/cristo.jpg')} style={styles.image} />
                            <Text style={styles.cardText}>Cristo Redentor, RJ</Text>
                            <Text style={styles.rating}>8.7 ★★★★★</Text>
                        </View>
                        <View style={styles.card}>
                            <Image source={require('@/assets/images/pernambuco.jpg')} style={styles.image} />
                            <Text style={styles.cardText}>Porto de Galinhas, PE</Text>
                            <Text style={styles.rating}>8.7 ★★★★★</Text>
                        </View>
                        <View style={styles.card}>
                            <Image source={require('@/assets/images/lapa.jpg')} style={styles.image} />
                            <Text style={styles.cardText}>Lapa, RJ</Text>
                            <Text style={styles.rating}>8.7 ★★★★★</Text>
                        </View>
                        <View style={styles.card}>
                            <Image source={require('@/assets/images/MASP.jpg')} style={styles.image} />
                            <Text style={styles.cardText}>MASP, SP</Text>
                            <Text style={styles.rating}>8.7 ★★★★★</Text>
                        </View>
                        <View style={styles.card}>
                            <Image source={require('@/assets/images/copacabana.jpg')} style={styles.image} />
                            <Text style={styles.cardText}>Copacabana, RJ</Text>
                            <Text style={styles.rating}>8.7 ★★★★★</Text>
                        </View>
                        <View style={styles.card}>
                            <Image source={require('@/assets/images/df.jpg')} style={styles.image} />
                            <Text style={styles.cardText}>Distrito Federal, GO</Text>
                            <Text style={styles.rating}>8.7 ★★★★★</Text>
                        </View>
                    </ScrollView>
                </View>

                {/* Seção: Descubra destinos */}
                <View style={styles.container1}>
                    <View style={styles.section}>
                        <Text style={styles.title}>Descubra destinos</Text>
                        <View style={styles.grid}>
                            <View style={styles.gridItem}>
                                <ImageBackground source={require('@/assets/images/MASP.jpg')} style={styles.image1}>
                                    <Text style={styles.gridText}>Terra da garoa</Text>
                                </ImageBackground>
                            </View>
                            <View style={styles.gridItem}>
                                <ImageBackground source={require('@/assets/images/tembui.jpg')} style={styles.image1}>
                                    <Text style={styles.gridText}>Restaurantes</Text>
                                </ImageBackground>
                            </View>
                        </View>
                        <View style={styles.grid}>
                            <View style={styles.gridItem}>
                                <ImageBackground source={require('@/assets/images/curitiba.jpg')} style={styles.image1}>
                                    <Text style={styles.gridText}>Curitiba</Text>
                                </ImageBackground>
                            </View>
                            <View style={styles.gridItem}>
                                <ImageBackground source={require('@/assets/images/df.jpg')} style={styles.image1}>
                                    <Text style={styles.gridText}>Brasília</Text>
                                </ImageBackground>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Seção: Busque por regiões */}
                <View style={styles.section}>
                    <Text style={styles.title}>Busque por regiões</Text>
                    <View style={styles.grid}>
                        <View style={styles.regiao}>
                        <ImageBackground source={require('@/assets/images/df.jpg')} style={styles.regiaoImage} imageStyle={{ borderRadius: 10,  marginLeft:-55, }}>
                            <Text style={styles.regiaoText}>Norte</Text>
                            </ImageBackground>
                        </View>
                        <View style={styles.regiao1}>
                        <ImageBackground source={require('@/assets/images/df.jpg')} style={styles.regiaoImage} imageStyle={{ borderRadius: 10,  marginLeft:-55, }}>
                            <Text style={styles.regiaoText}>Nordeste</Text>
                            </ImageBackground>
                        </View>
                    </View>
                    <View style={styles.grid}>
                        <View style={styles.regiao2}>
                        <ImageBackground source={require('@/assets/images/df.jpg')} style={styles.regiaoImage} imageStyle={{ borderRadius: 10,  marginLeft:-55, }}>
                            <Text style={styles.regiaoText}>Centro-Oeste</Text>
                            </ImageBackground>
                        </View>
                        <View style={styles.regiao3}>
                        <ImageBackground source={require('@/assets/images/df.jpg')} style={styles.regiaoImage} imageStyle={{ marginLeft:-55,  }}>
                            <Text style={styles.regiaoText}>Sudeste</Text>
                            </ImageBackground>
                        </View>
                    </View>
                    <View style={styles.grid}>
                        <View style={styles.regiao4}>
                        <ImageBackground source={require('@/assets/images/df.jpg')} style={styles.regiaoImage} imageStyle={{ borderRadius: 10,  marginLeft:-55, }}>
                            <Text style={styles.regiaoText}>Sul</Text>
                            </ImageBackground>
                        </View>
                    </View>
            
        </View>
        <View style={styles.section}>
                    <View style={styles.row}>
                        <Text style={styles.title}>Experimente Restaurantes</Text>
                        <AntDesign name="rightcircleo" size={26} color="black" style={{ padding: 14 }} />
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                        <View style={styles.card}>
                            <Image source={require('@/assets/images/tembui.jpg')} style={styles.image} />
                            <Text style={styles.cardText}>Tembui,SP</Text>
                            <Text style={styles.rating}>8.7 ★★★★★</Text>
                        </View>
                        <View style={styles.card}>
                            <Image source={require('@/assets/images/tembui.jpg')} style={styles.image} />
                            <Text style={styles.cardText}>Tembui,SP</Text>
                            <Text style={styles.rating}>8.7 ★★★★★</Text>
                        </View>
                        <View style={styles.card}>
                            <Image source={require('@/assets/images/tembui.jpg')} style={styles.image} />
                            <Text style={styles.cardText}>Tembui,SP</Text>
                            <Text style={styles.rating}>8.7 ★★★★★</Text>
                        </View>
                        <View style={styles.card}>
                            <Image source={require('@/assets/images/tembui.jpg')} style={styles.image} />
                            <Text style={styles.cardText}>Tembui,SP</Text>
                            <Text style={styles.rating}>8.7 ★★★★★</Text>
                        </View>
                        <View style={styles.card}>
                            <Image source={require('@/assets/images/tembui.jpg')} style={styles.image} />
                            <Text style={styles.cardText}>Tembui,SP</Text>
                            <Text style={styles.rating}>8.7 ★★★★★</Text>
                        </View>
                        <View style={styles.card}>
                            <Image source={require('@/assets/images/tembui.jpg')} style={styles.image} />
                            <Text style={styles.cardText}>Tembui,SP</Text>
                            <Text style={styles.rating}>8.7 ★★★★★</Text>
                        </View>
                    </ScrollView>
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
    imageSmall: {
        width: 240,
        height: 160,
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
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        borderRadius: 8,
        padding: 10,
        marginBottom: 7,
        marginHorizontal: 10,
        marginTop: 15,
        height: 45,
    },
    regiaoImage: {
        width: 65,
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        
    },
    searchInput: {
        flex: 1,
        fontSize: 20,
        padding: 16,
        color: 'black',
    },
    icon: {
        marginRight: 8,
    },
    section: {
        marginBottom: 20,
        marginHorizontal:10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        marginLeft: 8,
    },
    rating: {
        color: '#f1c40f',
        fontWeight: 'bold',
        marginLeft: 10,
        fontSize: 22,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 8,
        marginBottom: 3,
        padding: 13,
    },
    horizontalScroll: {
        flexDirection: 'row',
    },
    card: {
        width: 200,
        marginLeft: 10,
    },
    image: {
        width: '100%',
        height: 180,
        borderRadius: 8,
        paddingRight: 12,
    },
    image1: {
        width: 170,
        height: 170,
        borderRadius: 10, // Arredondando as bordas
        paddingLeft: 3,
        paddingRight: 3,
        marginHorizontal: 3,
        marginBottom: 3,
        marginTop:7,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden', // Garantir que o conteúdo seja cortado pelo borderRadius
    },
    roundedImage: {
        borderRadius: 10, // Arredondar a imagem de fundo
    },
    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardText: {
        fontSize: 19,
        marginTop: 5,
        marginLeft: 10,
    },
    grid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        
    },
    gridItem: {
        width: '48%',
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    gridText: {
        position: 'absolute',
        bottom: 0, // Alinha o texto na parte de baixo da imagem
        marginBottom: 10, // Espaço entre o texto e a borda inferior da imagem
        color: '#E6E6E6',
        fontSize: 20,
        fontWeight: '800',
        textAlign: 'center',
        width: '100%', // Garantir que o texto fique centralizado na largura da imagem
      
        padding: 5,
    
    },
    regiao: {
        width: '48%',
        height: 50,
        backgroundColor: 'green',
        borderRadius: 10,
        marginBottom: 7,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    regiao1: {
        width: '48%',
        height: 50,
        backgroundColor: 'darkred',
        borderRadius: 10,
        marginBottom: 7,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        
    },
    regiao2: {
        width: '48%',
        height: 50,
        backgroundColor: 'orange',
        borderRadius: 10,
        marginBottom: 7,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    regiao3: {
        width: '48%',
        height: 50,
        backgroundColor: 'blue',
        borderRadius: 10,
        marginBottom: 7,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    regiao4: {
        width: '48%',
        height: 50,
        backgroundColor: 'darkblue',
        borderRadius: 10,
        marginBottom: 7,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    regiaoText: {
        fontWeight: 'bold',
        fontSize: 12,
        color: 'white',
        textAlign: 'center',
        paddingLeft:13,
    },
});

export default Buscar;

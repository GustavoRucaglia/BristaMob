import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const TermsOfUseScreen = ({ navigation }: any) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleAccept = () => {
    if (isChecked) {
      navigation.navigate('HomeScreen');
    } else {
      alert('Você deve aceitar os termos para continuar.');
    }
  };

  return (
    <>
      

      <ScrollView style={styles.scrollView}>
      <View style={styles.azul}>
        <ImageBackground source={require('@/assets/images/brazurismotuc.png')} style={styles.imageSmall} />
      </View>
        <View style={styles.container}>
          <Text style={styles.title}>Termos de Uso</Text>
          <Text style={styles.content}>
          Bem-vindo ao nosso site de turismo. Ao acessar ou usar este site, você concorda em cumprir e ficar vinculado aos seguintes termos e condições.
          {'\n\n'}1. Propriedade Intelectual: Todo o conteúdo presente neste site, incluindo textos, imagens, gráficos, logotipos, vídeos e outros materiais, são protegidos por direitos autorais e outras leis de propriedade intelectual. Você concorda em não reproduzir, distribuir, modificar ou criar obras derivadas a partir desse conteúdo sem autorização prévia por escrito;
          {'\n\n'}2. Conteúdo do Usuário: Se você enviar conteúdo, como avaliações, comentários ou fotos, para o site, concede-nos o direito de usar, modificar, exibir e distribuir esse conteúdo em qualquer meio. No entanto, você é responsável pelo conteúdo que envia e concorda em não enviar material difamatório, obsceno, ilegal ou prejudicial;
          {'\n\n'}3. Descrição do Serviço: O nosso site fornece informações detalhadas e roteiros de viagem para diversos destinos turísticos. É importante ressaltar que não realizamos nenhum tipo de transação financeira, como pagamentos ou reservas de serviços;
          {'\n\n'}4. Links para Terceiros: Nosso site pode conter links para sites de terceiros. Não somos responsáveis pelo conteúdo, precisão ou segurança desses sites. A inclusão de links não implica em nosso endosso ou apoio a qualquer conteúdo presente nesses sites;
          {'\n\n'}5. Limitação de Responsabilidade: O uso deste site é por sua própria conta e risco. Não nos responsabilizamos por quaisquer danos diretos, indiretos, incidentais, consequenciais ou punitivos decorrentes do uso deste site ou de informações nele contidas;
          {'\n\n'}6. Alterações nos Termos de Uso: Reservamo-nos o direito de modificar estes termos a qualquer momento, sem aviso prévio. As alterações entrarão em vigor assim que forem publicadas no site. Recomendamos que você verifique os termos regularmente para estar ciente de quaisquer atualizações;
          {'\n\n'}7. Uso do Site: Ao acessar e utilizar nosso site, os usuários concordam em cumprir estes termos de uso e todas as leis e regulamentos aplicáveis. O acesso ao site é permitido apenas para aqueles que tenham idade legal para fazê-lo;
          {'\n\n'}8. Responsabilidades do Usuário: Os usuários são responsáveis por garantir a precisão das informações fornecidas ao utilizar o site. Eles concordam em não enviar conteúdo ilegal, difamatório, obsceno ou prejudicial, nem realizar atividades que possam danificar, sobrecarregar ou comprometer a segurança do site;
          {'\n\n'}9. Lei Aplicável e Jurisdição: Estes termos de uso são regidos e interpretados de acordo com as leis do Brasil. Qualquer disputa relacionada a estes termos será submetida à jurisdição exclusiva dos tribunais competentes da cidade de São Paulo, Estado de São Paulo;
          {'\n\n'}10. Política de Privacidade: É fundamental que os usuários revisem nossa política de privacidade para compreender como as informações pessoais são coletadas, utilizadas e protegidas pelo site. Esta política detalha os procedimentos adotados para garantir a segurança e a privacidade dos dados dos usuários. Ao utilizar o site, os usuários concordam com os termos estabelecidos em nossa política de privacidade;
          {'\n\n'}Contato: Se os usuários tiverem dúvidas ou preocupações sobre estes termos de uso, estamos à disposição para ajudar. Por favor, entrem em contato conosco através do seguinte endereço de e-mail: brazurista@gmail.com. Estamos comprometidos em fornecer suporte e esclarecimentos sempre que necessário.
          </Text>

          <View style={styles.checkboxContainer}>
            <Checkbox
              value={isChecked}
              onValueChange={setIsChecked}
            />
            <Text style={styles.label}>Eu aceito os Termos de Uso</Text>
          </View>

          <TouchableOpacity onPress={handleAccept} style={styles.button}>
            <Text style={styles.buttonText}>Criar Conta</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  scrollView: {
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  content: {
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'justify',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: 'center',
  },
  label: {
    marginLeft: 10,
    fontSize: 16,
  },
  azul: {
    backgroundColor: '#0056B3',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
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
  button: {
    height: 40,
    width: 200,
    backgroundColor: '#0056B3',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default TermsOfUseScreen;

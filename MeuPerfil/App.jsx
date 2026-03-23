import React from 'react';
import { Alert, Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  // Função para mostrar alerta ao clicar no botão
  const handleButtonPress = () => {
    Alert.alert('Bem-vindo!', 'Bem-vindo ao meu app!', [
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        {/* Foto de Perfil */}
        <Image
          source={require('./assets/images/WPP_IMAGE.png')}
          style={styles.profileImage}
        />

        {/* Nome */}
        <Text style={styles.name}>Daniel Araújo</Text>

        {/* Descrição do Curso */}
        <View style={styles.courseContainer}>
          <Text style={styles.courseLabel}>Cursos:</Text>
          <Text style={styles.courseText}>• Dev React Native</Text>
          <Text style={styles.courseText}>• Dev Java</Text>
          <Text style={styles.courseText}>• QA</Text>
        </View>

        {/* Frase Motivacional */}
        <View style={styles.motivationContainer}>
          <Text style={styles.motivationText}>
            "Código hoje, sucesso amanhã"
          </Text>
        </View>

        {/* Botão com Ação */}
        <View style={styles.buttonContainer}>
          <Button
            title="Clique aqui"
            onPress={handleButtonPress}
            color="#6C5CE7"
          />
        </View>

        {/* Rodapé */}
        <Text style={styles.footer}>Desenvolvido com React Native & Expo</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F3FF',
    paddingVertical: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 40,
    width: '90%',
    maxWidth: 400,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 10,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 4,
    borderColor: '#6C5CE7',
    backgroundColor: '#E6F4FE',
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2D3436',
    marginBottom: 10,
    textAlign: 'center',
  },
  courseContainer: {
    marginVertical: 15,
    width: '100%',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#DFE6E9',
  },
  courseLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6C5CE7',
    marginBottom: 8,
  },
  courseText: {
    fontSize: 14,
    color: '#636E72',
    marginVertical: 3,
  },
  motivationContainer: {
    marginVertical: 20,
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: '#F0F3FF',
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#6C5CE7',
  },
  motivationText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#2D3436',
    textAlign: 'center',
    fontWeight: '500',
  },
  buttonContainer: {
    marginVertical: 20,
    width: '100%',
    paddingHorizontal: 20,
    borderRadius: 8,
    overflow: 'hidden',
  },
  footer: {
    marginTop: 20,
    fontSize: 12,
    color: '#B2BEC3',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

import React, { useState } from 'react';
import {
  Alert,
  Button,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { router } from 'expo-router';
import NavBar from './components/NavBar.tsx';
import { useTheme } from './context/ThemeContext';

export default function App() {
  const { darkMode } = useTheme();
  const [imageModalVisible, setImageModalVisible] = useState(false);
  const profileImageSource = require('./assets/images/WPP_IMAGE.png');

  const handleButtonPress = () => {
    router.push('/lista-usuarios');
  };

  const openImageModal = () => setImageModalVisible(true);
  const closeImageModal = () => setImageModalVisible(false);

  return (
    <View style={[styles.container, darkMode && styles.containerDark]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={[styles.card, darkMode && styles.cardDark]}>
          {/* Foto de Perfil */}
          <TouchableOpacity onPress={openImageModal} activeOpacity={0.8}>
            <Image source={profileImageSource} style={styles.profileImage} />
          </TouchableOpacity>

          <Modal
            visible={imageModalVisible}
            animationType="fade"
            transparent={true}
            onRequestClose={closeImageModal}
          >
            <TouchableOpacity style={styles.modalOverlay} onPress={closeImageModal} activeOpacity={1}>
              <View style={styles.modalContent}>
                <Image source={profileImageSource} style={styles.modalImage} resizeMode="contain" />
                <Text style={styles.modalHint}>Toque no fundo para fechar</Text>
              </View>
            </TouchableOpacity>
          </Modal>

          {/* Nome */}
          <Text style={[styles.name, darkMode && styles.nameDark]}>Daniel Araújo</Text>

          {/* Descrição do Curso */}
          <View style={styles.courseContainer}>
            <Text style={[styles.courseLabel, darkMode && styles.courseTextDark]}>Cursos:</Text>
            <Text style={[styles.courseText, darkMode && styles.courseTextDark]}>• Dev React Native</Text>
            <Text style={[styles.courseText, darkMode && styles.courseTextDark]}>• Dev Java</Text>
            <Text style={[styles.courseText, darkMode && styles.courseTextDark]}>• QA</Text>
          </View>

          {/* Frase Motivacional */}
          <View style={[styles.motivationContainer, darkMode && styles.motivationContainerDark]}>
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
          <Text style={[styles.footer, darkMode && styles.footerDark]}>Desenvolvido com React Native & Expo por Daniel Araújo</Text>
        </View>
      </ScrollView>
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E', // Fundo escuro para contraste
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    color: '#FFFFFF', // Branco para contraste
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
    color: '#888888', // Mesma cor do rodapé
    marginBottom: 8,
    fontStyle: 'italic', // Mesmo estilo do rodapé
  },
  courseText: {
    fontSize: 14,
    color: '#888888', // Mesma cor do rodapé
    marginVertical: 3,
    fontStyle: 'italic', // Mesmo estilo do rodapé
  },
  motivationContainer: {
    marginVertical: 20,
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: '#2C2C2C', // Cinza escuro para o container
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#6C5CE7',
  },
  motivationText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#FFFFFF', // Branco para contraste
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
    color: '#888888', // Cinza médio para o rodapé
    textAlign: 'center',
    fontStyle: 'italic',
  },
  containerDark: {
    backgroundColor: '#0A0A0A',
  },
  cardDark: {
    backgroundColor: '#2A2A2A',
  },
  nameDark: {
    color: '#FFFFFF',
  },
  courseTextDark: {
    color: '#CCCCCC',
  },
  motivationContainerDark: {
    backgroundColor: '#1E1E1E',
  },
  footerDark: {
    color: '#999999',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.85)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  modalImage: {
    width: '100%',
    height: '80%',
    borderRadius: 20,
  },
  modalHint: {
    marginTop: 16,
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

import { Image } from 'expo-image';
import { Alert, Button, Platform, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';

export default function HomeScreen() {
  const handlePress = () => {
    Alert.alert(
      'Olá!',
      'Bem-vindo! Você está no meu aplicativo. Que alegria em contar com você aqui!'
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <Image
          source={require('@/assets/images/profile.png')}
          style={styles.profileImage}
        />
        <ThemedText style={styles.nameText}>Daniel Araújo</ThemedText>
        <ThemedText style={styles.phraseText}>
          "Cada linha de código é um passo rumo ao sucesso"
        </ThemedText>
        <Button title="Clique Aqui! 🚀" onPress={handlePress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
    backgroundColor: '#F3E8FF',
  },
  mainView: {
    alignItems: 'center',
    gap: 32,
    paddingVertical: 0,
    width: '100%',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 12,
    borderWidth: 3,
    borderColor: '#A78BFA',
    resizeMode: 'contain',
  },
  nameText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#A78BFA',
    marginBottom: 8,
    textAlign: 'center',
  },
  phraseText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#8B9B7F',
    marginBottom: 20,
    textAlign: 'center',
  },
});

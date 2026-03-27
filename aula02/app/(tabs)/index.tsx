import { StyleSheet, View } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import UserCard from '@/components/UserCard';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={<View style={{ height: 80 }} />}>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.titleSection}>
          <ThemedText type="title" style={styles.mainTitle}>
            UserCard Screen
          </ThemedText>
          <ThemedText style={styles.subtitle}>
            Gerenciamento de usuários com status
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.cardsContainer}>
          <UserCard nome="Daniel" profissao="Dev Frontend" />
          <UserCard nome="George" profissao="Mobile Developer" />
          <UserCard nome="Gustavo" profissao="UX Designer" />
          <UserCard nome="Pedro" profissao="Backend Engineer" />
          <UserCard nome="Handrey" profissao="QA Engineer" />
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titleSection: {
    marginBottom: 24,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  mainTitle: {
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    opacity: 0.7,
  },
  cardsContainer: {
    gap: 0,
  },
});

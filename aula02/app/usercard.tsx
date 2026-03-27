import { ImageBackground, SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import UserCard from '@/components/UserCard';

export default function UserCardScreen() {
  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=1000&q=80' }}
      style={styles.backgroundImage}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <ThemedView style={styles.container}>
          <ThemedView style={styles.header}>
            <ThemedText type="title" style={styles.title}>
              👥 UserCard Screen
            </ThemedText>
            <ThemedText style={styles.description}>
              Sistema de gerenciamento de usuários com status em tempo real
            </ThemedText>
          </ThemedView>

          <ThemedView style={styles.section}>
            <ThemedText type="subtitle" style={styles.sectionTitle}>
              Usuários
            </ThemedText>
            <UserCard nome="Daniel" profissao="Dev Frontend" />
            <UserCard nome="George" profissao="Mobile Developer" />
            <UserCard nome="Gustavo" profissao="UX Designer" />
            <UserCard nome="Pedro" profissao="Backend Engineer" />
            <UserCard nome="Handrey" profissao="QA Engineer" />
          </ThemedView>

          <ThemedView style={styles.infoBox}>
            <ThemedText type="defaultSemiBold" style={styles.infoTitle}>
              ℹ️ Conceitos Implementados
            </ThemedText>
            <ThemedText style={styles.infoParagraph}>
              • <ThemedText type="defaultSemiBold">Props</ThemedText>: nome e profissao
            </ThemedText>
            <ThemedText style={styles.infoParagraph}>
              • <ThemedText type="defaultSemiBold">Estado</ThemedText>: useState para controlar status
            </ThemedText>
            <ThemedText style={styles.infoParagraph}>
              • <ThemedText type="defaultSemiBold">Componente reutilizável</ThemedText>: UserCard
            </ThemedText>
            <ThemedText style={styles.infoParagraph}>
              • <ThemedText type="defaultSemiBold">Estilização moderna</ThemedText>: StyleSheet, theming
            </ThemedText>
          </ThemedView>
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 32,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  header: {
    marginBottom: 28,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#E5E5E5',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 400,
  },
  title: {
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    opacity: 0.7,
    lineHeight: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 24,
    backgroundColor: 'transparent',
    alignItems: 'center',
    width: '100%',
  },
  sectionTitle: {
    marginBottom: 12,
    fontSize: 16,
    color: '#000',
    fontWeight: '700',
    textAlign: 'center',
  },
  infoBox: {
    marginTop: 16,
    padding: 16,
    backgroundColor: 'rgba(243, 244, 246, 0.95)',
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
    alignItems: 'center',
    width: '100%',
    maxWidth: 400,
  },
  infoTitle: {
    marginBottom: 12,
    fontSize: 14,
    textAlign: 'center',
  },
  infoParagraph: {
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
});
